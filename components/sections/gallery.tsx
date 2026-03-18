"use client";

import { motion } from "motion/react";

const galleryImages = [
  {
    src: "/images/dish-1.jpg",
    alt: "Culinaire creatie van De Refugie",
    span: "col-span-2 row-span-2",
  },
  {
    src: "/images/interior-2.jpg",
    alt: "Restaurant interieur De Refugie",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/dish-2.jpg",
    alt: "Frans-Belgisch gerecht",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/dish-3.jpg",
    alt: "Seizoensgebonden creatie",
    span: "col-span-1 row-span-2",
  },
  {
    src: "/images/interior-3.jpg",
    alt: "Warme sfeer in De Refugie",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/dish-4.jpg",
    alt: "Dessert van de chef",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/dish-5.jpg",
    alt: "Hoofdgerecht De Refugie",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/dish-6.jpg",
    alt: "Gastronomisch gerecht",
    span: "col-span-2 row-span-1",
  },
];

export function Gallery() {
  return (
    <section id="galerij" className="relative py-28 lg:py-36">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-primary/50" />
            <span className="text-sm tracking-[0.24em] uppercase text-primary sm:text-base">
              Impressies
            </span>
            <span className="h-px w-12 bg-primary/50" />
          </div>

          <h2 className="font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Galerij
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            Een blik op onze keuken, ons interieur en de warme sfeer die De
            Refugie zo bijzonder maakt.
          </p>
        </div>

        <div className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] sm:gap-4 md:grid-cols-3 lg:auto-rows-[260px]">
          {galleryImages.map((image, i) => (
            <motion.figure
              key={image.src}
              initial={{ opacity: 0, scale: 0.97, y: 16 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group relative overflow-hidden rounded-sm border border-border/60 bg-card/40 ${image.span}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-3 px-4 pb-4 text-sm leading-6 text-white/90 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:px-5 sm:text-base">
                {image.alt}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}