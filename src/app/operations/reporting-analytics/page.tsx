import type { Metadata } from "next";
import ReportingAnalyticsView from "@/components/views/reporting-analytics";

export const metadata: Metadata = {
  title: "Reporting & Analytics",
  description:
    "Live dashboards and customizable reports across every location, sales, inventory and customers.",
};

export default function ReportingAnalyticsPage() {
  return <ReportingAnalyticsView />;
}
