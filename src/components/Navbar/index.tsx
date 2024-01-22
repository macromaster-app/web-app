'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Moon, Sun, Menu } from 'lucide-react';
import { Avatar } from '@nextui-org/react';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useRouter } from 'next/navigation';
import Preferences from '../Preferences';

export const Navbar = () => {
	const router = useRouter();
	const { theme, setTheme } = useTheme();
	const session = useSession();
	const routes = [
		{
			href: '/tracker',
			label: 'Tracker',
		},
		{
			href: '/meal-finder',
			label: 'Meal Finder',
		},
	];

	return (
		<header className='sm:flex sm:justify-between py-1 px-4 border-b'>
			{/* <div className="mx-auto w-full max-w-7xl"> */}
			<div className='relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full'>
				<div
					className='flex items-center hover:cursor-pointer'
					onClick={() => router.push('/welcome')}>
					{/* <Sheet>
						<SheetTrigger>
							<Menu className='h-6 md:hidden w-6 mr-4' />
						</SheetTrigger>
						<SheetContent>
							<div className='h-6 md:hidden w-6'>
								<nav className='flex flex-col gap-4'>
									{routes.map((route, i) => (
										<Link key={i} href={route.href} className='block px-2 py-1 text-lg'>
											{route.label}
										</Link>
									))}
								</nav>
							</div>
						</SheetContent>
						<SheetContent side='left' className='w-[300px] sm:w-[400px]'>
							<nav className='flex flex-col gap-4'>
								{routes.map((route, i) => (
									<Link key={i} href={route.href} className='block px-2 py-1 text-lg'>
										{route.label}
									</Link>
								))}
							</nav>
						</SheetContent>
					</Sheet> */}
					<Image src='/favicon.ico' alt='macromaster' width={28} height={28} />
					<h1 className='text-xl font-bold ml-4 '>MacroMaster</h1>
				</div>
				<nav className='mx-6  items-center space-x-4 lg:space-x-6 hidden md:block'>
					{routes.map((route, i) => (
						<Link key={i} href={route.href} className='text-base font-medium transition-colors'>
							{route.label}
						</Link>
					))}
				</nav>
				<div className='flex items-center'>
					<Button
						variant='ghost'
						size='icon'
						aria-label='Toggle Theme'
						className='mr-6'
						onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
						<Sun className='h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
						<Moon className='absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
						<span className='sr-only'>Toggle Theme</span>
					</Button>

					<DropdownMenu>
						<DropdownMenuTrigger>
							<Avatar src={session?.data?.user?.image || ''} size='md' />
						</DropdownMenuTrigger>
						<DropdownMenuContent>
							<DropdownMenuItem>
								<button onClick={() => signOut({ callbackUrl: window.location.origin })}>
									Logout
								</button>
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</div>
		</header>
	);
};
