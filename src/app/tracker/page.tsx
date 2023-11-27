'use server';

import React from 'react';
import { revalidatePath } from 'next/cache';
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

const fetchFeed = async (date = new Date()) => {
	'use server';

  // TODO - fetch meals from database

  const results = "meals"

	revalidatePath('/');

	return {
		data: results,
	};
};

const Tracker = async (props: PageProps) => {
  const searchParams = {
    day: props.searchParams?.day || getDefaultPageParams().day,
    month: props.searchParams?.month || getDefaultPageParams().month,
    year: props.searchParams?.year || getDefaultPageParams().year,
  } 

  return (
    <div className="space-y-6 p-6">
      <DatePicker {...searchParams} />
    </div>
  );
};

export default Tracker;