import Image from "next/image";
import { Phone } from "lucide-react";
import { site } from "@/config/site";

interface HeroProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  imageAlt: string;
  ctaPrimary?: string;
  ctaSecondary?: string;
}

export default function Hero({
  title,
  subtitle,
  imageUrl,
  imageAlt,
  ctaPrimary = "اتصل الآن",
  ctaSecondary = "واتساب",
}: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">{title}</h1>
            <p className="text-lg md:text-xl text-gray-100 leading-relaxed">{subtitle}</p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href={`tel:${site.phone}`}
                className="inline-flex items-center gap-2 bg-white text-primary-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-lg"
              >
                <Phone className="w-5 h-5" />
                {ctaPrimary}
              </a>

              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition-all hover:scale-105 shadow-lg"
              >
                {ctaSecondary}
              </a>
            </div>
          </div>

          <div className="relative h-64 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={imageUrl}
              alt={imageAlt}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 start-0 w-72 h-72 bg-accent-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 end-0 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl"></div>
    </section>
  );
}







