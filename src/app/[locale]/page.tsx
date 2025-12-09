import Hero from "@/components/HomePage/Hero/Hero/Hero";
import { setRequestLocale, getTranslations } from "next-intl/server";
import AdBloque from "@/components/AdBloque/AdBloque";
import firstAdBloqueImage from "@/assets/images/chica-1.svg";
import Slider from "@/components/Slider/Slider/Slider";
import SliderCard from "@/components/Slider/SliderCard/SliderCard";
import { homePageSlider } from "@/assets/data/home-page-slider";

console.log(homePageSlider);

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
      <Slider>
        <SliderCard />
        <SliderCard />
        <SliderCard />
        <SliderCard />
        <SliderCard />
        <SliderCard />
      </Slider>
      <AdBloque
        title={t("AdBloques.second.title")}
        content={t("AdBloques.second.content")}
        image={firstAdBloqueImage}
        imageAlt={t("AdBloques.second.imageAlt")}
        direction="right"
      />
    </main>
  );
}
