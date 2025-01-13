import s from './meals-grid.module.css';
import MealItem from "@/app/components/meals/meals-item";

export default function MealsGrid({meals}) {
  return (
    <ul className={s.meals}>
      {meals.map(meal => <li key={meal.id}><MealItem {...meals} /></li>)}
    </ul>
  )
}