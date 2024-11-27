import styles from "./MenuDrawer.module.css";
import { useEffect } from "react";
import { EyeClosed } from "@phosphor-icons/react/dist/ssr";
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
        </RemoveScroll>
      </FocusLock>
    </div>
  );
}
