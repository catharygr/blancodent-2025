import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";

export default async function HomePage({
  params,
}: Readonly<{
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  // Activa el renderizado estático de la página en el idioma solicitado
  setRequestLocale(locale);
  const t = await getTranslations("HomePage");
  return (
    <main
      id="main"
      tabIndex={-1}
    >
      <h1>{t("title")}</h1>
      <Link href="/about">{t("about")}</Link>
    </main>
  );
}
