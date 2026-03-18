import { Navigation } from "@/components/sections/navigation";
import { Hero } from "@/components/sections/hero";
import { Philosophy } from "@/components/sections/philosophy";
import { Quote } from "@/components/sections/quote";
import { MenuSection } from "@/components/sections/menu";
import { Gallery } from "@/components/sections/gallery";
import { Events } from "@/components/sections/events";
import { Reservation } from "@/components/sections/reservation";
import { Footer } from "@/components/sections/footer";
import { Divider } from "@/components/sections/divider";

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <Divider />
      <Philosophy />
      <Quote />
      <Divider />
      <MenuSection />
      <Divider />
      <Gallery />
      <Divider />
      <Events />
      <Divider />
      <Reservation />
      <Footer />
    </main>
  );
}