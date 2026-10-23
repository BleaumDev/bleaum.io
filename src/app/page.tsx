import type { Metadata } from "next";
import HomeView from "@/components/views/home";

export const metadata: Metadata = {
  title: { absolute: "Run your whole business from one hand | Bleaum" },
};

export default function Home() {
  return <HomeView />;
}
