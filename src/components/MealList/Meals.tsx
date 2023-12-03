'use client'

import { MacroNutrient } from '@/app/interfaces/macronutrient.interface'
import { Meal } from '@/app/interfaces/meal.interface'
import { MealName } from '@/app/types/mealname'
import { Accordion, AccordionItem } from '@nextui-org/accordion'
import AccordionMacroInfo from './AccordionMacroInfo'
import MealsList from './MealsList'

type MealsProps = {
  mealName: MealName
  meals: Meal[]
  macro: MacroNutrient[]
}

const Meals = (props: MealsProps) => {
  return (
    <Accordion variant='splitted'>
          <AccordionItem startContent={<AccordionMacroInfo title={props.mealName} macro={props.macro} />}>
              <MealsList meals={props.meals} />
          </AccordionItem>
    </Accordion>
  )
}

export default Meals