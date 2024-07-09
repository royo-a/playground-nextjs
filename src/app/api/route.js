export async function GET(request) {
  return Response.json({ message: 'Data sent' });
}

export async function POST(request) {
  console.log(request.headers.get('Content-Type'));

  return Response.json({ message: 'Data sent from POST method' });
}
