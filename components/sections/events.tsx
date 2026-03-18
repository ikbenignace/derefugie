"use client";

import { motion } from "motion/react";
import { Users, Sun, Utensils, Music } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Vanaf 14 personen",
    description: "Ideaal voor middelgrote tot grote gezelschappen",
  },
  {
    icon: Sun,
    title: "Zomerterras",
    description: "Achteraan in de tuin bij mooi weer",
  },
  {
    icon: Utensils,
    title: "BBQ Menu",
    description: "Compleet festival van warme en koude hapjes",
  },
  {
    icon: Music,
    title: "Privé Zaal",
    description: "Intiem kader voor elk evenement",
  },
];

export function Events() {
  return (
    <section id="evenementen" className="relative overflow-hidden py-32 lg:py-40">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-warm/30 to-background" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-12">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src="/images/interior-4.jpg"
                alt="JFK's Clubhouse tuinfeest locatie"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            <div className="absolute -right-4 bottom-8 border border-primary/30 bg-card/95 p-6 backdrop-blur-sm lg:-right-8">
              <p className="font-serif text-3xl font-bold text-primary">€55</p>
              <p className="mt-1 text-xs tracking-[0.2em] uppercase text-muted-foreground">
                BBQ menu per persoon
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-12 bg-primary/50" />
              <span className="text-xs tracking-[0.3em] uppercase text-primary">
                Privé Evenementen
              </span>
            </div>

            <h2 className="font-serif text-4xl font-bold leading-[1.15] tracking-tight text-foreground sm:text-5xl">
              JFK&apos;s
              <br />
              <span className="italic text-primary">Clubhouse</span>
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
              Gelegen achteraan in de tuin is JFK&apos;s Clubhouse de perfecte
              locatie voor al uw feesten — communiefeesten, verjaardagen,
              pensioenviering, huwelijken, recepties en BBQ&apos;s.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="group">
                  <feature.icon
                    className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110"
                    strokeWidth={1.5}
                  />
                  <h4 className="mt-3 font-serif text-base font-semibold text-foreground">
                    {feature.title}
                  </h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a
                href="mailto:derefugie@skynet.be?subject=Aanvraag privé evenement"
                className="inline-flex items-center gap-3 border border-primary bg-primary/10 px-8 py-3.5 text-xs tracking-[0.2em] uppercase text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
              >
                Informeer naar uw evenement
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
