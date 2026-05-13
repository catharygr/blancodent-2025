import HeroCarousel from "@/components/HomePage/Hero/HeroCarousel/HeroCarousel";
import HeroHeader from "@/components/HomePage/Hero/HeroHeader/HeroHeader";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <section className={`narrow-grid ${styles.hero}`}>
      <HeroHeader />
      <HeroCarousel />
    </section>
  );
}
