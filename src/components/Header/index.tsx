'use client';
import Image from "next/image";
import { useState } from "react";
import style from "./Header.module.scss";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Search from "@/components/Search";
import { RxTextAlignJustify } from "react-icons/rx";

const Header: React.FC = () => {
  const [active, setActive] = useState(false);
  const path = usePathname();

  const handleMenu = () => {
    setActive(!active);
  }

  return (
    <header className={`${style.header} ${path !== '/' && style.light}`}>
      <div className={style.logo}>
        <Link href="/">
          <Image src="/assets/logo.png" alt="Logo" width={100} height={100} />
        </Link>
      </div>
      <button onClick={handleMenu} className={style.responsiveButton}>
        <RxTextAlignJustify />
      </button>
      <nav className={`${active && style.active}`}>
        <ul>
          <li>
            <Search light={path !== '/'} />
          </li>
          <li>
            <Link href="/movies">Movies</Link>
          </li>
          <li>
            <Link href="/series">Series</Link>
          </li>
          <li>
            <Link href="/favorites">Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
