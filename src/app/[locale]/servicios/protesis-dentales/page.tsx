import secondImg from "@/assets/images/clinica/clinica-4.jpg";
import thirdImg from "@/assets/images/clinica/detalle-4.jpg";
import AsideImageBlock from "@/components/AsideImageBlock/AsideImageBlock";
import { routing } from "@/i18n/routing";
import { Metadata } from "next";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import styles from "../servicios.module.css";
import firstImg from "./images/001.jpg";
import fourthImg from "./images/004.jpg";

interface ServiciosLayoutProps {
  params: Promise<{ locale: string }>;
}
// Generate metadata for a title and content...
export async function generateMetadata({
  params,
}: ServiciosLayoutProps): Promise<Metadata> {
  const { locale } = await params;
  const { metadata } = await import(
    locale && `./markdown/content-${locale}.mdx`
  );

  return {
    title: metadata?.title,
    description: metadata?.subTitle,
  };
}

export default async function BlanqueamientoDental({
  params,
}: ServiciosLayoutProps) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Dynamic import based on locale
  const { metadata, default: Content } = await import(
    locale && `./markdown/content-${locale}.mdx`
  );

  return (
    <article className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.h1}>{metadata?.title}</h1>
        <p className={styles.date}>Última edición: {metadata?.date}</p>
        <p className={styles.subTitle}>{metadata?.subTitle}</p>
      </header>
      <div className={styles.line} />
      <div className={styles.content}>
        <Content />
      </div>
      <div className={styles.asideContainer}>
        <AsideImageBlock
          url1={firstImg}
          url2={secondImg}
          url3={thirdImg}
          url4={fourthImg}
        />
      </div>
    </article>
  );
}
