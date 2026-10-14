import type { Metadata } from "next";
import SopsView from "@/components/views/sops";

export const metadata: Metadata = {
  title: "SOPs",
  description:
    "Standard operating procedures for compliance, inventory, delivery, payments, staffing and more.",
};

export default function SopsPage() {
  return <SopsView />;
}
