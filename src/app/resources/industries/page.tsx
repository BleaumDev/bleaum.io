import type { Metadata } from "next";
import IndustriesView from "@/components/views/industries";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Bleaum serves retail, wholesale and distribution, and regulated markets with one flexible platform.",
};

export default function IndustriesPage() {
  return <IndustriesView />;
}
