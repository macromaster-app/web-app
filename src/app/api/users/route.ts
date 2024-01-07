import { prisma } from './../prisma';

export async function GET(request: Request): Promise<Response> {
  const users = await prisma.users.findMany();

  const responseBody = JSON.stringify(users);
  const body = new TextEncoder().encode(responseBody);

  return new Response(body, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}