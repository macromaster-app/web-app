import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient, recipes } from '@prisma/client';

const prisma = new PrismaClient();

interface CreateRecipeRequest {
  title: string;
  submitted: string;
  description: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ recipes?: recipes[]; message?: string; recipe?: recipes }>,
) {
  if (req.method === 'GET') {
    try {
      const recipes = await prisma.recipes.findMany();
      res.status(200).json({ recipes });
    } catch (error) {
      console.error('Error fetching recipes:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else if (req.method === 'POST') {
    const { title, submitted, description } = req.body as CreateRecipeRequest;
    try {
      const recipe = await prisma.recipes.create({
        data: {
          title,
          submitted,
          description,
        },
      });
      res.status(200).json({ recipe });
    } catch (error) {
      console.error('Error creating recipe:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }

  await prisma.$disconnect();
}
