'use client';

import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';

const links = [
  { name: 'Home', link: '/' },
  { name: 'About', link: '/about' },
  { name: 'Contact', link: '/contact' },
];

export default function Home() {
  const searchParams = useSearchParams();
  console.log(searchParams.get('link'));
  console.log('Hello my name is ARnab');

  return (
    <div>
      {links.map((link) => (
        <Link
          className="underline text-blue-500 mr-1"
          key={link.name}
          href={`/?link=${link.name}`}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}
