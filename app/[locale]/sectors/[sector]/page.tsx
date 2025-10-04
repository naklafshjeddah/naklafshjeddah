import { Metadata } from "next";
import { notFound } from "next/navigation";
import Hero from "@/components/Hero";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CheckCircle2 } from "lucide-react";

const sectors = [
  { slug: "residential", nameAr: "القطاع السكني", nameEn: "Residential Sector" },
  { slug: "commercial", nameAr: "القطاع التجاري", nameEn: "Commercial Sector" },
  { slug: "hospitality", nameAr: "قطاع الضيافة", nameEn: "Hospitality Sector" },
  { slug: "warehouses", nameAr: "المستودعات", nameEn: "Warehouses" },
  { slug: "education", nameAr: "القطاع التعليمي", nameEn: "Education Sector" },
  { slug: "healthcare", nameAr: "القطاع الصحي", nameEn: "Healthcare Sector" },
];

export async function generateStaticParams() {
  return sectors.map((sector) => ({
    sector: sector.slug,
  }));
}

export async function generateMetadata({
  params: { locale, sector },
}: {
  params: { locale: string; sector: string };
}): Promise<Metadata> {
  const isArabic = locale === "ar";
  const sectorData = sectors.find((s) => s.slug === sector);

  if (!sectorData) return {};

  return {
    title: isArabic
      ? `${sectorData.nameAr} - حلول نقل متخصصة | شركة الأفضل`
      : `${sectorData.nameEn} - Specialized Moving Solutions | Al Afdal`,
    description: isArabic
      ? `خدمات نقل متخصصة لـ${sectorData.nameAr} في جدة. حلول مخصصة وفريق خبير. اتصل: 0560586397`
      : `Specialized moving services for ${sectorData.nameEn} in Jeddah. Customized solutions and expert team.`,
    alternates: {
      canonical: `/${locale === "ar" ? "" : locale + "/"}sectors/${sector}`,
      languages: {
        "ar-SA": `/sectors/${sector}`,
        "en-SA": `/en/sectors/${sector}`,
      },
    },
  };
}

export default function SectorPage({
  params: { locale, sector },
}: {
  params: { locale: string; sector: string };
}) {
  const isArabic = locale === "ar";
  const sectorData = sectors.find((s) => s.slug === sector);

  if (!sectorData) {
    notFound();
  }

  const breadcrumbs = [
    { label: isArabic ? "الرئيسية" : "Home", href: `/${locale === "ar" ? "" : locale}` },
    {
      label: isArabic ? "القطاعات" : "Sectors",
      href: `/${locale === "ar" ? "" : locale + "/"}sectors`,
    },
    { label: isArabic ? sectorData.nameAr : sectorData.nameEn },
  ];

  const getContent = () => {
    const contents: { [key: string]: any } = {
      residential: {
        ar: {
          title: "حلول نقل متخصصة للقطاع السكني",
          description:
            "نقدم خدمات نقل شاملة للمنازل والشقق والفلل مع فريق محترف وضمان كامل",
          image: "/images/home movers Jeddah.jpg",
          features: [
            "نقل منازل من جميع الأحجام",
            "تغليف احترافي لجميع المحتويات",
            "فك وتركيب كامل",
            "خدمات تخزين مؤقتة",
            "نقل عاجل وليلي متاح",
            "ضمان شامل على الممتلكات",
          ],
          faqs: [
            {
              question: "كم تكلفة نقل منزل سكني؟",
              answer:
                "التكلفة تعتمد على حجم المنزل وكمية الأثاث والمسافة. نوفر معاينة مجانية لتحديد سعر دقيق. عادة شقة من غرفتين تكلف أقل من فيلا كبيرة بكثير.",
            },
            {
              question: "هل تقدمون خدمات للمستأجرين والملاك؟",
              answer:
                "نعم، نخدم المستأجرين والملاك على حد سواء. سواء كنت تنتقل لمنزل جديد أو تستلم عقار، نساعدك في كل خطوة.",
            },
          ],
        },
      },
      commercial: {
        ar: {
          title: "حلول نقل متخصصة للقطاع التجاري",
          description:
            "نقل مكاتب وشركات بدون تعطيل العمل مع تخطيط محكم وتنفيذ سريع",
          image: "/images/office movers Jeddah.jpg",
          features: [
            "نقل مكاتب بدون تعطيل العمل",
            "نقل ليلي وفي العطلات",
            "تعامل خاص مع الأجهزة التقنية",
            "سرية تامة",
            "فرق كبيرة للإنجاز السريع",
            "عقود سنوية للشركات",
          ],
          faqs: [
            {
              question: "كيف تضمنون عدم تعطيل العمل؟",
              answer:
                "نخطط النقل ليتم في عطلة نهاية الأسبوع أو ليلاً. فريقنا يعمل بسرعة وكفاءة لضمان جاهزية مكتبك صباحاً.",
            },
            {
              question: "هل تنقلون المعدات التقنية؟",
              answer:
                "نعم، ننقل جميع المعدات بحرص. ننصح بالتنسيق مع قسم IT لديكم لفصل وتوصيل السيرفرات والأجهزة الحساسة.",
            },
          ],
        },
      },
      hospitality: {
        ar: {
          title: "حلول نقل متخصصة لقطاع الضيافة",
          description:
            "نقل فنادق ومنتجعات ومطاعم مع الحفاظ على جودة الأثاث الفاخر",
          image: "/images/professional movers Jeddah.jpg",
          features: [
            "تعامل خاص مع الأثاث الفاخر",
            "نقل معدات المطابخ التجارية",
            "تغليف احترافي للديكورات",
            "جدولة مرنة",
            "فرق متخصصة",
            "تأمين شامل",
          ],
          faqs: [
            {
              question: "هل تنقلون معدات المطابخ التجارية؟",
              answer:
                "نعم، لدينا خبرة في نقل جميع معدات المطابخ التجارية بما فيها الأفران الكبيرة والثلاجات الصناعية.",
            },
            {
              question: "كيف تحافظون على الأثاث الفاخر؟",
              answer:
                "نستخدم مواد تغليف فاخرة وصناديق خشبية مخصصة للقطع الثمينة. كل قطعة تُعامل بعناية فائقة.",
            },
          ],
        },
      },
      warehouses: {
        ar: {
          title: "حلول نقل متخصصة للمستودعات والمصانع",
          description:
            "نقل معدات ثقيلة ومخزون ضخم مع معدات رفع متخصصة",
          image: "/images/heavy furniture movers.jpg",
          features: [
            "معدات رفع ثقيلة",
            "نقل ماكينات صناعية",
            "فرق كبيرة",
            "جدولة مرنة",
            "تأمين شامل",
            "خبرة في اللوجستيات",
          ],
          faqs: [
            {
              question: "هل تنقلون الماكينات الصناعية الثقيلة؟",
              answer:
                "نعم، لدينا معدات رفع متخصصة وفرق مدربة على نقل الماكينات الثقيلة بأمان.",
            },
            {
              question: "كم يستغرق نقل مستودع كامل؟",
              answer:
                "يعتمد على حجم المستودع والمخزون. نوفر فرق كبيرة لإنجاز سريع قد يستغرق من يوم إلى أسبوع.",
            },
          ],
        },
      },
      education: {
        ar: {
          title: "حلول نقل متخصصة للقطاع التعليمي",
          description:
            "نقل مدارس وجامعات مع تعامل خاص مع المكتبات والمعامل",
          image: "/images/professional packing and moving.jpg",
          features: [
            "نقل المكتبات والكتب",
            "تعامل خاص مع معدات المعامل",
            "نقل الأثاث المدرسي",
            "جدولة في العطل",
            "فرق متخصصة",
            "أسعار تفضيلية",
          ],
          faqs: [
            {
              question: "متى أفضل وقت لنقل مدرسة؟",
              answer:
                "أفضل وقت هو العطل الصيفية أو الشتوية لتجنب تعطيل الدراسة. نخطط مسبقاً لضمان جاهزية كل شيء قبل بداية الفصل.",
            },
            {
              question: "هل تنقلون معدات المعامل الحساسة؟",
              answer:
                "نعم، لدينا خبرة في نقل معدات المعامل العلمية والحاسوبية بحرص شديد مع تغليف خاص.",
            },
          ],
        },
      },
      healthcare: {
        ar: {
          title: "حلول نقل متخصصة للقطاع الصحي",
          description:
            "نقل مستشفيات وعيادات مع عناية فائقة بالأجهزة الطبية",
          image: "/images/reliable movers Jeddah.jpg",
          features: [
            "تعامل خاص مع الأجهزة الطبية",
            "نقل معقم وآمن",
            "فرق مدربة",
            "جدولة مرنة",
            "تأمين شامل",
            "سرعة في التنفيذ",
          ],
          faqs: [
            {
              question: "كيف تتعاملون مع الأجهزة الطبية الحساسة؟",
              answer:
                "نستخدم تغليف خاص وصناديق مبطنة. ننصح دائماً بحضور فني طبي لفصل وتوصيل الأجهزة الحساسة.",
            },
            {
              question: "هل يمكن النقل بدون إيقاف الخدمة؟",
              answer:
                "نخطط النقل على مراحل أو في أوقات محددة لتقليل التأثير على الخدمة الصحية. كل حالة تُدرس بشكل فردي.",
            },
          ],
        },
      },
    };

    return contents[sector]?.ar || contents.residential.ar;
  };

  const content = getContent();

  return (
    <>
      <Breadcrumbs items={breadcrumbs} isRTL={isArabic} />

      <Hero
        title={content.title}
        subtitle={content.description}
        imageUrl={content.image}
        imageAlt={isArabic ? sectorData.nameAr : sectorData.nameEn}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {isArabic ? "مميزات خدماتنا" : "Our Service Features"}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {content.features.map((feature: string, index: number) => (
                <div key={index} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="prose prose-lg max-w-none">
              {isArabic && (
                <>
                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    لماذا نحن الأفضل لهذا القطاع؟
                  </h3>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    في <strong>شركة الأفضل</strong>، نفهم تماماً احتياجات {sectorData.nameAr} الخاصة.
                    لدينا فريق متخصص وخبرة طويلة في هذا المجال، مما يجعلنا الخيار المثالي لنقل آمن
                    وموثوق.
                  </p>

                  <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                    <li>فريق متخصص بخبرة في {sectorData.nameAr}</li>
                    <li>معدات مخصصة مناسبة للاحتياجات</li>
                    <li>تخطيط مسبق مع فهم كامل للتحديات</li>
                    <li>جدولة مرنة تناسب طبيعة العمل</li>
                    <li>ضمان شامل وتأمين كامل</li>
                    <li>أسعار تنافسية وشفافة</li>
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title={
          isArabic
            ? `هل تحتاج نقل مختص لـ${sectorData.nameAr}؟`
            : `Need Specialized Moving for ${sectorData.nameEn}?`
        }
        description={
          isArabic
            ? "تواصل معنا للحصول على استشارة مجانية وعرض سعر مخصص"
            : "Contact us for free consultation and customized quote"
        }
      />

      <FAQ
        title={isArabic ? "أسئلة شائعة" : "Frequently Asked Questions"}
        items={content.faqs}
      />
    </>
  );
}



