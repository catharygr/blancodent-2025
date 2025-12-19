import { routing } from "@/i18n/routing";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import styles from "./page.module.css";

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
    <section>
      <h1>{metadata.title}</h1>
      <h3>Layout H3</h3>
      <p>{metadata.subTitle}</p>
      <Content />
    </section>
  );
}
