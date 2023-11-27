import React from 'react'
import {Pagination, PaginationItem, PaginationCursor} from "@nextui-org/react";
import { revalidatePath } from 'next/cache';
import { Calendar } from 'lucide-react';
import DatePicker from '../DatePicker';

const currentMonth = new Date().getMonth();
const currentYear = new Date().getFullYear();
const currentDay = new Date().getDate();

type Meal = any;

const fetchMeals = async ({ day = currentDay }) => {
    'use server';

    const results: Promise<Meal> = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                meals: [
                    {
                        id: 1,
                        name: 'Breakfast',
                        time: '8:00 AM',
                        calories: 400,
                        protein: 20,
                        carbs: 30,
                        fat: 20
                    },
                    {
                        id: 2,
                        name: 'Lunch',
                        time: '12:00 PM',
                        calories: 600,
                        protein: 30,
                        carbs: 50,
                        fat: 20
                    },
                    {
                        id: 3,
                        name: 'Dinner',
                        time: '6:00 PM',
                        calories: 800,
                        protein: 40,
                        carbs: 60,
                        fat: 20
                    }
                ]
            })
        }, 1000)

        revalidatePath('/tracker')

        return {
            data: results
        }
    });
}

const currentHref = "month=11&day=24"

const changeHrefBasedOnPagination = (href: string) => {
    const hrefArray = href.split('&');
    const day = hrefArray[1].split('=')[1];
    const month = hrefArray[0].split('=')[1];
    const newHref = `month=${month}&day=${day}`;
    return newHref;
}

const changeDate = (date: Date) => {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() + 1);
    return newDate;
}


const MealList = () => {
    
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const date = new Date()
    return (
        <>
            {/* <Pagination showShadow color='primary' showControls total={daysInMonth} initialPage={currentDay} siblings={3}/> */}
        </>
    )
}

export default MealList