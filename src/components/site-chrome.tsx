"use client"

import dynamic from "next/dynamic"
import { usePathname, useSelectedLayoutSegment } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

// Redesigned pages (Phase-2) have their own header and footer. Every other page keeps the
// shared Navbar and Footer until it is redesigned too. Loaded lazily so other pages skip its CSS.
// The 404 page renders at the missing URL, so it is matched by its layout segment instead of the path.
// ponytail: path list, move to route groups when more pages get the new chrome.
const HomeHeader = dynamic(() => import("@/components/home-chrome").then((m) => m.HomeHeader))
const HomeFooter = dynamic(() => import("@/components/home-chrome").then((m) => m.HomeFooter))

function useNewChrome() {
  const path = usePathname()
  const segment = useSelectedLayoutSegment()
  return path === "/" || path === "/blog" || path.startsWith("/blog/") || segment === "/_not-found"
}

export function SiteHeader() {
  return useNewChrome() ? <HomeHeader /> : <Navbar />
}

export function SiteFooter() {
  return useNewChrome() ? <HomeFooter /> : <Footer />
}
