import styles from "./Slider.module.css";
import { ReactNode } from "react";

export default function Slider({ children }: { children: ReactNode }) {
  return <div className={styles.sliderContainer}>{children}</div>;
}
