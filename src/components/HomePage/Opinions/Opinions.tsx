import styles from "./Opinions.module.css";
import { getTranslations } from "next-intl/server";

export default async function Opinions() {
  const t = await getTranslations("HomePage.opinions");
  return (
    <section className={styles.container}>
      <div>
        <h2 className={styles.opinionsTitle}> {t("title")} </h2>
        <div className={styles.decorativeLine} />
      </div>
      <div className={styles.opinionsContainer}>
        <article className={styles.firstOpinionArticle}>
          <header className={styles.firstOpinionHeader}>
            <h3>Jordan</h3>
            <span>*****</span>
          </header>
          <blockquote>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut
              nesciunt animi nihil sunt ad mollitia quasi unde omnis et error
              voluptatum quas eveniet quibusdam laudantium explicabo debitis
              velit, quia quos.
            </p>
          </blockquote>
        </article>
        <div className={styles.otherOpinionsContainer}>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </section>
  );
}
