import {
  elPersonal,
  lasImagenes,
  losHorarios,
  ubicacion,
  transporte,
  financiacion,
} from "@/assets/links";

import financiacionImg from "@/assets/images/home-page/financiacion.jpg";
import horariosImg from "@/assets/images/home-page/horarios.jpg";
import imagenesImg from "@/assets/images/home-page/imagenes.jpg";
import personalImg from "@/assets/images/home-page/personal.jpg";
import transporteImg from "@/assets/images/home-page/transporte.jpg";
import ubicacionImg from "@/assets/images/home-page/ubicacion.jpg";

export const sliderClinica = [
  {
    img: personalImg,
    link: elPersonal(),
  },
  {
    img: imagenesImg,
    link: lasImagenes(),
  },
  {
    img: horariosImg,
    link: losHorarios(),
  },
  {
    img: ubicacionImg,
    link: ubicacion(),
  },
  {
    img: transporteImg,
    link: transporte(),
  },
  {
    img: financiacionImg,
    link: financiacion(),
  },
];
