import Layout from "@/components/Layout";
import HeroSlider from "@/components/HeroSlider";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import heroContact from "@/assets/hero-contact.jpg";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <Layout>
      <HeroSlider
        label="CONTACT US"
        title="Let's start a"
        rotatingWords={["Conversation", "Partnership", "Collaboration", "Journey"]}
        description="Ready to take your brand to the next level? Get in touch and let's discuss how we can help."
        ctaText="Send Message"
        ctaLink="#contact-form"
        backgroundImage={heroContact}
      />

      <section id="contact-form" className="py-24 bg-background">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-display text-2xl font-bold mb-8">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <input type="text" required value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" placeholder="How can we help?" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea required rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-border bg-card focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none" placeholder="Tell us about your project..." />
              </div>
              <button type="submit" className="px-8 py-4 bg-gradient-orange text-primary-foreground font-semibold rounded-full hover:opacity-90 transition-opacity">Send Message</button>
            </form>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold mb-8">Get in touch</h2>
            <div className="space-y-6">
              {[
                { icon: Mail, title: "Email", info: "thedigitalcoyotes@gmail.com" },
                { icon: Phone, title: "Phone", info: "+91 96533 74574" },
                { icon: MapPin, title: "Address", info: "EXPRESS ZONE, Western Express Hwy,\nopp. Reliance Energy, Malad,\nPanch Bawadi, Malad East,\nMumbai, Maharashtra 400063" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-6 rounded-2xl border border-border">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm whitespace-pre-line">{item.info}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-2xl overflow-hidden border border-border h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.2!2d72.8!3d19.18!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7b1a0b1b1b1%3A0x1234567890abcdef!2sExpress%20Zone%2C%20Western%20Express%20Hwy%2C%20Malad%20East%2C%20Mumbai%2C%20Maharashtra%20400063!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Digital Coyotes Office Location"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
