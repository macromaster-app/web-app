'use client'

import { Button } from "@/components/ui/button"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { useRouter } from "next/navigation"


const CalendarPagination = ({ pickedDate }: { pickedDate: Date | undefined }) => {
  const router = useRouter()

  const setPickedDate: (date: Date | undefined) => void = (date: Date | undefined) => {
    if (date) {
      const day = date.getDate()
      const month = date.getMonth() // Months indexed from 0 to 11
      const year = date.getFullYear()
      router.push(`?day=${day}&month=${month}&year=${year}`);
    }
  }

  return (
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
            defaultMonth={pickedDate as Date | undefined}
          />
        </PopoverContent>
    </Popover>
  )
}

export default CalendarPagination