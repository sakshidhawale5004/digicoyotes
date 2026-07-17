import Layout from "@/components/Layout";
import HeroSlider from "@/components/HeroSlider";
import { Link } from "react-router-dom";
import { Users, Target, Award, Heart, Globe, Briefcase, TrendingUp, Code, Palette, Megaphone, Camera, ShoppingCart } from "lucide-react";
import heroAbout from "@/assets/hero-about.jpg";
import surajPhoto from "@/assets/suraj-bakale.png";
import teamFreya from "@/assets/team-freya.png";
import teamDarshani from "@/assets/team-darshani.png";
import teamOmkar from "@/assets/team-omkar.png";
import teamAshutosh from "@/assets/team-ashutosh.png";
import teamAaditya from "@/assets/team-aaditya.png";
import teamAtul from "@/assets/team-atul.png";

const values = [
  { title: "Innovation", desc: "We embrace the latest technologies and strategies to keep your brand ahead of the competition.", icon: Target },
  { title: "Integrity", desc: "Transparency and ethics guide everything we do. We run with you, not just for you.", icon: Award },
  { title: "Collaboration", desc: "Your success is our success. We work as an extension of your team, not just an agency.", icon: Users },
  { title: "Passion", desc: "We're passionate about digital excellence and obsessed with delivering measurable results.", icon: Heart },
];

const milestones = [
  { year: "2021", title: "Founded", desc: "Digital Coyotes was established in Mumbai with a vision to transform brands digitally." },
  { year: "2022", title: "10+ International Brands", desc: "Expanded to work with international clients across multiple industries." },
  { year: "2023", title: "5+ Agency Partners", desc: "Partnered with 5+ associate digital marketing agencies across India." },
  { year: "2024", title: "400+ Projects", desc: "Crossed 400+ websites built, 60+ brand designs, and 50+ social media accounts managed." },
];

const expertise = [
  { title: "Web Development", desc: "Custom websites built with precision using PHP, WordPress, Shopify, HTML5, CSS, and JavaScript.", icon: Code },
  { title: "Brand Design", desc: "Unique brand identities crafted to inspire, captivate, and convert.", icon: Palette },
  { title: "Digital Marketing", desc: "Data-driven SEO, PPC, and social strategies that deliver ROI.", icon: Megaphone },
  { title: "Content Production", desc: "Professional video, photography, and motion graphics.", icon: Camera },
  { title: "E-commerce & Seller Platforms", desc: "Online stores and Amazon advertising optimized for conversions and growth.", icon: ShoppingCart },
  { title: "Social Media & Influencer Marketing", desc: "Strategic social presence and influencer campaigns that amplify engagement.", icon: Globe },
];

const stats = [
  { value: "400+", label: "Websites Built" },
  { value: "60+", label: "Brand Designs" },
  { value: "50+", label: "Social Media Accounts" },
  { value: "10+", label: "International Brands" },
  { value: "8+", label: "Years of Expertise" },
  { value: "5+", label: "Agency Partners" },
];

const teamMembers = [
  { name: "Suraj Bakale", role: "CEO & Founder", photo: surajPhoto },
  { name: "Freya Hariya", role: "Manager / Digital Marketer", photo: teamFreya },
  { name: "Darshani Raut", role: "Designer", photo: teamDarshani },
  { name: "Omkar Kabul", role: "Designer", photo: teamOmkar },
  { name: "Ashutosh Kale", role: "Web Developer", photo: teamAshutosh },
  { name: "Aaditya Dhondkar", role: "Web Developer", photo: teamAaditya },
  { name: "Atul G", role: "Search Engine Expert", photo: teamAtul },
];

const AboutPage = () => {
  return (
    <Layout>
      <HeroSlider
        label="ABOUT US"
        title="We are Digital Coyotes —"
        rotatingWords={["Leading the Pack", "Blazing Trails", "Driving Growth", "Building Brands"]}
        description="Founded in 2021 in Mumbai, we've quickly established ourselves as a trusted partner in digital marketing and website development with 8+ years of industry expertise."
        ctaText="Join the Pack"
        ctaLink="/contact"
        backgroundImage={heroAbout}
      />

      {/* Stats Bar */}
      <section className="py-12 bg-surface-dark">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <p className="font-display text-3xl md:text-4xl font-bold text-gradient-orange mb-1">{s.value}</p>
                <p className="text-surface-dark-foreground/60 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-label mb-4">OUR STORY</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Empowering your digital growth, <span className="text-gradient-orange">one click at a time</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Founded in 2021 in Mumbai, Digital Coyotes has quickly established itself as a trusted partner in the digital marketing and website development space. With 8+ years of industry expertise, we've collaborated with over 10 international brands and partnered with 5+ associate digital marketing agencies across India.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We believe every brand deserves to be heard in the digital wilderness. We combine data-driven strategy with bold creativity to deliver campaigns that don't just reach audiences — they move them.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From startups finding their voice to established brands seeking reinvention, we tailor our approach to each client's unique terrain.
            </p>
          </div>
          <div className="bg-gradient-orange rounded-3xl p-12 text-primary-foreground">
            <h3 className="font-display text-2xl font-bold mb-4">Our Promise</h3>
            <p className="leading-relaxed opacity-90 mb-6">
              We don't just deliver projects — we deliver results. Every strategy is backed by data, every design is driven by purpose, and every partnership is built on trust.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-primary-foreground/10 rounded-xl p-4 text-center">
                <p className="font-display text-2xl font-bold">400+</p>
                <p className="text-sm opacity-80">Websites Built</p>
              </div>
              <div className="bg-primary-foreground/10 rounded-xl p-4 text-center">
                <p className="font-display text-2xl font-bold">60+</p>
                <p className="text-sm opacity-80">Brand Designs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-24 bg-surface-dark">
        <div className="container mx-auto px-6">
          <p className="section-label mb-4">THE PACK LEADER</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-surface-dark-foreground mb-12">Meet our <span className="text-gradient-orange">founder</span></h2>
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-4xl mx-auto">
            <div className="w-56 h-56 md:w-72 md:h-72 rounded-2xl overflow-hidden shrink-0 border-4 border-primary/30 shadow-2xl">
              <img src={surajPhoto} alt="Suraj Bakale - CEO & Founder" className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold text-surface-dark-foreground mb-2">Suraj Bakale</h3>
              <p className="text-primary font-semibold mb-4">CEO & Founder</p>
              <p className="text-surface-dark-foreground/70 leading-relaxed mb-4">
                With over 8 years of experience in digital marketing and brand development, Suraj founded Digital Coyotes in 2021 with a vision to help brands thrive in the digital landscape. His expertise spans across SEO, PPC, social media marketing, and web development.
              </p>
              <p className="text-surface-dark-foreground/70 leading-relaxed">
                Under his leadership, Digital Coyotes has grown to collaborate with 10+ international brands and partner with 5+ associate digital marketing agencies across India, delivering 400+ websites and 60+ unique brand designs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <p className="section-label mb-4">TEAM</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Passionate minds driving <span className="text-gradient-orange">exceptional results</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-12">
            Our team is a dynamic mix of creative thinkers, strategists, and tech enthusiasts dedicated to delivering excellence. With expertise and collaboration at our core, we turn challenges into opportunities for growth.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {teamMembers.map((m, i) => (
              <div key={i} className="text-center group">
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full mx-auto mb-4 overflow-hidden shadow-lg group-hover:scale-105 transition-transform border-2 border-primary/20">
                  <img src={m.photo} alt={m.name} className="w-full h-full object-cover" loading="lazy" width={112} height={112} />
                </div>
                <h4 className="font-display font-semibold text-sm">{m.name}</h4>
                <p className="text-muted-foreground text-xs mt-1">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Expertise */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <p className="section-label mb-4">OUR EXPERTISE</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Skills that set us <span className="text-gradient-orange">apart</span></h2>
          <p className="text-muted-foreground max-w-2xl mb-12">Our team brings together diverse expertise across all areas of digital marketing and development.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {expertise.map((e, i) => (
              <div key={i} className="p-8 rounded-2xl border border-border hover:border-primary/40 transition-all hover:shadow-lg group">
                <div className="w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-gradient-orange flex items-center justify-center mb-6 transition-all">
                  <e.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-3">{e.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <p className="section-label mb-4">OUR VALUES</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">What drives <span className="text-gradient-orange">the pack</span></h2>
          <div className="grid md:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="p-8 rounded-2xl border border-border hover:border-primary/40 transition-colors">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <v.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-3">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey / Milestones */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <p className="section-label mb-4">OUR JOURNEY</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-16">Milestones that <span className="text-gradient-orange">define us</span></h2>
          <div className="grid md:grid-cols-4 gap-8">
            {milestones.map((m, i) => (
              <div key={i} className="relative">
                <span className="font-display text-5xl font-bold text-primary/20">{m.year}</span>
                <h3 className="font-display font-semibold text-lg mt-2 mb-3">{m.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background text-center">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Ready to <span className="text-gradient-orange">join the pack?</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">Let's discuss how we can take your brand to the next level with our proven digital strategies.</p>
          <Link to="/contact" className="inline-flex px-8 py-4 bg-gradient-orange text-primary-foreground font-semibold rounded-full hover:opacity-90 transition-opacity text-lg">
            Get In Touch
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
