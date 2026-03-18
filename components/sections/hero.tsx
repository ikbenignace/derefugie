"use client";

import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/hero-1.jpg"
          alt="De Refugie restaurant interieur met warme sfeerverlichting"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-8 flex items-center justify-center gap-6">
            <span className="h-px w-16 bg-primary/50" />
            <span className="text-xs tracking-[0.4em] uppercase text-primary">
              Bistronomie sinds 1995
            </span>
            <span className="h-px w-16 bg-primary/50" />
          </div>

          <h1 className="font-serif text-6xl font-bold leading-[1.1] tracking-tight text-white sm:text-7xl lg:text-8xl">
            De Refugie
          </h1>

          <p className="mx-auto mt-8 max-w-xl text-xl leading-relaxed text-white/70 sm:text-2xl">
            Frans-Belgische bistronomie in het hart van Tienen
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-col items-center gap-5 sm:flex-row sm:justify-center"
        >
          <a
            href="#reserveer"
            className="inline-flex items-center gap-3 border border-primary bg-primary/10 px-10 py-4 text-sm tracking-[0.25em] uppercase text-primary backdrop-blur-sm transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
          >
            Reserveer uw tafel
          </a>
          <a
            href="#menu"
            className="inline-flex items-center gap-3 border border-white/20 px-10 py-4 text-sm tracking-[0.25em] uppercase text-white/70 backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:text-white"
          >
            Ontdek het menu
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20 flex items-center justify-center gap-8 text-white/40"
        >
          <div className="flex items-center gap-2">
            <span className="text-xs tracking-[0.2em] uppercase">Michelin</span>
          </div>
          <span className="h-4 w-px bg-white/20" />
          <div className="flex items-center gap-2">
            <span className="text-xs tracking-[0.2em] uppercase">
              GaultMillau
            </span>
          </div>
          <span className="h-4 w-px bg-white/20" />
          <div className="flex items-center gap-2">
            <span className="text-xs tracking-[0.2em] uppercase">
              Euro-Toques
            </span>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#philosophie"
          className="flex flex-col items-center gap-2 text-white/30 transition-colors hover:text-primary"
          aria-label="Scroll naar beneden"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase">
            Ontdek
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
