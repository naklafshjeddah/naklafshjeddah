import { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import SchemaInjector from "@/components/SchemaInjector";
import { blogPosts } from "@/config/blog";
import { getBlogContent } from "@/lib/blogContent";
import { Calendar, Tag, User, ArrowRight } from "lucide-react";

export async function generateStaticParams() {
  const locales = ["ar", "en"];
  return blogPosts.flatMap((post) =>
    locales.map((locale) => ({
      locale,
      slug: post.slug,
    }))
  );
}

export async function generateMetadata({
  params: { locale, slug },
}: {
  params: { locale: string; slug: string };
}): Promise<Metadata> {
  const isArabic = locale === "ar";
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return {};

  return {
    title: isArabic ? post.titleAr : post.titleEn,
    description: isArabic ? post.excerptAr : post.excerptEn,
    alternates: {
      canonical: `/${locale === "ar" ? "" : locale + "/"}blog/${slug}`,
      languages: {
        "ar-SA": `/blog/${slug}`,
        "en-SA": `/en/blog/${slug}`,
      },
    },
    openGraph: {
      title: isArabic ? post.titleAr : post.titleEn,
      description: isArabic ? post.excerptAr : post.excerptEn,
      images: [post.image],
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default function BlogPostPage({
  params: { locale, slug },
}: {
  params: { locale: string; slug: string };
}) {
  setRequestLocale(locale);
  const isArabic = locale === "ar";
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const breadcrumbs = [
    { label: isArabic ? "الرئيسية" : "Home", href: `/${locale === "ar" ? "" : locale}` },
    { label: isArabic ? "المدونة" : "Blog", href: `/${locale === "ar" ? "" : locale + "/"}blog` },
    { label: isArabic ? post.titleAr : post.titleEn },
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: isArabic ? post.titleAr : post.titleEn,
    description: isArabic ? post.excerptAr : post.excerptEn,
    image: `https://naklafshjeddah.com${post.image}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "شركة الأفضل لنقل العفش",
    },
  };

  const content = getBlogContent(slug, isArabic);

  return (
    <>
      <SchemaInjector schema={articleSchema} />
      <Breadcrumbs items={breadcrumbs} isRTL={isArabic} />

      <article className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Hero Image */}
            <div className="relative h-96 rounded-2xl overflow-hidden mb-8 shadow-xl">
              <Image
                src={post.image}
                alt={isArabic ? post.titleAr : post.titleEn}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                {new Date(post.date).toLocaleDateString(isArabic ? "ar-SA" : "en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="flex items-center gap-2">
                <Tag className="w-5 h-5" />
                {post.category}
              </span>
              <span className="flex items-center gap-2">
                <User className="w-5 h-5" />
                {isArabic ? "شركة الأفضل" : "Al Afdal"}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {isArabic ? post.titleAr : post.titleEn}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-gray-600 leading-relaxed mb-12 pb-8 border-b-2 border-gray-200">
              {isArabic ? post.excerptAr : post.excerptEn}
            </p>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              {/* Table of Contents */}
              {content.sections.length > 3 && (
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-10 not-prose">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    {isArabic ? "محتويات المقال" : "Table of Contents"}
                  </h3>
                  <ul className="space-y-2">
                    {content.sections.map((section: any, index: number) => (
                      <li key={index}>
                        <a 
                          href={`#section-${index}`}
                          className="text-primary-600 hover:text-primary-700 hover:underline flex items-center gap-2"
                        >
                          <ArrowRight className="w-4 h-4" />
                          {section.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Sections */}
              {content.sections.map((section: any, index: number) => (
                <div key={index} id={`section-${index}`} className="mb-12 scroll-mt-20">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-primary-200">
                    {section.title}
                  </h2>
                  <div 
                    className="text-gray-700 leading-relaxed space-y-4"
                    dangerouslySetInnerHTML={{ __html: section.content.replace(/\n/g, '<br />') }}
                  />
                </div>
              ))}

              {/* Expert Tip Box */}
              <div className="bg-gradient-to-r from-primary-50 to-primary-100 border-r-4 border-primary-600 p-8 rounded-xl my-10 shadow-md">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">💡</div>
                  <div>
                    <p className="text-gray-900 font-bold text-lg mb-2">
                      {isArabic ? "نصيحة من الخبراء" : "Expert Tip"}
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      {isArabic
                        ? "للحصول على أفضل تجربة نقل عفش، احجز خدماتنا مبكراً واحصل على استشارة مجانية من فريقنا المتخصص. نحن نقدم تقييماً دقيقاً لاحتياجاتك وعرض سعر شفاف بدون رسوم مخفية."
                        : "For best furniture moving experience, book our services early and get free consultation from our specialized team. We provide accurate assessment of your needs and transparent quote without hidden fees."}
                    </p>
                  </div>
                </div>
              </div>

              {/* Call to Action Box */}
              <div className="bg-white border-2 border-primary-600 rounded-xl p-8 my-10 text-center shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {isArabic ? "هل أعجبك المقال؟ شاركه!" : "Enjoyed the Article? Share it!"}
                </h3>
                <p className="text-gray-600 mb-6">
                  {isArabic
                    ? "ساعد أصدقاءك وعائلتك بمشاركة هذه النصائح المفيدة معهم"
                    : "Help your friends and family by sharing these useful tips"}
                </p>
                <div className="flex justify-center gap-4">
                  <a 
                    href={`https://wa.me/?text=${encodeURIComponent(isArabic ? post.titleAr : post.titleEn)} ${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    {isArabic ? "مشاركة عبر واتساب" : "Share on WhatsApp"}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <CTASection
        title={
          isArabic
            ? "هل تحتاج مساعدة في نقل عفشك؟"
            : "Need Help Moving Your Furniture?"
        }
        description={
          isArabic
            ? "فريقنا جاهز لمساعدتك على مدار الساعة. احصل على عرض سعر مجاني الآن!"
            : "Our team is ready to help you 24/7. Get your free quote now!"
        }
      />

      {/* Related Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {isArabic ? "مقالات ذات صلة" : "Related Articles"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts
              .filter((p) => p.slug !== slug)
              .slice(0, 3)
              .map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/${locale === "ar" ? "" : locale + "/"}blog/${relatedPost.slug}`}
                  className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden"
                >
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={relatedPost.image}
                      alt={isArabic ? relatedPost.titleAr : relatedPost.titleEn}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-600">
                      {isArabic ? relatedPost.titleAr : relatedPost.titleEn}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {isArabic ? relatedPost.excerptAr : relatedPost.excerptEn}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}



