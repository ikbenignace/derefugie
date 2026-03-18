"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Phone, Mail, Clock, ExternalLink } from "lucide-react";

export function Reservation() {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sdk.zenchef.com/latest/dist/scripts/widget.js";
    script.async = true;
    script.dataset.restaurantId = "de-refugie";
    script.dataset.locale = "nl";
    script.dataset.primaryColor = "#c4993a";

    if (widgetRef.current) {
      widgetRef.current.appendChild(script);
    }

    return () => {
      script.remove();
    };
  }, []);

  return (
    <section id="reserveer" className="relative py-32 lg:py-40">
      <div className="absolute inset-0">
        <img
          src="/images/dish-7.jpg"
          alt=""
          className="h-full w-full object-cover opacity-10"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-primary/50" />
            <span className="text-xs tracking-[0.3em] uppercase text-primary">
              Reservatie
            </span>
            <span className="h-px w-12 bg-primary/50" />
          </div>

          <h2 className="font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Reserveer uw tafel
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Reservatie is aanbevolen. U kan online reserveren, telefonisch of per
            e-mail.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16"
        >
          <div className="border border-border bg-card/80 p-8 backdrop-blur-sm lg:p-12">
            <div className="grid gap-8 md:grid-cols-3">
              <a
                href="tel:+3216824532"
                className="group flex flex-col items-center gap-4 p-6 text-center transition-colors hover:bg-secondary/50"
              >
                <Phone
                  className="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-110"
                  strokeWidth={1.5}
                />
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                    Telefonisch
                  </p>
                  <p className="mt-2 font-serif text-xl font-semibold text-foreground">
                    016 82 45 32
                  </p>
                </div>
              </a>

              <a
                href="mailto:derefugie@skynet.be"
                className="group flex flex-col items-center gap-4 border-x border-border p-6 text-center transition-colors hover:bg-secondary/50"
              >
                <Mail
                  className="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-110"
                  strokeWidth={1.5}
                />
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                    E-mail
                  </p>
                  <p className="mt-2 font-serif text-xl font-semibold text-foreground">
                    derefugie@skynet.be
                  </p>
                </div>
              </a>

              <div className="flex flex-col items-center gap-4 p-6 text-center">
                <Clock className="h-6 w-6 text-primary" strokeWidth={1.5} />
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                    Openingsuren
                  </p>
                  <p className="mt-2 font-serif text-lg font-semibold text-foreground">
                    Do — Zo
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    12:00 – 13:30 &amp; 18:00 – 21:00
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <a
              href="http://derefugie.be/reserveer/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-primary bg-primary/10 px-12 py-5 text-sm tracking-[0.25em] uppercase text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
            >
              Online Reserveren
              <ExternalLink className="h-4 w-4" strokeWidth={1.5} />
            </a>
            <p className="mt-4 text-xs text-muted-foreground">
              Reserveer online via ons reservatiesysteem
            </p>
          </div>

          <div ref={widgetRef} className="mt-8" />
        </motion.div>
      </div>
    </section>
  );
}
