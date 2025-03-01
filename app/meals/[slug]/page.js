import Link from "next/link";

export default async function MealDetailsPage({params}) {
  
  return (
    <main>
      <h1>{details}</h1>
      <p><Link href='../../meals'>Back to meals</Link></p>
    </main>
  )
}