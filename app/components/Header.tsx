"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { site } from "@/config/site";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const locale = useLocale();
  const t = useTranslations("nav");
  const pathname = usePathname();
  const isArabic = locale === "ar";

  const navItems = [
    { href: `/${locale === "ar" ? "" : locale}`, label: t("home") },
    { href: `/${locale === "ar" ? "" : locale + "/"}services`, label: t("services") },
    { href: `/${locale === "ar" ? "" : locale + "/"}sectors`, label: t("sectors") },
    { href: `/${locale === "ar" ? "" : locale + "/"}jeddah`, label: t("areas") },
    { href: `/${locale === "ar" ? "" : locale + "/"}routes`, label: t("routes") },
    { href: `/${locale === "ar" ? "" : locale + "/"}storage`, label: t("storage") },
    { href: `/${locale === "ar" ? "" : locale + "/"}offers`, label: t("offers") },
    { href: `/${locale === "ar" ? "" : locale + "/"}blog`, label: t("blog") },
    { href: `/${locale === "ar" ? "" : locale + "/"}contact`, label: t("contact") },
  ];

  // Fix language toggle - get current path without any locale prefix
  // Remove both /ar and /en from path if they exist
  let pathWithoutLocale = pathname.replace(/^\/(ar|en)(\/|$)/, "/");
  if (pathWithoutLocale === "//") pathWithoutLocale = "/";
  if (!pathWithoutLocale.startsWith("/")) pathWithoutLocale = "/" + pathWithoutLocale;
  
  // If currently Arabic, add /en prefix for English
  // If currently English, remove /en to go back to Arabic (root)
  const toggleLocale = locale === "ar" 
    ? (pathWithoutLocale === "/" ? "/en" : `/en${pathWithoutLocale}`)
    : (pathWithoutLocale === "/" ? "/" : pathWithoutLocale);

  return (
    <header className="bg-white shadow-sm sticky top-11 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href={`/${locale === "ar" ? "" : locale}`} className="flex items-center gap-3">
            <Image
              src="/images/logo.jpg"
              alt={site.brand}
              width={50}
              height={50}
              className="rounded-lg"
            />
            <div className="text-2xl font-bold text-primary-700">{site.brand}</div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={toggleLocale}
              className="text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded transition-colors"
            >
              {isArabic ? "EN" : "AR"}
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-700"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-4 border-t">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-3 text-gray-700 hover:text-primary-600 hover:bg-gray-50 px-2 rounded transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={toggleLocale}
              className="block py-3 text-gray-700 hover:text-primary-600 hover:bg-gray-50 px-2 rounded transition-colors mt-2 border-t"
              onClick={() => setIsMenuOpen(false)}
            >
              {isArabic ? "English" : "العربية"}
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}






