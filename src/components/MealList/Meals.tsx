'use client';

import { MacroNutrients } from '@/interfaces/macronutrient.interface';
import { Meal } from '@/interfaces/meal.interface';
import { MealsWithMacro } from '@/types/mealswithmacro';
import { Accordion, AccordionItem } from '@nextui-org/accordion';
import AccordionMacroInfo from './AccordionMacroInfo';
import AddMealModal from './AddMealModal';
import MealsList from './MealsList';

type MealsProps = {
	meals: MealsWithMacro;
};

const sumMacroNutrients = (mealsArray: Meal[]): MacroNutrients => {
	return mealsArray.reduce(
		(acc, current) => {
			const { protein, carbohydrates, fat } = current.macroNutrients;

			return {
				protein: acc.protein + protein,
				carbohydrates: acc.carbohydrates + carbohydrates,
				fat: acc.fat + fat,
			};
		},
		{ protein: 0, carbohydrates: 0, fat: 0 }
	);
};

const Meals = (props: MealsProps) => {
	return (
		<Accordion variant='splitted'>
			{Object.entries(props.meals).map(([mealName, value]: [string, Meal[]]) => {
				return (
					// textValue for accessibility reasons
					<AccordionItem
						className='text-xl [&>section>div>ul>li]:mb-4'
						textValue='Meals eaten'
						key={mealName}
						startContent={
							<div className='flex items-center gap-4'>
								<AddMealModal />
								<AccordionMacroInfo title={mealName} macro={sumMacroNutrients(value)} />
							</div>
						}>
						<MealsList meals={value} />
					</AccordionItem>
				);
			})}
		</Accordion>
	);
};

export default Meals;
