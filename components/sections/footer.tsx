"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="relative border-t border-border bg-card/50">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-12 lg:py-28">
        <div className="grid gap-16 lg:grid-cols-3 lg:gap-12">
          <div>
            <h3 className="font-serif text-3xl font-bold text-foreground">
              De Refugie
            </h3>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Frans-Belgische bistronomie in het hart van Tienen. Kwalitatieve
              gerechten in een ongedwongen sfeer, sinds 1995.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <span className="text-xs tracking-[0.15em] uppercase text-primary/70">
                Michelin
              </span>
              <span className="h-3 w-px bg-border" />
              <span className="text-xs tracking-[0.15em] uppercase text-primary/70">
                GaultMillau
              </span>
              <span className="h-3 w-px bg-border" />
              <span className="text-xs tracking-[0.15em] uppercase text-primary/70">
                Euro-Toques
              </span>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs tracking-[0.25em] uppercase text-primary">
              Contact
            </h4>
            <div className="space-y-5">
              <a
                href="https://maps.google.com/?q=Kapucijnenstraat+75+3300+Tienen"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-muted-foreground transition-colors hover:text-foreground"
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.5} />
                <span className="text-sm leading-relaxed">
                  Kapucijnenstraat 75
                  <br />
                  3300 Tienen, België
                </span>
              </a>
              <a
                href="tel:+3216824532"
                className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Phone className="h-4 w-4 shrink-0 text-primary" strokeWidth={1.5} />
                <span className="text-sm">016 82 45 32</span>
              </a>
              <a
                href="mailto:derefugie@skynet.be"
                className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="h-4 w-4 shrink-0 text-primary" strokeWidth={1.5} />
                <span className="text-sm">derefugie@skynet.be</span>
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs tracking-[0.25em] uppercase text-primary">
              Openingsuren
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.5} />
                <div className="text-sm text-muted-foreground">
                  <div className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2">
                    <span>Ma — Wo</span>
                    <span className="text-foreground/50">Gesloten</span>
                    <span>Do — Zo</span>
                    <span className="text-foreground">12:00 – 13:30</span>
                    <span></span>
                    <span className="text-foreground">18:00 – 21:00</span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                Jaarlijks verlof: 26/12 — 7/1
              </p>
              <div className="pt-2">
                <p className="text-xs text-muted-foreground">
                  Betaalwijze: Visa, Mastercard, Bancontact, Payconiq
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} De Refugie. Alle rechten
              voorbehouden.
            </p>
            <div className="flex items-center gap-6 text-xs text-muted-foreground">
              <span>Kapucijnenstraat 75, 3300 Tienen</span>
              <span className="h-3 w-px bg-border" />
              <span>Parking: Slachthuisstraat (Aldi)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </footer>
  );
}
