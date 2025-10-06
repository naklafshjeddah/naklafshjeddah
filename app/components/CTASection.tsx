"use client";

import { Phone, MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import { site } from "@/config/site";

interface CTASectionProps {
  title: string;
  description: string;
  primaryText?: string;
  secondaryText?: string;
}

export default function CTASection({
  title,
  description,
  primaryText,
  secondaryText,
}: CTASectionProps) {
  const t = useTranslations("cta");
  const callText = primaryText || t("call");
  const whatsappText = secondaryText || t("whatsapp");
  return (
    <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-xl text-primary-50 mb-8 max-w-2xl mx-auto">{description}</p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`tel:${site.phone}`}
            className="inline-flex items-center gap-2 bg-white text-primary-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-lg"
          >
            <Phone className="w-5 h-5" />
            {callText}
          </a>

          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition-all hover:scale-105 shadow-lg"
          >
            <MessageCircle className="w-5 h-5" />
            {whatsappText}
          </a>
        </div>
      </div>
    </section>
  );
}








