import { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
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

      <Hero
        title={
          isArabic
            ? "مدونة نقل العفش - نصائح وإرشادات احترافية"
            : "Furniture Moving Blog - Professional Tips and Guides"
        }
        subtitle={
          isArabic
            ? "دليلك الشامل لنقل عفش ناجح وآمن. نصائح عملية، إرشادات مفصلة، وأحدث الأساليب في عالم النقل"
            : "Your comprehensive guide to successful and safe furniture moving. Practical tips, detailed guides, and latest methods in moving world"
        }
        imageUrls={[
          "/images/packing services Jeddah.jpg",
          "/images/professional movers Jeddah.jpg",
          "/images/furniture moving Jeddah.jpg",
          "/images/safe packing Jeddah.jpg",
        ]}
        imageAlt={isArabic ? "مدونة نقل العفش" : "Moving Blog"}
        ctaPrimary={isArabic ? "اتصل الآن" : "Call Now"}
        ctaSecondary={isArabic ? "واتساب" : "WhatsApp"}
      />

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

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            {isArabic ? (
              <>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  مدونتك الشاملة لعالم نقل العفش والانتقال السكني
                </h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                  مرحباً بك في{" "}
                  <a href="/" className="text-primary-600 hover:underline font-semibold">
                    مدونة شركة الأفضل لنقل العفش
                  </a>
                  ! هنا ستجد كل ما تحتاجه من معلومات، نصائح،  إرشادات عملية لجعل
                  تجربة انتقالك أسهل وأكثر نجاحاً. نحن لا نقدم فقط خدمات نقل محترفة، بل نشارك
                  خبرتنا الطويلة معك من خلال مقالات مفصلة ومحتوى قيّم يساعدك في كل خطوة.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  لماذا تتابع مدونتنا؟
                </h3>

                <p className="text-gray-700 leading-relaxed mb-4">
                  نقل العفش ليس عملية بسيطة. هناك الكثير من التفاصيل، التحديات، والقرارات
                  التي يجب اتخاذها. من خلال متابعة مدونتنا، ستحصل على:
                </p>

                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  <li>
                    <strong>نصائح عملية من الخبراء:</strong> مقالات مكتوبة بناءً على سنوات من
                    الخبرة في مجال نقل العفش بجدة والمملكة
                  </li>
                  <li>
                    <strong>أدلة شاملة خطوة بخطوة:</strong> لكل جانب من جوانب النقل، من
                    التخطيط حتى الاستقرار
                  </li>
                  <li>
                    <strong>حلول للمشاكل الشائعة:</strong> إجابات على أكثر الأسئلة شيوعاً
                    وحلول للتحديات التي يواجهها معظم الناس
                  </li>
                  <li>
                    <strong>أحدث الأساليب والتقنيات:</strong> معلومات عن أحدث طرق التغليف،
                    النقل، والتخزين
                  </li>
                  <li>
                    <strong>قوائم تحقق ومخططات:</strong> أدوات عملية تساعدك في تنظيم عملية
                    النقل
                  </li>
                  <li>
                    <strong>نصائح لتوفير المال:</strong> كيف تحصل على أفضل خدمة بأفضل سعر
                  </li>
                </ul>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  مواضيع مدونتنا الرئيسية
                </h3>

                <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                  1. التخطيط والتحضير للنقل
                </h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  النقل الناجح يبدأ بتخطيط جيد. نقدم مقالات شاملة عن: كيفية اختيار{" "}
                  <a href={`/${isArabic ? "" : "en/"}services`} className="text-primary-600 hover:underline">
                    شركة نقل موثوقة
                  </a>
                  ، متى تبدأ التخطيط، كيف تضع جدول زمني واقعي، كيف تقدر التكاليف، وما هي
                  الأخطاء التي يجب تجنبها. التخطيط المبكر يوفر عليك الكثير من التوتر والمال.
                </p>

                <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                  2. فنون التغليف والحماية
                </h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  التغليف الصحيح هو أساس حماية ممتلكاتك. نشارك معك أسرار{" "}
                  <a href={`/${isArabic ? "" : "en/"}services/packing-unpacking`} className="text-primary-600 hover:underline">
                    التغليف الاحترافي
                  </a>
                  : أنواع مواد التغليف المختلفة واستخداماتها، كيف تغلف الأطباق والزجاج،
                  حماية الأثاث الخشبي والمنجد، تغليف الإلكترونيات الحساسة، وكيف تنظم
                  الكراتين لتسهيل فك التغليف لاحقاً.
                </p>

                <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                  3. نقل أنواع محددة من الأثاث والممتلكات
                </h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  كل نوع من الأثاث يحتاج معاملة خاصة. لدينا مقالات متخصصة عن: نقل
                  البيانو والآلات الموسيقية، نقل التحف والأنتيكات، نقل الأجهزة الكهربائية
                  الكبيرة، نقل النباتات والأحواض، نقل المكتبات والكتب، ونقل الأثاث الضخم
                  والثقيل. نصائح مفصلة لكل حالة.
                </p>

                <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                  4. النقل بين المدن والمسافات الطويلة
                </h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <a href={`/${isArabic ? "" : "en/"}routes`} className="text-primary-600 hover:underline">
                    النقل بين المدن
                  </a>{" "}
                  له تحديات خاصة. نغطي مواضيع مثل: التخطيط للنقل من جدة للرياض، ما يجب
                  فعله قبل السفر الطويل، كيف تختار شركة نقل للمسافات الطويلة، ما هي
                  الاحتياطات الإضافية اللازمة، وكيف تتتبع شحنتك أثناء الطريق.
                </p>

                <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                  5. التخزين وإدارة المساحات
                </h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  أحياناً تحتاج{" "}
                  <a href={`/${isArabic ? "" : "en/"}storage`} className="text-primary-600 hover:underline">
                    تخزين مؤقت لأثاثك
                  </a>
                  . نقدم مقالات عن: متى تحتاج للتخزين، كيف تختار مخزن مناسب، كيف تحضر
                  الأثاث للتخزين طويل المدى، كيف تنظم المخزون، ونصائح لحماية الأثاث أثناء
                  التخزين من الرطوبة والحشرات.
                </p>

                <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                  6. نصائح لأنواع مختلفة من المساكن
                </h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  نقل{" "}
                  <a href={`/${isArabic ? "" : "en/"}services/home-moving-jeddah`} className="text-primary-600 hover:underline">
                    شقة صغيرة
                  </a>{" "}
                  يختلف عن نقل{" "}
                  <a href={`/${isArabic ? "" : "en/"}services/villa-moving-jeddah`} className="text-primary-600 hover:underline">
                    فيلا كبيرة
                  </a>
                  . لدينا أدلة مخصصة لكل نوع: نقل الشقق الصغيرة بميزانية محدودة، نقل الفلل
                  الفاخرة مع الأثاث الثمين، نقل البنتهاوس والدوبلكس، والنقل من وإلى المباني
                  القديمة ذات الممرات الضيقة.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  نصائح سريعة من المدونة
                </h3>

                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  <li>ابدأ التخطيط للنقل قبل شهر على الأقل من الموعد المحدد</li>
                  <li>تخلص من الأغراض غير المستخدمة قبل التغليف - يوفر الوقت والمال</li>
                  <li>صور الأثاث الثمين قبل النقل كتوثيق وللتأمين</li>
                  <li>احتفظ بصندوق "الأساسيات" معك للاحتياجات الفورية في المنزل الجديد</li>
                  <li>أخبر الجيران وأصحاب المباني عن موعد النقل لتجنب المشاكل</li>
                  <li>قم بتغيير العنوان في جميع المستندات والاشتراكات الرسمية</li>
                </ul>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  ابق على اطلاع بأحدث المقالات
                </h3>

                <p className="text-gray-700 leading-relaxed mb-4">
                  نضيف مقالات جديدة بانتظام لتغطية مواضيع جديدة والإجابة على أسئلة
                  قرائنا. نشجعك على زيارة المدونة باستمرار أو الاشتراك في نشرتنا البريدية
                  للحصول على آخر النصائح والإرشادات.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  هل لديك موضوع معين تريد أن نكتب عنه؟ أو سؤال لم تجد إجابته؟ تواصل معنا
                  على{" "}
                  <a href="tel:+966560586397" className="text-primary-600 hover:underline font-bold">
                    0560586397
                  </a>{" "}
                  أو{" "}
                  <a href="https://wa.me/966560586397" className="text-primary-600 hover:underline font-bold">
                    واتساب
                  </a>
                  . نحن هنا لمساعدتك بكل ما تحتاجه!
                </p>
              </>
            ) : (
              <>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Your Comprehensive Guide to Furniture Moving World
                </h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Welcome to Al Afdal Moving Blog! Here you'll find everything you need from
                  information, tips, and practical guides to make your moving experience easier
                  and more successful.
                </p>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}



