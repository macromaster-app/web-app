import DatePicker from '@/components/DatePicker';
import MealList from '@/components/MealList';
import UserGreetings from '@/components/UserGreetings';

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
}

const Tracker = async (props: PageProps) => {
	const searchParams = {
		day: props.searchParams?.day || getDefaultPageParams().day,
		month: props.searchParams?.month || getDefaultPageParams().month,
		year: props.searchParams?.year || getDefaultPageParams().year,
	};

	return (
		<>
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
