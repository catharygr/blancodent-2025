import img from "@/assets/images/home-page/porque-card/cardimg-1.png";
import { StarHalfIcon, StarIcon } from "@phosphor-icons/react/dist/ssr";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import styles from "./opinions.module.css";

export default async function Opinions() {
  const t = await getTranslations("HomePage.opinions");

  return (
    <section className={styles.container}>
      <div>
        <h2 className={styles.opinionsTitle}>{t("title")}</h2>
        <div className={styles.decorativeLine} />
      </div>
      <div className={styles.opinionsContainer}>
        <article className={styles.firstOpinionArticle}>
          <header className={styles.firstOpinionHeader}>
            <h3>{t("first.name")}</h3>
            <span className={styles.starIcons}>
              <StarIcon weight="fill" />
              <StarIcon weight="fill" />
              <StarIcon weight="fill" />
              <StarIcon weight="fill" />
              <StarIcon weight="fill" />
            </span>
          </header>
          <blockquote>
            <p>{t("first.opinion")}</p>
          </blockquote>
        </article>
        <div className={styles.otherOpinionsContainer}>
          <article
            className={`${styles.secondOpinionArticle} ${styles.bgColor1}`}
          >
            <Image
              src={img}
              alt=""
            />
            <header>
              <h3>{t("second.name")}</h3>
              <span className={styles.starIcons}>
                <StarIcon weight="fill" />
                <StarIcon weight="fill" />
                <StarIcon weight="fill" />
                <StarIcon weight="fill" />
                <StarHalfIcon weight="fill" />
              </span>
            </header>
            <blockquote>
              <p>{t("second.opinion")}</p>
            </blockquote>
          </article>
          <article
            className={`${styles.secondOpinionArticle} ${styles.bgColor2}`}
          >
            <Image
              src={img}
              alt=""
            />
            <header>
              <h3>{t("third.name")}</h3>
              <span className={styles.starIcons}>
                <StarIcon weight="fill" />
                <StarIcon weight="fill" />
                <StarIcon weight="fill" />
                <StarIcon weight="fill" />
                <StarIcon weight="fill" />
              </span>
            </header>
            <blockquote>
              <p>{t("third.opinion")}</p>
            </blockquote>
          </article>
          <article
            className={`${styles.secondOpinionArticle} ${styles.bgColor3}`}
          >
            <Image
              src={img}
              alt=""
            />
            <header>
              <h3>{t("fourth.name")}</h3>
              <span className={styles.starIcons}>
                <StarIcon weight="fill" />
                <StarIcon weight="fill" />
                <StarIcon weight="fill" />
                <StarIcon weight="fill" />
                <StarIcon weight="fill" />
              </span>
            </header>
            <blockquote>
              <p>{t("fourth.opinion")}</p>
            </blockquote>
          </article>
          <div className={styles.thirdOpinionsContainer}>
            <article
              className={`${styles.secondOpinionArticle} ${styles.bgColor4}`}
            >
              <header>
                <Image
                  src={img}
                  alt=""
                />
                <h3>{t("fifth.name")}</h3>
                <span className={styles.starIcons}>
                  <StarIcon weight="fill" />
                  <StarIcon weight="fill" />
                  <StarIcon weight="fill" />
                  <StarIcon weight="fill" />
                  <StarHalfIcon weight="fill" />
                </span>
              </header>
              <blockquote>
                <p>{t("fifth.opinion")}</p>
              </blockquote>
            </article>
            <article
              className={`${styles.secondOpinionArticle} ${styles.bgColor5}`}
            >
              <header>
                <Image
                  src={img}
                  alt=""
                />
                <h3>{t("sixt.name")}</h3>
                <span className={styles.starIcons}>
                  <StarIcon weight="fill" />
                  <StarIcon weight="fill" />
                  <StarIcon weight="fill" />
                  <StarIcon weight="fill" />
                  <StarIcon weight="fill" />
                </span>
              </header>
              <blockquote>
                <p>{t("sixt.opinion")}</p>
              </blockquote>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
