import styles from "./MenuDrawer.module.css";
import { useEffect } from "react";
import { EyeClosed } from "@phosphor-icons/react/dist/ssr";
import { useTranslations } from "next-intl";

interface MenuDrawerProps {
  handleCloseDrawer: () => void;
}

export default function MenuDrawer({ handleCloseDrawer }: MenuDrawerProps) {
  const t = useTranslations("MainMenu");
  useEffect(() => {
    const elementoEnfocadoAntesDeAbrirlo = document.activeElement;
    return () => {
      (elementoEnfocadoAntesDeAbrirlo as HTMLElement)?.focus();
    };
  }, []);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleCloseDrawer();
      }
    }
    window.addEventListener("keyup", handleEscape);
    return () => {
      window.removeEventListener("keyup", handleEscape);
    };
  }, [handleCloseDrawer]);
  return (
    <div className={styles.navContainer}>
      <div
        onClick={handleCloseDrawer}
        className={styles.navBackground}
      />
      <div className={styles.navDrawer}>
        <div className={styles.navLinks}>
          <a href="#">Home</a>
        </div>
        <button
          onClick={handleCloseDrawer}
          className={styles.closeBtn}
        >
          <EyeClosed
            aria-hidden="true"
            weight="bold"
          />
          {t("closeMenuBtn")}
        </button>
      </div>
    </div>
  );
}
