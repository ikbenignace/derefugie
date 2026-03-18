"use client";

import { motion } from "motion/react";

type HeroProps = {
  onOpenReservation?: () => void;
};

export function Hero({ onOpenReservation }: HeroProps) {
  const handleReservationClick = () => {
    if (onOpenReservation) {
      onOpenReservation();
      return;
    }

    const trigger = document.querySelector<HTMLElement>(
      "[data-reservation-trigger]"
    );
    trigger?.click();
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/hero-1.jpg"
          alt="De Refugie restaurant interieur met warme sfeerverlichting"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/62 to-background" />
        <div className="absolute inset-0 bg-black/18" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/12 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-8 flex items-center justify-center gap-4 sm:gap-6">
            <span className="h-px w-12 bg-primary/60 sm:w-16" />
            <span className="text-[13px] font-medium tracking-[0.28em] uppercase text-primary sm:text-sm">
              Bistronomie sinds 1995
            </span>
            <span className="h-px w-12 bg-primary/60 sm:w-16" />
          </div>

          <h1 className="font-serif text-5xl font-bold leading-[1.08] tracking-tight text-white text-shadow-lg sm:text-6xl lg:text-8xl">
            De Refugie
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-white/88 sm:text-lg lg:text-[1.375rem]">
            Frans-Belgische bistronomie in het hart van Tienen, met een warme
            sfeer en verfijnde klassiekers.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-5"
        >
          <button
            type="button"
            onClick={handleReservationClick}
            className="inline-flex min-h-12 items-center justify-center gap-3 border border-primary bg-primary/12 px-8 py-4 text-[13px] font-medium tracking-[0.22em] uppercase text-primary backdrop-blur-sm transition-all duration-300 hover:bg-primary hover:text-primary-foreground sm:px-10"
          >
            Reserveer uw tafel
          </button>
          <a
            href="#menu"
            className="inline-flex min-h-12 items-center justify-center gap-3 border border-white/25 px-8 py-4 text-[13px] font-medium tracking-[0.22em] uppercase text-white/85 backdrop-blur-sm transition-all duration-300 hover:border-white/45 hover:text-white sm:px-10"
          >
            Ontdek het menu
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20 flex flex-wrap items-center justify-center gap-4 text-white/55 sm:gap-8"
        >
          <div className="flex items-center gap-2">
            <span className="text-[13px] tracking-[0.18em] uppercase">
              Michelin
            </span>
          </div>
          <span className="hidden h-4 w-px bg-white/20 sm:block" />
          <div className="flex items-center gap-2">
            <span className="text-[13px] tracking-[0.18em] uppercase">
              GaultMillau
            </span>
          </div>
          <span className="hidden h-4 w-px bg-white/20 sm:block" />
          <div className="flex items-center gap-2">
            <span className="text-[13px] tracking-[0.18em] uppercase">
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
          className="flex flex-col items-center gap-2 text-white/45 transition-colors hover:text-primary"
          aria-label="Scroll naar beneden"
        >
          <span className="text-[11px] tracking-[0.28em] uppercase">
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