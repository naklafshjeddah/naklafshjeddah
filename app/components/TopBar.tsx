"use client";

import { Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import { site } from "@/config/site";

export default function TopBar() {
  const t = useTranslations("cta");

  return (
    <div className="bg-primary-700 text-white py-2 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between text-sm">
          <a
            href={`tel:${site.phone}`}
            className="flex items-center gap-2 hover:text-accent-300 transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span dir="ltr">{site.phone}</span>
          </a>

          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 px-4 py-1.5 rounded-full font-semibold transition-all hover:scale-105"
          >
            {t("whatsappContact")}
          </a>
        </div>
      </div>
    </div>
  );
}







