import styles from "./MenuDrawer.module.css";
import { useEffect, useState } from "react";
import { X } from "@phosphor-icons/react/dist/ssr";
import { useTranslations } from "next-intl";
import FocusLock from "react-focus-lock";
import { RemoveScroll } from "react-remove-scroll";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import smallMap from "./assets/small-map.jpg";

interface MenuDrawerProps {
  handleCloseDrawer: () => void;
}

export default function MenuDrawer({ handleCloseDrawer }: MenuDrawerProps) {
  const [openedDetails, setOpenedDetails] = useState<number | null>(null);
  const t = useTranslations("MainMenu");

  const handleOpenDetails = (e: React.MouseEvent<HTMLElement>, id: number) => {
    e.preventDefault();

    setOpenedDetails((prev) => (prev === id ? null : id));
  };

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
              <ul
                className={styles.quickLinks}
                role="list"
              >
                <li>
                  <Link href="/contact">Cita previa</Link> •
                </li>
                <li>
                  <Link href="tel:+34928292455">Llámanos</Link>
                </li>
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
                <details
                  open={openedDetails === 0}
                  className={styles.details}
                >
                  <summary
                    onClick={(e) => {
                      handleOpenDetails(e, 0);
                    }}
                    className={styles.summary}
                  >
                    Nuestro servicio
                  </summary>
                  <ul role="list">
                    <li>Implantologia</li>
                    <li>Ortodoncia</li>
                    <li>Estética dental</li>
                  </ul>
                </details>
                <details
                  className={styles.details}
                  open={openedDetails === 1}
                >
                  <summary
                    onClick={(e) => {
                      handleOpenDetails(e, 1);
                    }}
                    className={styles.summary}
                  >
                    Sobre nosotros
                  </summary>
                  <ul role="list">
                    <li>Implantologia</li>
                    <li>Ortodoncia</li>
                    <li>Estética dental</li>
                  </ul>
                </details>
                <details
                  className={styles.details}
                  open={openedDetails === 2}
                >
                  <summary
                    onClick={(e) => {
                      handleOpenDetails(e, 2);
                    }}
                    className={styles.summary}
                  >
                    Articulos
                  </summary>
                  <ul role="list">
                    <li>Implantologia</li>
                    <li>Ortodoncia</li>
                    <li>Estética dental</li>
                  </ul>
                </details>
              </div>
              <div className={styles.location}>
                <h2>Dónde encontrarnos</h2>
                <address>
                  <Image
                    src={smallMap}
                    alt="Mapa de la ubicación de la clínica"
                  />
                  <p>
                    Address:
                    <br />
                    Av. Mesa y López, 1 - 1ª
                    <br />
                    35006 Las Palmas de G.C.
                    <br />
                    Islas Canarias, España.
                    <br />
                  </p>
                </address>
              </div>
            </div>
          </div>
        </RemoveScroll>
      </FocusLock>
    </div>
  );
}
