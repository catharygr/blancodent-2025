import styles from "./Header.module.css";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import LangSwitcher from "@/components/Header/LangSwitcher";
import Menu from "@/components/Header/Menu";
import { contacto, home, localizacion } from "@/assets/links";

export default function Header() {
  const t = useTranslations("Header");

  return (
    <header className={`wide-grid ${styles.header}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link
            href={home()}
            aria-labelledby="logo-label"
          >
            <span
              id="logo-label"
              hidden
            >
              {t("logoLabel")}
            </span>

            <svg
              width="538"
              height="538"
              viewBox="0 0 538 538"
              aria-hidden="true"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M486.89 269C486.89 389.337 389.337 486.89 269 486.89C148.663 486.89 51.1103 389.337 51.1103 269C51.1103 148.663 148.663 51.1103 269 51.1103C389.337 51.1103 486.89 148.663 486.89 269Z"
                fill="#FFF8F0"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M269 459.99C374.481 459.99 459.99 374.481 459.99 269C459.99 163.519 374.481 78.0103 269 78.0103C163.519 78.0103 78.0103 163.519 78.0103 269C78.0103 374.481 163.519 459.99 269 459.99ZM269 486.89C389.337 486.89 486.89 389.337 486.89 269C486.89 148.663 389.337 51.1103 269 51.1103C148.663 51.1103 51.1103 148.663 51.1103 269C51.1103 389.337 148.663 486.89 269 486.89Z"
                fill="#FFD6E0"
              />
              <path
                d="M484.2 269C484.2 387.852 387.852 484.2 269 484.2V538C417.565 538 538 417.565 538 269C538 120.436 417.565 0.000326432 269 0.000326432V53.8003C387.852 53.8003 484.2 150.149 484.2 269Z"
                fill="#B04964"
              />
              <path
                d="M53.8003 269H0.000326397C0.000326397 417.565 120.436 538 269 538V484.2C150.149 484.2 53.8003 387.852 53.8003 269Z"
                fill="#EA5B80"
              />
              <path
                d="M116.442 116.442C77.7272 155.354 53.8003 208.994 53.8003 268.222C53.8003 268.481 53.7994 268.741 53.8003 269H0.000326397C-0.000407997 268.741 0.000326397 268.481 0.000326397 268.222C0.000326397 194.137 29.9489 127.048 78.3998 78.3997L116.442 116.442Z"
                fill="#8DABB3"
              />
              <path
                d="M116.442 116.442C155.355 77.7271 208.994 53.8003 268.222 53.8003C268.481 53.8003 268.741 53.7994 269 53.8003V0.000326432C268.741 -0.00040804 268.481 0.000326432 268.222 0.000326432C194.137 0.000326432 127.048 29.9488 78.3998 78.3997L116.442 116.442Z"
                fill="#D5E7F1"
              />
              <path
                d="M237.398 308.018V438.969C237.398 438.969 177.075 438.969 177.075 397.573V285.899C177.075 267.608 151.222 261.831 139.732 239.689C128.242 217.547 158.882 139.568 168.457 127.053C178.032 114.537 188.565 104.91 206.757 104.91C224.95 104.91 232.61 118.388 266.123 118.388C299.635 118.388 300.593 104.91 324.53 104.91C348.468 104.91 361.873 120.314 368.576 127.053C375.278 133.791 406.876 219.472 397.301 239.689C387.726 259.906 360.916 267.608 360.916 285.899V397.573C360.916 438.969 304.423 438.969 304.423 438.969L304.423 308.018C304.423 301.337 298.96 287.975 272.15 287.975C245.34 287.975 237.398 299.354 237.398 308.018Z"
                fill="#EA5B80"
              />
            </svg>
          </Link>
          {/* <span
            className={styles.p}
            aria-hidden={true}
          >
            Blancodent
          </span> */}
        </div>
        <nav
          aria-label={t("quickLinksLabel")}
          className={styles.quickLinks}
        >
          <ul role="list">
            <li>
              <Link href={localizacion()}>{t("quickLinksLocation")}</Link> •{" "}
            </li>
            <li>
              <Link href={contacto()}>{t("quickLinksContact")}</Link> •{" "}
            </li>
            <li>
              <Link href="tel:+34928292455">{t("quickLinksTel")}</Link>
            </li>
          </ul>
        </nav>
        <LangSwitcher />
        <Menu />
      </div>
    </header>
  );
}
