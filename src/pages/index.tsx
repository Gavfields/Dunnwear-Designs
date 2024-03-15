import AboutSection from "@/components/About";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import { LayoutGridDemo } from "@/components/Gallery";
import HeroSection from "@/components/Hero";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { Cinzel } from "next/font/google";

const cabin = Cinzel({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`${cabin.className}`}>
      <ThemeToggle />
      <HeroSection />
      <AboutSection />
      <LayoutGridDemo />
      <ContactUs />
      <Footer />
    </div>
  );
}
