"use client";

import { motion, cubicBezier } from "motion/react";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: cubicBezier(0.22, 1, 0.36, 1) },
};

export function Philosophy() {
  return (
    <section id="philosophie" className="relative overflow-hidden py-32 lg:py-40">
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-12">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <motion.div {...fadeInUp}>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-12 bg-primary/50" />
              <span className="text-sm tracking-[0.24em] uppercase text-primary sm:text-base">
                Ons Verhaal
              </span>
            </div>

            <h2 className="font-serif text-4xl font-bold leading-[1.15] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              De kunst van
              <br />
              <span className="italic text-primary">bistronomie</span>
            </h2>

            <div className="mt-10 space-y-6 text-[1.125rem] leading-[1.9] text-muted-foreground sm:text-xl">
              <p>
                Sinds 1995 is De Refugie een vaste waarde in het hart van Tienen.
                Hier draait alles om{" "}
                <em className="font-medium not-italic text-foreground">bistronomie</em>{" "}
                — kwalitatieve gerechten, in een ongedwongen sfeer, voor ieders
                geldbeurs.
              </p>
              <p>
                Chef Van Vlemmeren werkt à la minute met seizoensgebonden
                producten. De overwegend Frans-Belgische kaart biedt een
                verfijnde mix van klassiekers — zeetong Meunière, huisgemaakte
                garnaalkroketten — naast uitmuntende hedendaagse creaties.
              </p>
              <p>
                De sympathieke gastvrouw Katrien ontvangt u hartelijk in een
                eigentijds kader waar warmte en karakter centraal staan.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-8">
              <div>
                <div className="font-serif text-3xl font-bold text-primary sm:text-4xl">
                  30+
                </div>
                <div className="mt-1 text-sm tracking-[0.18em] uppercase text-muted-foreground">
                  Jaar ervaring
                </div>
              </div>
              <span className="hidden h-12 w-px bg-border sm:block" />
              <div>
                <div className="font-serif text-3xl font-bold text-primary sm:text-4xl">
                  9.4
                </div>
                <div className="mt-1 text-sm tracking-[0.18em] uppercase text-muted-foreground">
                  Gemiddelde score
                </div>
              </div>
              <span className="hidden h-12 w-px bg-border sm:block" />
              <div>
                <div className="font-serif text-3xl font-bold text-primary sm:text-4xl">
                  969
                </div>
                <div className="mt-1 text-sm tracking-[0.18em] uppercase text-muted-foreground">
                  Beoordelingen
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src="/images/interior-1.jpg"
                alt="De Refugie restaurant interieur"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 border border-border bg-card p-6 shadow-2xl shadow-black/30 lg:-bottom-8 lg:-left-8">
              <blockquote className="max-w-xs">
                <p className="font-serif text-xl italic leading-relaxed text-foreground sm:text-2xl">
                  &ldquo;Hier moet je soms nog blazen!&rdquo;
                </p>
                <cite className="mt-3 block text-sm tracking-[0.18em] uppercase text-muted-foreground not-italic">
                  — Michelin Gids
                </cite>
              </blockquote>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}