import { MacroNutrients } from '@/interfaces/macronutrient.interface';
import { Meal } from '@/interfaces/meal.interface';
import { MealName } from '@/types/mealname';
import Meals from './Meals';

type MealsWithMacro = Record<MealName, Meal[]>;

const macro: MacroNutrients = {
  protein: 120,
  carbohydrates: 400,
  fat: 80,
};

const macro2: MacroNutrients = {
  protein: 33,
  carbohydrates: 20,
  fat: 15
}

const mealsWithMacro: MealsWithMacro = {
  'Breakfast': [
    {
      id: '1',
      name: 'Chicken',
      macroNutrients: macro,
    },
  ],
  'Brunch':  [
        {
          id: '1',
          name: 'smol chicken',
          macroNutrients: macro2,
        },
        {
          id: '1',
          name: 'different smol chicken',
          macroNutrients: macro2,
        },
      ],
  'Lunch': [],
  'Snack': [],
  'Dinner': [],
};

const MealList = () => {
    return (
        <div className='flex w-full h-screen justify-center items-center'>
            <div className='flex justify-center items-center w-[25%]'>
                <Meals meals={mealsWithMacro} />
            </div>
        </div>
    );
};

export default MealList;
