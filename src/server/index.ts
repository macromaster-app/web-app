import { publicProcedure, router } from './trpc';
import prisma from './prismaClient';

export const appRouter = router({
	getTodos: publicProcedure.query(async () => {
		return [10, 20, 30];
	}),
	getMeals: publicProcedure.query(async () => {
		const meals = await prisma.recipes.findMany({ skip: 0, take: 10 });
		return meals;
	}),
});

export type AppRouter = typeof appRouter;
