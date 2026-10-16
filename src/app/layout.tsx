import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/components/contexts/theme-provider";
import { HomeHeader, HomeFooter } from "@/components/home-chrome";
import { Space_Grotesk } from "next/font/google";
import "@/styles/globals.css";
import Script from 'next/script';
import AnalyticsTracker from "@/components/AnalyticsTracker";
import ScrollToTop from "@/components/ScrollToTop";
import { GA_TRACKING_ID } from "@/lib/analytics";

const sansFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    template: '%s | Bleaum',
    default: 'Bleaum | Your business in a box',
  },
  metadataBase: new URL("https://bleaum.io"),
  description:
    "Bleaum is your business in a box: POS, invoicing, inventory, ordering, delivery and AI on one real-time platform.",
};

export const viewport: Viewport = {
  themeColor: "#020917",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // console.log('Environment variables loaded:', process.env);

  return (
    <html lang="en" suppressHydrationWarning className="motion-safe:scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body className={sansFont.className + " bg-[#020917] min-h-screen flex flex-col"}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <HomeHeader />
          <main id="main" className="sm:container mx-auto w-[90vw] h-auto scroll-smooth">
            {children}
          </main>
          <HomeFooter />
          <AnalyticsTracker />
          <ScrollToTop />
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
