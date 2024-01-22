import DatePicker from '@/components/DatePicker';
import UserGreetings from '@/components/UserGreetings';
import { serverClient } from '../../_trpc/serverClient';
import { Navbar } from '@/components/Navbar';
import MealList from '@/components/MealList';

export type PageProps = {
	params: { [key: string]: string | string[] | undefined };
	searchParams?: {
		day?: string;
		month?: string;
		year?: string;
	};
};

const getDefaultPageParams = () => {
	const currentDate = new Date();
	const defaultPageParams = {
		day: currentDate.getDate().toString(),
		month: currentDate.getMonth().toString(),
		year: currentDate.getFullYear().toString(),
	};
	return defaultPageParams;

const Tracker = async (props: PageProps) => {
	const todos = await serverClient.getTodos();
	const feed = await fetchFeed(props.searchParams?.day || getDefaultPageParams().day);
	const searchParams = {
		day: props.searchParams?.day || getDefaultPageParams().day,
		month: props.searchParams?.month || getDefaultPageParams().month,
		year: props.searchParams?.year || getDefaultPageParams().year,
	};

	return (
		<>
			<Navbar />
			<div className='flex items-start m-6'>
				<div className='flex flex-col items-start space-y-6'>
					<UserGreetings />
					<DatePicker {...searchParams} />
					<MealList />
				</div>
			</div>
		</>
	);
};

export default Tracker;
