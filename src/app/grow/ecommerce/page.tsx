import type { Metadata } from "next";
import EcommerceView from "@/components/views/ecommerce";

export const metadata: Metadata = {
  title: "Ecommerce",
  description:
    "Branded web storefronts and mobile apps that sync with your POS, inventory and delivery in real time.",
};

export default function EcommercePage() {
  return <EcommerceView />;
}
