<<<<<<< HEAD
import AuthenticationPage from "./welcome/page";

export default function Home() {
  return (
    <main className="flex-1 flex-col items-center justify-center gap-6">
      <AuthenticationPage />
    </main>
  );
=======
import MealList from '@/components/MealList';

export default function Home() {
	return (
		<main className='flex-1 flex-col items-center justify-center gap-6'>
			<MealList />
		</main>
	);
>>>>>>> 0f21d50 (fix(register): delete lastName and change firstName to username)
}
