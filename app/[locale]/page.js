"use client";
import { useTranslations } from "next-intl";
import React from "react";
import Banner from "../../components/Banner";
import Me from "../../components/Me";
import Skills from "../../components/Skills";
import Contact from "../../components/Contact";
export default function Home() {
  const t = useTranslations();
  return (
    <div>
      <Banner />
      <Me />
      <Skills />
      <Contact />
    </div>
  );
}