import MealFinderForm from "@/components/MealFinder/mealFinderForm";
import MealFinderList from "@/components/MealFinder/mealList";

const exampleMealData = [
  {
    id: 1,
    name: "Spaghetti Bolognese",
    ingredients: ["spaghetti", "tomato sauce", "ground beef"],
  },
  {
    id: 2,
    name: "Chicken Stir Fry",
    ingredients: ["chicken", "vegetables", "soy sauce"],
  },
];

export default function MealFinder() {
  return (
    <div className="my-10 mx-10">
      <h1 className="text-4xl font-bold">Meal Finder</h1>
      <p className="mt-2 text-lg ">
        Find meals based on the ingredients you have in your fridge
      </p>
      <div className="mt-6">
        <MealFinderForm />
      </div>
    </div>
  );
}
