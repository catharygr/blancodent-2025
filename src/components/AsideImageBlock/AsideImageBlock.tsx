import Image, { StaticImageData } from "next/image";
import styles from "./AsideImageBlock.module.css";

type AsideImageBlockProps = {
  url1: StaticImageData;
  url2: StaticImageData;
  url3: StaticImageData;
  url4: StaticImageData;
};

export default async function AsideImageBlock({
  url1,
  url2,
  url3,
  url4,
}: AsideImageBlockProps) {
  return (
    <aside
      aria-hidden={true}
      className={styles.aside}
    >
      <Image
        src={url1}
        alt=""
        className={styles.imageQuery}
      />
      <Image
        src={url2}
        alt=""
        className={styles.imageQuery}
      />
      <Image
        src={url3}
        alt=""
        className={styles.imageQuery}
      />
      <Image
        src={url4}
        alt=""
        className={styles.imageQuery}
      />
    </aside>
  );
}
