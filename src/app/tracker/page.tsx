'use server';

import DatePicker from '@/components/DatePicker';

export type PageProps = {
  params: { [key: string]: string | string[] | undefined };
  searchParams?: {
    day?: string;
    month?: string;
    year?: string;
  };
};

export type FetchFeedType = typeof fetchFeed;

export const getDefaultPageParams = () => {
  const currentDate = new Date();
  const defaultPageParams = {
      day: currentDate.getDate().toString(),
      month: (currentDate.getMonth()).toString(),
      year: currentDate.getFullYear().toString(),
  };
  return defaultPageParams;
}

const fetchFeed = async (day: string): Promise<any> => {
  'use server'
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${day}`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch data for day ${day}`);
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

const Tracker = async (props: PageProps) => {
  const feed = await fetchFeed(props.searchParams?.day || getDefaultPageParams().day);
  const searchParams = {
    day: props.searchParams?.day || getDefaultPageParams().day,
    month: props.searchParams?.month || getDefaultPageParams().month,
    year: props.searchParams?.year || getDefaultPageParams().year,
  } 

  return (
    <div className="space-y-6 p-6">
      <DatePicker {...searchParams} />
      <div>
        Data:
        {feed.body}
      </div>
    </div>
  );
};

export default Tracker;