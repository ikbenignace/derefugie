"use client";

import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { Phone, Mail, Clock, CalendarDays, X } from "lucide-react";

const RESERVATION_IFRAME_SRC =
  "https://reservations.tablebooker.com?&modal=0&lang=nl&source=website&restaurantId=33628674&theme=dark&obmPrimaryColor=%23b29a7a&&obmId=obm-0";

function ReservationButton({
  onClick,
  className = "",
  children,
}: {
  onClick: () => void;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-3 border border-primary bg-primary/10 px-8 py-4 text-sm tracking-[0.18em] uppercase text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background ${className}`}
      aria-haspopup="dialog"
      aria-label="Open reservatiemodule"
      data-reservation-trigger
    >
      <CalendarDays className="h-4 w-4" strokeWidth={1.5} />
      {children}
    </button>
  );
}

function ReservationModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="reservation-modal-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Sluit reservatiemodule"
      />
      <div className="relative z-[101] w-full max-w-3xl overflow-hidden rounded-lg border border-border bg-card shadow-2xl shadow-black/50">
        <div className="flex items-center justify-between border-b border-border bg-background/98 px-6 py-5 sm:px-8">
          <div>
            <p className="text-[11px] tracking-[0.24em] uppercase text-primary">
              Online reserveren
            </p>
            <h3
              id="reservation-modal-title"
              className="mt-2 font-serif text-2xl font-bold text-foreground sm:text-3xl"
            >
              Reserveer uw tafel
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-border/70 bg-secondary/40 text-muted-foreground transition-colors hover:border-primary/50 hover:bg-secondary/60 hover:text-foreground"
            aria-label="Sluiten"
          >
            <X className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex items-center justify-center bg-background px-6 py-8 sm:px-8">
          <div className="w-full max-w-2xl">
            <iframe
              src={RESERVATION_IFRAME_SRC}
              height={400}
              width="100%"
              scrolling="yes"
              id="obm-0"
              className="rounded-md"
              style={{ border: 0 }}
              title="Tablebooker reservaties"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Reservation() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openReservationModal = () => setIsModalOpen(true);
  const closeReservationModal = () => setIsModalOpen(false);

  const openingHours = useMemo(
    () => "Do — Zo · 12:00 – 13:30 & 18:00 – 21:00",
    []
  );

  return (
    <>
      <section id="reserveer" className="relative py-24 lg:py-32">
        <div className="absolute inset-0">
          <img
            src="/images/dish-7.jpg"
            alt="Sfeervolle tafeldekking in De Refugie"
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
              <span className="text-[11px] tracking-[0.26em] uppercase text-primary">
                Reservatie
              </span>
              <span className="h-px w-12 bg-primary/50" />
            </div>

            <h2 className="font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Reserveer uw tafel
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              Reservatie is aanbevolen. U kan telefonisch, per e-mail of via ons
              online reservatiesysteem uw tafel vastleggen.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-14"
          >
            <div className="border border-border bg-card/80 p-6 backdrop-blur-sm sm:p-8 lg:p-10">
              <div className="grid gap-6 md:grid-cols-3">
                <a
                  href="tel:+3216824532"
                  className="group flex flex-col items-center gap-4 p-5 text-center transition-colors hover:bg-secondary/50"
                >
                  <Phone
                    className="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-110"
                    strokeWidth={1.5}
                  />
                  <div>
                    <p className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
                      Telefonisch
                    </p>
                    <p className="mt-2 font-serif text-xl font-semibold text-foreground">
                      016 82 45 32
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:derefugie@skynet.be"
                  className="group flex flex-col items-center gap-4 border-y border-border p-5 text-center transition-colors hover:bg-secondary/50 md:border-x md:border-y-0"
                >
                  <Mail
                    className="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-110"
                    strokeWidth={1.5}
                  />
                  <div>
                    <p className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
                      E-mail
                    </p>
                    <p className="mt-2 font-serif text-xl font-semibold text-foreground">
                      derefugie@skynet.be
                    </p>
                  </div>
                </a>

                <div className="flex flex-col items-center gap-4 p-5 text-center">
                  <Clock className="h-6 w-6 text-primary" strokeWidth={1.5} />
                  <div>
                    <p className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
                      Openingsuren
                    </p>
                    <p className="mt-2 font-serif text-lg font-semibold text-foreground">
                      Do — Zo
                    </p>
                    <p className="mt-1 text-base leading-7 text-muted-foreground">
                      12:00 – 13:30 & 18:00 – 21:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 text-center">
              <ReservationButton
                onClick={openReservationModal}
                className="px-10 py-4 sm:px-12"
              >
                Online Reserveren
              </ReservationButton>
              <p className="mt-4 text-sm text-muted-foreground">
                Open het reservatiesysteem in een rustige modal zonder de pagina
                te verlaten.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="fixed bottom-4 right-4 z-[90] sm:bottom-6 sm:right-6">
        <ReservationButton
          onClick={openReservationModal}
          className="rounded-none px-5 py-4 shadow-xl shadow-black/30 sm:px-6"
        >
          Reserveer
        </ReservationButton>
        <p className="mt-2 hidden text-right text-xs text-muted-foreground sm:block">
          {openingHours}
        </p>
      </div>

      <ReservationModal open={isModalOpen} onClose={closeReservationModal} />
    </>
  );
}