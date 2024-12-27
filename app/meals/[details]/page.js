import Link from "next/link";

export default function MealDetailsPage({params}) {
    return (
        <main>
            <h1>{params.details}</h1>
            <p><Link href='../../meals'>Back to meals</Link></p>
        </main>
    )
}