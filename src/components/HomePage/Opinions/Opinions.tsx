import styles from "./Opinions.module.css";
import { getTranslations } from "next-intl/server";

export default async function Opinions() {
  const t = await getTranslations("HomePage.opinions");
  return (
    <section className={`${styles.container} narrow-grid`}>
      <div>
        <h2> {t("title")} </h2>
        <div className={styles.decorativeLine} />
      </div>
      <div className={styles.cardContainer}></div>
    </section>
  );
}
