import { Card } from "@nextui-org/card";
import Meals from "./Meals";
import { Meal } from "@/app/interfaces/meal.interface";

type MealInputProps = {
    mealTitle: string
    meals: Meal[] | []
}

const MealInput = (props: MealInputProps) => {
  console.log(props.meals)
  return (
    <div className="p-4 w-full">
      <h1>{props.mealTitle}</h1>
        {/* <Meals mealName="Breakfast" meals={props.meals} /> */}
    </div>
  )
}

export default MealInput;