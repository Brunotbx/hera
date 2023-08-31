import styles from "./Header.module.scss";
import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";
import { useState } from "react";
import { List } from "@phosphor-icons/react";

export function Header({
  isVisible,
  isMobile,
}: {
  isVisible: boolean;
  isMobile?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={styles.header}>
      {isVisible && <Image src={logo} alt={"Hera eventos"} width={250} />}
      {isMobile ? (
        <div className={styles.hamburger} onClick={toggleMenu}>
          <List size={32} weight="light" />
        </div>
      ) : (
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="#about" onClick={closeMenu}>
                Sobre nós
              </Link>
            </li>
            <li>
              <Link href="#work" onClick={closeMenu}>
                Como trabalhamos
              </Link>
            </li>
            <li>
              <Link href="#testimonials" onClick={closeMenu}>
                Depoimentos
              </Link>
            </li>
          </ul>
        </nav>
      )}
      {isMobile && isOpen && (
        <nav className={`${styles.nav} ${styles.open}`}>
          <ul>
            <li>
              <Link href="#about" onClick={closeMenu}>
                Sobre nós
              </Link>
            </li>
            <li>
              <Link href="#work" onClick={closeMenu}>
                Como trabalhamos
              </Link>
            </li>
            <li>
              <Link href="#testimonials" onClick={closeMenu}>
                Depoimentos
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
