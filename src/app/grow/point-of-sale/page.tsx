import type { Metadata } from "next";
import PointOfSaleView from "@/components/views/point-of-sale";

export const metadata: Metadata = {
  title: "Point of Sale",
  description:
    "Fast checkout, easy training and built-in compliance tools. Bleaum POS runs your counter and back office on one real-time system.",
};

export default function PointOfSalePage() {
  return <PointOfSaleView />;
}
