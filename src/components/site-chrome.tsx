"use client"

import dynamic from "next/dynamic"
import { usePathname } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

// The Home page has its own header and footer (Phase-2 design). Every other page keeps the
// shared Navbar and Footer until it is redesigned too. Loaded lazily so other pages skip its CSS.
// ponytail: path check, move to route groups when a second page gets the new chrome.
const HomeHeader = dynamic(() => import("@/components/home-chrome").then((m) => m.HomeHeader))
const HomeFooter = dynamic(() => import("@/components/home-chrome").then((m) => m.HomeFooter))

export function SiteHeader() {
  return usePathname() === "/" ? <HomeHeader /> : <Navbar />
}

export function SiteFooter() {
  return usePathname() === "/" ? <HomeFooter /> : <Footer />
}
