/**
 * JSON-LD Structured Data Helpers for Local SEO
 * Generates Schema.org markup for images, videos, and local business
 */

import { site } from "@/config/site";

/**
 * Jeddah coordinates with slight variations for different media
 */
export const JEDDAH_COORDS = {
  lat: 21.4925,
  lon: 39.17757,
} as const;

/**
 * ImageObject with GEO location for Google Images/Search
 */
export interface ImageLDParams {
  url: string;
  lat?: number;
  lon?: number;
  caption?: string;
  width?: number;
  height?: number;
  neighborhood?: string;
}

export function imageLD({
  url,
  lat = JEDDAH_COORDS.lat,
  lon = JEDDAH_COORDS.lon,
  caption,
  width,
  height,
  neighborhood,
}: ImageLDParams) {
  const locationName = neighborhood ? `${neighborhood}, Jeddah` : "Jeddah";
  
  return {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    contentUrl: url,
    caption: caption || "Furniture Moving Services in Jeddah",
    representativeOfPage: true,
    ...(width && height && { width, height }),
    contentLocation: {
      "@type": "Place",
      name: locationName,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Jeddah",
        addressRegion: "Makkah Province",
        addressCountry: "SA",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: lat,
        longitude: lon,
      },
    },
    copyrightHolder: {
      "@type": "Organization",
      name: site.brand,
      url: "https://www.naklafshjeddah.com",
    },
  };
}

/**
 * VideoObject with GEO location
 */
export interface VideoLDParams {
  name: string;
  description: string;
  url: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration?: string; // ISO 8601 format e.g. "PT2M30S"
  lat?: number;
  lon?: number;
  neighborhood?: string;
}

export function videoLD({
  name,
  description,
  url,
  thumbnailUrl,
  uploadDate,
  duration,
  lat = JEDDAH_COORDS.lat,
  lon = JEDDAH_COORDS.lon,
  neighborhood,
}: VideoLDParams) {
  const locationName = neighborhood ? `${neighborhood}, Jeddah` : "Jeddah";
  
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name,
    description,
    thumbnailUrl,
    contentUrl: url,
    uploadDate,
    ...(duration && { duration }),
    contentLocation: {
      "@type": "Place",
      name: locationName,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Jeddah",
        addressRegion: "Makkah Province",
        addressCountry: "SA",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: lat,
        longitude: lon,
      },
    },
    publisher: {
      "@type": "Organization",
      name: site.brand,
      url: "https://www.naklafshjeddah.com",
    },
  };
}

/**
 * LocalBusiness (MovingCompany) for main pages
 */
export function localBusinessLD() {
  return {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    name: site.brand,
    alternateName: "شركة الأفضل لنقل العفش بجدة",
    image: "https://www.naklafshjeddah.com/images/logo.jpg",
    logo: "https://www.naklafshjeddah.com/images/logo.jpg",
    url: "https://www.naklafshjeddah.com",
    telephone: site.phone,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.streetAddress,
      addressLocality: site.address.addressLocality,
      addressRegion: "Makkah Province",
      postalCode: site.address.postalCode,
      addressCountry: site.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: JEDDAH_COORDS.lat,
      longitude: JEDDAH_COORDS.lon,
    },
    openingHoursSpecification: site.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.day,
      opens: h.opens,
      closes: h.closes,
    })),
    areaServed: [
      { "@type": "City", name: "Jeddah", alternateName: "جدة" },
      { "@type": "Place", name: "Al Hamra", alternateName: "الحمراء" },
      { "@type": "Place", name: "Ash Shati", alternateName: "الشاطئ" },
      { "@type": "Place", name: "Ar Rawdah", alternateName: "الروضة" },
      { "@type": "Place", name: "As Salamah", alternateName: "السلامة" },
      { "@type": "Place", name: "An Naim", alternateName: "النعيم" },
      { "@type": "Place", name: "Al Murjan", alternateName: "المرجان" },
      { "@type": "Place", name: "Al Khalidiya", alternateName: "الخالدية" },
      { "@type": "Place", name: "Al Andalus", alternateName: "الأندلس" },
      { "@type": "Place", name: "Al Aziziyah", alternateName: "العزيزية" },
      { "@type": "Place", name: "Al Basateen", alternateName: "البساتين" },
      { "@type": "Place", name: "Al Bawadi", alternateName: "البوادي" },
      { "@type": "Place", name: "Al Hamdaniyah", alternateName: "الحمدانية" },
      { "@type": "Place", name: "Al Jamaa", alternateName: "الجامعة" },
      { "@type": "Place", name: "Al Mohamadiyah", alternateName: "المحمدية" },
      { "@type": "Place", name: "An Nahdah", alternateName: "النهضة" },
      { "@type": "Place", name: "An Naseem", alternateName: "النسيم" },
      { "@type": "Place", name: "An Nuzha", alternateName: "النزهة" },
      { "@type": "Place", name: "Ar Rabwa", alternateName: "الربوة" },
      { "@type": "Place", name: "Ar Rihab", alternateName: "الرحاب" },
      { "@type": "Place", name: "Ar Ruwais", alternateName: "الرويس" },
      { "@type": "Place", name: "Ash Sharafiyah", alternateName: "الشرفية" },
      { "@type": "Place", name: "As Sulaymaniyah", alternateName: "السليمانية" },
      { "@type": "Place", name: "Ath Thalaba", alternateName: "الثعالبة" },
      { "@type": "Place", name: "Az Zahraa", alternateName: "الزهراء" },
      { "@type": "Place", name: "Bani Malik", alternateName: "بني مالك" },
      { "@type": "Place", name: "Obhur", alternateName: "أبحر" },
    ],
    sameAs: [
      // Add social media links when available
      "https://www.facebook.com/naklafshjeddah",
      "https://www.instagram.com/naklafshjeddah",
      "https://twitter.com/naklafshjeddah",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Furniture Moving Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Home Moving",
            alternateName: "نقل منازل",
            areaServed: { "@type": "City", name: "Jeddah" },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Villa Moving",
            alternateName: "نقل فلل",
            areaServed: { "@type": "City", name: "Jeddah" },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Office Relocation",
            alternateName: "نقل مكاتب",
            areaServed: { "@type": "City", name: "Jeddah" },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Furniture Storage",
            alternateName: "تخزين عفش",
            areaServed: { "@type": "City", name: "Jeddah" },
          },
        },
      ],
    },
  };
}

/**
 * Service with GEO location for service pages
 */
export interface ServiceLDParams {
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  url: string;
  imageUrl?: string;
  neighborhood?: string;
}

export function serviceLD({
  name,
  nameAr,
  description,
  descriptionAr,
  url,
  imageUrl,
  neighborhood,
}: ServiceLDParams) {
  const areaServed = neighborhood
    ? [
        { "@type": "City", name: "Jeddah" },
        { "@type": "Place", name: neighborhood },
      ]
    : [{ "@type": "City", name: "Jeddah" }];

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "MovingCompany",
    name,
    alternateName: nameAr,
    description,
    disambiguatingDescription: descriptionAr,
    provider: {
      "@type": "MovingCompany",
      name: site.brand,
      telephone: site.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Jeddah",
        addressCountry: "SA",
      },
    },
    areaServed,
    ...(imageUrl && { image: imageUrl }),
    url,
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: url,
      servicePhone: site.phone,
      availableLanguage: ["ar", "en"],
    },
  };
}

/**
 * Breadcrumb List for navigation
 */
export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function breadcrumbLD(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://www.naklafshjeddah.com${item.url}`,
    })),
  };
}

/**
 * Utility to render JSON-LD script tag
 */
export function renderJSONLD(data: object) {
  return {
    __html: JSON.stringify(data),
  };
}

