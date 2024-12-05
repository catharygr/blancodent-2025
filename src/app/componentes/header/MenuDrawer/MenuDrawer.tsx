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
                <Link href="/contacto">{t("quickLinks.quickcontact")}</Link> •
              </li>
              <li>
                <Link href="tel:+34928292455">
                  {t("quickLinks.quicktelephone")}
                </Link>
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
                    {t("services.summary")}
                  </summary>
                  <ul role="list">
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href="/servicios/implantologia"
                      >
                        {t("services.link1")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href="/servicios/ortodoncia"
                      >
                        {t("services.link2")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href="/servicios/periodoncia"
                      >
                        {t("services.link3")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href="/servicios/blanqueamiento-dental"
                      >
                        {t("services.link4")}
                      </Link>
                    </li>

                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href="/servicios/bruxismo-o-rechinchar-de-dientes"
                      >
                        {t("services.link5")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href="/servicios/odontologia-conservadora"
                      >
                        {t("services.link6")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href="/servicios/endodoncia"
                      >
                        {t("services.link7")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href="/servicios/protesis-dentales"
                      >
                        {t("services.link8")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href="/servicios/higiene-dental"
                      >
                        {t("services.link9")}
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
                    {t("aboutClinic.summary")}
                  </summary>
                  <ul role="list">
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href="/asi-somos/ubicacion"
                      >
                        {t("aboutClinic.link1")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href="/asi-somos/transporte"
                      >
                        {t("aboutClinic.link2")}
                      </Link>
                    </li>{" "}
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href="/asi-somos/los-horarios"
                      >
                        {t("aboutClinic.link3")}
                      </Link>
                    </li>{" "}
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href="/asi-somos/las-imagenes"
                      >
                        {t("aboutClinic.link4")}
                      </Link>
                    </li>{" "}
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href="/asi-somos/el-personal"
                      >
                        {t("aboutClinic.link5")}
                      </Link>
                    </li>{" "}
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href="/asi-somos/financiación"
                      >
                        {t("aboutClinic.link6")}
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
                    {t("articles.summary")}
                  </summary>
                  <ul role="list">
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href="/articulos/tu-propio-diente-como-biomaterial"
                      >
                        {t("articles.link1")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href="/articulos/laser-dental"
                      >
                        {t("articles.link2")}
                      </Link>
                    </li>{" "}
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href="/articulos/anestesia"
                      >
                        {t("articles.link3")}
                      </Link>
                    </li>{" "}
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href="/articulos/para-los-peques"
                      >
                        {t("articles.link4")}
                      </Link>
                    </li>{" "}
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href="/articulos/para-los-fumadores"
                      >
                        {t("articles.link5")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href="/articulos/mal-aliento"
                      >
                        {t("articles.link6")}
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
                    {t("others.summary")}
                  </summary>
                  <ul role="list">
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href="/varios/la-salud-esta-navidad"
                      >
                        {t("others.link1")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href="/varios/preguntas-frecuentes"
                      >
                        {t("others.link2")}
                      </Link>
                    </li>{" "}
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href="/varios/ofertas-continuas"
                      >
                        {t("others.link3")}
                      </Link>
                    </li>{" "}
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href="/contacto"
                      >
                        {t("others.link4")}
                      </Link>
                    </li>{" "}
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href="/nota-legal"
                      >
                        {t("others.link5")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href="/varios/covid-19"
                      >
                        {t("others.link6")}
                      </Link>
                    </li>{" "}
                  </ul>
                </details>
              </div>
              <div className={`${styles.location} flow`}>
                <h2>{t("location.title")}</h2>
                <address>
                  <p>
                    <strong>{t("location.address.title")}</strong>
                    <br />
                    {t("location.address.street")}
                    <br />
                    {t("location.address.city")}
                    <br />
                    {t("location.address.country")}
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
