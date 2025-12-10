import {
  implantologia,
  ortodoncia,
  periodoncia,
  blanqueamiento,
  bruxismo,
  odontologiaConservadora,
  endodoncia,
  protesis,
  higiene,
} from "@/assets/links";

import implantologiaImg from "@/assets/images/home-page/implantologia.jpg";
import ortodonciaImg from "@/assets/images/home-page/ortodoncia.jpg";
import periodonciaImg from "@/assets/images/home-page/periodoncia.jpg";
import blanqueamientoImg from "@/assets/images/home-page/blanqueamiento.jpg";
import bruxismoImg from "@/assets/images/home-page/bruxismo.jpg";
import odontologiaConservadoraImg from "@/assets/images/home-page/conservadora.jpg";
import endodonciaImg from "@/assets/images/home-page/endodoncia.jpg";
import protesisImg from "@/assets/images/home-page/protesis.jpg";
import higieneImg from "@/assets/images/home-page/higiene.png";

export const sliderServices = [
  {
    img: implantologiaImg,
    link: implantologia(),
  },
  {
    img: ortodonciaImg,
    link: ortodoncia(),
  },
  {
    img: periodonciaImg,
    link: periodoncia(),
  },
  {
    img: blanqueamientoImg,
    link: blanqueamiento(),
  },
  {
    img: bruxismoImg,
    link: bruxismo(),
  },
  {
    img: odontologiaConservadoraImg,
    link: odontologiaConservadora(),
  },
  {
    img: endodonciaImg,
    link: endodoncia(),
  },
  {
    img: protesisImg,
    link: protesis(),
  },
  {
    img: higieneImg,
    link: higiene(),
  },
];
