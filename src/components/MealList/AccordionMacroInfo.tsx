import { MacroNutrients } from '@/app/interfaces/macronutrient.interface'
import { cn } from '@/lib/utils'

type AccordionMacroInfoProps = {
    title: string
    macro: MacroNutrients
  }

const AccordionMacroInfo = (props: AccordionMacroInfoProps) => {
    return (
      <div className='flex flex-col items-start'>
        <h1>{props.title}</h1>
        <ul className='flex w-full gap-4'>
          {Object.entries(props.macro).map(([mealName, value]: [string, number]) => (
            <li key={mealName} className={cn('flex justify-center text-primary font-semibold gap-2 w-full', {
              'text-protein': mealName === 'protein',
              'text-carbs': mealName === 'carbohydrates'
            })}>
              <span>{mealName.charAt(0).toUpperCase()}</span>
              <span>{value}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  }

export default AccordionMacroInfo