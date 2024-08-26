import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Link href={'/contacts'} className="underline text-blue-500">
        Contacts
      </Link>
      <p></p>
      <Link href={'/dashboard'} className="underline text-blue-500">
        Dashboard
      </Link>
      <p>Hello! This is the home page</p>
    </div>
  );
}
