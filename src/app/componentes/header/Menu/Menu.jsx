"use client";
import styles from "./Menu.module.css";
import { List } from "@phosphor-icons/react/dist/ssr";
import MenuDrawer from "../MenuDrawer/MenuDrawer";
import { useState } from "react";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.container}>
      <button
        className={styles.btn}
        onClick={handleOpenDrawer}
      >
        <List weight="bold" />
      </button>
      {isOpen && <MenuDrawer />}
    </nav>
  );
}
