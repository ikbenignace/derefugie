"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#philosophie", label: "Ons Verhaal" },
  { href: "#menu", label: "Menu" },
  { href: "#galerij", label: "Galerij" },
  { href: "#evenementen", label: "Evenementen" },
  { href: "#reserveer", label: "Reserveer" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", closeOnResize, { passive: true });
    return () => window.removeEventListener("resize", closeOnResize);
  }, []);

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border/80 bg-background/96 shadow-lg shadow-black/20 backdrop-blur-md"
          : "bg-gradient-to-b from-black/55 via-black/30 to-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex h-22 items-center justify-between gap-6">
          <a
            href="/"
            className="font-serif text-[1.85rem] font-bold tracking-[0.08em] text-primary transition-colors hover:text-foreground sm:text-[2rem]"
          >
            De Refugie
          </a>

          <div className="hidden items-center gap-4 lg:gap-6 md:flex">
            {navLinks.map((link) => {
              const isReservation = link.href === "#reserveer";

              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-sm px-3 py-2 text-[0.98rem] font-medium uppercase transition-all duration-300",
                    isReservation
                      ? "border border-primary/70 bg-primary/10 text-primary shadow-[0_0_0_1px_rgba(178,154,122,0.08)] hover:bg-primary hover:text-primary-foreground"
                      : "text-foreground/88 hover:text-primary"
                  )}
                  style={{ letterSpacing: "0.14em" }}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="inline-flex h-12 w-12 items-center justify-center rounded-sm border border-border/70 bg-background/70 text-foreground transition-colors hover:border-primary/60 hover:text-primary md:hidden"
            aria-label={mobileOpen ? "Sluit menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "overflow-hidden transition-all duration-500 md:hidden",
          mobileOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="border-t border-border/70 bg-background/98 px-6 pb-8 pt-4 backdrop-blur-md">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isReservation = link.href === "#reserveer";

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "rounded-sm px-4 py-3 text-base font-medium uppercase transition-colors duration-300",
                    isReservation
                      ? "border border-primary/70 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground"
                      : "text-foreground/85 hover:bg-secondary/60 hover:text-primary"
                  )}
                  style={{ letterSpacing: "0.12em" }}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}