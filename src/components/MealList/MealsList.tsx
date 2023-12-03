import { MacroNutrient } from '@/app/interfaces/macronutrient.interface'
import { Meal } from '@/app/interfaces/meal.interface'
import React from 'react'

type MealsListProps = {
    meals: Meal[]
}

const MealsList = (props: MealsListProps) => {
  return (
    <ul>
        {props.meals.map((meal) => {
            return (
            <li>
                <span>
                {meal.name}
                </span>
                <ul className='flex gap-4 text-sm'>
                    {meal.macroNutrients.map((macroNutrient: MacroNutrient) => {
                    return (
                        <div className='flex gap-2'>
                        <span>{macroNutrient.name.charAt(0)}</span>
                        <span>{macroNutrient.amount}</span>
                        </div>
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