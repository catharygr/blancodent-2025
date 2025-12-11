import styles from "./WhyBlancodent.module.css";

import { ReactNode } from "react";

export default function WhyBlancodent({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  return (
    <section className={`${styles.container} narrow-grid`}>
      <div className={styles.titleContainer}>
        <h2 className={styles.h2}>{title}</h2>
        <div className={styles.decorativeLine} />
      </div>
      <div className={styles.cardContainer}>{children}</div>
    </section>
  );
}
