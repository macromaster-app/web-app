'use client'

import { MacroNutrients } from '@/app/interfaces/macronutrient.interface'
import { Meal } from '@/app/interfaces/meal.interface'
import { MealsWithMacro } from '@/app/types/mealswithmacro'
import { Accordion, AccordionItem } from '@nextui-org/accordion'
import AccordionMacroInfo from './AccordionMacroInfo'
import MealsList from './MealsList'

type MealsProps = {
  meals: MealsWithMacro
}

const sumMacroNutrients = (mealsArray: Meal[]): MacroNutrients => {
  return mealsArray.reduce((acc, current) => {
    const { protein, carbohydrates, fat } = current.macroNutrients;

    return {
      protein: acc.protein + protein,
      carbohydrates: acc.carbohydrates + carbohydrates,
      fat: acc.fat + fat,
    };
  }, { protein: 0, carbohydrates: 0, fat: 0 });
}

const Meals = (props: MealsProps) => {
  return (
    <Accordion variant='splitted'>
        {Object.entries(props.meals).map(([mealName, value]: [string, Meal[]]) => {
          return (
            // textValue for accessibility reasons
            <AccordionItem textValue='Meals eaten' key={mealName} startContent={<AccordionMacroInfo title={mealName} macro={sumMacroNutrients(value)} />}>
              <MealsList meals={value} />
            </AccordionItem>
          )
        })}
    </Accordion>
  )
}

export default Meals