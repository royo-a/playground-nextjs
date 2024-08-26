'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  useEffect(() => {
    console.log('Use effect inside dashboard page');
  }, []);

  return (
    <div>
      <Link href={'/'} className="underline text-blue-500">
        Home
      </Link>
      <p>This is contact page</p>
    </div>
  );
}
