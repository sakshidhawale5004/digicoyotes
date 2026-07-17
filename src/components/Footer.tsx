import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-surface-dark text-surface-dark-foreground">
      {/* CTA Section */}
      <div className="container mx-auto px-6 py-20 text-center">
        <p className="section-label mb-4">LET'S COLLABORATE</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-8 max-w-3xl mx-auto">
          READY TO LEAD THE PACK? <span className="text-gradient-orange">LET'S COLLABORATE.</span>
        </h2>
        <Link to="/contact" className="inline-flex px-8 py-4 bg-gradient-orange text-primary-foreground font-semibold rounded-full hover:opacity-90 transition-opacity text-lg">
          Get In Touch
        </Link>
      </div>

      {/* Footer Links */}
      <div className="border-t border-surface-dark-foreground/10">
        <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
             <div className="flex items-center gap-3 mb-4">
               <img src={logo} alt="Digital Coyotes" className="w-10 h-10 object-contain" />
               <span className="font-display font-bold text-xl tracking-tight">
                 Digital <span className="text-primary">Coyotes</span>
               </span>
             </div>
            <p className="text-surface-dark-foreground/60 text-sm leading-relaxed">
              Crafting high-impact digital experiences that help your brand lead the pack.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-surface-dark-foreground/60 hover:text-primary transition-colors">Home</Link>
              <Link to="/about" className="block text-sm text-surface-dark-foreground/60 hover:text-primary transition-colors">About Us</Link>
              <Link to="/contact" className="block text-sm text-surface-dark-foreground/60 hover:text-primary transition-colors">Contact Us</Link>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Services</h4>
            <div className="space-y-2">
              <Link to="/services/branding-and-identity" className="block text-sm text-surface-dark-foreground/60 hover:text-primary transition-colors">Branding & Identity</Link>
              <Link to="/services/digital-marketing" className="block text-sm text-surface-dark-foreground/60 hover:text-primary transition-colors">Digital Marketing</Link>
              <Link to="/services/creative-content-production" className="block text-sm text-surface-dark-foreground/60 hover:text-primary transition-colors">Creative Content</Link>
              <Link to="/services/ecommerce-solutions" className="block text-sm text-surface-dark-foreground/60 hover:text-primary transition-colors">E-commerce</Link>
              <Link to="/services/ux-ui-design" className="block text-sm text-surface-dark-foreground/60 hover:text-primary transition-colors">UX/UI Design</Link>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/p/Digital-Coyotes-100075989081693/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-surface-dark-foreground/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/digitalcoyotes" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-surface-dark-foreground/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://share.google/EqSO3LZGiKmW2Getg" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-surface-dark-foreground/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 py-6 border-t border-surface-dark-foreground/10 text-center text-sm text-surface-dark-foreground/40">
          © 2026 Digital Coyotes. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
