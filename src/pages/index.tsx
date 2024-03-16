import AboutSection from "@/components/About";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import { GalleryGrid } from "@/components/Gallery";
import { GalleryCarousel } from "@/components/GalleryCarousel";
import HeroSection from "@/components/Hero";
import ServicesSection from "@/components/Services";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { Cinzel } from "next/font/google";

const cabin = Cinzel({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`${cabin.className}`}>
      <ThemeToggle />
      <HeroSection />
      <div
        style={{
          minHeight: "100vh",
          backdropFilter: "blur(10px)",
          backgroundImage:
            "radial-gradient(at top, rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0))",
        }}
      >
        <AboutSection />
        <GalleryGrid />
        <ServicesSection />
        <GalleryCarousel />
        <ContactUs />
        <Footer />
      </div>
    </div>
  );
}
