// Import necessary dependencies
"use client";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import MealFinderList from "@/components/MealFinder/mealList";

const formSchema = z.object({
  ingredients: z.string().min(3, {
    message: "Ingredients must be at least 3 characters.",
  }),
});

export default function MealFinderForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ingredients: "",
    },
  });

  const [showForm, setShowForm] = useState(true);
  const [mealsList, setMealsList] = useState<any[]>([]);

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const meals = [
      {
        idMeal: "52771",
        strMeal: "Spicy Arrabiata Penne",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg",
      },
      {
        idMeal: "52878",
        strMeal: "Tomato Soup",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg",
      },
      {
        idMeal: "52959",
        strMeal: "Tomato and basil pizza",
        strMealThumb:
          "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg",
      },
    ];

    setShowForm(false);

    setMealsList(meals);
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="ingredients"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ingredients</FormLabel>
                <FormControl>
                  <Input placeholder="Enter ingredients" {...field} />
                </FormControl>
                <FormDescription>
                  Enter ingredients that you have in your fridge, separated by
                  commas e.g. &quot;tomato, onion, garlic&quot;
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Find Meals</Button>
        </form>
      </Form>

      {showForm ? null : <MealFinderList meals={mealsList} />}
    </div>
  );
}
