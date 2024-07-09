export default async function Home() {
  const res = await fetch('http://localhost:3000/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  console.log(await res.json());

  // TODO: send a header in the POST request
  return <div></div>;
}
