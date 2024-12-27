import Link from "next/link";

export default function MealsPage() {
    return (
        <main>
            <h1>Meals page</h1>
            <p><Link href='/meals/share'>Share meals</Link></p>
            <p><Link href='/meals/cabbage'>Details to cabbage</Link></p>
            <p><Link href='/meals/soup'>Details to soup</Link></p>
            <p><Link href='../community'>To the community</Link></p>
            <p><Link href='/'>Main page</Link></p>
        </main>
    )
}