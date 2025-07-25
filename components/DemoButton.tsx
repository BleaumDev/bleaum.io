"use client";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export default function DemoButton({ children, className }: { children: React.ReactNode; className?: string }) {
  const router = useRouter();
  const handleClick = useCallback(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'Button',
        event_label: 'Demo',
      });
    }
    router.push('/demo');
  }, [router]);
  return (
    <button type="button" className={className} onClick={handleClick}>
      {children}
    </button>
  );
} 