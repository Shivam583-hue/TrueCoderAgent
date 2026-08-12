import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import ThesisStrip from "@/components/sections/ThesisStrip";
import Pipeline from "@/components/sections/Pipeline";
import Features from "@/components/sections/Features";
import Scorecard from "@/components/sections/Scorecard";
import Architecture from "@/components/sections/Architecture";
import Sandbox from "@/components/sections/Sandbox";
import Install from "@/components/sections/Install";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ThesisStrip />
        <Pipeline />
        <Features />
        <Scorecard />
        <Architecture />
        <Sandbox />
        <Install />
      </main>
      <Footer />
    </>
  );
}
