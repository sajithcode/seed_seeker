import Hero from "@/components/layout/Hero";
import HeroTwo from "@/components/layout/HeroTwo";
import Types from "@/components/layout/Types";
import Image from "next/image";
import TopSellers from './../components/layout/TopSellers';
import FeaturedItems from "@/components/layout/FeaturedItems";

export default function Home() {
  return (
    <div className="max-w-full">
      <Hero />
      <HeroTwo />
      <Types />
      <TopSellers />
      <FeaturedItems />
      
    </div>
  );
}

