
import Header from "@/components/Header/Header";
import HeroSection from "@/components/HeroSection/HeroSection";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import AboutSection from "@/components/AboutSection/AboutSection";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        
      </main>

      <Footer />
    </>
  );
}


