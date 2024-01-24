
import React from "react";
import HeroSection from "@/components/Home/HeroSection";
import ReviewSection from "@/components/Home/ReviewSection";
import Verifying from "@/components/Home/Verifying";
import FAQ from "@/components/Global/FAQ";
import ReviewCards from "@/components/Global/ReviewCards";
import ThreeCardImages from "@/components/Global/ThreeCardImages";
import Redenin from "@/components/Global/Redenin";
import ImageComponent from "@/components/Home/ImageComponent";
import Showcase from "@/components/Home/Showcase";
import TextLayer from "@/components/Home/TextLayer";
import Step from "@/components/Home/Step";
export default function page() {
  const color = '#ffffff';
  const rounded = true;
  return (
    <>
    <HeroSection />
    <div className="lg:p-16 bg-[#fbf4ea] rounded-t-2xl relative bottom-3">
    <Verifying/>
    <Showcase/>
    <ReviewSection/>
    <FAQ rounded={rounded}/>
    </div>
    <Redenin/>
    <TextLayer/>
    <Step />
    <ReviewCards  color={color}/>
    <ThreeCardImages/>
    <ImageComponent />
    </>
   
  );
}
