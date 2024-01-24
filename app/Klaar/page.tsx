
import React from "react";

import Hero from "@/components/Klaar/Hero";
import Activer from "@/components/Klaar/Activer";
import ThreeCardImages from "@/components/Global/ThreeCardImages";
import FAQ from "@/components/Global/FAQ";
import WhatsappCards from "@/components/Klaar/WhatsappCards";
import ReviewCards from "@/components/Global/ReviewCards";
export default function index() {
  const color = '#fbf4ea'
  const rounded = false;
  return (
    <>

    <Hero/>
    <WhatsappCards/>
    <Activer />
    <ReviewCards  color={color}/>
    <ThreeCardImages/>
    <FAQ rounded={rounded}/>

    </>
  );
}
