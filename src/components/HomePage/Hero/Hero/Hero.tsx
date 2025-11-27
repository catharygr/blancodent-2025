import HeroHeader from "@/components/HomePage/Hero/HeroHeader/HeroHeader";

import styles from "./hero.module.css";
import { useTranslations } from "next-intl";
import HeroCarousel from "@/components/HomePage/Hero/HeroCarousel/HeroCarousel";

export default function Hero() {
  const t = useTranslations("HomePage");

  return (
    <section className={`narrow-grid ${styles.hero}`}>
      <HeroHeader />
      <HeroCarousel />
    </section>
  );
}
