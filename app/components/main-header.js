import Link from "next/link";
import logoImg from '@/assets/logo.png';
import s from './main-header.module.css';

export default function MainHeader() {
    return (
        <header className={s.header}>
            <Link className={s.logo} href='/public'>
                <img src={logoImg.src} alt='A plate with food'/>
                NextLevel Food
            </Link>
            <nav className={s.nav}>
                <ul>
                    <li><Link href='/meals'>Browse Meals</Link></li>
                    <li><Link href='/community'>Foodies Community</Link></li>
                </ul>
            </nav>
        </header>
    )
}