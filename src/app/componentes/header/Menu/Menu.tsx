"use client";
import styles from "./Menu.module.css";
import { List } from "@phosphor-icons/react/dist/ssr";
import MenuDrawer from "../MenuDrawer/MenuDrawer";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { AnimatePresence } from "motion/react";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("MainMenu");

  const handleOpenDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={styles.container}
      aria-labelledby="nav-label"
    >
      <span
        hidden
        id="nav-label"
      >
        {t("navLabel")}
      </span>
      <button
        className={styles.btn}
        onClick={handleOpenDrawer}
        aria-labelledby="btn-name"
        aria-expanded={isOpen}
      >
        <span
          hidden
          id="btn-name"
        >
          {t("openMenuBtn")}
        </span>
        <List
          aria-hidden="true"
          weight="bold"
        />
      </button>
      <AnimatePresence>
        {isOpen && <MenuDrawer handleCloseDrawer={handleOpenDrawer} />}
      </AnimatePresence>
    </nav>
  );
}
