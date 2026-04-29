import { ReactNode } from "react";
import styles from "./Slider.module.css";

export default function Slider({ children }: { children: ReactNode }) {
  return <section className={styles.sliderContainer}>{children}</section>;
}
