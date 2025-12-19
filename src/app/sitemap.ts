// import type { MetadataRoute } from "next";

// export default function sitemap(): MetadataRoute.Sitemap {
//   return [
//     {
//       url: "https://blancodent.com",
//       lastModified: new Date(),
//       alternates: {
//         languages: {
//           es: "https://blancodent.com/es",
//           en: "https://blancodent.com/en",
//         },
//       },
//     },
//   ];
// }

import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://blancodent.com";

  const routes = [
    "",
    "/servicios",
    "/servicios/protesis-dentales",
    "/servicios/higiene-dental",
    "/servicios/periodoncia",
    "/servicios/odontologia-conservadora",
    "/servicios/blanqueamiento-dental",
    "/servicios/implantologia",
    "/servicios/ortodoncia",
    "/servicios/bruxismo-o-rechinchar-de-dientes",
    "/servicios/endodoncia",
    "/articulos",
    "/articulos/tu-propio-diente-como-biomaterial",
    "/articulos/anestesia",
    "/articulos/mal-aliento",
    "/articulos/para-los-fumadores",
    "/articulos/para-los-peques",
    "/articulos/laser-dental",
    "/contacto",
    "/asi-somos",
    "/asi-somos/los-horarios",
    "/asi-somos/financiacion",
    "/asi-somos/las-imagenes",
    "/asi-somos/el-personal",
    "/asi-somos/transporte",
    "/asi-somos/ubicacion",
    "/varios",
    "/varios/nota-legal",
    "/varios/la-salud-esta-navidad",
    "/varios/ofertas-continuas",
    "/varios/cita-previa",
    "/varios/preguntas-frecuentes",
    "/varios/covid-19",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    alternates: {
      languages: {
        es: `${baseUrl}/es${route}`,
        en: `${baseUrl}/en${route}`,
      },
    },
  }));
}
