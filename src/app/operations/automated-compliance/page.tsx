import type { Metadata } from "next";
import AutomatedComplianceView from "@/components/views/automated-compliance";

export const metadata: Metadata = {
  title: "Automated Compliance",
  description:
    "Compliance tools that run in the background: state reporting integrations, audit trails, purchase limits and pre-audit checks.",
};

export default function AutomatedCompliancePage() {
  return <AutomatedComplianceView />;
}
