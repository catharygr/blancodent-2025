import Image, { StaticImageData } from "next/image";
import styles from "./WhyBlancodentCard.module.css";

interface CardProps {
  title: string;
  img: StaticImageData | string;
  alt: string;
  content: string;
  color: string;
}

export default function WhyBlancodentCard({
  title,
  img,
  alt,
  content,
  color,
}: CardProps) {
  return (
    <div className={`${styles.container} ${styles[color]}`}>
      <h3 className={styles.h3}>{title}</h3>
      <Image
        className={styles.img}
        src={img}
        alt={alt}
      />
      <p>{content}</p>
    </div>
  );
}
