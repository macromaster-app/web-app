import { publicProcedure, router } from './trpc';
import { z } from 'zod';
import { prisma } from './prismaClient';

export const appRouter = router({
	createUser: publicProcedure
		.input(
			z
				.object({
					email: z.string().email(),
					username: z.string(),
					password: z.string().min(8).max(40),
					confirmPassword: z.string(),
				})
				.refine(
					(data) => {
						return data.password === data.confirmPassword;
					},
					{
						message: 'Passwords do not match',
						path: ['confirmPassword'],
					}
				)
		)
		.mutation(async ({ input }) => {
			await prisma.users.create({
				data: {
					email: input.email,
					name: input.username,
					password: 'password',
				},
			});
			return {
				message: 'User created successfully',
			};
		}),
	changeUsername: publicProcedure
		.input(
			z.object({
				id: z.number(),
				username: z.string(),
			})
		)
		.mutation(async ({ input }) => {
			await prisma.users.update({
				where: { id: input.id },
				data: { name: input.username },
			});
			return {
				message: 'Username changed successfully',
			};
		}),
	changeEmail: publicProcedure
		.input(
			z.object({
				id: z.number(),
				newEmail: z.string().email(),
			})
		)
		.mutation(async ({ input }) => {
			await prisma.users.update({
				where: { id: input.id },
				data: { email: input.newEmail },
			});
			return {
				message: 'Email changed successfully',
			};
		}),
	changePassword: publicProcedure
		.input(
			z
				.object({
					id: z.number(),
					password: z.string().min(8).max(40),
					confirmPassword: z.string(),
				})
				.refine(
					(data) => {
						return data.password === data.confirmPassword;
					},
					{
						message: 'Passwords do not match',
						path: ['confirmPassword'],
					}
				)
		)
		.mutation(async ({ input }) => {
			await prisma.users.update({
				where: { id: input.id },
				data: { password: input.password },
			});
			return {
				message: 'Password changed successfully',
			};
		}),
	deleteUser: publicProcedure
		.input(
			z.object({
				id: z.number(),
			})
		)
		.mutation(async ({ input }) => {
			await prisma.users.delete({
				where: { id: input.id },
			});
			return {
				message: 'User deleted successfully',
			};
		}),
});

export type AppRouter = typeof appRouter;
