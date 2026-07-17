import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, CheckCircle2 } from "lucide-react";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

const leadSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Enter a valid email").max(160),
  phone: z.string().trim().min(6, "Enter a valid phone").max(20).regex(/^[0-9+\-\s()]+$/, "Digits only"),
  service: z.string().trim().min(1, "Pick a service"),
  message: z.string().trim().min(5, "Tell us a bit more").max(600),
});

type LeadForm = z.infer<typeof leadSchema>;

const services = [
  "Branding & Social Media",
  "SEO",
  "Web Design & Development",
  "Social & Google Ads",
  "Content Creation",
  "UX/UI Design",
  "Generative AI",
  "AI Development",
  "Mobile App Development",
  "Video Production",
  "Email Marketing",
  "Public Relations",
  "Other",
];

const ChatbotWidget = () => {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState<LeadForm>({ name: "", email: "", phone: "", service: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof LeadForm, string>>>({});
  const panelRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (open && panelRef.current) {
      const el = panelRef.current.querySelector<HTMLInputElement>("input[name='name']");
      el?.focus();
    }
  }, [open]);

  const update = (k: keyof LeadForm, v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = leadSchema.safeParse(form);
    if (!parsed.success) {
      const fieldErrors: typeof errors = {};
      parsed.error.issues.forEach((iss) => {
        const key = iss.path[0] as keyof LeadForm;
        if (!fieldErrors[key]) fieldErrors[key] = iss.message;
      });
      setErrors(fieldErrors);
      return;
    }
    try {
      const store = JSON.parse(localStorage.getItem("dc_leads") || "[]");
      store.push({ ...parsed.data, at: new Date().toISOString() });
      localStorage.setItem("dc_leads", JSON.stringify(store));
    } catch {}
    setSent(true);
    toast({ title: "Message received", description: "Our pack will reach out within 24 hours." });
    setTimeout(() => {
      setOpen(false);
      setSent(false);
      setForm({ name: "", email: "", phone: "", service: "", message: "" });
    }, 2400);
  };

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close chat" : "Open chat"}
        className="fixed bottom-6 right-44 z-50 h-14 px-5 rounded-full bg-gradient-orange text-primary-foreground flex items-center gap-2 shadow-[0_12px_30px_-8px_hsl(24,95%,53%,0.6)] hover:scale-105 transition-transform font-semibold"
      >
        {open ? <X className="w-5 h-5" /> : <MessageSquare className="w-5 h-5" />}
        <span className="hidden sm:inline text-sm">{open ? "Close" : "Let's talk"}</span>
      </button>

      {open && (
        <div
          ref={panelRef}
          role="dialog"
          aria-label="Contact form"
          className="fixed bottom-24 right-6 z-50 w-[min(94vw,380px)] rounded-2xl bg-background border border-border shadow-2xl animate-fade-in overflow-hidden"
        >
          <div className="bg-surface-dark px-5 py-4 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-orange flex items-center justify-center">
              <MessageSquare className="w-4 h-4 text-primary-foreground" />
            </div>
            <div>
              <p className="font-display font-bold text-surface-dark-foreground text-sm">Digital Coyotes</p>
              <p className="text-surface-dark-foreground/60 text-xs">Typically replies within 24h</p>
            </div>
          </div>

          {sent ? (
            <div className="p-8 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-primary mx-auto" />
              <p className="font-display font-bold text-lg">Thanks, {form.name.split(" ")[0]}!</p>
              <p className="text-sm text-muted-foreground">We've got your message. Expect a call or email shortly.</p>
            </div>
          ) : (
            <form onSubmit={submit} className="p-5 space-y-3">
              <p className="text-sm text-muted-foreground">Drop your details and we'll get back to you.</p>
              <div>
                <input name="name" value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Your name" maxLength={80}
                  className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
              </div>
              <div>
                <input name="email" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="Email" maxLength={160}
                  className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
              </div>
              <div>
                <input name="phone" value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="Phone" maxLength={20}
                  className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
              </div>
              <div>
                <select value={form.service} onChange={(e) => update("service", e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value="">Pick a service</option>
                  {services.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
                {errors.service && <p className="text-xs text-destructive mt-1">{errors.service}</p>}
              </div>
              <div>
                <textarea value={form.message} onChange={(e) => update("message", e.target.value)} placeholder="How can we help?" rows={3} maxLength={600}
                  className="w-full px-3 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none" />
                {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
              </div>
              <button type="submit"
                className="w-full flex items-center justify-center gap-2 bg-gradient-orange text-primary-foreground font-semibold py-2.5 rounded-lg hover:opacity-90 transition-opacity">
                Send <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      )}
    </>
  );
};

export default ChatbotWidget;
