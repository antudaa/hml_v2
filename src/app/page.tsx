import { HomeFleetOverview } from "@/components/home/FleetOverview";
import { HomePageScroller } from "@/components/home/HomePageScroller";
import LatestNews from "@/components/home/LatestNews";
import { OurCargoExpertise } from "@/components/home/OurCargoExpertise";
import { HomeProjectOverview } from "@/components/home/ProjectOverview";
import { HeroSection } from "@/components/sections/hero";

export default function HomePage() {
  return (
    <HomePageScroller>
      <HeroSection />
      <HomeFleetOverview />
      <OurCargoExpertise />
      <HomeProjectOverview />
      <LatestNews />
    </HomePageScroller>
  );
}
