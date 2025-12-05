import Image from "next/image";
import styles from "./SliderCard.module.css";
import imagen from "@/assets/images/personal.jpg";
import Link from "next/link";

export default function SliderCard() {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <Image
          src={imagen}
          alt=""
        />
        <h3 className={styles.h3}>Personal</h3>
      </div>
      <div className={styles.contentContainer}>
        <p className={styles.p}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quia
          error animi ducimus quaerat quod, iusto doloremque voluptatibus
          laborum neque eum rem vel cum ab aliquam minus illo id iure?
        </p>
        <Link
          className={styles.link}
          href="#"
        >
          Leer más...
        </Link>
      </div>
    </div>
  );
}
