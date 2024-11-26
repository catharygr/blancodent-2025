"use client";
import styles from "./Menu.module.css";
import { List } from "@phosphor-icons/react/dist/ssr";

export default function Menu() {
  return (
    <nav className={styles.container}>
      <button className={styles.btn}>
        <List weight="bold" />
      </button>
    </nav>
  );
}
