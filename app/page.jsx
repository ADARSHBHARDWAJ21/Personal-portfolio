'use client'

import { lazy, Suspense } from "react"
import { HeroSection } from "@/components/sections/hero" // Keep hero section for immediate loading
import { AnimatedBackground } from "@/components/3d/animated-background"
import { profile } from "@/lib/portfolio-data"

// Lazy load non-critical sections
const TrustStrip = lazy(() => import("@/components/sections/trust-strip").then(mod => ({ default: mod.TrustStrip })))
const FeaturedProjects = lazy(() => import("@/components/sections/featured-projects").then(mod => ({ default: mod.FeaturedProjects })))
const WhatIDo = lazy(() => import("@/components/sections/what-i-do").then(mod => ({ default: mod.WhatIDo })))
const Testimonials = lazy(() => import("@/components/sections/testimonials").then(mod => ({ default: mod.Testimonials })))
const CTABand = lazy(() => import("@/components/sections/cta-band").then(mod => ({ default: mod.CTABand })))
const FloatingActionButton = lazy(() => import("@/components/ui/floating-action-button").then(mod => ({ default: mod.FloatingActionButton })))

export default function HomePage() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    url: profile.website,
    image: profile.avatar,
    description: profile.summary,
    email: `mailto:${profile.email}`,
    sameAs: [profile.linkedin, profile.github],
    knowsAbout: profile.skillGroups.flatMap(group => group.items),
    address: {
      "@type": "PostalAddress",
      addressLocality: profile.location.split(',')[0],
      addressCountry: "IN"
    }
  }
  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(person).replace(/</g, '\\u003c')
        }}
      />

      <div className="min-h-screen relative isolate overflow-x-hidden">
        {/* 3D Animated Background */}
        <div aria-hidden="true" className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none print:hidden">
          <AnimatedBackground />
        </div>
        
        <div className="relative z-10">
          {/* Hero Section - Load immediately */}
          <HeroSection />
          
          {/* Trust Strip - Lazy loaded */}
          <Suspense fallback={<div className="h-20 bg-black/20 animate-pulse" />}>
            <TrustStrip />
          </Suspense>
          
          {/* Featured Projects - Lazy loaded */}
          <Suspense fallback={<div className="h-96 bg-black/20 animate-pulse" />}>
            <FeaturedProjects />
          </Suspense>
          
          {/* Services - Lazy loaded */}
          <Suspense fallback={<div className="h-96 bg-black/20 animate-pulse" />}>
            <WhatIDo />
          </Suspense>
          
          {/* Testimonials - Lazy loaded */}
          <Suspense fallback={<div className="h-96 bg-black/20 animate-pulse" />}>
            <Testimonials />
          </Suspense>
          
          {/* CTA - Lazy loaded */}
          <Suspense fallback={<div className="h-32 bg-black/20 animate-pulse" />}>
            <CTABand />
          </Suspense>
        </div>

        {/* Floating Action Button - Lazy loaded */}
        <Suspense fallback={null}>
          <FloatingActionButton />
        </Suspense>
      </div>
    </>
  )
}

