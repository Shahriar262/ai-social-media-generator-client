import Architecture from "@/components/landing/Architechture";
import FAQ from "@/components/landing/FAQ";
import Features from "@/components/landing/Features";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import Logos from "@/components/landing/Logos";
import Newsletter from "@/components/landing/Newsletter";
import OutputShowcase from "@/components/landing/OutputShowcase";
import Pricing from "@/components/landing/Pricing";
import Testimonials from "@/components/landing/Testimonials";


export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <Logos></Logos>
      <Features></Features>
      <OutputShowcase></OutputShowcase>
      <HowItWorks></HowItWorks>
      <Pricing></Pricing>
      <Architecture></Architecture>
      <Testimonials></Testimonials>
      <FAQ></FAQ>
      <Newsletter></Newsletter>
    </div>
  );
}
