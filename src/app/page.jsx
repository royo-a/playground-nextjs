const links = [
  { name: 'Home', link: '/' },
  { name: 'About', link: '/about#3' },
  { name: 'Contact', link: '/contact' },
];
export default function Home() {
  const {} = useForm({
    defaultValues: {
      firstName: '',
    },
  });

  return (
    <form>
      <input type="text" placeholder="First Name" className="border" />
      <br />
      <input type="submit" className="border bg-green-300" />
    </form>
  );
}
