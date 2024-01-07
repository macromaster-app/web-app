import { prisma } from './../prisma';

export async function GET(request: Request) {
  const users = await prisma.users.findMany();
  return {
    body: users,
  };
}