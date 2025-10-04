import { MetadataRoute } from "next";
import { areas, routes } from "@/config/site";
import { blogPosts } from "@/config/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://naklafshjeddah.com";

  const staticPages = [
    "",
    "/services",
    "/services/home-moving-jeddah",
    "/services/villa-moving-jeddah",
    "/services/office-relocation-jeddah",
    "/services/packing-unpacking",
    "/services/disassembly-reassembly",
    "/services/ac-curtains-installation",
    "/services/appliances-tv-mounting",
    "/services/hoist-crane-moving",
    "/services/intra-building-moving",
    "/services/urgent-night-weekend",
    "/services/long-distance-moving",
    "/services/piano-heavy-items",
    "/services/fine-art-antiques",
    "/services/it-server-relocation",
    "/services/kitchen-disassembly",
    "/services/materials-supply",
    "/services/storage",
    "/services/corporate-contracts",
    "/sectors",
    "/sectors/residential",
    "/sectors/commercial",
    "/sectors/hospitality",
    "/sectors/warehouses",
    "/sectors/education",
    "/sectors/healthcare",
    "/jeddah",
    "/routes",
    "/storage",
    "/offers",
    "/blog",
    "/contact",
  ];

  const areaPages = areas.map((area) => `/jeddah/${area.slug}`);
  const routePages = routes.map((route) => `/routes/${route.slug}`);
  const blogPages = blogPosts.map((post) => `/blog/${post.slug}`);

  const allPages = [...staticPages, ...areaPages, ...routePages, ...blogPages];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Arabic pages (default, no prefix)
  allPages.forEach((page) => {
    sitemapEntries.push({
      url: `${baseUrl}${page}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: page === "" ? 1.0 : page.includes("/services/") ? 0.9 : 0.8,
      alternates: {
        languages: {
          ar: `${baseUrl}${page}`,
          en: `${baseUrl}/en${page}`,
        },
      },
    });
  });

  return sitemapEntries;
}






