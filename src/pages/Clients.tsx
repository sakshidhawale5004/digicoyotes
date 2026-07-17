import Layout from "@/components/Layout";
import HeroSlider from "@/components/HeroSlider";
import { Link } from "react-router-dom";
import heroHome from "@/assets/hero-home.jpg";

import xenovia from "@/assets/clients/xenovia-capital.png";
import shivaji from "@/assets/clients/shivaji-saraf.png";
import hexaTp from "@/assets/clients/hexa-tp.png";
import hexaGp from "@/assets/clients/hexa-gp.png";
import ssdf from "@/assets/clients/ssdf.png";
import neesham from "@/assets/clients/neesham-grande.png";
import crust from "@/assets/clients/crust.png";
import rajkamal from "@/assets/clients/rajkamal.png";
import todis from "@/assets/clients/todis.png";
import territory29 from "@/assets/clients/territory29.png";
import moskman from "@/assets/clients/moskman.png";
import farmersTiffin from "@/assets/clients/farmers-tiffin.png";
import itude from "@/assets/clients/itude.png";
import orro from "@/assets/clients/orro.png";
import culinary from "@/assets/clients/culinary-creations.png";
import smix from "@/assets/clients/smix.png";
import nagraj from "@/assets/clients/nagraj.png";
import sudhir from "@/assets/clients/sudhir-shukla.png";
import balaji from "@/assets/clients/balaji.png";
import lelog from "@/assets/clients/lelog.png";
import risaNx from "@/assets/clients/risa-nx.png";
import ramInstitute from "@/assets/clients/ram-institute.png";
import joyMovers from "@/assets/clients/joy-movers.png";
import vinshar from "@/assets/clients/vinshar.png";
import trillium from "@/assets/clients/trillium.png";
import shProductions from "@/assets/clients/sh-productions.png";
import risaRinkesh from "@/assets/clients/risa-rinkesh.png";
import sarVenture from "@/assets/clients/sar-venture.png";

const clients = [
  { name: "Xenovia Capital", logo: xenovia, category: "Finance" },
  { name: "Shivaji Aappa Saraf & Sons", logo: shivaji, category: "Jewelry" },
  { name: "Hexa TP", logo: hexaTp, category: "Technology" },
  { name: "Hexa GP", logo: hexaGp, category: "Technology" },
  { name: "SSDF", logo: ssdf, category: "Foundation" },
  { name: "Neesham Grande", logo: neesham, category: "Real Estate" },
  { name: "CRUST", logo: crust, category: "Electronics" },
  { name: "Rajkamal", logo: rajkamal, category: "Lifestyle" },
  { name: "Todi's Mouthfreshners", logo: todis, category: "Food & Beverage" },
  { name: "Territory 29 Foods", logo: territory29, category: "Food & Beverage" },
  { name: "MoskMan India", logo: moskman, category: "Fashion" },
  { name: "Farmer's Tiffin", logo: farmersTiffin, category: "Food & Beverage" },
  { name: "iTUDE", logo: itude, category: "Technology" },
  { name: "ORRO", logo: orro, category: "Luxury" },
  { name: "Culinary Creations", logo: culinary, category: "Food & Beverage" },
  { name: "SMIX India", logo: smix, category: "Brand" },
  { name: "Nagraj Print & Pack", logo: nagraj, category: "Printing" },
  { name: "Sudhir Shukla Insurance", logo: sudhir, category: "Finance" },
  { name: "Balaji Creatives", logo: balaji, category: "Creative" },
  { name: "Lelog", logo: lelog, category: "Brand" },
  { name: "RISA NX", logo: risaNx, category: "Fashion" },
  { name: "Ram Institute", logo: ramInstitute, category: "Education" },
  { name: "Joy Movers", logo: joyMovers, category: "Logistics" },
  { name: "Vinshar Integrated Services", logo: vinshar, category: "Services" },
  { name: "Trillium Real Estate", logo: trillium, category: "Real Estate" },
  { name: "SH Productions", logo: shProductions, category: "Media" },
  { name: "RISA by Rinkesh & Sanchi", logo: risaRinkesh, category: "Fashion" },
  { name: "SAR Venture Pvt Ltd", logo: sarVenture, category: "Finance" },
];

const categories = ["All", ...Array.from(new Set(clients.map(c => c.category)))];

const ClientsPage = () => {
  return (
    <Layout>
      <HeroSlider
        label="OUR CLIENTS"
        title="Your growth is our"
        rotatingWords={["Greatest Achievement", "Top Priority", "Shared Success", "Driving Force"]}
        description="We've had the privilege of partnering with 28+ brands across diverse industries — from finance to fashion, food to real estate."
        ctaText="Become a Client"
        ctaLink="/contact"
        backgroundImage={heroHome}
      />

      {/* Stats */}
      <section className="py-12 bg-surface-dark">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-gradient-orange">28+</p>
              <p className="text-surface-dark-foreground/60 text-sm">Trusted Clients</p>
            </div>
            <div className="text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-gradient-orange">10+</p>
              <p className="text-surface-dark-foreground/60 text-sm">International Brands</p>
            </div>
            <div className="text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-gradient-orange">12+</p>
              <p className="text-surface-dark-foreground/60 text-sm">Industries Served</p>
            </div>
            <div className="text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-gradient-orange">400+</p>
              <p className="text-surface-dark-foreground/60 text-sm">Projects Delivered</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <p className="section-label mb-4">OUR CLIENTS</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Brands that <span className="text-gradient-orange">trust us</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-16">
            From startups to established enterprises, we've helped brands across industries build their digital presence and achieve measurable growth.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-6">
            {clients.map((client, i) => (
              <div
                key={i}
                className="group p-6 rounded-2xl border border-border bg-card hover:border-primary/40 hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center aspect-square"
              >
                <div className="w-full h-20 flex items-center justify-center mb-3">
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                    loading="lazy"
                    width={120}
                    height={80}
                  />
                </div>
                <p className="font-display font-semibold text-xs text-center leading-tight">{client.name}</p>
                <span className="text-[10px] text-muted-foreground mt-1">{client.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <p className="section-label mb-4">INDUSTRIES WE SERVE</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
            Expertise across <span className="text-gradient-orange">diverse sectors</span>
          </h2>
          <div className="flex flex-wrap gap-4">
            {categories.filter(c => c !== "All").map((cat, i) => (
              <span
                key={i}
                className="px-6 py-3 rounded-full border border-border font-display font-semibold text-sm hover:border-primary/40 hover:bg-primary/5 transition-colors"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background text-center">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Ready to <span className="text-gradient-orange">join our client roster?</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Let's discuss how we can take your brand to the next level with our proven digital strategies.
          </p>
          <Link
            to="/contact"
            className="inline-flex px-8 py-4 bg-gradient-orange text-primary-foreground font-semibold rounded-full hover:opacity-90 transition-opacity text-lg"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default ClientsPage;
