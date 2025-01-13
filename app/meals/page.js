import s from './page.module.css';
import Link from "next/link";
import MealsGrid from "@/app/components/meals/meals-grid";
import {getMeals} from "@/lib/meals";

export default async function MealsPage() {
  
  const meals = await getMeals();
  
  return (
    <>
      <header className={s.header}>
        <h1>
          Delicious meals, created {''}
          <span className={s.highlight}>by you</span>
        </h1>
        <p>Chose the recipe you like and cook yourself!</p>
        <p className={s.cta}>
          <Link href='/meals/share'>Share your favorite recipe</Link>
        </p>
      </header>
      <main>
        <MealsGrid meals={meals}/>
      </main>
    </>
  )
}