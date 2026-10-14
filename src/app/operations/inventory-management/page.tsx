import type { Metadata } from "next";
import InventoryManagementView from "@/components/views/inventory-management";

export const metadata: Metadata = {
  title: "Inventory Management",
  description:
    "Real-time stock levels, live audits, transfers and bulk operations across all your locations.",
};

export default function InventoryManagementPage() {
  return <InventoryManagementView />;
}
