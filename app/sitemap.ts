import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ajfilms.vercel.app/",
      lastModified: new Date(),
    },
    {
      url: "https://ajfilms.vercel.app/about",
      lastModified: new Date(),
    },
    {
      url: "https://ajfilms.vercel.app/contact",
      lastModified: new Date(),
    },
  ];
}