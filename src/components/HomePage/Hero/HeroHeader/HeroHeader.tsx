import { ArrowFatRightIcon } from "@phosphor-icons/react/dist/ssr";
import styles from "./heroHeader.module.css";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { contacto } from "@/assets/links";

export default function Hero() {
  const t = useTranslations("HomePage");

  return (
    <div>
      <div className={styles.titleGroup}>
        <h1 className={styles.title}>
          <span className={styles.dentalClinic}>
            {t("heroHeader.titleSmall")}
          </span>
          <br />
          {t("heroHeader.titleBig")}
        </h1>
        <p className={styles.tagline}>{t("heroHeader.tagLine")}</p>
        <address className={styles.address}>{t("heroHeader.address")}</address>
      </div>
      <div className={styles.actionGroup}>
        <a
          href="tel:+34928292455"
          className={`btn ${styles.actionBtn}`}
        >
          {t("heroHeader.actionBtn")}
        </a>
        <Link href={contacto()}>
          {t("heroHeader.actionLink")}
          <ArrowFatRightIcon
            weight="duotone"
            className={styles.rightArrow}
          />
        </Link>
      </div>
    </div>
  );
}
