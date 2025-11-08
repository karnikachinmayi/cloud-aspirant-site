import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
const navLinks = [{
  name: "Home",
  href: "#home"
}, {
  name: "About",
  href: "#about"
}, {
  name: "Projects",
  href: "#projects"
}, {
  name: "Contact",
  href: "#contact"
}];
export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${isScrolled ? "bg-background/80 backdrop-blur-lg shadow-elegant" : "bg-transparent"}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => <a key={link.name} href={link.href} className={`text-sm font-medium transition-smooth hover:text-primary ${activeSection === link.href.substring(1) ? "text-primary" : "text-foreground/70"}`}>
                {link.name}
              </a>)}
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && <div className="md:hidden mt-4 pb-4 space-y-3 animate-in fade-in slide-in-from-top-2">
            {navLinks.map(link => <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className={`block text-sm font-medium transition-smooth hover:text-primary ${activeSection === link.href.substring(1) ? "text-primary" : "text-foreground/70"}`}>
                {link.name}
              </a>)}
          </div>}
      </div>
    </nav>;
};