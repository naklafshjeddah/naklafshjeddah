import { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
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

      <section className="py-16 bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {isArabic ? "القطاعات التي نخدمها" : "Sectors We Serve"}
          </h1>
          <p className="text-xl text-primary-50 max-w-3xl mx-auto leading-relaxed">
            {isArabic
              ? "خبرة متخصصة في نقل جميع أنواع القطاعات بحلول مخصصة لكل قطاع"
              : "Specialized expertise in moving all types of sectors with customized solutions for each"}
          </p>
        </div>
      </section>

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
                  لماذا نحن الأفضل في خدمة جميع القطاعات؟
                </h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                  في <strong>شركة الأفضل</strong>، ندرك أن كل قطاع له احتياجاته الخاصة وتحدياته
                  الفريدة. لذلك نقدم حلول نقل مخصصة لكل قطاع مع فريق متخصص يفهم طبيعة عملك.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">مميزاتنا لجميع القطاعات</h3>

                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  <li>فرق متخصصة لكل قطاع مع خبرة عميقة</li>
                  <li>معدات مخصصة حسب نوع المعدات والأثاث</li>
                  <li>تخطيط مسبق مع مدراء المشاريع</li>
                  <li>جدولة مرنة تناسب طبيعة عملك</li>
                  <li>تأمين شامل على جميع الممتلكات</li>
                  <li>خدمة 24/7 للحالات الطارئة</li>
                </ul>

                <p className="text-gray-700 leading-relaxed">
                  اختر قطاعك من القائمة أعلاه لمعرفة المزيد عن خدماتنا المخصصة لك.
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



