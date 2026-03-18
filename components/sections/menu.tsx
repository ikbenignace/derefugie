"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

type MenuTab = "carte" | "maand" | "vegetarisch" | "kinderen";

const tabs: { id: MenuTab; label: string }[] = [
  { id: "carte", label: "À la Carte" },
  { id: "maand", label: "Menu van de Maand" },
  { id: "vegetarisch", label: "Vegetarisch" },
  { id: "kinderen", label: "Kleine Lekkerbek" },
];

interface MenuItem {
  name: string;
  description?: string;
  price?: string;
}

interface MenuCategory {
  title: string;
  items: MenuItem[];
  note?: string;
}

const carteMenu: MenuCategory[] = [
  {
    title: "Voorgerechten",
    items: [
      { name: "Oesters n° 3", price: "per stuk" },
      {
        name: "Grand Plateau de Fruits de Mer",
        description:
          "Halve kreeft, halve krab, 6 oesters, 3 langoustines, karakollen, sint-jakobsnoot, roze & grijze garnalen",
        price: "69 p.p.",
      },
      {
        name: "Kaaskroket of Garnaalkroket",
        description: "Met fris slaatje",
        price: "10 / 12",
      },
      {
        name: "Taartje met Eendenlever",
        description: "Hagelandse peer en gerookte eendenborst",
        price: "24",
      },
      {
        name: "Open Lasagne met Schelpjes",
        description: "Groenten, veloutésaus met Champagne",
        price: "24",
      },
      {
        name: "Groenten Ceviché",
        description: "Met tijgermelk",
        price: "15",
      },
      {
        name: "Lauwe Gekonfijte Prei",
        description: "Vinaigrette Gribiche",
        price: "15",
      },
    ],
  },
  {
    title: "Hoofdgerechten",
    items: [
      {
        name: "Visvangst van de Dag",
        description: "Op de wijze Grenobloise, puree Robuchon",
        price: "38",
      },
      {
        name: "Duo van Slibtong",
        description: "Meunière gebakken, frietjes, fris slaatje",
        price: "40",
      },
      {
        name: "Varkenshaasje Wellington",
        description:
          "Babyspinazie, sterke jus met rode wijn, Hasselback potato",
        price: "38",
      },
      {
        name: "Gekonfijte Eendenbout",
        description: "Bordelaisesaus, aardappelen Sarladaise",
        price: "36",
      },
      {
        name: "Beef Dunne Lende",
        description: "Peperroomsaus, frietjes, fris slaatje",
        price: "45",
      },
      {
        name: "Tarte Tatin van Witloof",
        description: "Met ricotta — vegetarisch",
        price: "22",
      },
    ],
  },
  {
    title: "Nagerechten",
    note: "Al het ijs en sorbets zijn huisgemaakt",
    items: [
      {
        name: "Dame Blanche",
        description:
          "Huisgemaakte vanille ijs Bourbon Grand Cru, warme chocoladesaus",
        price: "12",
      },
      {
        name: "Crémeux van Chocolade",
        description: "Sorbet bloedappelsien, whiskygelei",
        price: "12",
      },
      {
        name: "Crème Brûlée",
        description: "Vanille uit Zanzibar, matcha thee, witte chocolade",
        price: "12",
      },
      {
        name: "Kaas Assortiment",
        description: "Met garnituren",
        price: "17",
      },
      {
        name: "Kolonel",
        description: "Citroen sorbet en wodka",
        price: "15",
      },
    ],
  },
];

const monthlyMenu: MenuCategory[] = [
  {
    title: "Maart — Menu van de Maand",
    note: "3-gangenmenu à 61 € · 4-gangenmenu à 72 €",
    items: [
      {
        name: "Taartje van Eendenlever",
        description: "Gerookte eendenborst en peer",
      },
      {
        name: "Open Lasagna met Schelpjes",
        description: "Groenten, veloutésaus met Champagne",
      },
      {
        name: "Filet van Varken Wellington",
        description:
          "Baby spinazie, sterke jus met rode wijn, Hasselback potato",
      },
      {
        name: "Visvangst van de Dag",
        description: "Op de wijze Grenobloise, aardappelpuree Robuchon",
      },
      {
        name: "Assortiment Gerijpte Kazen",
        description: "Notenmix, stroop",
      },
      {
        name: "Crémeux van Chocolade",
        description: "Gelei van whisky, sorbet bloedappelsien",
      },
    ],
  },
  {
    title: "April — Paasmenu",
    note: "3-gangenmenu à 61 € · 4-gangenmenu à 72 €",
    items: [
      {
        name: "Tartaar van Wilde Garnalen",
        description: "Citroenparels",
      },
      {
        name: "Kroket van Spaanse Serranoham",
        description: "Mayo van geroosterde knoflook, honing en mosterd",
      },
      {
        name: "Steak van Lam",
        description:
          "Gevulde lentegroenten, lamsjus met tijm en rozemarijn, Hofmeesterboter",
      },
      {
        name: "Visvangst van de Dag",
        description: "Asperges, Oostendse visjus, nieuwe aardappelen",
      },
      {
        name: "Gourmand Dessert",
        description: "Praliné, clementine en chocolade",
      },
    ],
  },
];

const vegetarianMenu: MenuCategory[] = [
  {
    title: "Vegetarisch Menu Maart",
    note: "3-gangenmenu à 39 € · 4-gangenmenu à 49 €",
    items: [
      {
        name: "Groenten Ceviché",
        description: "Met tijgermelk",
      },
      {
        name: "Lauwe Prei",
        description: "Gribiche vinaigrette",
      },
      {
        name: "Tarte Tatin van Witloof",
        description: "Met ricotta",
      },
      {
        name: "Assortiment Gerijpte Kaas",
        description: "Notenmix, stroop",
      },
      {
        name: "Crémeux van Chocolade",
        description: "Gelei van whisky, sorbet bloedappelsien",
      },
    ],
  },
  {
    title: "Vegetarisch Menu April",
    note: "3-gangenmenu à 39 € · 4-gangenmenu à 49 €",
    items: [
      {
        name: "Lentetaartje met Platte Kaas",
        description: "Fijne tuinkruiden en asperges",
      },
      {
        name: "Gourmet Arancini",
        description: "Met truffel en parmezaan",
      },
      {
        name: "Escalop van Aubergine",
        description: "Puree van pastinaak, trostomaten in de oven",
      },
      {
        name: "Gourmand Dessert",
        description: "Praliné, clementine en chocolade",
      },
    ],
  },
];

const kidsMenu: MenuCategory[] = [
  {
    title: "Menu voor de Kleine Lekkerbek",
    note: "Tot 14 jaar — Menu à 25 €",
    items: [
      {
        name: "Kaaskroket of Garnaalkroket",
      },
      {
        name: "Biefstuk Natuur",
        description: "Fris slaatje, tomaatjes en frietjes",
      },
      {
        name: "Vis van de Maand",
        description:
          "Meunière gebakken, warme seizoengroentjes, puree of frietjes",
      },
      {
        name: "Kinderijsje",
        description: "Met chocoladesaus",
      },
    ],
  },
];

const menuData: Record<MenuTab, MenuCategory[]> = {
  carte: carteMenu,
  maand: monthlyMenu,
  vegetarisch: vegetarianMenu,
  kinderen: kidsMenu,
};

function formatPrice(price: string) {
  return price.includes("p.p.") || price === "per stuk" ? price : `€${price}`;
}

function MenuItemRow({ item }: { item: MenuItem }) {
  return (
    <div className="group grid grid-cols-[1fr_auto] gap-x-6 gap-y-3 border-b border-border/60 py-5 last:border-0">
      <div className="min-w-0">
        <h4 className="font-serif text-xl font-semibold leading-snug text-foreground transition-colors group-hover:text-primary sm:text-2xl">
          {item.name}
        </h4>
        {item.description && (
          <p className="mt-2 max-w-3xl text-base leading-7 text-muted-foreground">
            {item.description}
          </p>
        )}
      </div>

      {item.price && (
        <div className="flex items-start justify-end">
          <span className="inline-flex min-w-[72px] justify-center rounded-full border border-primary/25 bg-primary/8 px-4 py-2 text-base font-medium text-primary sm:min-w-[84px]">
            {formatPrice(item.price)}
          </span>
        </div>
      )}
    </div>
  );
}

function MenuCategoryBlock({ category }: { category: MenuCategory }) {
  return (
    <section className="rounded-2xl border border-border/70 bg-card/60 p-6 shadow-[0_12px_40px_rgba(0,0,0,0.18)] backdrop-blur-sm sm:p-8">
      <div className="mb-6 border-b border-border/50 pb-4">
        <h3 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {category.title}
        </h3>
        {category.note && (
          <p className="mt-3 text-base leading-7 text-primary/85">
            {category.note}
          </p>
        )}
      </div>

      <div>
        {category.items.map((item) => (
          <MenuItemRow key={`${category.title}-${item.name}`} item={item} />
        ))}
      </div>
    </section>
  );
}

export function MenuSection() {
  const [activeTab, setActiveTab] = useState<MenuTab>("carte");

  return (
    <section id="menu" className="relative py-28 lg:py-36">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-12">
        <div className="text-center">
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-primary/50" />
            <span className="text-sm uppercase tracking-[0.22em] text-primary sm:text-base">
              Onze Kaart
            </span>
            <span className="h-px w-12 bg-primary/50" />
          </div>

          <h2 className="font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Het Menu
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            Een verfijnde selectie van Frans-Belgische klassiekers en
            seizoensgerechten, met aandacht voor smaak, elegantie en comfort aan
            tafel.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "rounded-full border px-5 py-3 text-base leading-none transition-all duration-300",
                  isActive
                    ? "border-primary bg-primary/12 text-primary shadow-[0_0_0_1px_rgba(196,153,58,0.15)]"
                    : "border-border/70 bg-card/40 text-muted-foreground hover:border-primary/40 hover:text-foreground"
                )}
              >
                <span className="tracking-[0.08em] uppercase">{tab.label}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-12 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-8"
            >
              {menuData[activeTab].map((category) => (
                <MenuCategoryBlock key={category.title} category={category} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-12 text-center">
          <p className="text-base leading-7 text-muted-foreground">
            Wenst u te reserveren voor lunch of diner?
          </p>
          <button
            type="button"
            data-reservation-trigger
            className="mt-5 inline-flex items-center gap-3 border border-primary bg-primary/10 px-8 py-4 text-base uppercase tracking-[0.16em] text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
          >
            Reserveer uw tafel
          </button>
        </div>
      </div>
    </section>
  );
}