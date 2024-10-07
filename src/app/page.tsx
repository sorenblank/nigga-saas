import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { LogoTicker } from "@/components/sections/LogoTicker";
import { ProductShowcase } from "@/components/sections/ProductShowcase";

export default function Home() {
  return (
    <>
      <Header />;
      <Hero />
      <LogoTicker />
      <ProductShowcase />
    </>
  );
}
