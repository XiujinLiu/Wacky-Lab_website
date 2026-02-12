// app/page.tsx
"use client";

import hotspotsData from "@/data/cover_hotspots.json";
import newsItems from "@/data/news.json";
import { Hotspot } from "./utils";

import CoverSection from "@/components/CoverSection";
import ProductSection from "@/components/ProductSection";
import ContactSection from "@/components/ContactSection";
import GarageSection from "@/components/GarageSection";

const hotspots = hotspotsData as Hotspot[];

export default function HomePage() {
  return (
    <main className="w-full px-[4vw] py-[3vw] bg-[#fefdfa]">
      <CoverSection hotspots={hotspots} newsItems={newsItems} />
      <ProductSection />
      <ContactSection />
      <GarageSection />
    </main>
  );
}
