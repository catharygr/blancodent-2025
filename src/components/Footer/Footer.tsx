import {
  contacto,
  faq,
  home,
  notaLegal,
  ofertasContinuas,
} from "@/assets/links";
import styles from "./Footer.module.css";
import { Link } from "@/i18n/navigation";
import {
  InstagramLogoIcon,
  FacebookLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");
  return (
    <footer className={`${styles.footer} wide-grid `}>
      <div className={styles.cardsContainer}>
        <div className={styles.boxOne}>
          <nav
            className={styles.navLinks}
            aria-labelledby="nav-label-footer"
          >
            <h2 id="nav-label-footer">{t("links.title")}</h2>
            <ul role="list">
              <li>
                <Link href={home()}>{t("links.link1")}</Link>
              </li>
              <li>
                <Link href={faq()}>{t("links.link2")}</Link>
              </li>
              <li>
                <Link href={ofertasContinuas()}>{t("links.link3")}</Link>
              </li>
              <li>
                <Link href={contacto()}>{t("links.link4")}</Link>
              </li>
              <li>
                <Link href="tel:+34928292455">{t("links.link5")}</Link>
              </li>
            </ul>
          </nav>
          <div>
            <h2>{t("address.title")}</h2>
            <address>
              <p>
                {t("address.street")}
                <br />
                {t("address.city")}
                <br />
                {t("address.country")}
              </p>
              <p>
                <strong>{t("address.social.title")}</strong>
              </p>
              <ul
                className={styles.socialNetworks}
                role="list"
              >
                <li>
                  <Link
                    aria-labelledby="facebook-label"
                    target="_blank"
                    href="https://www.facebook.com/clinica.dental.blancodent.las.palmas/"
                  >
                    <span
                      className="visually-hidden"
                      id="facebook-label"
                    >
                      {t("address.social.facebook")}
                    </span>
                    <FacebookLogoIcon weight="duotone" />
                  </Link>
                </li>
                <li>
                  <Link
                    aria-labelledby="instagram-label"
                    target="_blank"
                    href="https://www.instagram.com/blancodentclinicadental_gc/"
                  >
                    <span
                      className="visually-hidden"
                      id="instagram-label"
                    >
                      {t("address.social.instagram")}
                    </span>
                    <InstagramLogoIcon weight="duotone" />
                  </Link>
                </li>
              </ul>
            </address>
          </div>
        </div>
        <div className={styles.boxTwo}>
          <div>
            <h2>{t("timetable.title")}</h2>
            <p>
              <strong>{t("timetable.days.monday")}</strong>
              <br />
              09:30 - 16:00.
            </p>
            <p>
              <strong>{t("timetable.days.tuesday")}</strong>
              <br />
              14:00 - 20:00.
            </p>
            <p>
              <strong>{t("timetable.days.wednesday")}</strong>
              <br />
              09:30 - 16:00.
            </p>
            <p>
              <strong>{t("timetable.days.thursday")}</strong>
              <br />
              14:00 - 20:00.
            </p>
            <p>
              <strong>{t("timetable.days.friday")}</strong>
              <br />
              09:30 - 16:00.
            </p>
          </div>
          <div>
            <h2>{t("newsletter.title")}</h2>
            <p>{t("newsletter.text")}</p>
            <Link
              target="_blank"
              className={`btn ${styles.subscriptionBtn}`}
              href="https://mailchi.mp/blancodent.com/blancodent-web"
            >
              {t("newsletter.link")}
            </Link>
          </div>
        </div>
      </div>
      <div className={`narrow-grid ${styles.notaLegalContainer}`}>
        <h3>{t("legal.title")}</h3>
        <p>{t("legal.text")}</p>
        <Link href={notaLegal()}>{t("legal.link")}</Link>
      </div>
    </footer>
  );
}
