'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  ArrowRight,
  ChevronDown,
  ShoppingCartIcon,
  GlobeIcon,
  GiftIcon,
  CreditCardIcon,
  TruckIcon,
  BarChart2Icon,
  ShieldCheckIcon,
  BoxesIcon,
  PlugIcon,
  BookOpenIcon,
  LandmarkIcon,
  UsersIcon,
  InfoIcon,
  BriefcaseIcon,
  LifeBuoyIcon,
  Building2Icon,
  NewspaperIcon,
} from 'lucide-react';
import { SheetLeftbar } from './leftbar';
import { SheetClose } from '@/components/ui/sheet';
import { ModeToggle } from './theme-toggle';

type NavItem = {
  title: string;
  href: string;
  children?: NavItem[];
  description?: string;
  icon?: React.ElementType;
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export const NAVLINKS: NavItem[] = [
  {
    title: 'Product',
    href: '/product',
    children: [
      {
        title: 'Grow your business',
        href: '#',
        children: [
          { title: 'Point of Sale', href: '/grow/point-of-sale', description: 'Retail POS for any size operation', icon: ShoppingCartIcon },
          { title: 'Ecommerce', href: '/grow/ecommerce', description: 'Branded mobile apps and web portals', icon: GlobeIcon },
          { title: 'Marketing & Loyalty', href: '/grow/marketing', description: 'Increase purchase frequency & reward regulars', icon: GiftIcon },
          { title: 'Payments', href: '/grow/payments', description: 'Boost AOV with cashless payments', icon: CreditCardIcon },
          { title: 'Delivery', href: '/grow/delivery', description: 'Drive efficient delivery operations', icon: TruckIcon },
        ],
      },
      {
        title: 'Simplify operations',
        href: '#',
        children: [
          { title: 'Reporting & Analytics', href: '/operations/reporting-analytics', description: 'Unified, customizable reporting & insights', icon: BarChart2Icon },
          { title: 'Automated Compliance', href: '/operations/automated-compilance', description: "Tools for retailers' intense regulatory needs", icon: ShieldCheckIcon },
          { title: 'Inventory Management', href: '/operations/inventory-management', description: 'Optimize spend, stock levels & minimize waste', icon: BoxesIcon },
          { title: 'Integrations', href: '/operations/integrations', description: 'Partners that help you run your business better', icon: PlugIcon },
        ],
      },
    ],
  },
  {
    title: 'Resources',
    href: '/resources',
    children: [
      { title: 'Blog', href: '/blog', description: 'Insights, news, and updates', icon: NewspaperIcon },
      { title: 'SOPs', href: '/resources/sops', description: 'Standard operating procedures', icon: BookOpenIcon },
      { title: 'State Laws', href: '/resources/state-laws', description: 'Cannabis regulations by state', icon: LandmarkIcon },
      { title: 'Industries', href: '/resources/Industries', description: 'Industries we serve', icon: Building2Icon },
      { title: 'Refer', href: '/resources/refer', description: 'Refer a business and earn rewards', icon: UsersIcon },
    ],
  },
  {
    title: 'Company',
    href: '/company',
    children: [
      { title: 'About', href: '/company/about', description: 'Learn more about us', icon: InfoIcon },
      { title: 'Careers', href: '/company/careers', description: 'Join our team', icon: BriefcaseIcon },
      { title: 'Support', href: '/company/support', description: 'Contact our support team', icon: LifeBuoyIcon },
    ],
  },
];

export const trackDemoClick = () =>
  window.gtag?.('event', 'click', { event_category: 'Button', event_label: 'Demo' });

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-ui-line/10 bg-ui-surface">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-1 md:gap-10">
          <SheetLeftbar />
          <Logo />
          <nav aria-label="Main" className="hidden md:block">
            <NavMenu />
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <Link
            href="/demo"
            onClick={trackDemoClick}
            className="group inline-flex items-center gap-2 rounded-full bg-brand-coral px-4 py-2.5 text-sm font-semibold text-brand-navy shadow-sm shadow-brand-coral/30 transition-colors duration-200 hover:bg-brand-peach focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ui-fg focus-visible:ring-offset-2 focus-visible:ring-offset-ui-surface sm:px-5"
          >
            Book a demo
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export function Logo({ variant = 'auto' }: { variant?: 'auto' | 'light' }) {
  const logo = (src: string, className: string) => (
    <Image src={src} alt="Bleaum" width={512} height={186} priority className={`h-9 w-auto ${className}`} />
  );
  return (
    <Link href="/" aria-label="Bleaum home" className="flex flex-none items-center">
      {variant === 'light' ? (
        logo('/bleaum-white.png', '')
      ) : (
        <>
          {logo('/bleaum.png', 'dark:hidden')}
          {logo('/bleaum-white.png', 'hidden dark:block')}
        </>
      )}
    </Link>
  );
}

const isActive = (item: NavItem, pathname: string): boolean =>
  (item.href !== '#' && (pathname === item.href || pathname.startsWith(item.href + '/'))) ||
  !!item.children?.some((child) => isActive(child, pathname));

export function NavMenu({ isSheet = false }: { isSheet?: boolean }) {
  const [open, setOpen] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => setOpen(null), [pathname]);

  useEffect(() => {
    if (!open || isSheet) return;
    const onPointer = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(null);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(null);
    };
    document.addEventListener('mousedown', onPointer);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onPointer);
      document.removeEventListener('keydown', onKey);
    };
  }, [open, isSheet]);

  return (
    <div ref={ref} className={isSheet ? 'flex flex-col' : 'flex items-center gap-1'}>
      {NAVLINKS.map((item) => {
        const isOpen = open === item.title;
        const isMega = !!item.children?.some((child) => child.children);
        const groups = isMega ? item.children! : [{ title: '', href: '#', children: item.children }];
        const toggle = () => setOpen(isOpen ? null : item.title);

        if (isSheet) {
          return (
            <div key={item.title} className="border-b border-white/10">
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={toggle}
                className="flex w-full items-center justify-between py-4 text-lg font-semibold text-white"
              >
                {item.title}
                <ChevronDown className={`h-5 w-5 text-brand-mist transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
              </button>
              {isOpen && (
                <ul className="pb-3">
                  {groups.flatMap((g) => g.children ?? []).map((link) => {
                    const Icon = link.icon;
                    return (
                      <li key={link.href}>
                        <SheetClose asChild>
                          <Link
                            href={link.href}
                            className="flex items-center gap-3 rounded-lg px-2 py-2.5 text-[15px] text-white/80 transition-colors hover:bg-white/5 hover:text-white"
                          >
                            {Icon && <Icon className="h-5 w-5 flex-none text-brand-peach" />}
                            {link.title}
                          </Link>
                        </SheetClose>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          );
        }

        return (
          <div key={item.title} className="relative">
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={toggle}
              className={`inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-coral ${
                isOpen || isActive(item, pathname)
                  ? 'bg-ui-line/5 text-ui-fg'
                  : 'text-ui-body hover:bg-ui-line/5 hover:text-ui-fg'
              }`}
            >
              {item.title}
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            <div
              className={`absolute left-0 top-full mt-3 origin-top-left rounded-2xl border border-ui-line/10 bg-ui-surface p-2 shadow-xl shadow-brand-navy/10 transition duration-200 ${
                isMega ? 'w-[640px]' : 'w-80'
              } ${isOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-1 opacity-0'}`}
            >
              <div className={isMega ? 'grid grid-cols-2 gap-1' : ''}>
                {groups.map((group) => (
                  <div key={group.title || item.title}>
                    {group.title && (
                      <p className="px-3 pb-1 pt-3 text-xs font-semibold uppercase tracking-wider text-ui-subtle">{group.title}</p>
                    )}
                    <ul>
                      {group.children?.map((link) => {
                        const Icon = link.icon;
                        return (
                          <li key={link.href}>
                            <Link
                              href={link.href}
                              onClick={() => setOpen(null)}
                              className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-ui-bg focus-visible:bg-ui-bg focus-visible:outline-none"
                            >
                              {Icon && (
                                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-ui-tint text-ui-accent transition-colors group-hover:bg-brand-coral group-hover:text-brand-navy">
                                  <Icon className="h-[18px] w-[18px]" />
                                </span>
                              )}
                              <span>
                                <span className="block text-sm font-semibold text-ui-fg">{link.title}</span>
                                {link.description && (
                                  <span className="mt-0.5 block text-[13px] leading-snug text-ui-subtle">{link.description}</span>
                                )}
                              </span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
