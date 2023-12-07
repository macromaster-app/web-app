import CalendarPagination from "./CalendarPagination";
import CarouselPagination from "./CarouselPagination";

type SearchParams = {
  day?: string;
  month?: string;
  year?: string;
};

const DatePicker = (searchParams: SearchParams) => {

  const transformPropsDate = () => {
    const currentDate = new Date();
    const { day = currentDate.getDate().toString(), month = currentDate.getMonth().toString(), year = currentDate.getFullYear().toString() } = searchParams || {};
    
    const parsedDay = parseInt(day, 10);
    const parsedMonth = parseInt(month, 10);
    const parsedYear = parseInt(year, 10);

    const pickedDate = new Date(parsedYear, parsedMonth, parsedDay);
    const daysInMonth = new Date(parsedYear, parsedMonth + 1, 0).getDate();

    return { pickedDate, daysInMonth, day: parsedDay };
  };
  transformPropsDate()
  const { pickedDate, daysInMonth, day } = transformPropsDate();

  return (
    <div className="flex gap-4 justify-center items-center">
      <CalendarPagination pickedDate={pickedDate} />
      <CarouselPagination 
        daysInMonth={daysInMonth} 
        pickedDate={pickedDate}
        day={day}
      />
    </div>
  )
}

export default DatePicker