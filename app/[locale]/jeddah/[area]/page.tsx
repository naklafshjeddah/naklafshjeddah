import { Metadata } from "next";
import { notFound } from "next/navigation";
import Hero from "@/components/Hero";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Breadcrumbs from "@/components/Breadcrumbs";
import SchemaInjector from "@/components/SchemaInjector";
import { areas } from "@/config/site";
import { site } from "@/config/site";

export async function generateStaticParams() {
  return areas.map((area) => ({
    area: area.slug,
  }));
}

export async function generateMetadata({
  params: { locale, area },
}: {
  params: { locale: string; area: string };
}): Promise<Metadata> {
  const isArabic = locale === "ar";
  const areaData = areas.find((a) => a.slug === area);
  
  if (!areaData) return {};

  return {
    title: isArabic
      ? `نقل عفش بحي ${areaData.nameAr} جدة — استجابة سريعة وتسعير واضح`
      : `Furniture Moving in ${areaData.nameEn} Jeddah - Quick Response & Clear Pricing`,
    description: isArabic
      ? `شركة نقل عفش محترفة في حي ${areaData.nameAr} بجدة. خدمات شاملة: تغليف، فك، تركيب، تخزين. فريق خبير ومعدات حديثة. اتصل: 0560586397`
      : `Professional furniture moving company in ${areaData.nameEn}, Jeddah. Complete services: packing, disassembly, assembly, storage. Expert team and modern equipment.`,
    alternates: {
      canonical: `/${locale === "ar" ? "" : locale + "/"}jeddah/${area}`,
      languages: {
        "ar-SA": `/jeddah/${area}`,
        "en-SA": `/en/jeddah/${area}`,
      },
    },
  };
}

export default function AreaPage({
  params: { locale, area },
}: {
  params: { locale: string; area: string };
}) {
  const isArabic = locale === "ar";
  const areaData = areas.find((a) => a.slug === area);

  if (!areaData) {
    notFound();
  }

  const breadcrumbs = [
    { label: isArabic ? "الرئيسية" : "Home", href: `/${locale === "ar" ? "" : locale}` },
    { label: isArabic ? "أحياء جدة" : "Jeddah Districts", href: `/${locale === "ar" ? "" : locale + "/"}jeddah` },
    { label: isArabic ? areaData.nameAr : areaData.nameEn },
  ];

  const faqs = [
    {
      question: isArabic
        ? `كم تكلفة نقل العفش في حي ${areaData.nameAr}؟`
        : `How much does furniture moving cost in ${areaData.nameEn}?`,
      answer: isArabic
        ? `تكلفة نقل العفش في ${areaData.nameAr} تعتمد على حجم المنزل، كمية الأثاث، الطابق، ووجود مصعد. نوفر معاينة مجانية لتحديد سعر دقيق. أسعارنا تنافسية وعادلة لجميع أحياء جدة بدون تمييز. اتصل بنا الآن على ${site.phone} للحصول على عرض سعر مخصص لمنزلك.`
        : `Furniture moving cost in ${areaData.nameEn} depends on home size, furniture quantity, floor, and elevator availability. We provide free inspection for accurate pricing. Our prices are competitive and fair for all Jeddah districts without discrimination. Call us now at ${site.phone} for customized quote.`,
    },
    {
      question: isArabic
        ? `كم تستغرق الاستجابة لطلبات النقل في ${areaData.nameAr}؟`
        : `How long does response take for moving requests in ${areaData.nameEn}?`,
      answer: isArabic
        ? `نفتخر باستجابتنا السريعة في جميع أحياء جدة. عادة نصل للمعاينة في نفس اليوم أو اليوم التالي حسب توفرك. لدينا فرق متعددة تغطي مناطق جدة المختلفة. في الحالات العاجلة، نوفر خدمة نقل سريع خلال ساعات. نحن متاحون 24/7 حتى في عطلات نهاية الأسبوع والأعياد.`
        : `We pride ourselves on quick response in all Jeddah districts. Usually we arrive for inspection same day or next day based on your availability. We have multiple teams covering different Jeddah areas. For urgent cases, we provide express moving service within hours. We're available 24/7 even on weekends and holidays.`,
    },
    {
      question: isArabic
        ? `هل تعرفون طرق وشوارع حي ${areaData.nameAr} جيداً؟`
        : `Do you know ${areaData.nameEn} streets and roads well?`,
      answer: isArabic
        ? `بالتأكيد! فريقنا لديه خبرة طويلة في العمل في ${areaData.nameAr} وجميع أحياء جدة. نعرف الشوارع الرئيسية والفرعية، الأزقة، مواقف الشاحنات المناسبة، وأفضل الأوقات لتجنب الازدحام. هذه المعرفة المحلية تساعدنا على إنجاز النقل بسرعة وكفاءة وتوفير الوقت والتكلفة عليك.`
        : `Absolutely! Our team has long experience working in ${areaData.nameEn} and all Jeddah districts. We know main and side streets, alleys, suitable truck parking spots, and best times to avoid traffic. This local knowledge helps us complete moving quickly and efficiently, saving you time and cost.`,
    },
    {
      question: isArabic
        ? `هل تقدمون خدمات إضافية في ${areaData.nameAr}؟`
        : `Do you provide additional services in ${areaData.nameEn}?`,
      answer: isArabic
        ? `نعم، نقدم مجموعة كاملة من الخدمات في ${areaData.nameAr}: نقل منازل وشقق وفلل، نقل مكاتب، تغليف احترافي، فك وتركيب الأثاث والمطابخ، فك وتركيب المكيفات، استخدام الونش للأدوار العليا، تخزين آمن، ونقل عاجل. نفس الخدمات الشاملة متوفرة في جميع أحياء جدة.`
        : `Yes, we provide complete range of services in ${areaData.nameEn}: home, apartment and villa moving, office moving, professional packing, furniture and kitchen assembly, AC installation, hoist for high floors, safe storage, and urgent moving. Same comprehensive services available in all Jeddah districts.`,
    },
    {
      question: isArabic
        ? `هل يمكنني تخزين العفش لديكم أثناء الانتقال من ${areaData.nameAr}؟`
        : `Can I store furniture with you during moving from ${areaData.nameEn}?`,
      answer: isArabic
        ? `بالتأكيد! نوفر خدمة تخزين آمن ومراقب على مدار الساعة. مخازننا حديثة ومكيفة ومؤمنة بالكامل. مثالية إذا كان هناك فجوة زمنية بين ترك منزلك القديم والدخول للجديد، أو إذا كنت بحاجة لتخزين قصير أو طويل المدى. أسعار تخزين تنافسية ومرونة في الوصول لعفشك.`
        : `Absolutely! We provide safe and 24/7 monitored storage service. Our warehouses are modern, climate-controlled, and fully secured. Ideal if there's time gap between leaving old home and entering new one, or if you need short or long-term storage. Competitive storage prices and flexible access to your furniture.`,
    },
  ];

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    name: site.brand,
    telephone: site.phone,
    areaServed: {
      "@type": "Place",
      name: `${areaData.nameEn}, Jeddah`,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jeddah",
      addressCountry: "SA",
    },
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
      <SchemaInjector schema={localBusinessSchema} />
      <SchemaInjector schema={faqSchema} />
      <Breadcrumbs items={breadcrumbs} isRTL={isArabic} />

      <Hero
        title={
          isArabic
            ? `نقل عفش في حي ${areaData.nameAr} — شركة الأفضل`
            : `Furniture Moving in ${areaData.nameEn} - Al Afdal`
        }
        subtitle={
          isArabic
            ? `خدمات نقل عفش احترافية في ${areaData.nameAr} - استجابة سريعة، أسعار واضحة، وضمان شامل. نعرف حيك جيداً`
            : `Professional furniture moving services in ${areaData.nameEn} - Quick response, clear prices, and comprehensive guarantee`
        }
        imageUrl="/images/movers in Jeddah.jpg"
        imageAlt={isArabic ? `نقل عفش ${areaData.nameAr}` : `${areaData.nameEn} Moving`}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            {isArabic ? (
              <>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  شركة نقل عفش متخصصة في حي {areaData.nameAr}
                </h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                  إذا كنت تبحث عن <strong>شركة نقل عفش موثوقة في حي {areaData.nameAr}</strong>،
                  شركة الأفضل هي خيارك الأمثل. نمتلك خبرة طويلة في خدمة سكان {areaData.nameAr}
                  ونعرف المنطقة جيداً — الشوارع، المباني، التحديات الخاصة، وأفضل الطرق للوصول.
                  هذه المعرفة المحلية تجعل خدمتنا أسرع وأكفأ.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  لماذا سكان {areaData.nameAr} يختاروننا؟
                </h3>

                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  <li>خبرة محلية عميقة بطرق وشوارع {areaData.nameAr}</li>
                  <li>استجابة سريعة - نصل خلال ساعات من اتصالك</li>
                  <li>فريق محترف ومدرب على أعلى مستوى</li>
                  <li>معدات حديثة وشاحنات نظيفة ومجهزة</li>
                  <li>أسعار تنافسية وشفافة بدون تكاليف مخفية</li>
                  <li>ضمان شامل على جميع ممتلكاتك</li>
                  <li>خدمة عملاء متميزة ومتابعة ما بعد النقل</li>
                </ul>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  خدماتنا الشاملة في {areaData.nameAr}
                </h3>

                <p className="text-gray-700 leading-relaxed mb-4">
                  نقدم جميع خدمات نقل العفش التي تحتاجها:
                </p>

                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  <li>
                    <strong>نقل منازل وشقق:</strong> من أصغر شقة إلى أكبر فيلا
                  </li>
                  <li>
                    <strong>نقل مكاتب وشركات:</strong> بدون تعطيل العمل
                  </li>
                  <li>
                    <strong>تغليف احترافي:</strong> بمواد عالية الجودة لحماية ممتلكاتك
                  </li>
                  <li>
                    <strong>فك وتركيب:</strong> غرف النوم، المطابخ، الدواليب
                  </li>
                  <li>
                    <strong>فك وتركيب المكيفات:</strong> بواسطة فنيين متخصصين
                  </li>
                  <li>
                    <strong>الونش والرافعة:</strong> للأدوار العليا بدون مصعد
                  </li>
                  <li>
                    <strong>تخزين آمن:</strong> مخازن مراقبة ومكيفة
                  </li>
                  <li>
                    <strong>نقل عاجل:</strong> خدمة سريعة في نفس اليوم
                  </li>
                </ul>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  كيف نعمل في {areaData.nameAr}
                </h3>

                <p className="text-gray-700 leading-relaxed mb-4">
                  العملية بسيطة ومريحة:
                </p>

                <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-6">
                  <li>
                    <strong>اتصل بنا:</strong> احصل على استشارة فورية وحدد موعد المعاينة
                  </li>
                  <li>
                    <strong>المعاينة المجانية:</strong> نزور منزلك في {areaData.nameAr} ونقيّم
                    احتياجاتك
                  </li>
                  <li>
                    <strong>عرض السعر:</strong> نقدم عرض سعر دقيق وشفاف بدون مفاجآت
                  </li>
                  <li>
                    <strong>الحجز والتحضير:</strong> نحدد الموعد المناسب ونجهز الفريق والمعدات
                  </li>
                  <li>
                    <strong>التنفيذ:</strong> تغليف، فك، نقل، وتركيب باحترافية كاملة
                  </li>
                  <li>
                    <strong>المتابعة:</strong> نتأكد من رضاك ونبقى على تواصل لأي احتياجات
                  </li>
                </ol>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  التسعير في {areaData.nameAr}
                </h3>

                <p className="text-gray-700 leading-relaxed mb-4">
                  أسعارنا عادلة وتنافسية وموحدة لجميع أحياء جدة. العوامل التي تحدد السعر:
                </p>

                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  <li>حجم المنزل وعدد الغرف</li>
                  <li>كمية ونوع الأثاث (ثقيل، خفيف، معقد)</li>
                  <li>الطابق ووجود مصعد (قد نحتاج ونش)</li>
                  <li>المسافة إلى الموقع الجديد</li>
                  <li>الخدمات الإضافية (تغليف، فك وتركيب، تخزين)</li>
                </ul>

                <p className="text-gray-700 leading-relaxed mb-6">
                  <strong>لا توجد تكاليف خفية أبداً.</strong> كل شيء موضح في عرض السعر. نوفر
                  معاينة مجانية لتحديد سعر دقيق قبل الالتزام بأي شيء.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  نصائح لسكان {areaData.nameAr} قبل النقل
                </h3>

                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  <li>احجز مبكراً خاصة في نهاية الشهر ومواسم الإجازات</li>
                  <li>رتّب الأغراض وتخلص من غير المستخدم</li>
                  <li>أخبرنا بأي قطع ثمينة أو حساسة تحتاج عناية خاصة</li>
                  <li>تأكد من توفر موقف مناسب للشاحنة</li>
                  <li>أفرغ الثلاجة والفريزر قبل النقل بيوم</li>
                </ul>
              </>
            ) : (
              <>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Specialized Furniture Moving Company in {areaData.nameEn}
                </h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                  If you're looking for <strong>reliable furniture moving company in {areaData.nameEn}</strong>,
                  Al Afdal is your best choice. We have long experience serving {areaData.nameEn}
                  residents and know the area well — streets, buildings, specific challenges, and
                  best access routes. This local knowledge makes our service faster and more efficient.
                </p>
              </>
            )}
          </div>
        </div>
      </section>

      <CTASection
        title={
          isArabic
            ? `احصل على عرض سعر مجاني في ${areaData.nameAr}`
            : `Get Free Quote in ${areaData.nameEn}`
        }
        description={
          isArabic
            ? "معاينة مجانية في منزلك اليوم - اتصل الآن"
            : "Free inspection at your home today - Call now"
        }
      />

      <FAQ
        title={isArabic ? "أسئلة شائعة من سكان " + areaData.nameAr : "FAQs from " + areaData.nameEn + " Residents"}
        items={faqs}
      />
    </>
  );
}








