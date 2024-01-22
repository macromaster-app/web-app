import React from "react";

const MealFinderList = ({ meals }: { meals: any }) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Your meal ideas</h2>
      {meals.length === 0 ? (
        <p className="">No meals found. Try adjusting your search.</p>
      ) : (
        <ul className="space-y-4">
          {meals.map((meal: any) => (
            <li
              key={meal.id}
              className="p-4 shadow-md rounded-md border-collapse border-2 "
            >
              <h3 className="text-lg font-semibold">{meal.strMeal}</h3>
              <p className="">
                Tags: {meal.tags ? meal.tags.join(", ") : "No tags"}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MealFinderList;
