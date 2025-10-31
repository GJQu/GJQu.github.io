import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/blog", label: "Blog" },
    { path: "/projects", label: "Projects" },
    { path: "/bio", label: "Bio" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b-4 border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center text-2xl font-bold hover:opacity-70 transition-opacity">
            {/* Opening Tag: Grey and slightly smaller/lighter */}
            <span className="text-gray-600 font-light text-xl mr-0.5">{"<"}</span>
            {/* Name: Full color, bold, and primary size */}
            <span className="text-foreground text-2xl font-extrabold">Gavin Qu</span>
            {/* Closing Tag: Grey and slightly smaller/lighter */}
            <span className="text-gray-600 font-light text-xl ml-0.5">{"/>"}</span>         {" "}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-bold text-lg transition-colors ${
                  isActive(link.path)
                    ? "text-foreground underline decoration-4 decoration-neubrutalist-yellow underline-offset-8"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 border-t-4 border-border pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block font-bold text-lg transition-colors ${
                  isActive(link.path) ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
