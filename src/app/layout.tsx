import Provider from '@/components/Provider';
import SessionProvider from '@/components/SessionProvider';
import type { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { Inter } from 'next/font/google';
import TRPCProvider from './_trpc/TRPCProvider';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'MacroMaster',
	description:
		'Achieve your fitness goals effortlessly, ensuring a personalized and enjoyable path to a healthier lifestyle.',
	title: 'MacroMaster',
	description:
		'Achieve your fitness goals effortlessly, ensuring a personalized and enjoyable path to a healthier lifestyle.',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	const session = await getServerSession();

	return (
		<html lang='en'>
			<body className={inter.className}>
				<SessionProvider session={session}>
					<Provider>
						<TRPCProvider>{children}</TRPCProvider>
					</Provider>
				</SessionProvider>
			</body>
		</html>
	);
}
