export async function GET() {
  console.log('ㅇ');
  const res = await fetch('http://localhost:4000/users');
  const data = await res.json();
  console.log(data[0]);
  return Response.json({ data });
}