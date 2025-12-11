import Image, { StaticImageData } from "next/image";
import styles from "./WhyBlancodentCard.module.css";

interface CardProps {
  title: string;
  img: StaticImageData | string;
  alt: string;
  content: string;
}

export default function WhyBlancodentCard({
  title,
  img,
  alt,
  content,
}: CardProps) {
  return (
    <div className={styles.container}>
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
