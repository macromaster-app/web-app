"use client"

import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"
import { revalidatePath } from "next/cache"

type SearchParams = {
  day?: string;
  month?: string;
  year?: string;
};

const DatePicker = (searchParams: SearchParams) => {
  const router = useRouter()

  const transformPropsDate = () => {
    if (searchParams) {
      const day = Number(searchParams.day)
      const month = Number(searchParams.month)
      const year = Number(searchParams.year)
      console.log("DAY: ", day, "MONTH: ", month, "YEAR: ", year)
      return new Date(year, month, day) as Date | number;
    } else {
      const dayToday = new Date().getDate()
      const monthToday = new Date().getMonth();
      const yearToday = new Date().getFullYear()
      const today = new Date(yearToday, monthToday, dayToday)
      return today as Date | number;
    }
  }

  const setPickedDate = (date: Date | undefined) => {
    if (date) {
      const day = date.getDate()
      const month = date.getMonth() // Months indexed from 0 to 11
      const year = date.getFullYear()
      router.push(`?day=${day}&month=${month}&year=${year}`);
      // window.location.href = `?day=${day}&month=${month}&year=${year}`
    }
  }

  transformPropsDate()
  const pickedDate = transformPropsDate()
  console.log("PICKED DATE: ", pickedDate.toString())

  return (
    <div>
      <h1></h1>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-[280px] justify-start text-left font-normal",
              !pickedDate && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {pickedDate ? format(pickedDate, "PPP") : 'Select a date'}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={pickedDate as Date | undefined}
            onSelect={setPickedDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
      {/* <Pagination /> */}
    </div>
  )
}

export default DatePicker