"use client";

import Link from "next/link";
import Image from "next/image";
import { Award, Mountain, BadgeCheck, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { siteData } from "@/lib/site-data";

const iconMap: Record<string, React.ElementType> = {
  Award,
  Mountain,
  BadgeCheck,
};

export default function Hero() {
  return (
    <section className="relative min-h-[700px] h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero-aplinka.jpg"
        alt="Aplinkos tvarkymas – medžių pjovimas"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/70 via-brand-dark/55 to-brand-dark/70" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-xs uppercase tracking-[0.2em] text-cream/80 font-medium mb-4">
              {siteData.aptarnavimo_regionas} · {siteData.metu_patirtis}+ metų patirtis
            </span>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] text-white">
              Profesionali{" "}
              <span className="text-cream">aplinkos tvarkymo</span>
              <br />
              komanda
            </h1>
            <p className="mt-6 text-lg text-white/85 max-w-2xl mx-auto leading-relaxed">
              Medžių pjovimas, genėjimas, kelmų naikinimas ir sklypų tvarkymas{" "}
              {siteData.aptarnavimo_regionas}. Atvykimas nemokamas.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href={`tel:${siteData.telefonas_href}`}
              className="inline-flex items-center justify-center gap-2 bg-cream hover:bg-cream/90 text-brand-dark font-semibold px-8 py-3.5 rounded-md transition-colors text-sm md:text-base"
            >
              <Phone className="w-4 h-4" />
              {siteData.telefonas}
            </a>
            <Link
              href="#paslaugos"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-brand-dark font-semibold px-8 py-3.5 rounded-md transition-colors text-sm md:text-base"
            >
              Mūsų paslaugos
            </Link>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto"
          >
            {siteData.hero_badges.map((badge, i) => {
              const Icon = iconMap[badge.ikona] || Award;
              return (
                <div
                  key={i}
                  className="bg-brand-dark/40 backdrop-blur border border-white/10 rounded-xl p-5 flex items-start gap-4 text-left"
                >
                  <div className="bg-brand-light/30 p-2.5 rounded-lg shrink-0">
                    <Icon className="w-5 h-5 text-cream" />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">{badge.title}</p>
                    <p className="text-white/70 text-xs mt-1">{badge.desc}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
