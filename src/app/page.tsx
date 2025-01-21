"use client"
import Image from "next/image";
import { HomePageHeader } from "../components/ui/HomePageHeader";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Particles from "react-particles";
import ParticlesComponent from "../components/ui/ParticleBackground";
import { AboutSection } from "@/components/sections/AboutSection";
import { HeroSection } from "@/components/sections/HeroSection";
import ExperienceSection from "@/components/sections/ExperienceSection";

export default function Home() {

  return (
    <main className="overflow-x-hidden">
      <HomePageHeader/>
      <HeroSection/>
      <AboutSection/>
      <ExperienceSection/>
    </main>
  );
}
