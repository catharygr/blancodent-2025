import Image, { StaticImageData } from "next/image";
import styles from "./AdBloque.module.css";

interface ChildComponentProps {
  title: string;
  content: string;
  image: StaticImageData;
  imageAlt: string;
  direction: "left" | "right";
}
export default function AdBloque({
  title,
  content,
  image,
  imageAlt,
  direction,
}: ChildComponentProps) {
  return (
    <div
      className={`${styles.container} narrow-grid`}
      data-direction={direction}
    >
      <div className={styles.titleContainer}>
        <h2 className={styles.h2}>{title}</h2>
        <div className={styles.decorativeLine} />
        <Image
          className={styles.titleImg}
          src={image}
          alt={imageAlt}
        />
      </div>
      <p className={styles.content}>{content}</p>
      <Image
        className={styles.gridImg}
        src={image}
        alt={imageAlt}
      />
    </div>
  );
}
