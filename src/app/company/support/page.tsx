'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function CompanySupportRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/support');
  }, [router]);
  return null;
} 