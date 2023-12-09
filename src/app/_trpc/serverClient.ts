import { httpBatchLink } from '@trpc/client';
import { appRouter } from '@/server';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const serverClient = appRouter.createCaller({
    links: [
        httpBatchLink({
            url: `${apiUrl}/api/trpc`,
        }),
    ]
})