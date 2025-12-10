import Hero from "@/components/HomePage/Hero/Hero/Hero";
import { setRequestLocale, getTranslations } from "next-intl/server";
import AdBloque from "@/components/AdBloque/AdBloque";
import firstAdBloqueImage from "@/assets/images/chica-1.svg";
import Slider from "@/components/Slider/Slider/Slider";
import SliderCard from "@/components/Slider/SliderCard/SliderCard";
import { sliderServices } from "@/assets/data/home-page-slider-services";
import { sliderClinica } from "@/assets/data/home-page-slider-clinica";

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
        {sliderClinica.map((card, index) => (
          <SliderCard
            key={index}
            img={card.img}
            link={card.link}
            title={t(`Sliders.sliderClinica.card${index + 1}.title`)}
            content={t(`Sliders.sliderClinica.card${index + 1}.content`)}
            alt={t(`Sliders.sliderClinica.card${index + 1}.alt`)}
            linkContent={t(
              `Sliders.sliderClinica.card${index + 1}.linkContent`
            )}
          />
        ))}
      </Slider>
      <AdBloque
        title={t("AdBloques.second.title")}
        content={t("AdBloques.second.content")}
        image={firstAdBloqueImage}
        imageAlt={t("AdBloques.second.imageAlt")}
        direction="right"
      />
      <Slider>
        {sliderServices.map((card, index) => (
          <SliderCard
            key={index}
            img={card.img}
            link={card.link}
            title={t(`Sliders.sliderServices.card${index + 1}.title`)}
            content={t(`Sliders.sliderServices.card${index + 1}.content`)}
            alt={t(`Sliders.sliderServices.card${index + 1}.alt`)}
            linkContent={t(
              `Sliders.sliderServices.card${index + 1}.linkContent`
            )}
          />
        ))}
      </Slider>
    </main>
  );
}
