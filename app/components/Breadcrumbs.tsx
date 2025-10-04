import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  isRTL?: boolean;
}

export default function Breadcrumbs({ items, isRTL = true }: BreadcrumbsProps) {
  const Chevron = isRTL ? ChevronLeft : ChevronRight;

  return (
    <nav className="bg-gray-50 py-4" aria-label="Breadcrumb">
      <div className="container mx-auto px-4">
        <ol className="flex items-center gap-2 text-sm flex-wrap">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              {index > 0 && <Chevron className="w-4 h-4 text-gray-400" />}

              {item.href ? (
                <Link
                  href={item.href}
                  className="text-primary-600 hover:text-primary-800 hover:underline"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-600 font-medium">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}








