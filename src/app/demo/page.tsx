import type { Metadata } from "next";
import DemoView from "@/components/views/demo";

export const metadata: Metadata = {
  title: "Book a Demo",
  description:
    "Book a walkthrough of the Bleaum platform and see how it fits your business.",
};

export default function DemoPage() {
  return <DemoView />;
}
