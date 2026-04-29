import { sliderClinica } from "@/assets/data/home-page-slider-clinica";
import { sliderServices } from "@/assets/data/home-page-slider-services";
import { cardImages } from "@/assets/data/home-page-why-blancodent";
import {
  default as firstAdBloqueImage,
  default as fourthAdBloqueImage,
  default as secondAdBloqueImage,
  default as thirdAdBloqueImage,
} from "@/assets/images/palm-trees.svg";
import AdBloque from "@/components/AdBloque";
import Hero from "@/components/HomePage/Hero/Hero";
import Offers from "@/components/HomePage/Offers";
import Opinions from "@/components/HomePage/Opinions";
import WhyBlancodent from "@/components/HomePage/WhyBlancodent/WhyBlancodent";
import WhyBlancodentCard from "@/components/HomePage/WhyBlancodent/WhyBlancodentCard";
import PeerTube from "@/components/PeerTube";
import Slider from "@/components/Slider/Slider";
import SliderCard from "@/components/Slider/SliderCard";
import { getTranslations, setRequestLocale } from "next-intl/server";

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
      ></div>
      <AdBloque
        title={t("adBloques.first.title")}
        content={t("adBloques.first.content")}
        image={firstAdBloqueImage}
        imageAlt={t("adBloques.first.imageAlt")}
        direction="right"
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
              `sliders.sliderClinica.card${index + 1}.linkContent`,
            )}
          />
        ))}
      </Slider>
      <AdBloque
        title={t("adBloques.second.title")}
        content={t("adBloques.second.content")}
        image={secondAdBloqueImage}
        imageAlt={t("adBloques.second.imageAlt")}
        direction="left"
      />
      <Offers title={t("offers.title")}>
        <h3>{t("offers.one.title")}</h3>
        <p>{t("offers.one.p1")}</p>
        <p>{t("offers.one.p2")}</p>
        <h3>{t("offers.two.title")}</h3>
        <p>{t("offers.two.p1")}</p>
        <p>{t("offers.two.p2")}</p>
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
        title={t("adBloques.third.title")}
        content={t("adBloques.third.content")}
        image={thirdAdBloqueImage}
        imageAlt={t("adBloques.third.imageAlt")}
        direction="right"
      />
      <Opinions />
      <PeerTube
        url={
          "https://peertube.alexdebosnia.eu/videos/embed/ka86UPsbcHnHUetT1zFdX7"
        }
        aspRatio={16 / 9}
        title={"Interior de la clínica"}
      />
      <AdBloque
        // title={t("adBloques.second.title")}
        title={t("adBloques.fourth.title")}
        content={t("adBloques.fourth.content")}
        image={fourthAdBloqueImage}
        imageAlt={t("adBloques.fourth.imageAlt")}
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
              `sliders.sliderServices.card${index + 1}.linkContent`,
            )}
          />
        ))}
      </Slider>
    </main>
  );
}
