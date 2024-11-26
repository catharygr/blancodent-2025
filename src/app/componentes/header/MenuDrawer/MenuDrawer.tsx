import styles from "./MenuDrawer.module.css";
import { useEffect } from "react";

interface MenuDrawerProps {
  handleCloseDrawer: () => void;
}

export default function MenuDrawer({ handleCloseDrawer }: MenuDrawerProps) {
  useEffect(() => {
    const elementoEnfocadoAntesDeAbrirlo = document.activeElement;
    return () => {
      (elementoEnfocadoAntesDeAbrirlo as HTMLElement)?.focus();
    };
  }, []);
  return (
    <div className={styles.navContainer}>
      <div className={styles.navBackground} />
      <div className={styles.navDrawer}>
        <div className={styles.navLinks}>
          <a href="#">Home</a>
        </div>
        <button
          onClick={handleCloseDrawer}
          className={styles.closeBtn}
        >
          X
        </button>
      </div>
    </div>
  );
}
