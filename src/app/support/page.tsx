import type { Metadata } from "next";
import SupportView from "@/components/views/support";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Contact the Bleaum support team by phone or email, and see support hours.",
};

export default function SupportPage() {
  return <SupportView />;
}
