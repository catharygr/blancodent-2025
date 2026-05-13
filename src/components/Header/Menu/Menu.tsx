"use client";
import MenuDrawer from "@/components/Header/MenuDrawer";
import { ListIcon } from "@phosphor-icons/react/dist/ssr";
import { AnimatePresence } from "motion/react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import styles from "./Menu.module.css";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("MainMenu");

  function handleOpenDrawer(): void {
    setIsOpen(!isOpen);
  }

  return (
    <nav
      aria-labelledby="nav-label-header"
      className={styles.container}
    >
      <span
        hidden
        id="nav-label-header"
      >
        {t("navLabel")}
      </span>
      <button
        onClick={handleOpenDrawer}
        className={styles.button}
        aria-labelledby="btn-name"
        aria-expanded={isOpen}
      >
        <span
          hidden
          id="btn-name"
        >
          {t("openMenuBtn")}
        </span>
        <ListIcon
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
