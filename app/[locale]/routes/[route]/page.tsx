import { Metadata } from "next";
import { notFound } from "next/navigation";
import Hero from "@/components/Hero";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Breadcrumbs from "@/components/Breadcrumbs";
import SchemaInjector from "@/components/SchemaInjector";
import { routes, site } from "@/config/site";
import { Truck, Clock, MapPin, CheckCircle2 } from "lucide-react";

export async function generateStaticParams() {
  return routes.map((route) => ({
    route: route.slug,
  }));
}

export async function generateMetadata({
  params: { locale, route },
}: {
  params: { locale: string; route: string };
}): Promise<Metadata> {
  const isArabic = locale === "ar";
  const routeData = routes.find((r) => r.slug === route);

  if (!routeData) return {};

  return {
    title: isArabic
      ? `نقل عفش من ${routeData.from} إلى ${routeData.to} | تسعير واضح وضمان — شركة الأفضل`
      : `Furniture Moving from ${routeData.from} to ${routeData.toEn} | Clear Pricing & Guarantee - Al Afdal`,
    description: isArabic
      ? `خدمة نقل عفش احترافية من ${routeData.from} إلى ${routeData.to}. المسافة ${routeData.distance}، الوقت ${routeData.duration}. نقل آمن مع ضمان شامل. اتصل: 0560586397`
      : `Professional furniture moving service from Jeddah to ${routeData.toEn}. Distance ${routeData.distance}, time ${routeData.duration}. Safe moving with comprehensive guarantee.`,
    alternates: {
      canonical: `/${locale === "ar" ? "" : locale + "/"}routes/${route}`,
      languages: {
        "ar-SA": `/routes/${route}`,
        "en-SA": `/en/routes/${route}`,
      },
    },
  };
}

export default function RoutePage({
  params: { locale, route },
}: {
  params: { locale: string; route: string };
}) {
  const isArabic = locale === "ar";
  const routeData = routes.find((r) => r.slug === route);

  if (!routeData) {
    notFound();
  }

  const breadcrumbs = [
    { label: isArabic ? "الرئيسية" : "Home", href: `/${locale === "ar" ? "" : locale}` },
    { label: isArabic ? "النقل بين المدن" : "Intercity Moving", href: `/${locale === "ar" ? "" : locale + "/"}routes` },
    { label: isArabic ? `${routeData.from} → ${routeData.to}` : `Jeddah → ${routeData.toEn}` },
  ];

  const faqs = [
    {
      question: isArabic
        ? `كم تكلفة نقل العفش من ${routeData.from} إلى ${routeData.to}؟`
        : `How much does furniture moving cost from Jeddah to ${routeData.toEn}?`,
      answer: isArabic
        ? `التكلفة تعتمد على حجم الأثاث، الكمية، ونوع الخدمة. كقاعدة عامة، المسافة ${routeData.distance} والوقت المتوقع ${routeData.duration}. شقة صغيرة (غرفتين) تكلف أقل من فيلا كبيرة. نوفر عرض سعر مجاني ودقيق بعد معاينة محتويات منزلك. السعر يشمل: التغليف، التحميل، النقل، التأمين، التفريغ، والتركيب الأساسي. اتصل بنا على ${site.phone} للحصول على عرض سعر مخصص.`
        : `Cost depends on furniture size, quantity, and service type. As general rule, distance is ${routeData.distance} and expected time ${routeData.duration}. Small apartment (2 rooms) costs less than large villa. We provide free and accurate quote after inspecting your home contents. Price includes: packing, loading, moving, insurance, unloading, and basic assembly. Call us at ${site.phone} for customized quote.`,
    },
    {
      question: isArabic
        ? `كم يستغرق النقل من ${routeData.from} إلى ${routeData.to}؟`
        : `How long does moving take from Jeddah to ${routeData.toEn}?`,
      answer: isArabic
        ? `وقت النقل الفعلي على الطريق ${routeData.duration} تقريباً. لكن العملية الكاملة تشمل: التغليف في ${routeData.from} (4-8 ساعات حسب الحجم)، النقل (${routeData.duration})، والتفريغ والتركيب في ${routeData.to} (4-6 ساعات). إجمالاً، من بداية التغليف حتى نهاية التركيب قد يستغرق يوم إلى يومين. يمكننا التغليف في يوم والنقل في اليوم التالي حسب تفضيلك.`
        : `Actual moving time on road is approximately ${routeData.duration}. But complete process includes: packing in Jeddah (4-8 hours depending on size), moving (${routeData.duration}), and unloading and assembly in ${routeData.toEn} (4-6 hours). In total, from start of packing to end of installation may take one to two days. We can pack on one day and move next day according to your preference.`,
    },
    {
      question: isArabic
        ? `هل تضمنون سلامة العفش خلال الرحلة؟`
        : `Do you guarantee furniture safety during journey?`,
      answer: isArabic
        ? `نعم تماماً. لدينا ثلاث طبقات من الحماية: أولاً، تغليف احترافي مضاعف بمواد عالية الجودة. ثانياً، تثبيت محكم داخل الشاحنة بأحزمة وحواجز لمنع الحركة. ثالثاً، تأمين شامل على جميع المحتويات طوال الرحلة. سائقونا محترفون ومدربون على القيادة الآمنة. في الحالات النادرة جداً لأي ضرر، نتحمل المسؤولية كاملة. رضاك وسلامة ممتلكاتك أولويتنا القصوى.`
        : `Yes absolutely. We have three protection layers: First, professional double packing with high-quality materials. Second, secure fastening inside truck with belts and barriers to prevent movement. Third, comprehensive insurance on all contents throughout journey. Our drivers are professional and trained in safe driving. In very rare cases of any damage, we take full responsibility. Your satisfaction and belongings safety are our top priority.`,
    },
    {
      question: isArabic
        ? `متى أفضل وقت للنقل بين المدن؟`
        : `When is best time for intercity moving?`,
      answer: isArabic
        ? `نوصي بتجنب ذروة الصيف (يونيو-أغسطس) بسبب الحرارة الشديدة، لكن إذا كان ضرورياً فشاحناتنا مجهزة بتكييف للحمولة. أفضل الأوقات: الربيع (مارس-مايو) والخريف (سبتمبر-نوفمبر). أما بالنسبة للأيام، نفضّل بداية الأسبوع لتجنب زحمة نهاية الأسبوع. النقل الليلي متاح ويكون أسرع بسبب قلة الزحام على الطرق السريعة.`
        : `We recommend avoiding peak summer (June-August) due to extreme heat, but if necessary our trucks are equipped with cargo cooling. Best times: spring (March-May) and fall (September-November). As for days, we prefer early week to avoid weekend traffic. Night moving is available and faster due to less congestion on highways.`,
    },
    {
      question: isArabic
        ? `هل يمكنني تتبع الشاحنة أثناء النقل؟`
        : `Can I track truck during moving?`,
      answer: isArabic
        ? `نعم، شاحناتنا مجهزة بنظام GPS. نوفر لك رقم الشاحنة ويمكنك الاتصال بالسائق مباشرة للاطمئنان. كما نرسل لك تحديثات دورية عبر الواتساب: عند بدء التحميل، عند الانطلاق، عند منتصف الطريق، وعند الوصول. بعض العملاء يفضلون السفر مع الشاحنة وهذا مقبول. الشفافية والتواصل المستمر جزء من خدمتنا.`
        : `Yes, our trucks are equipped with GPS system. We provide truck number and you can call driver directly for reassurance. We also send you regular updates via WhatsApp: upon loading start, upon departure, at midway, and upon arrival. Some clients prefer to travel with truck and this is acceptable. Transparency and continuous communication are part of our service.`,
    },
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: isArabic
      ? `نقل عفش من ${routeData.from} إلى ${routeData.to}`
      : `Furniture Moving from Jeddah to ${routeData.toEn}`,
    provider: {
      "@type": "MovingCompany",
      name: site.brand,
      telephone: site.phone,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Jeddah",
      },
      {
        "@type": "City",
        name: routeData.toEn,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <SchemaInjector schema={serviceSchema} />
      <SchemaInjector schema={faqSchema} />
      <Breadcrumbs items={breadcrumbs} isRTL={isArabic} />

      <Hero
        title={
          isArabic
            ? `نقل عفش من ${routeData.from} إلى ${routeData.to}`
            : `Furniture Moving from Jeddah to ${routeData.toEn}`
        }
        subtitle={
          isArabic
            ? `نقل آمن وموثوق - المسافة ${routeData.distance} والوقت ${routeData.duration}`
            : `Safe and reliable moving - Distance ${routeData.distance}, Time ${routeData.duration}`
        }
        imageUrl="/images/moving trucks Jeddah.jpg"
        imageAlt={isArabic ? `نقل عفش ${routeData.to}` : `${routeData.toEn} Moving`}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-primary-50 p-6 rounded-lg text-center">
                <MapPin className="w-12 h-12 text-primary-600 mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">{isArabic ? "المسافة" : "Distance"}</h3>
                <p className="text-2xl font-bold text-primary-700">{routeData.distance}</p>
              </div>

              <div className="bg-primary-50 p-6 rounded-lg text-center">
                <Clock className="w-12 h-12 text-primary-600 mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">{isArabic ? "الوقت المتوقع" : "Expected Time"}</h3>
                <p className="text-2xl font-bold text-primary-700">{routeData.duration}</p>
              </div>

              <div className="bg-primary-50 p-6 rounded-lg text-center">
                <Truck className="w-12 h-12 text-primary-600 mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">{isArabic ? "نقل مباشر" : "Direct Moving"}</h3>
                <p className="text-gray-700">{isArabic ? "بدون توقفات" : "No stops"}</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              {isArabic ? (
                <>
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    تخطط للانتقال من <strong>{routeData.from}</strong> إلى{" "}
                    <strong>{routeData.to}</strong>؟ شركة الأفضل تقدم خدمة نقل عفش احترافية على هذا
                    المسار بأمان تام وأسعار تنافسية. المسافة {routeData.distance} والوقت المتوقع{" "}
                    {routeData.duration}.
                  </p>

                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                    خدماتنا على مسار {routeData.from} - {routeData.to}
                  </h2>

                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                      <span>
                        <strong>تغليف مضاعف:</strong> حماية إضافية للمسافات الطويلة
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                      <span>
                        <strong>شاحنات مجهزة:</strong> مخصصة للطرق السريعة مع أنظمة تثبيت محكمة
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                      <span>
                        <strong>سائقون خبراء:</strong> يعرفون الطريق جيداً ومدربون على القيادة الآمنة
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                      <span>
                        <strong>تأمين شامل:</strong> تغطية كاملة من {routeData.from} حتى {routeData.to}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                      <span>
                        <strong>تتبع GPS:</strong> متابعة الشاحنة طوال الرحلة
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                      <span>
                        <strong>فريق استقبال:</strong> في {routeData.to} لإتمام التفريغ والتركيب
                      </span>
                    </li>
                  </ul>

                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                    نصائح للنقل على هذا المسار
                  </h2>

                  <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                    <li>احجز مبكراً خاصة في مواسم الإجازات والأعياد</li>
                    <li>تأكد من جاهزية المنزل الجديد في {routeData.to} (كهرباء، ماء)</li>
                    <li>أخبرنا عن أي قطع ثمينة أو حساسة لنوليها عناية خاصة</li>
                    <li>احتفظ بالمستندات المهمة والمجوهرات معك أثناء السفر</li>
                    <li>نسّق مع إدارة المبنى في كلا الموقعين لتسهيل الدخول والخروج</li>
                  </ul>

                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">عوامل التسعير</h2>

                  <p className="text-gray-700 leading-relaxed mb-4">تكلفة النقل على هذا المسار تعتمد على:</p>

                  <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                    <li>
                      <strong>الحجم والكمية:</strong> شقة صغيرة أم فيلا كبيرة
                    </li>
                    <li>
                      <strong>نوع الأثاث:</strong> عادي، فاخر، أو ثقيل جداً
                    </li>
                    <li>
                      <strong>الخدمات:</strong> تغليف، فك وتركيب، تخزين مؤقت
                    </li>
                    <li>
                      <strong>التوقيت:</strong> عادي أم عاجل
                    </li>
                    <li>
                      <strong>الطوابق:</strong> وجود مصعد أم لا (قد نحتاج ونش)
                    </li>
                  </ul>

                  <p className="text-gray-700 leading-relaxed bg-primary-50 p-6 rounded-lg">
                    <strong>احصل على عرض سعر مجاني:</strong> اتصل بنا على {site.phone} أو تواصل عبر
                    واتساب للحصول على عرض سعر دقيق ومخصص لنقلك من {routeData.from} إلى{" "}
                    {routeData.to}. المعاينة مجانية!
                  </p>
                </>
              ) : (
                <p className="text-xl text-gray-700 leading-relaxed">
                  Planning to move from <strong>Jeddah</strong> to <strong>{routeData.toEn}</strong>
                  ? Al Afdal provides professional furniture moving service on this route with
                  complete safety and competitive prices.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title={
          isArabic
            ? `جاهز للانتقال إلى ${routeData.to}؟`
            : `Ready to Move to ${routeData.toEn}?`
        }
        description={
          isArabic
            ? "احصل على عرض سعر مجاني الآن"
            : "Get free quote now"
        }
      />

      <FAQ
        title={
          isArabic
            ? `أسئلة شائعة عن النقل إلى ${routeData.to}`
            : `FAQs about Moving to ${routeData.toEn}`
        }
        items={faqs}
      />
    </>
  );
}








