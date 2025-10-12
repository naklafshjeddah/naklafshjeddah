import { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import { Building2, Briefcase, Hotel, Warehouse, GraduationCap, Heart } from "lucide-react";

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
      ? "القطاعات التي نخدمها - شركة الأفضل لنقل العفش"
      : "Sectors We Serve - Al Afdal Moving Company",
    description: isArabic
      ? "نقدم خدمات نقل متخصصة لجميع القطاعات: السكني، التجاري، الفنادق، المستودعات، التعليم، والرعاية الصحية في جدة"
      : "We provide specialized moving services for all sectors: Residential, Commercial, Hotels, Warehouses, Education, and Healthcare in Jeddah",
    alternates: {
      canonical: `/${locale === "ar" ? "" : locale + "/"}sectors`,
      languages: {
        "ar-SA": "/sectors",
        "en-SA": "/en/sectors",
      },
    },
  };
}

export default function SectorsPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const isArabic = locale === "ar";

  const breadcrumbs = [
    { label: isArabic ? "الرئيسية" : "Home", href: `/${locale === "ar" ? "" : locale}` },
    { label: isArabic ? "القطاعات" : "Sectors" },
  ];

  const sectors = [
    {
      slug: "residential",
      icon: Building2,
      title: isArabic ? "القطاع السكني" : "Residential Sector",
      description: isArabic
        ? "نقل منازل وشقق وفلل بجميع أحجامها. خدمة شاملة للأفراد والعائلات مع فريق محترف ومعدات حديثة"
        : "Moving homes, apartments, and villas of all sizes. Comprehensive service for individuals and families with professional team and modern equipment",
      color: "bg-blue-50 text-blue-600",
    },
    {
      slug: "commercial",
      icon: Briefcase,
      title: isArabic ? "القطاع التجاري والمكاتب" : "Commercial & Office Sector",
      description: isArabic
        ? "نقل مكاتب وشركات بدون تعطيل العمل. تخطيط محكم ونقل ليلي وعطلات لضمان استمرارية عملك"
        : "Moving offices and companies without work disruption. Precise planning and night/weekend moving to ensure business continuity",
      color: "bg-purple-50 text-purple-600",
    },
    {
      slug: "hospitality",
      icon: Hotel,
      title: isArabic ? "قطاع الضيافة والفنادق" : "Hospitality & Hotels Sector",
      description: isArabic
        ? "نقل فنادق ومنتجعات ومطاعم مع الحفاظ على جودة الأثاث الفاخر والمعدات الحساسة"
        : "Moving hotels, resorts, and restaurants while maintaining luxury furniture quality and sensitive equipment",
      color: "bg-amber-50 text-amber-600",
    },
    {
      slug: "warehouses",
      icon: Warehouse,
      title: isArabic ? "المستودعات والمصانع" : "Warehouses & Factories",
      description: isArabic
        ? "نقل معدات ثقيلة ومخزون ضخم مع معدات رفع متخصصة وفرق كبيرة لإنجاز سريع"
        : "Moving heavy equipment and large inventory with specialized lifting equipment and large teams for quick completion",
      color: "bg-gray-50 text-gray-600",
    },
    {
      slug: "education",
      icon: GraduationCap,
      title: isArabic ? "القطاع التعليمي" : "Education Sector",
      description: isArabic
        ? "نقل مدارس وجامعات ومراكز تدريب. تعامل خاص مع المكتبات والمعامل والأجهزة التعليمية"
        : "Moving schools, universities, and training centers. Special handling for libraries, labs, and educational equipment",
      color: "bg-green-50 text-green-600",
    },
    {
      slug: "healthcare",
      icon: Heart,
      title: isArabic ? "القطاع الصحي" : "Healthcare Sector",
      description: isArabic
        ? "نقل مستشفيات وعيادات ومختبرات مع عناية فائقة بالأجهزة الطبية الحساسة والمعقمات"
        : "Moving hospitals, clinics, and laboratories with extreme care for sensitive medical equipment and sterilizers",
      color: "bg-red-50 text-red-600",
    },
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbs} isRTL={isArabic} />

      <Hero
        title={
          isArabic
            ? "القطاعات التي نخدمها - حلول نقل متخصصة"
            : "Sectors We Serve - Specialized Moving Solutions"
        }
        subtitle={
          isArabic
            ? "خبرة متخصصة في نقل جميع القطاعات: السكني، التجاري، الضيافة، التعليم، والصحي. حلول مخصصة لكل قطاع"
            : "Specialized expertise in moving all sectors: Residential, Commercial, Hospitality, Education, and Healthcare. Customized solutions for each sector"
        }
        imageUrls={[
          "/images/office movers Jeddah.jpg",
          "/images/home movers Jeddah.jpg",
          "/images/villa movers Jeddah.jpg",
          "/images/professional movers Jeddah.jpg",
        ]}
        imageAlt={isArabic ? "خدمات القطاعات" : "Sector Services"}
        ctaPrimary={isArabic ? "اتصل الآن" : "Call Now"}
        ctaSecondary={isArabic ? "واتساب" : "WhatsApp"}
      />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector) => {
              const Icon = sector.icon;
              return (
                <Link
                  key={sector.slug}
                  href={`/${locale === "ar" ? "" : locale + "/"}sectors/${sector.slug}`}
                  className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all p-8 hover:-translate-y-1"
                >
                  <div className={`w-16 h-16 ${sector.color} rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className="w-8 h-8" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {sector.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-4">{sector.description}</p>

                  <span className="text-primary-600 font-semibold">
                    {isArabic ? "اعرف المزيد ←" : "Learn More →"}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            {isArabic ? (
              <>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                  خدمات نقل متخصصة لجميع القطاعات في جدة
                </h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                  في{" "}
                  <a href="/" className="text-primary-600 hover:underline font-semibold">
                    شركة الأفضل
                  </a>
                  ، ندرك تماماً أن كل قطاع له احتياجاته الخاصة، تحدياته الفريدة، ومتطلباته
                  المختلفة. نقل مكتب يختلف عن نقل منزل، ونقل مستشفى يتطلب خبرة مختلفة عن نقل
                  فندق. لذلك طورنا حلول نقل متخصصة لكل قطاع، مع فرق مدربة تفهم طبيعة كل مجال
                  وكيفية التعامل مع احتياجاته الخاصة.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  لماذا التخصص مهم في خدمات النقل؟
                </h3>

                <p className="text-gray-700 leading-relaxed mb-4">
                  النقل ليس مجرد نقل أغراض من مكان لآخر. كل قطاع له معداته الخاصة، أثاثه
                  المميز، وتحدياته الفريدة. على سبيل المثال:
                </p>

                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  <li>
                    القطاع السكني يحتاج لمسة شخصية وعناية بالذكريات والممتلكات العائلية
                  </li>
                  <li>
                    القطاع التجاري يتطلب سرعة وتنسيق لتقليل تعطيل العمل
                  </li>
                  <li>
                    الفنادق تحتاج نقل الأثاث الفاخر والقطع الثمينة مع سرية تامة
                  </li>
                  <li>
                    القطاع الصحي يتطلب التعامل مع أجهزة طبية حساسة ومعقمات
                  </li>
                  <li>
                    القطاع التعليمي يحتاج نقل مكتبات ضخمة ومعامل متخصصة
                  </li>
                </ul>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  مميزاتنا لجميع القطاعات
                </h3>

                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  <li>
                    <strong>فرق متخصصة:</strong> لكل قطاع فريق مدرب خصيصاً يفهم متطلباته
                    ويعرف كيف يتعامل مع معداته
                  </li>
                  <li>
                    <strong>معدات مخصصة:</strong> نمتلك معدات مختلفة حسب نوع القطاع - من
                    رافعات ثقيلة للمصانع إلى عربات ناعمة للفنادق
                  </li>
                  <li>
                    <strong>تخطيط مسبق محكم:</strong> نعمل معك لوضع خطة مفصلة تناسب جدولك
                    وتقلل التعطيل
                  </li>
                  <li>
                    <strong>جدولة مرنة:</strong> نقل ليلي، عطلات نهاية الأسبوع، أو أوقات
                    محددة حسب احتياجك
                  </li>
                  <li>
                    <strong>تأمين شامل:</strong> تغطية كاملة مصممة خصيصاً لنوع القطاع
                    وقيمة المعدات
                  </li>
                  <li>
                    <strong>خدمة 24/7:</strong> فريق متاح على مدار الساعة للطوارئ والدعم
                  </li>
                  <li>
                    <strong>سرية تامة:</strong> نحترم خصوصية عملك ولا نفشي أي معلومات
                  </li>
                </ul>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  تجربتنا عبر القطاعات
                </h3>

                <p className="text-gray-700 leading-relaxed mb-4">
                  على مدار أكثر من عشر سنوات، خدمنا مئات العملاء من مختلف القطاعات في جدة
                  والمملكة. نقلنا فنادق 5 نجوم، مستشفيات كبرى، شركات متعددة الجنسيات، مدارس
                  دولية، وآلاف المنازل والفلل. هذه التجربة المتنوعة أعطتنا فهماً عميقاً لكل
                  قطاع وكيفية تقديم أفضل خدمة له.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  كيف نضمن نجاح نقل قطاعك؟
                </h3>

                <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-6">
                  <li>
                    <strong>استشارة أولية:</strong> نزورك لفهم احتياجاتك وتحدياتك
                    الخاصة
                  </li>
                  <li>
                    <strong>تقييم متخصص:</strong> فريق خبراء يقيم المعدات والأثاث حسب
                    طبيعة القطاع
                  </li>
                  <li>
                    <strong>خطة مخصصة:</strong> نضع خطة تفصيلية تناسب قطاعك وجدولك
                  </li>
                  <li>
                    <strong>تنسيق محكم:</strong> تواصل مستمر معك في كل مرحلة
                  </li>
                  <li>
                    <strong>تنفيذ احترافي:</strong> فريق متخصص ينفذ الخطة بدقة
                  </li>
                  <li>
                    <strong>متابعة بعد النقل:</strong> نتأكد من استقرار كل شيء ورضاك
                    التام
                  </li>
                </ol>

                <p className="text-gray-700 leading-relaxed mb-4">
                  اختر قطاعك من القائمة أعلاه لمعرفة المزيد عن خدماتنا المخصصة، أو{" "}
                  <a href="tel:+966560586397" className="text-primary-600 hover:underline font-bold">
                    اتصل بنا
                  </a>{" "}
                  الآن للحصول على استشارة مجانية وعرض سعر مخصص لقطاعك. نحن هنا لخدمتك
                  بكل احترافية وخبرة.
                </p>
              </>
            ) : (
              <>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                  Why We're the Best in Serving All Sectors?
                </h2>

                <p className="text-gray-700 leading-relaxed">
                  At Al Afdal, we understand that each sector has its own needs and unique
                  challenges. That's why we provide customized moving solutions for each sector with
                  specialized team that understands your business nature.
                </p>
              </>
            )}
          </div>
        </div>
      </section>

      <CTASection
        title={isArabic ? "هل تحتاج حل نقل مخصص لقطاعك؟" : "Need Customized Moving Solution for Your Sector?"}
        description={
          isArabic
            ? "تواصل معنا للحصول على استشارة مجانية وعرض سعر مخصص"
            : "Contact us for free consultation and customized quote"
        }
      />
    </>
  );
}



