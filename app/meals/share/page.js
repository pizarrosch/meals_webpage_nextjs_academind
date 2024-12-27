import Link from "next/link";

export default function MealsSharePage() {
    return (
        <main>
            <h1>Share your meals here</h1>
            <p><Link href='../../meals'>Back to meals</Link></p>
        </main>
    )
}