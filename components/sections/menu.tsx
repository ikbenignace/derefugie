"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
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
        description: "Meunière gebakken, warme seizoengroentjes, puree of frietjes",
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

function MenuItemRow({ item }: { item: MenuItem }) {
  return (
    <div className="group flex items-baseline justify-between gap-4 py-4 border-b border-border/50 last:border-0">
      <div className="flex-1">
        <h4 className="font-serif text-lg font-semibold text-foreground transition-colors group-hover:text-primary sm:text-xl">
          {item.name}
        </h4>
        {item.description && (
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            {item.description}
          </p>
        )}
      </div>
      {item.price && (
        <span className="shrink-0 text-base font-medium text-primary">
          {item.price.includes("p.p.") || item.price === "per stuk"
            ? item.price
            : `€${item.price}`}
        </span>
      )}
    </div>
  );
}

export function MenuSection() {
  const [activeTab, setActiveTab] = useState<MenuTab>("carte");

  return (
    <section id="menu" className="relative py-32 lg:py-40">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />

      <div className="relative mx-auto max-w-5xl px-6 lg:px-12">
        <div className="text-center">
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-primary/50" />
            <span className="text-xs tracking-[0.3em] uppercase text-primary">
              Onze Kaart
            </span>
            <span className="h-px w-12 bg-primary/50" />
          </div>

          <h2 className="font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Het Menu
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Een verfijnde mix van klassiekers en hedendaagse creaties,
            bereid met seizoensgebonden producten à la minute.
          </p>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "relative px-5 py-2.5 text-xs tracking-[0.15em] uppercase transition-all duration-300",
                activeTab === tab.id
                  ? "border border-primary text-primary"
                  : "border border-transparent text-muted-foreground hover:text-foreground"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-16"
          >
            <div className="space-y-16">
              {menuData[activeTab].map((category) => (
                <div key={category.title}>
                  <div className="mb-6">
                    <h3 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">
                      {category.title}
                    </h3>
                    {category.note && (
                      <p className="mt-2 text-sm italic text-primary/80">
                        {category.note}
                      </p>
                    )}
                  </div>
                  <div>
                    {category.items.map((item) => (
                      <MenuItemRow key={item.name} item={item} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 border border-border bg-card/50 px-8 py-5">
            <div>
              <p className="text-sm tracking-[0.15em] uppercase text-foreground">
                Lunch
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Donderdag & vrijdagmiddag
              </p>
            </div>
            <span className="h-8 w-px bg-border" />
            <div>
              <p className="font-serif text-2xl font-bold text-primary">€33</p>
              <p className="mt-1 text-xs text-muted-foreground">3 gangen</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Elke vrijdag is het traditioneel visdag
          </p>
        </div>
      </div>
    </section>
  );
}
