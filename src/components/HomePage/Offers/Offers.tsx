import styles from "./Offers.module.css";
import backgroudImg from "@/assets/images/home-page/offer-background.jpg";
import Image from "next/image";
import { ReactNode } from "react";

export default function Offers({ children }: { children: ReactNode }) {
  return (
    <section className={styles.container}>
      <div>
        <h2 className={styles.h2}>Última ofertas</h2>
        <div className={styles.decorativeLine} />
      </div>
      <div className={styles.imageContainer}>
        <Image
          className={styles.containerImg}
          src={backgroudImg}
          alt="Dibujo de peces en el mar"
          aria-hidden={true}
        />
        <div className={styles.content}>{children}</div>
      </div>
    </section>
  );
}
