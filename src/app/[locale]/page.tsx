import Hero from "@/components/HomePage/Hero/Hero/Hero";
import { setRequestLocale, getTranslations } from "next-intl/server";
import AdBloque from "@/components/AdBloque/AdBloque";
import firstAdBloqueImage from "@/assets/images/chica-1.svg";
export default async function HomePage({
  params,
}: Readonly<{
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  // Enable static rendering in next-intl
  setRequestLocale(locale);
  const t = await getTranslations("HomePage");
  return (
    <main
      className="wide-grid"
      id="main"
      tabIndex={-1}
    >
      <Hero />
      <div
        id="skip-after-carousel"
        tabIndex={-1}
      >
        {/* <a href="#">Test skip link</a> */}
      </div>
      <AdBloque
        title={t("AdBloques.first.title")}
        content={t("AdBloques.first.content")}
        image={firstAdBloqueImage}
        imageAlt={t("AdBloques.first.imageAlt")}
        direction="left"
      />
    </main>
  );
}
