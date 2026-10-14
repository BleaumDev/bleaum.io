import type { Metadata } from "next";
import ReferView from "@/components/views/refer";

export const metadata: Metadata = {
  title: "Refer a Business",
  description:
    "Refer a retailer to Bleaum and earn a referral bonus when they become a customer.",
};

export default function ReferPage() {
  return <ReferView />;
}
