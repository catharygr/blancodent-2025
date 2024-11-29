import styles from "./MenuDrawer.module.css";
import { useEffect } from "react";
import { X } from "@phosphor-icons/react/dist/ssr";
import { useTranslations } from "next-intl";
import FocusLock from "react-focus-lock";
import { RemoveScroll } from "react-remove-scroll";

interface MenuDrawerProps {
  handleCloseDrawer: () => void;
}

export default function MenuDrawer({ handleCloseDrawer }: MenuDrawerProps) {
  const t = useTranslations("MainMenu");

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
      <FocusLock returnFocus={true}>
        <RemoveScroll>
          <div className={styles.navDrawer}>
            <button
              onClick={handleCloseDrawer}
              className={styles.closeBtn}
              aria-labelledby="close-btn-label"
            >
              <span
                className="visually-hidden"
                id="close-btn-label"
              >
                {t("closeMenuBtn")}
              </span>
              <X
                aria-hidden="true"
                weight="bold"
              />
            </button>
            <div className={styles.innerContainer}>
              <ul role="list">
                <li>Implantologia</li>
                <li>Ortodoncia</li>
                <li>Estética dental</li>
              </ul>
              <div
                className={styles.accordionGroup}
                role="group"
                aria-labelledby="nav-links-group-label"
              >
                <span
                  id="nav-links-group-label"
                  className="visually-hidden"
                >
                  {t("disclosureGroupLabel")}
                </span>
                <details className={styles.details}>
                  <summary className={styles.summary}>Nuestro servicio</summary>
                  <ul role="list">
                    <li>Implantologia</li>
                    <li>Ortodoncia</li>
                    <li>Estética dental</li>
                  </ul>
                </details>
                <details className={styles.details}>
                  <summary className={styles.summary}>Sobre nosotros</summary>
                  <ul role="list">
                    <li>Implantologia</li>
                    <li>Ortodoncia</li>
                    <li>Estética dental</li>
                  </ul>
                </details>
                <details className={styles.details}>
                  <summary className={styles.summary}>Articulos</summary>
                  <ul role="list">
                    <li>Implantologia</li>
                    <li>Ortodoncia</li>
                    <li>Estética dental</li>
                  </ul>
                </details>
              </div>
            </div>
          </div>
        </RemoveScroll>
      </FocusLock>
    </div>
  );
}
