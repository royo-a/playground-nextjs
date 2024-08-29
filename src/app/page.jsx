import Link from 'next/link';

export default function Home() {
  const links = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about#3' },
    { name: 'Contact', link: '/contact' },
  ];

  return (
    <div>
      {links.map((link) => (
        <Link
          className="text-blue-500 underline"
          key={link.name}
          href={link.link}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}
