import { prisma } from './../prisma';

export async function GET(request: Request): Promise<Response> {
  const recipes = await prisma.recipes.findMany();

  const responseBody = JSON.stringify(recipes);
  const body = new TextEncoder().encode(responseBody);

  return new Response(body, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}