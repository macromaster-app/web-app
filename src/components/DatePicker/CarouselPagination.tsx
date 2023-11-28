'use client'

import { Pagination } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import React from 'react'

type CarouselPaginationProps = {
    daysInMonth: number;
    pickedDate?: Date;
    day?: number;
};

const CarouselPagination = ({ daysInMonth, pickedDate, day }: CarouselPaginationProps) => {
    
    const router = useRouter()

    const setPickedDay = (day: number) => {
        const month = pickedDate?.getMonth()
        const year = pickedDate?.getFullYear()
        router.push(`?day=${day}&month=${month}&year=${year}`);
    }
    
  return (
    <div>
        <Pagination showShadow color='primary' showControls total={daysInMonth} onChange={(day) => setPickedDay(day)} page={day} initialPage={day} siblings={3} />
    </div>
  )
}

export default CarouselPagination