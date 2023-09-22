import styles from "./Header.module.scss";
import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";
import { useState } from "react";
import { List } from "@phosphor-icons/react";
import { WhatsappLogo } from "@phosphor-icons/react";

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
      {isMobile ? (
        <div className={styles.hamburger} onClick={toggleMenu}>
          <List size={32} weight="regular" />
          <div className={`${isOpen ? styles.isOpen : styles.isClose}`}>
            <ul>
              <li>Sobre nós</li>
              <li>Como trabalhamos</li>
              <li>Depoimentos</li>
            </ul>
          </div>
        </div>
      ) : (
        <nav className={`${isVisible ? styles.navIcon : styles.nav}`}>
          {isVisible && <Image src={logo} alt={"Hera eventos"} width={200} />}
          <ul>
            <li>Sobre nós</li>
            <li>Como trabalhamos</li>
            <li>Depoimentos</li>
          </ul>
        </nav>
      )}
    </header>
  );
}
