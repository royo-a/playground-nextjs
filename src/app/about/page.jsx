'use client';
import { useEffect } from 'react';
import Link from 'next/link';

export default function About() {
  const elements = [
    {
      id: 1,
      name: 'section1',
    },
    {
      id: 2,
      name: 'section2',
    },
    {
      id: 3,
      name: 'section3',
    },
    {
      id: 4,
      name: 'section4',
    },
  ];

  useEffect(() => {
    console.log('About page useEffect');
  }, []);

  return (
    <div>
      <div>About page</div>
      <Link href="/" className="text-blue-500 underline">
        Home
      </Link>
      <div>
        {elements.map((element) => (
          <div key={element.id} id={element.id} className="bg-amber-100 py-52">
            {element.name}
          </div>
        ))}
      </div>
    </div>
  );
}
