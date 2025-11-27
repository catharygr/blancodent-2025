"use client";
import { useState, useRef, useMemo } from "react";
import { Link } from "@/i18n/navigation";
import styles from "./heroCarousel.module.css";
import {
  AlignCenterHorizontalIcon,
  ArrowFatLinesLeftIcon,
  ArrowFatLinesRightIcon,
  DotsSixIcon,
  FirstAidIcon,
  PaintBrushIcon,
  PaintBucketIcon,
  SprayBottleIcon,
  ToothIcon,
} from "@phosphor-icons/react/dist/ssr";
import { useTranslations } from "next-intl";
import {
  blanqueamiento,
  contacto,
  higiene,
  implantologia,
  odontologiaConservadora,
  ortodoncia,
  periodoncia,
} from "@/assets/links";
import SkipLink from "@/components/SkipLink/SkipLink";
import type { Icon } from "@phosphor-icons/react";
import Image from "next/image";
import PalmTrees from "@/assets/images/palm-trees.svg";

type SlideData = {
  slideBtnLinks: Array<() => string>;
  slideBtnIcons: Icon[];
};

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLUListElement>(null);
  const totalSlides = 6;
  const t = useTranslations("HomePage");

  const scrollTheSlide = (slideNumber: number) => {
    if (!sliderRef.current) return;
    const slideWidth = sliderRef.current.offsetWidth;

    sliderRef.current.scrollTo({
      left: slideWidth * slideNumber,
      behavior: "smooth",
    });
  };

  const handleLeftAndRightSlide = (direction: "prev" | "next") => {
    let newSlide =
      direction === "next"
        ? (currentSlide + 1) % totalSlides
        : (currentSlide - 1 + totalSlides) % totalSlides;

    setCurrentSlide(newSlide);
    scrollTheSlide(newSlide);
  };

  const handleDirectButtonSlide = (slideNumber: number) => {
    setCurrentSlide(slideNumber);
    scrollTheSlide(slideNumber);
  };

  const slideData = useMemo<SlideData>(
    () => ({
      slideBtnLinks: [
        blanqueamiento,
        ortodoncia,
        implantologia,
        periodoncia,
        odontologiaConservadora,
        higiene,
      ],
      slideBtnIcons: [
        PaintBrushIcon,
        AlignCenterHorizontalIcon,
        ToothIcon,
        FirstAidIcon,
        PaintBucketIcon,
        SprayBottleIcon,
      ],
    }),
    []
  );

  return (
    <div className={styles.carouselContainer}>
      <Image
        src={PalmTrees}
        alt="test"
      />
      <SkipLink
        link="skip-after-carousel"
        content={t("heroCarousel.heroSlides.skipLink")}
      />
      <div className={styles.slider}>
        <ul
          className={styles.ulOuter}
          role="list"
          ref={sliderRef}
        >
          {slideData.slideBtnLinks.map((link, index) => (
            <li key={index}>
              <div className={styles.slideContainer}>
                <h2>{t(`heroCarousel.heroSlides.slide${index + 1}.h2`)}</h2>
                <h3>{t(`heroCarousel.heroSlides.slide${index + 1}.h3`)}</h3>
                <p>{t(`heroCarousel.heroSlides.slide${index + 1}.p`)}</p>
                <Link
                  className={`btn ${styles.slideBtnLink}`}
                  href={link()}
                >
                  {t(`heroCarousel.heroSlides.slide${index + 1}.link`)}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.buttonsContainer}>
        <button
          className={styles.navButton}
          onClick={() => handleLeftAndRightSlide("prev")}
          aria-label={t("heroCarousel.navButtonLeftAlt")}
        >
          <ArrowFatLinesLeftIcon />
        </button>
        {/* • */}
        <DotsSixIcon weight="bold" />
        <button
          className={styles.navButton}
          onClick={() => handleLeftAndRightSlide("next")}
          aria-label={t("heroCarousel.navButtonRightAlt")}
        >
          <ArrowFatLinesRightIcon />
        </button>
      </div>

      <div className={styles.tagLineContainer}>
        {/* Remowe this test image */}
        <Image
          src={PalmTrees}
          alt="test"
        />
        <p>
          {t("heroCarousel.tagLine.p")}{" "}
          <Link href={contacto()}>{t("heroCarousel.tagLine.link")}</Link>
        </p>
      </div>
      <div className={styles.menuCarouselContainerQuery}>
        <div
          className={styles.menuCarousel}
          role="group"
          aria-label={t("heroCarousel.carouselControls")}
        >
          <div className={styles.leftColumn}>
            {slideData.slideBtnIcons.slice(0, 3).map((Icon, index) => (
              <button
                key={index}
                className={styles.menuCarouselBtn}
                onClick={() => handleDirectButtonSlide(index)}
                aria-current={currentSlide === index ? "true" : undefined}
              >
                <Icon weight="duotone" />
                {t(`heroCarousel.heroMenuBtns.${index + 1}`)}
              </button>
            ))}
          </div>
          <div className={styles.rightColumn}>
            {slideData.slideBtnIcons.slice(3).map((Icon, index) => (
              <button
                key={index}
                className={styles.menuCarouselBtn}
                onClick={() => handleDirectButtonSlide(index + 3)}
                aria-current={currentSlide === index + 3 ? "true" : undefined}
              >
                <Icon weight="duotone" />
                {t(`heroCarousel.heroMenuBtns.${index + 4}`)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
