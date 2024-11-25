import { Link } from "@/i18n/routing";
import styles from "./Header.module.css";
import { useTranslations } from "next-intl";
import LangSwitcher from "@/app/componentes/header/LangSwitcher";

export default function Header() {
  const t = useTranslations("Header");
  return (
    <header className={`wide-grid ${styles.header}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link
            href="/"
            aria-labelledby="logo-label"
          >
            <span
              hidden
              id="logo-label"
            >
              {t("logoLabel")}
            </span>
            <svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 200 200"
              aria-hidden="true"
            >
              <path
                d="M181 100c0 44.735-36.265 81-81 81s-81-36.265-81-81 36.265-81 81-81 81 36.265 81 81Z"
                fill="#fff"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M100 171c39.212 0 71-31.788 71-71s-31.788-71-71-71-71 31.788-71 71 31.788 71 71 71Zm0 10c44.735 0 81-36.265 81-81s-36.265-81-81-81-81 36.265-81 81 36.265 81 81 81Z"
                fill="#FFCCB7"
              />
              <path
                d="M180 100c0 44.183-35.817 80-80 80v20c55.228 0 100-44.772 100-100S155.228 0 100 0v20c44.183 0 80 35.817 80 80Z"
                fill="#F97126"
              />
              <path
                d="M20 100H0c0 55.228 44.772 100 100 100v-20c-44.183 0-80-35.817-80-80Z"
                fill="#B2CD6F"
              />
              <path
                d="M43.287 43.287C28.895 57.752 20 77.693 20 99.71v.29H0v-.29c0-27.54 11.133-52.48 29.145-70.565l14.142 14.142Z"
                fill="#2E81CC"
              />
              <path
                d="M43.287 43.287C57.752 28.895 77.693 20 99.711 20H100V0h-.29C72.17 0 47.23 11.133 29.146 29.145l14.142 14.142Z"
                fill="#E0DDD5"
              />
              <path
                d="M88.252 114.505v48.681s-22.425 0-22.425-15.389v-41.515c0-6.8-9.61-8.947-13.882-17.178-4.272-8.232 7.119-37.22 10.678-41.873C66.183 42.58 70.098 39 76.861 39s9.611 5.01 22.07 5.01c12.458 0 12.813-5.01 21.712-5.01s13.882 5.726 16.374 8.231c2.492 2.505 14.238 34.357 10.678 41.873-3.559 7.515-13.526 10.378-13.526 17.178v41.515c0 15.389-21.001 15.389-21.001 15.389v-48.681c0-2.484-2.03-7.451-11.997-7.451s-12.92 4.23-12.92 7.451Z"
                fill="#FF93A5"
              />
            </svg>
          </Link>
          <p>Blancodent</p>
        </div>
        <nav
          aria-label={t("quickLinksLabel")}
          className={styles.quickLinks}
        >
          <ul role="list">
            <li>
              <Link href="location">{t("quicklocation")}</Link> •
            </li>
            <li>
              <Link href="/contact">{t("quickcontact")}</Link> •
            </li>
            <li>
              <Link href="tel:+34928292455">{t("quicktelephone")}</Link> •
            </li>
          </ul>
        </nav>
        <LangSwitcher />
      </div>
    </header>
  );
}
