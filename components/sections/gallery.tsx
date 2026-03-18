"use client";

import { motion } from "motion/react";

const galleryImages = [
  { src: "/images/dish-1.jpg", alt: "Culinaire creatie van De Refugie", span: "col-span-2 row-span-2" },
  { src: "/images/interior-2.jpg", alt: "Restaurant interieur De Refugie", span: "col-span-1 row-span-1" },
  { src: "/images/dish-2.jpg", alt: "Frans-Belgisch gerecht", span: "col-span-1 row-span-1" },
  { src: "/images/dish-3.jpg", alt: "Seizoensgebonden creatie", span: "col-span-1 row-span-2" },
  { src: "/images/interior-3.jpg", alt: "Warme sfeer in De Refugie", span: "col-span-1 row-span-1" },
  { src: "/images/dish-4.jpg", alt: "Dessert van de chef", span: "col-span-1 row-span-1" },
  { src: "/images/dish-5.jpg", alt: "Hoofdgerecht De Refugie", span: "col-span-1 row-span-1" },
  { src: "/images/dish-6.jpg", alt: "Gastronomisch gerecht", span: "col-span-2 row-span-1" },
];

export function Gallery() {
  return (
    <section id="galerij" className="relative py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="text-center">
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-primary/50" />
            <span className="text-xs tracking-[0.3em] uppercase text-primary">
              Impressies
            </span>
            <span className="h-px w-12 bg-primary/50" />
          </div>

          <h2 className="font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Galerij
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Een blik op onze keuken, ons interieur en de sfeer die De Refugie zo bijzonder maakt.
          </p>
        </div>

        <div className="mt-16 grid auto-rows-[200px] grid-cols-2 gap-3 sm:auto-rows-[250px] md:grid-cols-3 lg:auto-rows-[280px]">
          {galleryImages.map((image, i) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group relative overflow-hidden ${image.span}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
