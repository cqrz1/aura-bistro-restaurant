import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import AboutSection from "@/components/sections/AboutSection";
import MenuSection from "@/components/sections/MenuSection";
import QRCodeSection from "@/components/sections/QRCodeSection";
import LocationContactSection from "@/components/sections/LocationContactSection";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 selection:bg-amber-200 selection:text-amber-900">
      <Header />
      <main className="flex-1">
        <Hero />
        <AboutSection />
        <MenuSection />
        <QRCodeSection />
        <LocationContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
