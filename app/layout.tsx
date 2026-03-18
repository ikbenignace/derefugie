import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "De Refugie | Frans-Belgische Bistronomie in Tienen",
  description:
    "De Refugie is een gerenommeerd Frans-Belgisch bistronomie restaurant in Tienen, sinds 1995. Geniet van kwalitatieve gerechten in een ongedwongen, elegante sfeer. Michelin Gids erkend.",
  keywords: [
    "De Refugie",
    "restaurant Tienen",
    "bistronomie",
    "Frans-Belgisch",
    "Michelin",
    "GaultMillau",
    "Kapucijnenstraat",
    "gastronomisch restaurant",
  ],
  openGraph: {
    title: "De Refugie | Frans-Belgische Bistronomie in Tienen",
    description:
      "Sinds 1995 een vaste waarde in Tienen. Kwalitatieve Frans-Belgische keuken in een ongedwongen sfeer.",
    url: "https://derefugie.be",
    siteName: "De Refugie",
    locale: "nl_BE",
    type: "website",
    images: [
      {
        url: "/images/hero-1.jpg",
        width: 1200,
        height: 800,
        alt: "De Refugie restaurant interieur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "De Refugie | Bistronomie Tienen",
    description:
      "Frans-Belgische bistronomie in het hart van Tienen. Michelin erkend, sinds 1995.",
    images: ["/images/hero-1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: "De Refugie",
              image: "https://derefugie.be/images/hero-1.jpg",
              url: "https://derefugie.be",
              telephone: "+32 16 82 45 32",
              email: "derefugie@skynet.be",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Kapucijnenstraat 75",
                addressLocality: "Tienen",
                postalCode: "3300",
                addressCountry: "BE",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 50.8048,
                longitude: 4.9463,
              },
              servesCuisine: ["French", "Belgian"],
              priceRange: "€€",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Thursday", "Friday", "Saturday", "Sunday"],
                  opens: "12:00",
                  closes: "13:30",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Thursday", "Friday", "Saturday", "Sunday"],
                  opens: "18:00",
                  closes: "21:00",
                },
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "9.4",
                bestRating: "10",
                ratingCount: "969",
              },
              award: [
                "Michelin Gids - Goedgekeurd door de locals",
                "GaultMillau",
                "Euro-Toques",
              ],
              foundingDate: "1995",
            }),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
