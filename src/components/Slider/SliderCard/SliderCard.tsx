import Image, { StaticImageData } from "next/image";
import styles from "./SliderCard.module.css";
import Link from "next/link";

interface SliderCardProps {
  img: StaticImageData | string;
  link: string;
  title: string;
  content: string;
  alt: string;
  linkContent: string;
}

export default function SliderCard({
  img,
  link,
  title,
  content,
  alt,
  linkContent,
}: SliderCardProps) {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <Image
          src={img}
          alt={alt}
        />
        <h3 className={styles.h3}>{title}</h3>
      </div>
      <div className={styles.contentContainer}>
        <p className={styles.p}>{content}</p>
        <Link
          className={styles.link}
          href={link}
        >
          {linkContent}
        </Link>
      </div>
    </div>
  );
}
