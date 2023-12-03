import { MacroNutrients } from "./macronutrient.interface";

export interface Meal {
    id: string;
    name: string;
    macroNutrients: MacroNutrients;
}