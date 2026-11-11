import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Loop from "@/components/Loop";
import Builds from "@/components/Builds";
import Clients from "@/components/Clients";
import Now from "@/components/Now";
import Wins from "@/components/Wins";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Loop />
      <Builds />
      <Clients />
      <Now />
      <Wins />
      <Skills />
      <Footer />
    </>
  );
}
