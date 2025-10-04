"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { Phone, MapPin, Clock } from "lucide-react";
import { site } from "@/config/site";

export default function Footer() {
  const locale = useLocale();
  const t = useTranslations();
  const isArabic = locale === "ar";

  const quickLinks = [
    { href: `/${locale === "ar" ? "" : locale + "/"}services`, label: t("nav.services") },
    { href: `/${locale === "ar" ? "" : locale + "/"}jeddah`, label: t("nav.areas") },
    { href: `/${locale === "ar" ? "" : locale + "/"}storage`, label: t("nav.storage") },
    { href: `/${locale === "ar" ? "" : locale + "/"}contact`, label: t("nav.contact") },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">{site.brand}</h3>
            <p className="text-sm leading-relaxed mb-4">
              {isArabic
                ? "شركة متخصصة في نقل العفش والأثاث بجدة مع فريق محترف وخبرة طويلة. نقدم خدمات شاملة من التغليف حتى التركيب مع ضمان السلامة."
                : "Professional furniture moving company in Jeddah with expert team and extensive experience. We provide comprehensive services from packing to installation with safety guarantee."}
            </p>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-all"
            >
              {t("cta.whatsapp")}
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              {isArabic ? "روابط سريعة" : "Quick Links"}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              {isArabic ? "معلومات الاتصال" : "Contact Information"}
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <a href={`tel:${site.phone}`} className="hover:text-white" dir="ltr">
                  {site.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>{site.address.full}</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>{isArabic ? "متاح 24/7 طوال الأسبوع" : "Available 24/7 All Week"}</span>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              {isArabic ? "موقعنا" : "Our Location"}
            </h4>
            <div className="bg-gray-800 rounded-lg overflow-hidden h-40">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.453!2d39.156!3d21.565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDMzJzU0LjAiTiAzOcKwMDknMjEuNiJF!5e0!3m2!1sen!2ssa!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>
            {new Date().getFullYear()} © {site.brand} - {t("common.allRightsReserved")}
          </p>
        </div>
      </div>
    </footer>
  );
}







