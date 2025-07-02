'use client';

import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import { LinkedinIcon, TwitterIcon, InstagramIcon } from 'lucide-react';

// Copy of NAVLINKS structure from navbar.tsx
const NAVBAR_LINKS = [
  {
    title: "Product",
    links: [
      { title: "Point of Sale", href: "/grow/point-of-sale" },
      // { title: "Ecommerce", href: "/grow/ecommerce" },
      // { title: "Marketing & Loyalty", href: "/grow/marketing" },
      { title: "Payments", href: "/grow/payments" },
      { title: "Delivery", href: "/grow/delivery" },
      // { title: "Reporting & Analytics", href: "/operations/reporting-analytics" },
      { title: "Inventory Management", href: "/operations/inventory-management" },
      // { title: "Integrations", href: "/operations/integrations" },
    ],
  },
  {
    title: "Resources",
    links: [
      { title: "Blog", href: "/resources/blog" },
      { title: "SOPs", href: "/resources/sops" },
      { title: "State Laws", href: "/resources/state-laws" },
      { title: "Refer", href: "/resources/refer" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About", href: "/company/about" },
      { title: "Careers", href: "/company/careers" },
      { title: "Support", href: "/company/support" },
    ],
  },
  // {
  //   title: "Help and Support",
  //   links: [
  //     { title: "Help Guide", href: "/help/guide" },
  //     { title: "FAQ", href: "/help/faq" },
  //     { title: "Printer Help", href: "/help/printer" },
  //     { title: "API Documentation", href: "/help/api-docs" },
  //   ],
  // },
];

const socialLinks = [
  { name: "LinkedIn", icon: LinkedinIcon, href: "https://www.linkedin.com/company/bleaum/" },
  { name: "Twitter", icon: TwitterIcon, href: "https://x.com/bleaumwithus" },
  { name: "Instagram", icon: InstagramIcon, href: "https://www.instagram.com/bleaumwithus/" },
];

export function Footer() {
  return (
    <footer className="w-full relative overflow-hidden bg-background border-t border-white/10">
      {/* Decorative Elements */}
      {/* <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div> */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-[#051530] via-white/5 to-transparent"></div> */}
      
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 relative">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 md:gap-10">
          {/* Brand Section */}
          <div className="mb-8 md:mb-0 lg:w-1/2">
            <div className="mb-6">
              <Image 
                src="/bleaum White.png"
                alt="Bleaum Logo"
                width={130}
                height={35}
                className="w-[130px]"
                priority
              />
            </div>
            <p className="text-white/70 text-sm mb-6 max-w-sm leading-relaxed">
              Empowering businesses with innovative solutions for growth and success.
            </p>
            <div className="flex space-x-5">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-white/70 hover:text-white transition-colors duration-300 hover:scale-110 transform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Links Sections - right aligned on desktop */}
          <div className="flex flex-col sm:flex-row lg:justify-end lg:items-start gap-8 lg:gap-x-12 lg:gap-y-12 w-full lg:w-1/2">
            {NAVBAR_LINKS.map((section) => (
              <div key={section.title} className="mb-8 md:mb-0 min-w-[140px]">
                <h4 className="text-base font-semibold mb-4 capitalize bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.title}>
                      <Link
                        href={link.title === "Blog" ? "/blog" : link.href}
                        className="text-white/70 hover:text-white transition-colors duration-300 text-sm inline-block hover:translate-x-1"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 relative">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm text-center sm:text-left">
              © {new Date().getFullYear()} Bleaum. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/terms" className="text-white/50 hover:text-white text-sm transition-colors duration-300">
                Terms
              </Link>
              <Link href="/privacy" className="text-white/50 hover:text-white text-sm transition-colors duration-300">
                Privacy
              </Link>
              <Link href="/cookies" className="text-white/50 hover:text-white text-sm transition-colors duration-300">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}