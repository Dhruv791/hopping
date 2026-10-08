import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import WhyHopping from "@/components/WhyHopping";
import NineColours from "@/components/NineColours";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-paper text-ink selection:bg-marigold selection:text-black font-sans relative overflow-x-clip">
      {/* 1. Hero Section with complete Navratri Garba Theme */}
      <Hero />

      {/* 2. How Hopping Works (3 simple steps) */}
      <HowItWorks />

      {/* 3. Why Hopping Feature Showcase */}
      <WhyHopping />

      {/* 4. 9 Nights 9 Colours */}
      <NineColours />

      {/* 5. Final Call to Action */}
      <FinalCTA />

      {/* 6. Footer */}
      <Footer />
    </main>
  );
}
