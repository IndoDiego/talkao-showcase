import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BentoOverview from "@/components/BentoOverview";
import VoiceTranslator from "@/components/VoiceTranslator";
import Offiwiz from "@/components/Offiwiz";
import NexaFlow from "@/components/NexaFlow";
import Parkao from "@/components/Parkao";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import Divider from "@/components/Divider";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <BentoOverview />
        <Divider />
        <VoiceTranslator />
        <Divider />
        <Offiwiz />
        <Divider />
        <NexaFlow />
        <Divider />
        <Parkao />
        <Divider />
        <TechStack />
        <Divider />
        <Contact />
      </main>
    </>
  );
}
