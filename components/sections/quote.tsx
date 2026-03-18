"use client";

import { motion } from "motion/react";

export function Quote() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-background to-card/30" />

      <div className="relative mx-auto max-w-4xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <svg
            className="mx-auto mb-8 h-10 w-10 text-primary/30"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M11.3 2.5c-1.7.7-3.1 1.6-4.2 2.8A11.4 11.4 0 0 0 4.6 10c-.6 1.4-.9 3-.9 4.7 0 2.2.6 3.9 1.7 5.2 1.1 1.2 2.6 1.9 4.3 1.9 1.4 0 2.5-.4 3.4-1.3.9-.9 1.3-2 1.3-3.3 0-1.2-.4-2.2-1.2-3-.8-.8-1.8-1.2-3-1.2-.6 0-1.2.1-1.7.4.5-2 1.5-3.7 3-5.2l-.2-.7zm10 0c-1.7.7-3.1 1.6-4.2 2.8A11.4 11.4 0 0 0 14.6 10c-.6 1.4-.9 3-.9 4.7 0 2.2.6 3.9 1.7 5.2 1.1 1.2 2.6 1.9 4.3 1.9 1.4 0 2.5-.4 3.4-1.3.9-.9 1.3-2 1.3-3.3 0-1.2-.4-2.2-1.2-3-.8-.8-1.8-1.2-3-1.2-.6 0-1.2.1-1.7.4.5-2 1.5-3.7 3-5.2l-.2-.7z" />
          </svg>

          <blockquote className="font-serif text-3xl font-medium italic leading-relaxed text-foreground sm:text-4xl lg:text-5xl">
            Liefhebbers van Frans-Belgische favorieten
            zijn kind aan huis bij dit gezellige buurtrestaurant.
          </blockquote>

          <div className="mt-10 flex items-center justify-center gap-4">
            <span className="h-px w-8 bg-primary/50" />
            <cite className="text-sm tracking-[0.25em] uppercase text-primary not-italic">
              Michelin Gids
            </cite>
            <span className="h-px w-8 bg-primary/50" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
