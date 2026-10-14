import type { Metadata } from "next";
import TermsView from "@/components/views/terms";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that apply to your use of Bleaum products and services.",
};

export default function TermsPage() {
  return <TermsView />;
}
