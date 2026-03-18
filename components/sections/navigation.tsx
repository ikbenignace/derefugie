"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#philosophie", label: "Ons Verhaal" },
  { href: "#menu", label: "Menu" },
  { href: "#galerij", label: "Galerij" },
  { href: "#evenementen", label: "Evenementen" },
  { href: "#reserveer", label: "Reserveer" },
  { href: "#contact", label: "Contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg shadow-black/10"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex h-20 items-center justify-between">
          <a
            href="#"
            className="font-serif text-2xl font-bold tracking-wider text-primary transition-colors hover:text-foreground"
          >
            De Refugie
          </a>

          <div className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm tracking-[0.2em] uppercase transition-colors duration-300",
                  link.href === "#reserveer"
                    ? "border border-primary/60 px-5 py-2 text-primary hover:bg-primary hover:text-primary-foreground"
                    : "text-muted-foreground hover:text-primary"
                )}
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-foreground md:hidden"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "overflow-hidden transition-all duration-500 md:hidden",
          mobileOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="bg-background/98 backdrop-blur-md border-t border-border px-6 pb-8 pt-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-base tracking-[0.15em] uppercase text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
