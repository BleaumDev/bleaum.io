import type { Metadata } from "next";
import PrivacyView from "@/components/views/privacy";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Bleaum collects, uses and protects your information.",
};

export default function PrivacyPage() {
  return <PrivacyView />;
}
