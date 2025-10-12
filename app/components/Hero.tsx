"use client";

import Image from "next/image";
import { Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import { site } from "@/config/site";
import { useState, useEffect } from "react";

interface HeroProps {
  title: string;
  subtitle: string;
  imageUrl?: string;
  imageUrls?: string[];
  imageAlt: string;
  ctaPrimary?: string;
  ctaSecondary?: string;
}

export default function Hero({
  title,
  subtitle,
  imageUrl,
  imageUrls,
  imageAlt,
  ctaPrimary,
  ctaSecondary,
}: HeroProps) {
  const t = useTranslations("cta");
  const callText = ctaPrimary || t("call");
  const whatsappText = ctaSecondary || t("whatsapp");
  
  // Handle both single image and multiple images
  const images = imageUrls || (imageUrl ? [imageUrl] : []);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (images.length <= 1) return; // Don't rotate if only one image

    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsTransitioning(false);
      }, 500); // Half second for fade out
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-gray-100 leading-relaxed drop-shadow-md">
              {subtitle}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href={`tel:${site.phone}`}
                className="inline-flex items-center gap-2 bg-white text-primary-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-lg hover:shadow-2xl"
              >
                <Phone className="w-5 h-5" />
                {callText}
              </a>

              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition-all hover:scale-105 shadow-lg hover:shadow-2xl"
              >
                {whatsappText}
              </a>
            </div>
          </div>

          <div className="relative h-64 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            {images.map((img, index) => (
              <Image
                key={img}
                src={img}
                alt={imageAlt}
                fill
                className={`object-cover transition-opacity duration-1000 ${
                  index === currentImageIndex && !isTransitioning
                    ? "opacity-100"
                    : "opacity-0"
                }`}
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            ))}
            
            {/* Image indicators */}
            {images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentImageIndex
                        ? "bg-white w-8"
                        : "bg-white/50 hover:bg-white/75"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 start-0 w-72 h-72 bg-accent-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 end-0 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl animate-pulse"></div>
    </section>
  );
}







