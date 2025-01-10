'use client'

import Link from "next/link";
import {usePathname} from "next/navigation";
import logoImg from '@/assets/logo.png';
import s from './main-header.module.css';
import Image from "next/image";
import MainHeaderBackground from "@/app/components/main-header/main-header-background";

export default function MainHeader() {
  
  const path = usePathname();
  
  return (
    <>
      <MainHeaderBackground/>
      <header className={s.header}>
        <Link className={s.logo} href='/public'>
          <Image src={logoImg} alt='A plate with food' priority/>
          NextLevel Food
        </Link>
        <nav className={s.nav}>
          <ul>
            <li><Link href='/meals' className={path.startsWith('/meals') && s.active}>Browse Meals</Link></li>
            <li><Link href='/community' className={path === '/community' && s.active}>Foodies Community</Link></li>
          </ul>
        </nav>
      </header>
    </>
  )
}