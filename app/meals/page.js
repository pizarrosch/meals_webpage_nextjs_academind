import s from './page.module.css';
import Link from "next/link";
import MealsGrid from "@/app/components/meals/meals-grid";

export default function MealsPage() {
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
        <MealsGrid meals={[]} />
      </main>
    </>
  )
}