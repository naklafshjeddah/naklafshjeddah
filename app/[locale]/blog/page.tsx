import { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import { blogPosts } from "@/config/blog";
import { Calendar, Tag } from "lucide-react";

export function generateStaticParams() {
  return [{ locale: "ar" }, { locale: "en" }];
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const isArabic = locale === "ar";

  return {
    title: isArabic
      ? "مدونة نقل العفش - نصائح وإرشادات | شركة الأفضل"
      : "Furniture Moving Blog - Tips and Guides | Al Afdal",
    description: isArabic
      ? "مقالات ونصائح حصرية عن نقل العفش، التغليف، التخزين، والانتقال السكني في جدة والسعودية"
      : "Exclusive articles and tips about furniture moving, packing, storage, and residential relocation in Jeddah and Saudi Arabia",
    alternates: {
      canonical: `/${locale === "ar" ? "" : locale + "/"}blog`,
      languages: {
        "ar-SA": "/blog",
        "en-SA": "/en/blog",
      },
    },
  };
}

export default function BlogPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const isArabic = locale === "ar";

  const breadcrumbs = [
    { label: isArabic ? "الرئيسية" : "Home", href: `/${locale === "ar" ? "" : locale}` },
    { label: isArabic ? "المدونة" : "Blog" },
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbs} isRTL={isArabic} />

      <section className="py-16 bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {isArabic ? "مدونة نقل العفش" : "Furniture Moving Blog"}
          </h1>
          <p className="text-xl text-primary-50 max-w-3xl mx-auto leading-relaxed">
            {isArabic
              ? "نصائح عملية ودليل شامل لجعل تجربة نقل عفشك أسهل وأكثر أماناً"
              : "Practical tips and comprehensive guide to make your furniture moving experience easier and safer"}
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/${locale === "ar" ? "" : locale + "/"}blog/${post.slug}`}
                className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all overflow-hidden hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={isArabic ? post.titleAr : post.titleEn}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString(isArabic ? "ar-SA" : "en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Tag className="w-4 h-4" />
                      {post.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                    {isArabic ? post.titleAr : post.titleEn}
                  </h3>

                  <p className="text-gray-600 leading-relaxed line-clamp-3 mb-4">
                    {isArabic ? post.excerptAr : post.excerptEn}
                  </p>

                  <span className="text-primary-600 font-semibold">
                    {isArabic ? "اقرأ المزيد ←" : "Read More →"}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}



