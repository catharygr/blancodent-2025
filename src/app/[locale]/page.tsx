import Hero from "@/components/HomePage/Hero/Hero/Hero";
import { setRequestLocale, getTranslations } from "next-intl/server";
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
        <a href="#">Test skip link</a>
      </div>
    </main>
  );
}
