import type { Metadata } from "next";
import IntegrationsView from "@/components/views/integrations";

export const metadata: Metadata = {
  title: "Integrations",
  description:
    "Connect Bleaum to accounting, analytics, payments, ID verification and state reporting systems.",
};

export default function IntegrationsPage() {
  return <IntegrationsView />;
}
