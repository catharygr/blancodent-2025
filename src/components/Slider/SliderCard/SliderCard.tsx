import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import styles from "./SliderCard.module.css";

interface SliderCardProps {
  img: StaticImageData | string;
  link: string;
  title: string;
  content: string;
  alt: string;
}

export default function SliderCard({
  img,
  link,
  title,
  content,
  alt,
}: SliderCardProps) {
  const UUID = crypto.randomUUID();

  return (
    <div className={styles.container}>
      <Link
        className={styles.link}
        href={link}
        aria-label={title}
        aria-describedby={UUID}
      >
        <div className={styles.titleContainer}>
          <Image
            aria-hidden={true}
            src={img}
            alt={alt}
          />
          <h3 className={styles.h3}>{title}</h3>
        </div>
        <div className={styles.contentContainer}>
          <p
            id={UUID}
            className={styles.p}
          >
            {content}
          </p>
        </div>
      </Link>
    </div>
  );
}
