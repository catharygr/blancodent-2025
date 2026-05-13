import secondImg from "@/assets/images/clinica/clinica-9.jpg";
import thirdImg from "@/assets/images/clinica/detalle-9.jpg";
import fourthImg from "@/assets/images/clinica/istock-9.jpg";
import AsideImageBlock from "@/components/AsideImageBlock/AsideImageBlock";
import PeerTube from "@/components/PeerTube";
import { routing } from "@/i18n/routing";
import { Metadata } from "next";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import styles from "../servicios.module.css";
import firstImg from "./images/001.jpg";
import stylesPeerTube from "./page.module.css";

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
        <p className={styles.date}>{metadata?.date}</p>
        <p className={styles.subTitle}>{metadata?.subTitle}</p>
      </header>
      <div className={styles.line} />
      <div className={styles.content}>
        <Content />
        <PeerTube
          url={
            "https://peertube.alexdebosnia.eu/videos/embed/9M2UcLMuojrw3Ap9RX5kcN"
          }
          aspRatio={16 / 9}
          title="20 años con ustedes / 20 years with you"
          classForMargin={stylesPeerTube.margin}
        />
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

{
  /* <div style="position: relative; padding-top: 56.25%;">
  <iframe
    title="Implantes Dentales - Animación"
    width="100%"
    height="100%"
    src="https://peertube.alexdebosnia.eu/videos/embed/9M2UcLMuojrw3Ap9RX5kcN"
    allow="fullscreen"
    sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
    style="border: 0px; position: absolute; inset: 0px;"
  ></iframe>
</div>; */
}
