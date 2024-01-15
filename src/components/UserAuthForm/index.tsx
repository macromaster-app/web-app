'use client';
import { cn } from '@/lib/utils';
import { HTMLAttributes, SyntheticEvent, useState } from 'react';
import { Icons } from '../Icons';
import Login from '../Login';
import Register from '../Register';
import { Button } from '../ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { signIn } from 'next-auth/react';

interface UserAuthFormProps extends HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
	const [isLoading, setIsLoading] = useState<boolean>(false);

	async function onSubmit(event: SyntheticEvent) {
		event.preventDefault();
		setIsLoading(true);

		setTimeout(() => {
			setIsLoading(false);
		}, 3000);
	}

	const googleSignIn = async () => {
		setIsLoading(true);
		signIn('google', {
			callbackUrl: `${window.location.origin}/tracker`,
		});
	};

	return (
		<div className={cn('grid gap-6', className)} {...props}>
			<Tabs defaultValue='register' className='w-[400px]'>
				<TabsList className='grid w-full grid-cols-2'>
					<TabsTrigger value='login'>Log In</TabsTrigger>
					<TabsTrigger value='register'>Register</TabsTrigger>
				</TabsList>
				<TabsContent value='login'>
					<Login />
				</TabsContent>
				<TabsContent value='register'>
					<Register />
				</TabsContent>
			</Tabs>
			<div className='relative'>
				<div className='absolute inset-0 flex items-center'>
					<span className='w-full border-t' />
				</div>
				<div className='relative flex justify-center text-xs uppercase'>
					<span className='bg-background px-2 text-muted-foreground'>Or continue with</span>
				</div>
			</div>
			<Button variant='outline' type='button' disabled={isLoading} onClick={() => googleSignIn()}>
				{isLoading ? (
					<Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
				) : (
					<Icons.google className='mr-2 h-4 w-4' />
				)}{' '}
				Google
			</Button>
		</div>
	);
}

export default UserAuthForm;
