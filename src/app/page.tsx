import MealList from '@/components/MealList';

export default function Home() {
	return (
		<main className='flex-1 flex-col items-center justify-center gap-6'>
			<MealList />
		</main>
	);
}
