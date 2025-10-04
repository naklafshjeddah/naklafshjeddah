import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  href: string;
  isRTL?: boolean;
}

export default function ServiceCard({
  title,
  description,
  imageUrl,
  href,
  isRTL = true,
}: ServiceCardProps) {
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  return (
    <Link
      href={href}
      className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-1"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">{description}</p>

        <div className="flex items-center gap-2 text-primary-600 font-semibold">
          <span>{isRTL ? "اعرف المزيد" : "Learn More"}</span>
          <Arrow className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}








