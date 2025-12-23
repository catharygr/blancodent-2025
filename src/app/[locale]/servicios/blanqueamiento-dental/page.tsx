import { routing } from "@/i18n/routing";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import styles from "./page.module.css";
import recepcion from "@/assets/images/home-page/blanqueamiento.jpg";
import personal from "@/assets/images/home-page/conservadora.jpg";
import noSeQue from "@/assets/images/home-page/imagenes.jpg";
import consulta from "@/assets/images/home-page/ortodoncia.jpg";
import Image from "next/image";

interface ServiciosLayoutProps {
  params: Promise<{ locale: string }>;
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
      <aside className={styles.aside}>
        <Image
          src={recepcion}
          alt=""
        />
        <Image
          src={personal}
          alt=""
        />{" "}
        <Image
          src={consulta}
          alt=""
        />{" "}
        <Image
          src={noSeQue}
          alt=""
        />
      </aside>
    </article>
  );
}
