import { Meal } from '@/interfaces/meal.interface'

type MealsListProps = {
    meals: Meal[]
}

const MealsList = (props: MealsListProps) => {
  return (
    <ul>
        {props.meals.map((meal) => {
            return (
            <li key={meal.id}>
                <span>
                    {meal.name}
                </span>
                <ul className='flex gap-4 text-sm'>
                    {Object.entries(meal.macroNutrients).map((macroNutrient: [string, number]) => {
                        return (
                            <li key={macroNutrient[0]} className='flex gap-2'>
                                <span>{macroNutrient[0].charAt(0).toUpperCase()}</span>
                                <span>{macroNutrient[1]}</span>
                            </li>
                        )
                    })}
                </ul>
            </li>
            )
        })}
    </ul>
  )
}

export default MealsList