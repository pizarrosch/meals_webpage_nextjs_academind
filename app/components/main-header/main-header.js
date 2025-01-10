'use client'

import Link from "next/link";
import logoImg from '@/assets/logo.png';
import s from './main-header.module.css';
import Image from "next/image";
import MainHeaderBackground from "@/app/components/main-header/main-header-background";
import NavLink from "@/app/components/main-header/nav-link";

export default function MainHeader() {
  
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
            <li>
              <NavLink href='/meals'>Meals for Foodies</NavLink>
            </li>
            <li><NavLink href='/community'>Foodies Community</NavLink></li>
          </ul>
        </nav>
      </header>
    </>
  )
}