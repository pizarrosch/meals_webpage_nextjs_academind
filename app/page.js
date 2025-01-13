import Link from "next/link";
import s from './page.module.css';
import ImageSlideshow from "@/app/components/images/image-slideshow";

export default function Home() {
  return (
    <>
      <header className={s.header}>
        <div className={s.slideshow}>
          <ImageSlideshow/>
        </div>
        <div>
          <div className={s.hero}>
            <h1>Food for Foodies</h1>
            <p>Taste food from the whole world!</p>
          </div>
          <div className={s.cta}>
            <Link href='/community'>Join the community</Link>
            <Link href='/meals'>Explore the meals</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={s.section}>
          <h2>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
        
        <section className={s.section}>
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
    
    // <main>
    //     <h1 style={{color: 'white', textAlign: 'center'}}>
    //         Time to get started!
    //     </h1>
    //     <p><Link href='meals'>To the meals</Link></p>
    //     <p><Link href='meals/share'>Share meals</Link></p>
    //     <p><Link href='community'>To the community</Link></p>
    // </main>
  );
}
