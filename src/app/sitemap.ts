import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://blancodent.com",
      lastModified: new Date(),
      alternates: {
        languages: {
          es: "https://blancodent.com/es",
          en: "https://blancodent.com/en",
        },
      },
    },
  ];
}
