import { MealName } from '@/app/types/mealname';
import { MealCategory } from '@/app/interfaces/mealcategory.interface';
import MealInput from './MealInput';
import Meals from './Meals';
import { MacroNutrient } from '@/app/interfaces/macronutrient.interface';

type MealsWithMacro = Record<MealName, MealCategory>;

const macro: MacroNutrient[] = [
  { name: 'Protein', amount: 120 },
  { name: 'Carbohydrates', amount: 400 },
  { name: 'Fat', amount: 80 },
]

const mealsWithMacro: MealsWithMacro = {
  'Breakfast': {
    meals: [
        {
          id: '1',
          name: 'Chicken',
          macroNutrients: [
            { name: 'Protein', amount: 120 },
            { name: 'Carbohydrates', amount: 400 },
            { name: 'Fat', amount: 80 },
          ],
        },
      ],
  },
  'Brunch': {
    meals: [
        {
          id: '1',
          name: 'Chicken',
          macroNutrients: [
            { name: 'Protein', amount: 120 },
            { name: 'Carbohydrates', amount: 400 },
            { name: 'Fat', amount: 80 },
          ],
        },
      ],
  },
  'Lunch': {
    meals: [],
  },
  'Snack': {
    meals: [],
  },
  'Dinner': {
    meals: [],
  },
};

const MealList = () => {
    return (
        <div className='flex w-full h-screen justify-center items-center'>
            <div className='flex justify-center items-center w-[25%]'>
                <ul className='flex flex-col w-full gap-4'>
                    {Object.keys(mealsWithMacro).map((mealName: string) => (
                        <li key={mealName}>
                            <Meals mealName={mealName as MealName} meals={mealsWithMacro[mealName as MealName].meals} macro={macro} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MealList;
