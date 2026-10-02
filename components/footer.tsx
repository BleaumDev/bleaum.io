import Link from 'next/link';
import { LinkedinIcon, TwitterIcon, InstagramIcon, Mail, ArrowUpRight } from 'lucide-react';
import { Logo } from './navbar';

const FOOTER_LINKS = [
  {
    title: 'Product',
    links: [
      { title: 'Point of Sale', href: '/grow/point-of-sale' },
      { title: 'Payments', href: '/grow/payments' },
      { title: 'Delivery', href: '/grow/delivery' },
      { title: 'Inventory Management', href: '/operations/inventory-management' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { title: 'Blog', href: '/blog' },
      { title: 'SOPs', href: '/resources/sops' },
      { title: 'State Laws', href: '/resources/state-laws' },
      { title: 'Refer', href: '/resources/refer' },
    ],
  },
  {
    title: 'Company',
    links: [
      { title: 'About', href: '/company/about' },
      { title: 'Careers', href: '/company/careers' },
      { title: 'Support', href: '/company/support' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { title: 'Terms', href: '/terms' },
      { title: 'Privacy', href: '/privacy' },
      { title: 'Cookies', href: '/cookies' },
    ],
  },
];

const SOCIAL_LINKS = [
  { name: 'LinkedIn', icon: LinkedinIcon, href: 'https://www.linkedin.com/company/bleaum/' },
  { name: 'X (Twitter)', icon: TwitterIcon, href: 'https://x.com/bleaumwithus' },
  { name: 'Instagram', icon: InstagramIcon, href: 'https://www.instagram.com/bleaumwithus/' },
];

export function Footer() {
  return (
    <footer className="w-full bg-brand-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:px-8 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-4">
          <Logo variant="light" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-brand-mist">
            Point-of-sale built for regulated retail — compliant, reliable, and ready to scale.
          </p>
          <a
            href="mailto:comms@bleaum.io"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-brand-peach"
          >
            <Mail className="h-4 w-4" />
            comms@bleaum.io
          </a>
          <div className="mt-6 flex gap-3">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-brand-mist transition-colors duration-200 hover:border-brand-coral hover:bg-brand-coral hover:text-brand-navy"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
          {FOOTER_LINKS.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-white">{section.title}</h3>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link.title}>
                    <Link href={link.href} className="text-sm text-brand-mist transition-colors duration-200 hover:text-white">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 sm:px-6 lg:px-8 text-sm text-brand-mist sm:flex-row">
          <p>© {new Date().getFullYear()} Bleaum. All rights reserved.</p>
          <Link href="/demo" className="inline-flex items-center gap-1 font-medium text-white transition-colors hover:text-brand-peach">
            See Bleaum in action <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
