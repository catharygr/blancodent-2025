import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";

export default async function HomePage({
  params,
}: Readonly<{
  params: { locale: string };
}>) {
  const { locale } = await params;
  // Activa el renderizado estático de la página en el idioma solicitado
  setRequestLocale(locale);
  const t = await getTranslations("HomePage");
  return (
    <div>
      <h1>{t("title")}</h1>
      <Link href="/about">{t("about")}</Link>
    </div>
  );
}
