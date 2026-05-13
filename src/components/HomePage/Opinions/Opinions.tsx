import img1 from "@/assets/images/home-page/opinions/b1.svg";
import img4 from "@/assets/images/home-page/opinions/b2.svg";
import img0 from "@/assets/images/home-page/opinions/b3.svg";
import img2 from "@/assets/images/home-page/opinions/g1.svg";
import img3 from "@/assets/images/home-page/opinions/g2.svg";
import img5 from "@/assets/images/home-page/opinions/g3.svg";

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
        <div className={styles.firstOpinionArticle}>
          <header className={styles.firstOpinionHeader}>
            <Image
              src={img0}
              alt=""
            />
            <h3>{t("first.name")}</h3>
            <span
              aria-hidden={true}
              className={styles.starIcons}
            >
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
        </div>
        <div className={styles.otherOpinionsContainer}>
          <div className={`${styles.secondOpinionArticle} ${styles.bgColor1}`}>
            <Image
              src={img1}
              alt=""
            />
            <header>
              <h3>{t("second.name")}</h3>
              <span
                aria-hidden={true}
                className={styles.starIcons}
              >
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
          </div>
          <div className={`${styles.secondOpinionArticle} ${styles.bgColor2}`}>
            <Image
              src={img2}
              alt=""
            />
            <header>
              <h3>{t("third.name")}</h3>
              <span
                aria-hidden={true}
                className={styles.starIcons}
              >
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
          </div>
          <div className={`${styles.secondOpinionArticle} ${styles.bgColor3}`}>
            <Image
              src={img3}
              alt=""
            />
            <header>
              <h3>{t("fourth.name")}</h3>
              <span
                aria-hidden={true}
                className={styles.starIcons}
              >
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
          </div>
          <div className={styles.thirdOpinionsContainer}>
            <div
              className={`${styles.secondOpinionArticle} ${styles.bgColor4}`}
            >
              <header>
                <Image
                  src={img4}
                  alt=""
                />
                <h3>{t("fifth.name")}</h3>
                <span
                  aria-hidden={true}
                  className={styles.starIcons}
                >
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
            </div>
            <div
              className={`${styles.secondOpinionArticle} ${styles.bgColor5}`}
            >
              <header>
                <Image
                  src={img5}
                  alt=""
                />
                <h3>{t("sixt.name")}</h3>
                <span
                  aria-hidden={true}
                  className={styles.starIcons}
                >
                  <StarIcon weight="fill" />
                  <StarIcon weight="fill" />
                  {/* <StarIcon weight="fill" /> */}
                  <StarIcon weight="fill" />
                  <StarIcon weight="fill" />
                </span>
              </header>
              <blockquote>
                <p>{t("sixt.opinion")}</p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
