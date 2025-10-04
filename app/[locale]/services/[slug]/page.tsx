import { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import Hero from "@/components/Hero";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CheckCircle2, Clock, Shield, Users, Award, Truck } from "lucide-react";
import { services } from "@/config/services";

export async function generateStaticParams() {
  const locales = ["ar", "en"];
  return services.flatMap((service) =>
    locales.map((locale) => ({
      locale,
      slug: service.slug,
    }))
  );
}

export async function generateMetadata({
  params: { locale, slug },
}: {
  params: { locale: string; slug: string };
}): Promise<Metadata> {
  const isArabic = locale === "ar";
  const service = services.find((s) => s.slug === slug);

  if (!service) return {};

  return {
    title: isArabic
      ? `${service.titleAr} | شركة الأفضل لنقل العفش`
      : `${service.titleEn} | Al Afdal Moving Company`,
    description: isArabic ? service.descAr : service.descEn,
    alternates: {
      canonical: `/${locale === "ar" ? "" : locale + "/"}services/${slug}`,
      languages: {
        "ar-SA": `/services/${slug}`,
        "en-SA": `/en/services/${slug}`,
      },
    },
  };
}

export default function ServicePage({
  params: { locale, slug },
}: {
  params: { locale: string; slug: string };
}) {
  setRequestLocale(locale);
  const isArabic = locale === "ar";
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const breadcrumbs = [
    { label: isArabic ? "الرئيسية" : "Home", href: `/${locale === "ar" ? "" : locale}` },
    {
      label: isArabic ? "الخدمات" : "Services",
      href: `/${locale === "ar" ? "" : locale + "/"}services`,
    },
    { label: isArabic ? service.titleAr : service.titleEn },
  ];

  const features = isArabic
    ? [
        "فريق محترف ومدرب",
        "معدات حديثة ومتطورة",
        "تغليف آمن وموثوق",
        "أسعار تنافسية وشفافة",
        "تأمين شامل على الممتلكات",
        "خدمة عملاء ممتازة",
      ]
    : [
        "Professional and trained team",
        "Modern and advanced equipment",
        "Safe and reliable packing",
        "Competitive and transparent prices",
        "Comprehensive insurance",
        "Excellent customer service",
      ];

  const steps = isArabic
    ? [
        {
          title: "المعاينة المجانية",
          desc: "نقوم بزيارة مجانية لمعاينة العفش وتقديم عرض سعر دقيق",
        },
        {
          title: "التخطيط والجدولة",
          desc: "نضع خطة شاملة ونحدد موعد مناسب للنقل",
        },
        {
          title: "التغليف والتحميل",
          desc: "نغلف جميع القطع بعناية فائقة ونحملها بأمان",
        },
        {
          title: "النقل والتفريغ",
          desc: "ننقل العفش إلى الموقع الجديد ونفرغه بعناية",
        },
      ]
    : [
        {
          title: "Free Inspection",
          desc: "We conduct a free visit to inspect furniture and provide accurate quote",
        },
        {
          title: "Planning and Scheduling",
          desc: "We create comprehensive plan and set convenient moving date",
        },
        {
          title: "Packing and Loading",
          desc: "We carefully pack all items and load them safely",
        },
        {
          title: "Moving and Unloading",
          desc: "We move furniture to new location and unload carefully",
        },
      ];

  const faqs = isArabic
    ? [
        {
          question: `كم تكلفة ${service.titleAr}؟`,
          answer:
            "التكلفة تعتمد على عدة عوامل مثل حجم الأثاث، المسافة، والخدمات الإضافية المطلوبة. نوفر معاينة مجانية لتحديد سعر دقيق. يمكنك الاتصال بنا على 0560586397 للحصول على عرض سعر مخصص.",
        },
        {
          question: "هل تقدمون خدمة التغليف؟",
          answer:
            "نعم، نوفر خدمة تغليف كاملة باستخدام مواد عالية الجودة لحماية أثاثك. يمكن طلب التغليف الكامل أو الجزئي حسب احتياجاتك.",
        },
        {
          question: "هل العفش مؤمن أثناء النقل؟",
          answer:
            "نعم، جميع عمليات النقل مشمولة بتأمين شامل على الممتلكات. نحن نأخذ كل الاحتياطات اللازمة لضمان سلامة أثاثك.",
        },
        {
          question: "كم يستغرق النقل؟",
          answer:
            "المدة تعتمد على حجم العفش والمسافة. عادة شقة من 3 غرف تستغرق 4-6 ساعات. سنعطيك تقديراً دقيقاً بعد المعاينة.",
        },
        {
          question: "هل تعملون في العطلات؟",
          answer:
            "نعم، نعمل على مدار الأسبوع بما في ذلك العطلات والأعياد. كما نوفر خدمة النقل الليلي للحالات العاجلة.",
        },
      ]
    : [
        {
          question: `How much does ${service.titleEn} cost?`,
          answer:
            "Cost depends on several factors such as furniture size, distance, and additional services required. We provide free inspection to determine accurate price. Call us at 0560586397 for custom quote.",
        },
        {
          question: "Do you provide packing service?",
          answer:
            "Yes, we provide complete packing service using high-quality materials to protect your furniture. You can request full or partial packing as per your needs.",
        },
        {
          question: "Is furniture insured during moving?",
          answer:
            "Yes, all moving operations are covered by comprehensive property insurance. We take all necessary precautions to ensure safety of your furniture.",
        },
        {
          question: "How long does moving take?",
          answer:
            "Duration depends on furniture size and distance. Typically 3-bedroom apartment takes 4-6 hours. We'll give you accurate estimate after inspection.",
        },
        {
          question: "Do you work on holidays?",
          answer:
            "Yes, we work 7 days a week including holidays. We also provide night moving service for urgent cases.",
        },
      ];

  return (
    <>
      <Breadcrumbs items={breadcrumbs} isRTL={isArabic} />

      <Hero
        title={isArabic ? service.titleAr : service.titleEn}
        subtitle={isArabic ? service.descAr : service.descEn}
        imageUrl={service.image}
        imageAlt={isArabic ? service.titleAr : service.titleEn}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {isArabic ? "لماذا تختارنا؟" : "Why Choose Us?"}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="prose prose-lg max-w-none">
              {isArabic ? (
                <>
                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    ما الذي تتضمنه الخدمة؟
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    في <strong>شركة الأفضل لنقل العفش بجدة</strong>، نقدم {service.titleAr} بأعلى
                    مستويات الجودة والاحترافية. خدماتنا شاملة وتشمل كل ما تحتاجه لنقل آمن
                    وموثوق.
                  </p>

                  <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                    <li>معاينة مجانية في الموقع</li>
                    <li>تغليف احترافي بمواد عالية الجودة</li>
                    <li>فك وتركيب الأثاث حسب الحاجة</li>
                    <li>نقل آمن بشاحنات مجهزة</li>
                    <li>تأمين شامل على جميع الممتلكات</li>
                    <li>فريق عمل محترف ومدرب</li>
                  </ul>
                </>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    What Does the Service Include?
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    At <strong>Al Afdal Moving Company in Jeddah</strong>, we provide{" "}
                    {service.titleEn} with highest quality and professionalism. Our services are
                    comprehensive and include everything you need for safe and reliable moving.
                  </p>

                  <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                    <li>Free on-site inspection</li>
                    <li>Professional packing with high-quality materials</li>
                    <li>Furniture disassembly and reassembly as needed</li>
                    <li>Safe transport with equipped trucks</li>
                    <li>Comprehensive insurance on all properties</li>
                    <li>Professional and trained work team</li>
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            {isArabic ? "خطوات العمل" : "Our Process"}
          </h2>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {index + 1}
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {[
              { icon: Clock, label: isArabic ? "سرعة في التنفيذ" : "Fast Execution" },
              { icon: Shield, label: isArabic ? "تأمين شامل" : "Full Insurance" },
              { icon: Users, label: isArabic ? "فريق محترف" : "Professional Team" },
              { icon: Award, label: isArabic ? "خبرة طويلة" : "Long Experience" },
              { icon: Truck, label: isArabic ? "أسطول حديث" : "Modern Fleet" },
              { icon: CheckCircle2, label: isArabic ? "ضمان الجودة" : "Quality Guarantee" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <item.icon className="w-12 h-12 text-primary-600 mb-3" />
                <span className="text-gray-700 font-medium text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={
          isArabic
            ? `احصل على عرض سعر مجاني لـ${service.titleAr}`
            : `Get Free Quote for ${service.titleEn}`
        }
        description={
          isArabic
            ? "اتصل بنا الآن على 0560586397 للحصول على استشارة مجانية"
            : "Call us now at 0560586397 for free consultation"
        }
      />

      <FAQ
        title={isArabic ? "الأسئلة الشائعة" : "Frequently Asked Questions"}
        items={faqs}
      />
    </>
  );
}

