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
                <Link href="/contacto">Cita previa</Link> •
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
                    Servicios:
                  </summary>
                  <ul role="list">
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href="/servicios/implantologia"
                      >
                        Implantología
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href="/servicios/ortodoncia"
                      >
                        Ortodoncia
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href="/servicios/periodoncia"
                      >
                        Periodoncia
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href="/servicios/blanqueamiento-dental"
                      >
                        Blanqueamiento Dental
                      </Link>
                    </li>

                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href="/servicios/bruxismo-o-rechinchar-de-dientes"
                      >
                        Bruxismo o rechinchar de dientes
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href="/servicios/odontologia-conservadora"
                      >
                        Odontologia Conservadora
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href="/servicios/endodoncia"
                      >
                        Endodoncia
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href="/servicios/protesis-dentales"
                      >
                        Prótesis dentales
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href="/servicios/higiene-dental"
                      >
                        Higiene dental
                      </Link>
                    </li>
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
                    Así somos:
                  </summary>
                  <ul role="list">
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href="/asi-somos/ubicacion"
                      >
                        Ubicación
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href="/asi-somos/transporte"
                      >
                        Transporte
                      </Link>
                    </li>{" "}
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href="/asi-somos/los-horarios"
                      >
                        Los horarios
                      </Link>
                    </li>{" "}
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href="/asi-somos/las-imagenes"
                      >
                        Las imágenes
                      </Link>
                    </li>{" "}
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href="/asi-somos/el-personal"
                      >
                        El personal
                      </Link>
                    </li>{" "}
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href="/asi-somos/financiación"
                      >
                        Financiación
                      </Link>
                    </li>
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
                    Artículos y noticias:
                  </summary>
                  <ul role="list">
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href="/articulos/tu-propio-diente-como-biomaterial"
                      >
                        Tu propio diente como biomaterial
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href="/articulos/laser-dental"
                      >
                        Láser dental
                      </Link>
                    </li>{" "}
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href="/articulos/anestesia"
                      >
                        Anestesia
                      </Link>
                    </li>{" "}
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href="/articulos/para-los-peques"
                      >
                        Para los peques
                      </Link>
                    </li>{" "}
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href="/articulos/para-los-fumadores"
                      >
                        Para los fumadores
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href="/articulos/mal-aliento"
                      >
                        Mal aliento
                      </Link>
                    </li>{" "}
                  </ul>
                </details>
                <details
                  className={styles.details}
                  open={openedDetails === 3}
                >
                  <summary
                    onClick={(e) => {
                      handleOpenDetails(e, 3);
                    }}
                    className={styles.summary}
                  >
                    Artículos y noticias:
                  </summary>
                  <ul role="list">
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href="/varios/la-salud-esta-navidad"
                      >
                        La salud esta navidad
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href="/varios/preguntas-frecuentes"
                      >
                        Preguntas frecuentes
                      </Link>
                    </li>{" "}
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href="/varios/ofertas-continuas"
                      >
                        Ofertas continuas
                      </Link>
                    </li>{" "}
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href="/contacto"
                      >
                        Cita Previa
                      </Link>
                    </li>{" "}
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href="/nota-legal"
                      >
                        Nota legal
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href="/varios/covid-19"
                      >
                        Covid-19
                      </Link>
                    </li>{" "}
                  </ul>
                </details>
              </div>
              <div className={`${styles.location} flow`}>
                <h2>Dónde encontrarnos:</h2>
                <address>
                  <p>
                    <strong>Address:</strong>
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
                    <h2>Cómo contactarnos:</h2>

                    <p>
                      Puedes solicitar cualquier pregunta y hacer cita en
                      nuestro:{" "}
                      <Link href="/contacto">Formulario de contacto</Link>
                    </p>

                    <p>
                      Puedes llamarnos en nuestro horario de apertura o puedes
                      dejarnos un mensaje aquí:{" "}
                      <Link href="tel:+34928292455">Llámanos</Link>
                    </p>
                  </div>

                  <div className={styles.timetable}>
                    <h2>Horarios</h2>
                    <p>
                      <strong>Lunes:</strong> 09:30h - 16:00h
                      <br />
                      <strong>Martes: </strong>14:00 - 20:00h
                      <br />
                      <strong>Miércoles: </strong>09:30h - 16:00h
                      <br />
                      <strong>Jueves:</strong> 14:00 - 20:00h
                      <br />
                      <strong>Viernes:</strong> 09:30h - 16:00h
                      <br />
                      <strong>Sábados y Domingos:</strong> Cerrado
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
