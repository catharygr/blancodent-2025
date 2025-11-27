import styles from "./MenuDrawer.module.css";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { XIcon } from "@phosphor-icons/react/dist/ssr";
import { useTranslations } from "next-intl";
import FocusLock from "react-focus-lock";
import { RemoveScroll } from "react-remove-scroll";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import smallMap from "./assets/menu-map.png";
import { motion } from "motion/react";
import {
  anestesia,
  blanqueamiento,
  bruxismo,
  contacto,
  covid19,
  dienteBiomaterial,
  elPersonal,
  endodoncia,
  faq,
  financiacion,
  higiene,
  implantologia,
  laSaludEstaNavidad,
  laserDental,
  lasImagenes,
  losHorarios,
  malAliento,
  notaLegal,
  odontologiaConservadora,
  ofertasContinuas,
  ortodoncia,
  paraFumadores,
  paraPeques,
  periodoncia,
  protesis,
  transporte,
  ubicacion,
} from "@/assets/links";

interface MenuDrawerProps {
  handleCloseDrawer: () => void;
}

export default function MenuDrawer({ handleCloseDrawer }: MenuDrawerProps) {
  // next is for portal rendering on client
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);
  const t = useTranslations("MainMenu");

  useEffect(() => {
    // next is for portal
    setPortalRoot(document.getElementById("nav-menu-root"));
  }, []);

  useEffect(() => {
    function handleEscapeKey(event: KeyboardEvent): void {
      if (event.key === "Escape") {
        handleCloseDrawer();
      }
    }

    window.addEventListener("keyup", handleEscapeKey);
    return () => {
      window.removeEventListener("keyup", handleEscapeKey);
    };
  }, [handleCloseDrawer]);

  if (!portalRoot) return null;

  return createPortal(
    <div className={styles.navContainer}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.7,
        }}
        exit={{ opacity: 0 }}
        className={styles.navBackground}
        onClick={handleCloseDrawer}
      />
      <FocusLock returnFocus={true}>
        <RemoveScroll>
          <motion.div
            animate={{ y: "110%" }}
            transition={{
              type: "spring",
              stiffness: 160,
              damping: 20,
            }}
            exit={{ y: "0%" }}
            className={styles.navDrawer}
          >
            <button
              className={styles.closeBtn}
              onClick={handleCloseDrawer}
              aria-describedby="close-btn-label"
            >
              <span
                className="visually-hidden"
                id="close-btn-label"
              >
                {t("closeMenuBtn")}
              </span>
              <XIcon
                aria-hidden="true"
                weight="bold"
              />
            </button>
            <ul
              className={styles.quickLinks}
              role="list"
            >
              <li>
                <Link
                  onClick={handleCloseDrawer}
                  href={contacto()}
                >
                  {t("quickLinks.quickLinksContact")}
                </Link>{" "}
                •{""}
              </li>
              <li>
                <Link href="tel:+34928292455">
                  {t("quickLinks.quickLinksTel")}
                </Link>
              </li>
            </ul>
            <div className={styles.innerContainer}>
              <div
                role="group"
                aria-labelledby="nav-links-group-label"
                className={styles.accordion}
              >
                <span
                  id="nav-links-group-label"
                  className="visually-hidden"
                >
                  {t("disclosureGroupLabel")}
                </span>
                <details
                  name="menu-accordion"
                  className={styles.details}
                >
                  <summary className={styles.summary}>
                    {t("services.summary")}
                  </summary>
                  <ul role="list">
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href={implantologia()}
                      >
                        {t("services.link1")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href={ortodoncia()}
                      >
                        {t("services.link2")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href={periodoncia()}
                      >
                        {t("services.link3")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href={blanqueamiento()}
                      >
                        {t("services.link4")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href={bruxismo()}
                      >
                        {t("services.link5")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href={odontologiaConservadora()}
                      >
                        {t("services.link6")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href={endodoncia()}
                      >
                        {t("services.link7")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href={protesis()}
                      >
                        {t("services.link8")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href={higiene()}
                      >
                        {t("services.link9")}
                      </Link>
                    </li>
                  </ul>
                </details>
                <details
                  name="menu-accordion"
                  // open={openedDetails === 1}
                  className={styles.details}
                >
                  <summary
                    // onClick={(e) => handleOpenDetails(e, 1)}
                    className={styles.summary}
                  >
                    {t("aboutClinic.summary")}
                  </summary>
                  <ul role="list">
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href={ubicacion()}
                      >
                        {t("aboutClinic.link1")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href={transporte()}
                      >
                        {t("aboutClinic.link2")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href={losHorarios()}
                      >
                        {t("aboutClinic.link3")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href={lasImagenes()}
                      >
                        {t("aboutClinic.link4")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href={elPersonal()}
                      >
                        {t("aboutClinic.link5")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href={financiacion()}
                      >
                        {t("aboutClinic.link6")}
                      </Link>
                    </li>
                  </ul>
                </details>
                <details
                  name="menu-accordion"
                  className={styles.details}
                >
                  <summary className={styles.summary}>
                    {t("articles.summary")}
                  </summary>
                  <ul role="list">
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href={dienteBiomaterial()}
                      >
                        {t("articles.link1")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href={laserDental()}
                      >
                        {t("articles.link2")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href={anestesia()}
                      >
                        {t("articles.link3")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href={paraPeques()}
                      >
                        {t("articles.link4")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href={paraFumadores()}
                      >
                        {t("articles.link5")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href={malAliento()}
                      >
                        {t("articles.link6")}
                      </Link>
                    </li>
                  </ul>
                </details>
                <details
                  name="menu-accordion"
                  className={styles.details}
                >
                  <summary className={styles.summary}>
                    {t("others.summary")}
                  </summary>
                  <ul role="list">
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href={laSaludEstaNavidad()}
                      >
                        {t("others.link1")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href={faq()}
                      >
                        {t("others.link2")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href={ofertasContinuas()}
                      >
                        {t("others.link3")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href={contacto()}
                      >
                        {t("others.link4")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href={notaLegal()}
                      >
                        {t("others.link5")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleCloseDrawer}
                        href={covid19()}
                      >
                        {t("others.link6")}
                      </Link>
                    </li>
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
                  </p>
                </address>
                <Image
                  src={smallMap}
                  alt={t("location.map.imageAlt")}
                />
                <Link
                  target="_blank"
                  href="https://www.google.com/maps/place/Cl%C3%ADnica+Dental+Blancodent/@28.134669,-15.429525,17z/data=!4m2!3m1!1s0x0:0x9293d54eccbd51c?hl=en"
                >
                  {t("location.map.link1")}
                </Link>{" "}
                <br />
                <Link
                  target="_blank"
                  href="https://maps.apple.com/maps?address=Av%20Mesa%20y%20L%C3%B3pez,%201%20-%201%C2%AA%20izquierda,%2035006%20Las%20Palmas%20de%20Gran%20Canaria,%20Las%20Palmas,%20Las%20Palmas,%20Spain&auid=4569860911891010439&ll=28.134679,-15.429491&lsp=9902&q=Cl%C3%ADnica%20Dental%20Blancodent&t=m"
                >
                  {t("location.map.link2")}
                </Link>
              </div>
              <div className={styles.containerQuery}>
                <div className={styles.info}>
                  <div className={styles.contact}>
                    <h2>{t("contact.title")}</h2>
                    <p>
                      {t("contact.text1.text")}{" "}
                      <Link
                        onClick={handleCloseDrawer}
                        href={contacto()}
                      >
                        {t("contact.text1.link")}
                      </Link>
                    </p>
                    <p>
                      {t("contact.text2.text")}{" "}
                      <Link href="tel:+34928292455">
                        {t("contact.text2.link")}
                      </Link>
                    </p>
                  </div>
                  <div className={styles.timetable}>
                    <h2>{t("timetable.title")}</h2>
                    <table>
                      <thead className="visually-hidden">
                        <tr>
                          <th scope="col">{t("timetable.dayColumn")}</th>
                          <th scope="col">{t("timetable.hoursColumn")}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">{t("timetable.days.monday")}</th>
                          <td>09:30 - 16:00</td>
                        </tr>
                        <tr>
                          <th scope="row">{t("timetable.days.tuesday")}</th>
                          <td>14:00 - 20:00</td>
                        </tr>
                        <tr>
                          <th scope="row">{t("timetable.days.wednesday")}</th>
                          <td>09:30 - 16:00</td>
                        </tr>
                        <tr>
                          <th scope="row">{t("timetable.days.thursday")}</th>
                          <td>14:00 - 20:00</td>
                        </tr>
                        <tr>
                          <th scope="row">{t("timetable.days.friday")}</th>
                          <td>09:30 - 16:00</td>
                        </tr>
                        <tr>
                          <th scope="row">{t("timetable.days.weekend")}</th>
                          <td>{t("timetable.days.closed")}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </RemoveScroll>
      </FocusLock>
    </div>,
    portalRoot
  );
}
