"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import * as ga from "../lib/analytics";

export default function AnalyticsTracker() {
  const pathname = usePathname();
  useEffect(() => {
    ga.pageview(pathname);
  }, [pathname]);
  return null;
} 