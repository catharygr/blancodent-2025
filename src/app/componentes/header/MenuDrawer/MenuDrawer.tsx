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
            <div className={styles.innerContainer}>
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
                    Así somos
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
                <Image
                  src={smallMap}
                  alt="Mapa de la ubicación de la clínica"
                />
                <Link
                  target="_blank"
                  href="https://www.google.com/maps/place/Cl%C3%ADnica+Dental+Blancodent/@28.134669,-15.429525,17z/data=!4m2!3m1!1s0x0:0x9293d54eccbd51c?hl=en"
                >
                  Abrir en el mapa de Google
                </Link>
                <br />
                <Link
                  target="_blank"
                  href="https://maps.apple.com/maps?address=Av%20Mesa%20y%20L%C3%B3pez,%201%20-%201%C2%AA%20izquierda,%2035006%20Las%20Palmas%20de%20Gran%20Canaria,%20Las%20Palmas,%20Las%20Palmas,%20Spain&auid=4569860911891010439&ll=28.134679,-15.429491&lsp=9902&q=Cl%C3%ADnica%20Dental%20Blancodent&t=m"
                >
                  Abrir en el mapa de Apple
                </Link>
              </div>
              <div className={styles.containerQuery}>
                <div className={styles.info}>
                  <div className={styles.contact}>
                    <h2>¿Cómo contactar con nosotros?</h2>

                    <p>
                      Puedes solicitar cualquier pregunta y hacer cita en
                      nuestro formulario de contacto.
                    </p>

                    <p>
                      Puedes llamarnos en nuestro horario de apertura o puedes
                      dejarnos un mensaje aquí: LLámanos
                    </p>
                  </div>

                  <div className={styles.timetable}>
                    <h2>Horarios</h2>
                    <p>
                      Lunes: 09:30h - 16:00h
                      <br />
                      Martes: 14:00 - 20:00h
                      <br />
                      Miércoles: 09:30h - 16:00h
                      <br />
                      Jueves: 14:00 - 20:00h
                      <br />
                      Viernes: 09:30h - 16:00h
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RemoveScroll>
      </FocusLock>
    </div>
  );
}
