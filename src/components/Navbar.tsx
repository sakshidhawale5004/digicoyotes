import { useState, useRef, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const services = [
  { name: "Branding & Social Media", path: "/services/branding-and-identity" },
  { name: "Search Engine Optimization", path: "/services/digital-marketing" },
  { name: "Web Design & Development", path: "/services/web-design-development" },
  { name: "Social & Google Ads", path: "/services/social-google-ads" },
  { name: "Seller Platforms", path: "/services/ecommerce-solutions" },
  { name: "Influencer Marketing", path: "/services/influencer-marketing" },
  { name: "Creative Content Production", path: "/services/creative-content-production" },
  { name: "Content Creation", path: "/services/content-creation" },
  { name: "UX/UI Design", path: "/services/ux-ui-design" },
  { name: "Generative AI", path: "/services/generative-ai" },
  { name: "AI Development", path: "/services/ai-development" },
  { name: "Mobile App Development", path: "/services/mobile-app-development" },
  { name: "Machine Learning", path: "/services/machine-learning" },
  { name: "Data Analytics", path: "/services/data-analytics" },
  { name: "Web3 Development", path: "/services/web3-development" },
  { name: "Digital Transformation", path: "/services/digital-transformation" },
  { name: "Video Production", path: "/services/video-production" },
  { name: "Email Marketing", path: "/services/email-marketing" },
  { name: "Public Relations", path: "/services/public-relations" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [dropdownPos, setDropdownPos] = useState<{ top: number; left: number } | null>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<number | null>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const updatePosition = useCallback(() => {
    if (!triggerRef.current) return;
    const r = triggerRef.current.getBoundingClientRect();
    setDropdownPos({ top: r.bottom, left: r.left });
  }, []);

  const openDropdown = () => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    updatePosition();
    setServicesOpen(true);
  };

  const scheduleClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setServicesOpen(false), 120);
  };

  useEffect(() => {
    if (!servicesOpen) return;
    const onScrollOrResize = () => updatePosition();
    window.addEventListener("scroll", onScrollOrResize, true);
    window.addEventListener("resize", onScrollOrResize);
    return () => {
      window.removeEventListener("scroll", onScrollOrResize, true);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, [servicesOpen, updatePosition]);

  useEffect(() => {
    setServicesOpen(false);
  }, [location.pathname]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface-dark/95 backdrop-blur-md border-b border-foreground/5">
      <div className="container mx-auto flex items-center justify-between h-20 px-6">
        {/* Logo */}
         <Link to="/" className="flex items-center gap-3">
           <img src={logo} alt="Digital Coyotes" className="w-14 h-14 object-contain" />
           <span className="font-display font-extrabold text-2xl tracking-tight text-surface-dark-foreground">
             Digital <span className="text-primary">Coyotes</span>
           </span>
         </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/about" className={`text-sm font-medium transition-colors ${isActive("/about") ? "text-primary" : "text-surface-dark-foreground/80 hover:text-primary"}`}>
            About Us
          </Link>

          {/* Services Dropdown trigger */}
          <div
            ref={triggerRef}
            onMouseEnter={openDropdown}
            onMouseLeave={scheduleClose}
          >
            <button
              type="button"
              onClick={() => (servicesOpen ? setServicesOpen(false) : openDropdown())}
              className={`flex items-center gap-1 text-sm font-medium transition-colors ${location.pathname.startsWith("/services") ? "text-primary" : "text-surface-dark-foreground/80 hover:text-primary"}`}
            >
              Services <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
          </div>

          {/* Fixed-position dropdown panel */}
          {dropdownPos && (
            <div
              onMouseEnter={openDropdown}
              onMouseLeave={scheduleClose}
              style={{
                position: "fixed",
                top: dropdownPos.top,
                left: dropdownPos.left,
                width: 560,
                pointerEvents: servicesOpen ? "auto" : "none",
              }}
              className={`z-[60] transition-opacity duration-150 ${servicesOpen ? "opacity-100" : "opacity-0"}`}
            >
              <div className="pt-3">
                <div className="bg-primary rounded-xl p-2 shadow-2xl grid grid-cols-2 gap-1">
                  {services.map((s) => (
                    <Link
                      key={s.path}
                      to={s.path}
                      className="block px-4 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary-foreground/20 rounded-lg transition-colors"
                      onClick={() => setServicesOpen(false)}
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}

          <Link to="/clients" className={`text-sm font-medium transition-colors ${isActive("/clients") ? "text-primary" : "text-surface-dark-foreground/80 hover:text-primary"}`}>
            Our Clients
          </Link>

          <Link to="/contact" className={`text-sm font-medium transition-colors ${isActive("/contact") ? "text-primary" : "text-surface-dark-foreground/80 hover:text-primary"}`}>
            Contact Us
          </Link>
        </div>

        {/* CTA */}
        <Link to="/contact" className="hidden md:inline-flex px-6 py-2.5 bg-gradient-orange text-primary-foreground text-sm font-semibold rounded-full hover:opacity-90 transition-opacity">
          Get In Touch
        </Link>

        {/* Mobile Toggle */}
        <button className="md:hidden text-surface-dark-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-surface-dark border-t border-foreground/5 px-6 py-6 space-y-4">
          <Link to="/" className="block text-surface-dark-foreground/80 font-medium" onClick={() => setMobileOpen(false)}>Home</Link>
          <Link to="/about" className="block text-surface-dark-foreground/80 font-medium" onClick={() => setMobileOpen(false)}>About Us</Link>
          <div>
            <p className="text-surface-dark-foreground/80 font-medium mb-2">Services</p>
            {services.map((s) => (
              <Link key={s.path} to={s.path} className="block pl-4 py-1.5 text-sm text-surface-dark-foreground/60 hover:text-primary" onClick={() => setMobileOpen(false)}>
                {s.name}
              </Link>
            ))}
          </div>
          <Link to="/clients" className="block text-surface-dark-foreground/80 font-medium" onClick={() => setMobileOpen(false)}>Our Clients</Link>
          <Link to="/contact" className="block text-surface-dark-foreground/80 font-medium" onClick={() => setMobileOpen(false)}>Contact Us</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
