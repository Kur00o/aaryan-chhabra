import Hero from "@/components/Hero";
import FeaturedBuilds from "@/components/FeaturedBuilds";
import ClientWork from "@/components/ClientWork";
import CurrentlyBuilding from "@/components/CurrentlyBuilding";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

function Divider() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="border-t border-border" />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Divider />
      <Experience />
      <Divider />
      <FeaturedBuilds />
      <Divider />
      <ClientWork />
      <Divider />
      <CurrentlyBuilding />
      <Divider />
      <Achievements />
      <Divider />
      <Skills />
      <Footer />
    </>
  );
}
