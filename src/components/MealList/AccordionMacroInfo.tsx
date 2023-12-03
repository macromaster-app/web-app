import { MacroNutrient } from '@/app/interfaces/macronutrient.interface'
import { cn } from '@/lib/utils'
import React from 'react'

type AccordionMacroInfoProps = {
    title: string
    macro: MacroNutrient[]
  }

const AccordionMacroInfo = (props: AccordionMacroInfoProps) => {
    return (
      <div className='flex flex-col items-start'>
        <h1>{props.title}</h1>
        <ul className='flex w-full gap-4'>
          {props.macro.map((macroNutrient) => (
            <li key={macroNutrient.name} className={cn('flex justify-center text-primary font-semibold gap-2 w-full', {
              'text-protein': macroNutrient.name === 'Protein',
              'text-carbs': macroNutrient.name === 'Carbohydrates'
            })}>
              <span>{macroNutrient.name.charAt(0)}</span>
              <span>{macroNutrient.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  }

export default AccordionMacroInfo