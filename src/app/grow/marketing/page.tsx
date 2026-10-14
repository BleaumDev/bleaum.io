import type { Metadata } from "next";
import MarketingView from "@/components/views/marketing";

export const metadata: Metadata = {
  title: "Marketing & Loyalty",
  description:
    "Loyalty programs, campaigns and customer segments that bring shoppers back, all connected to your POS.",
};

export default function MarketingPage() {
  return <MarketingView />;
}
