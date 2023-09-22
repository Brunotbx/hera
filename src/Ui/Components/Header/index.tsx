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

  return (
    <header className={styles.header}>
      {isMobile ? (
        <div className={styles.hamburger} onClick={toggleMenu}>
          <List size={32} weight="regular" />
          <div className={`${isOpen ? styles.isOpen : styles.isClose}`}>
            <ul>
              <Link href="#about">
                <li>Sobre nós</li>
              </Link>
              <Link href="#work">
                <li>Como trabalhamos</li>
              </Link>
              <Link href="#testimonials">
                <li>Depoimentos</li>
              </Link>
            </ul>
          </div>
        </div>
      ) : (
        <nav className={`${isVisible ? styles.navIcon : styles.nav}`}>
          {isVisible && <Image src={logo} alt={"Hera eventos"} width={200} />}
          <ul>
            <Link href="#about">
              <li>Sobre nós</li>
            </Link>
            <Link href="#work">
              <li>Como trabalhamos</li>
            </Link>
            <Link href="#testimonials">
              <li>Depoimentos</li>
            </Link>
          </ul>
        </nav>
      )}
    </header>
  );
}
