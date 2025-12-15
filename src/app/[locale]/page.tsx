import Hero from "@/components/HomePage/Hero/Hero/Hero";
import { setRequestLocale, getTranslations } from "next-intl/server";
import AdBloque from "@/components/AdBloque/AdBloque";
import firstAdBloqueImage from "@/assets/images/chica-1.svg";
import Slider from "@/components/Slider/Slider/Slider";
import SliderCard from "@/components/Slider/SliderCard/SliderCard";
import { sliderServices } from "@/assets/data/home-page-slider-services";
import { sliderClinica } from "@/assets/data/home-page-slider-clinica";
import Offers from "@/components/HomePage/Offers";
import WhyBlancodent from "@/components/WhyBlancodent/WhyBlancodent";
import WhyBlancodentCard from "@/components/WhyBlancodent/WhyBlancodentCard";
import { cardImages } from "@/assets/data/home-page-whyBlancodent";
import Opinions from "@/components/HomePage/Opinions/Opinions";

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
        title={t("adBloques.first.title")}
        content={t("adBloques.first.content")}
        image={firstAdBloqueImage}
        imageAlt={t("adBloques.first.imageAlt")}
        direction="left"
      />
      <Slider>
        {sliderClinica.map((card, index) => (
          <SliderCard
            key={index}
            img={card.img}
            link={card.link}
            title={t(`sliders.sliderClinica.card${index + 1}.title`)}
            content={t(`sliders.sliderClinica.card${index + 1}.content`)}
            alt={t(`sliders.sliderClinica.card${index + 1}.alt`)}
            linkContent={t(
              `sliders.sliderClinica.card${index + 1}.linkContent`
            )}
          />
        ))}
      </Slider>
      <AdBloque
        title={t("adBloques.second.title")}
        content={t("adBloques.second.content")}
        image={firstAdBloqueImage}
        imageAlt={t("adBloques.second.imageAlt")}
        direction="right"
      />
      <Offers>
        {" "}
        <h3>{t("offers.title")}</h3>
        <p>{t("offers.p1")}</p>
        <p>{t("offers.p2")}</p>
      </Offers>

      <WhyBlancodent title={t("whyBlancodent.title")}>
        {cardImages.map((img, index) => (
          <WhyBlancodentCard
            key={index}
            img={img}
            title={t(`whyBlancodent.card${index + 1}.title`)}
            content={t(`whyBlancodent.card${index + 1}.content`)}
            color={`color-${index + 1}`}
          />
        ))}
      </WhyBlancodent>
      <AdBloque
        title={t("adBloques.second.title")}
        content={t("adBloques.second.content")}
        image={firstAdBloqueImage}
        imageAlt={t("adBloques.second.imageAlt")}
        direction="left"
      />
      <Opinions />
      <AdBloque
        title={t("adBloques.second.title")}
        content={t("adBloques.second.content")}
        image={firstAdBloqueImage}
        imageAlt={t("adBloques.second.imageAlt")}
        direction="right"
      />
      <Slider>
        {sliderServices.map((card, index) => (
          <SliderCard
            key={index}
            img={card.img}
            link={card.link}
            title={t(`sliders.sliderServices.card${index + 1}.title`)}
            content={t(`sliders.sliderServices.card${index + 1}.content`)}
            alt={t(`sliders.sliderServices.card${index + 1}.alt`)}
            linkContent={t(
              `sliders.sliderServices.card${index + 1}.linkContent`
            )}
          />
        ))}
      </Slider>
    </main>
  );
}
