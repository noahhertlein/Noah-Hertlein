import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://noahhertlein.xyz", lastModified: new Date(), priority: 1 }];
}
