import Link from "next/link";

export default function Community() {
    return (
        <main>
            <h1>Community page</h1>
            <p><Link href='../meals'>To the meals</Link></p>
            <p><Link href='/'>Main page</Link></p>
        </main>
    )
}