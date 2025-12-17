import styles from "./Opinions.module.css";
import { getTranslations } from "next-intl/server";
import img from "@/assets/images/home-page/porque-card/cardimg-1.png";
import Image from "next/image";
import { StarHalfIcon, StarIcon } from "@phosphor-icons/react/dist/ssr";

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
            <span className={styles.starIcons}>
              <StarIcon weight="fill" />
              <StarIcon weight="fill" />
              <StarIcon weight="fill" />
              <StarIcon weight="fill" />
              <StarIcon weight="fill" />
            </span>
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
          <article
            className={`${styles.secondOpinionArticle} ${styles.bgColor1}`}
          >
            <Image
              src={img}
              alt=""
            />
            <header>
              <h3>Matt</h3>
              <span className={styles.starIcons}>
                <StarIcon weight="fill" />
                <StarIcon weight="fill" />
                <StarIcon weight="fill" />
                <StarIcon weight="fill" />
                <StarHalfIcon weight="fill" />
              </span>
            </header>
            <blockquote>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Exercitationem quos odio explicabo quas error eum velit iste quo
                architecto saepe?
              </p>
            </blockquote>
          </article>{" "}
          <article
            className={`${styles.secondOpinionArticle} ${styles.bgColor2}`}
          >
            <Image
              src={img}
              alt=""
            />
            <header>
              <h3>Brendann</h3>
              <span className={styles.starIcons}>
                <StarIcon weight="fill" />
                <StarIcon weight="fill" />
                <StarIcon weight="fill" />
                <StarIcon weight="fill" />
                <StarIcon weight="fill" />
              </span>
            </header>
            <blockquote>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Exercitationem quos odio explicabo quas error eum velit iste quo
                architecto saepe?
              </p>
            </blockquote>
          </article>{" "}
          <article
            className={`${styles.secondOpinionArticle} ${styles.bgColor3}`}
          >
            <Image
              src={img}
              alt=""
            />
            <header>
              <h3>Marie</h3>
              <span className={styles.starIcons}>
                <StarIcon weight="fill" />
                <StarIcon weight="fill" />
                <StarIcon weight="fill" />
                <StarIcon weight="fill" />
                <StarIcon weight="fill" />
              </span>
            </header>
            <blockquote>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Exercitationem quos odio explicabo quas error eum velit iste quo
                architecto saepe?
              </p>
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
                <h3>Marie</h3>
                <span className={styles.starIcons}>
                  <StarIcon weight="fill" />
                  <StarIcon weight="fill" />
                  <StarIcon weight="fill" />
                  <StarIcon weight="fill" />
                  <StarHalfIcon weight="fill" />
                </span>
              </header>
              <blockquote>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Exercitationem quos odio explicabo quas error eum velit iste
                  quo architecto saepe?
                </p>
              </blockquote>
            </article>{" "}
            <article
              className={`${styles.secondOpinionArticle} ${styles.bgColor5}`}
            >
              <header>
                <Image
                  src={img}
                  alt=""
                />
                <h3>Beatriz</h3>
                <span className={styles.starIcons}>
                  <StarIcon weight="fill" />
                  <StarIcon weight="fill" />
                  <StarIcon weight="fill" />
                  <StarIcon weight="fill" />
                  <StarIcon weight="fill" />
                </span>
              </header>
              <blockquote>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Exercitationem quos odio explicabo quas error eum velit iste
                  quo architecto saepe?
                </p>
              </blockquote>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
