import { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import Hero from "@/components/Hero";
import { services } from "@/config/services";

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
      ? "خدماتنا - شركة الأفضل لنقل العفش بجدة"
      : "Our Services - Al Afdal Moving Company Jeddah",
    description: isArabic
      ? "نقدم خدمات نقل عفش شاملة في جدة: نقل منازل، فلل، مكاتب، تغليف، فك وتركيب، تخزين وأكثر"
      : "We offer comprehensive furniture moving services in Jeddah: homes, villas, offices, packing, storage and more",
    alternates: {
      canonical: `/${locale === "ar" ? "" : locale + "/"}services`,
      languages: {
        "ar-SA": "/services",
        "en-SA": "/en/services",
      },
    },
  };
}

export default function ServicesPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const isArabic = locale === "ar";

  const breadcrumbs = [
    { label: isArabic ? "الرئيسية" : "Home", href: `/${locale === "ar" ? "" : locale}` },
    { label: isArabic ? "الخدمات" : "Services" },
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbs} isRTL={isArabic} />

      <Hero
        title={
          isArabic
            ? "خدماتنا المتميزة في نقل العفش"
            : "Our Premium Furniture Moving Services"
        }
        subtitle={
          isArabic
            ? "نوفر لك باقة شاملة من خدمات نقل العفش الاحترافية لتلبية جميع احتياجاتك بأعلى معايير الجودة"
            : "We provide you with a comprehensive package of professional furniture moving services to meet all your needs with the highest quality standards"
        }
        imageUrls={[
          "/images/furniture moving Jeddah.jpg",
          "/images/home movers Jeddah.jpg",
          "/images/villa movers Jeddah.jpg",
          "/images/office movers Jeddah.jpg",
          "/images/packing services Jeddah.jpg",
        ]}
        imageAlt={isArabic ? "خدمات نقل عفش جدة" : "Jeddah Moving Services"}
        ctaPrimary={isArabic ? "اتصل الآن" : "Call Now"}
        ctaSecondary={isArabic ? "واتساب" : "WhatsApp"}
      />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/${locale === "ar" ? "" : locale + "/"}services/${service.slug}`}
                className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all overflow-hidden hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={isArabic ? service.titleAr : service.titleEn}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {isArabic ? service.titleAr : service.titleEn}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-4 line-clamp-2">
                    {isArabic ? service.descAr : service.descEn}
                  </p>

                  <span className="text-primary-600 font-semibold">
                    {isArabic ? "اعرف المزيد ←" : "Learn More →"}
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                  مجموعة شاملة من خدمات نقل العفش في جدة
                </h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                  في <strong>شركة الأفضل</strong>، نفخر بتقديم باقة متكاملة من{" "}
                  <a href="/" className="text-primary-600 hover:underline">
                    خدمات نقل العفش الاحترافية
                  </a>{" "}
                  التي تلبي جميع احتياجاتك. مع خبرة تمتد لأكثر من عشر سنوات في خدمة
                  أهالي جدة، أصبحنا الخيار المفضل لآلاف العائلات والشركات التي تثق
                  في احترافيتنا وجودة خدماتنا. نحن نتفهم أن كل عملية نقل فريدة من
                  نوعها ولها متطلباتها الخاصة، لذلك نقدم حلولاً مخصصة تناسب كل حالة.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  خدمات نقل المنازل والشقق
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <a href={`/${isArabic ? "" : "en/"}services/home-moving-jeddah`} className="text-primary-600 hover:underline font-semibold">
                    خدمة نقل المنازل والشقق
                  </a>{" "}
                  هي أكثر خدماتنا طلباً. نقل المنزل ليس مجرد نقل أثاث، بل هو نقل
                  حياة كاملة بكل ذكرياتها وتفاصيلها. لذلك نتعامل مع كل قطعة بحرص
                  شديد كأنها ملكنا الخاص. نبدأ بزيارة منزلك لعمل معاينة دقيقة وتقييم
                  الكمية والحجم، ثم نضع خطة نقل محكمة تشمل: تغليف احترافي لجميع
                  المحتويات، فك وتركيب الأثاث، نقل آمن بشاحنات مجهزة، وإعادة ترتيب
                  كل شيء في منزلك الجديد. نخدم جميع أنواع السكن من الشقق الصغيرة
                  حتى المنازل الواسعة.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  خدمات نقل الفلل الفاخرة
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <a href={`/${isArabic ? "" : "en/"}services/villa-moving-jeddah`} className="text-primary-600 hover:underline font-semibold">
                    نقل الفلل
                  </a>{" "}
                  يتطلب خبرة خاصة وإمكانيات كبيرة. الفلل عادة تحتوي على كميات كبيرة
                  من الأثاث الفاخر والقطع الثمينة والأجهزة الحساسة. لدينا فرق متخصصة
                  مدربة على التعامل مع الفلل الفاخرة بكل احترافية. نوفر معدات رفع
                  متطورة للتعامل مع القطع الكبيرة والثقيلة، مواد تغليف فاخرة لحماية
                  الأثاث الثمين، وشاحنات كبيرة لنقل كميات كبيرة في رحلة واحدة. نهتم
                  بكل التفاصيل من الثريات الكريستال إلى الأثاث الأنتيك، ومن اللوحات
                  الفنية إلى التحف الثمينة. كما نقدم خدمات نقل حدائق الفلل والديكورات
                  الخارجية.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  خدمات نقل المكاتب والشركات
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <a href={`/${isArabic ? "" : "en/"}services/office-relocation-jeddah`} className="text-primary-600 hover:underline font-semibold">
                    نقل المكاتب والشركات
                  </a>{" "}
                  يختلف تماماً عن نقل المنازل. الوقت هنا عامل حاسم لتقليل تعطيل
                  العمل. نقدم خدمة نقل مكاتب احترافية تشمل التخطيط المسبق المحكم،
                  جدولة العمل في عطلة نهاية الأسبوع أو بعد ساعات العمل، تعليم وترقيم
                  جميع القطع لسهولة إعادة الترتيب، نقل آمن لأجهزة الكمبيوتر والخوادم
                  والمعدات الإلكترونية الحساسة، فك وتركيب المكاتب والكبائن والحواجز،
                  وإعادة تركيب شبكات الكهرباء والاتصالات بالتنسيق مع الفنيين المختصين.
                  نضمن لك استئناف العمل بسرعة بدون خسائر.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  خدمات التغليف وفك التغليف
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <a href={`/${isArabic ? "" : "en/"}services/packing-unpacking`} className="text-primary-600 hover:underline font-semibold">
                    التغليف الاحترافي
                  </a>{" "}
                  هو حجر الأساس لأي عملية نقل ناجحة. نستخدم أجود مواد التغليف
                  المتوفرة: كراتين مقوى بأحجام متعددة ومقاومة للضغط، فقاعات هوائية
                  ثلاثية الطبقات لحماية الزجاج والمرايا، أغطية قماشية للأثاث المنجد،
                  لفائف إسفنجية للقطع الحساسة، أكياس بلاستيكية للملابس والمفروشات،
                  وأشرطة تغليف قوية. فريقنا مدرب على تغليف كل نوع من الأثاث
                  بالطريقة الصحيحة: الأطباق والأواني الزجاجية تغلف بشكل فردي،
                  الأجهزة الإلكترونية تغلف في كراتين خاصة، اللوحات والمرايا في صناديق
                  مسطحة، والأثاث الخشبي في أغطية واقية. نوفر أيضاً خدمة فك التغليف
                  وترتيب الأغراض في المكان الجديد.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  خدمات فك وتركيب الأثاث
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  لدينا فنيون متخصصون في فك وتركيب جميع أنواع الأثاث. نتعامل مع:
                  غرف النوم الإيطالية والأوروبية المعقدة، المطابخ الحديثة بكافة
                  أنواعها، الدواليب والخزائن المدمجة، مكاتب الشركات وحواجز العمل،
                  طاولات الطعام القابلة للتمديد، الأسرة بأنواعها، المكتبات والأرفف،
                  وغيرها. نستخدم أدوات احترافية ونحافظ على تنظيم جميع القطع
                  والمسامير في أكياس مرقمة مع التوثيق بالصور عند الحاجة. كما نقدم
                  خدمات فك وتركيب المكيفات، الستائر والبراويز، والأجهزة الكهربائية
                  المنزلية.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  خدمات التخزين الآمنة
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  أحياناً تحتاج لتخزين أثاثك مؤقتاً بين منزلك القديم والجديد، أو
                  لفترة طويلة أثناء السفر أو السكن المؤقت. نوفر لك{" "}
                  <a href={`/${isArabic ? "" : "en/"}storage`} className="text-primary-600 hover:underline">
                    خدمات تخزين احترافية
                  </a>{" "}
                  في مخازن حديثة ومؤمنة بالكامل: مراقبة بالكاميرات 24/7، حراسة أمنية
                  دائمة، تحكم كامل في درجة الحرارة والرطوبة لحماية الأثاث الخشبي
                  والجلدي، مكافحة حشرات دورية، تأمين شامل ضد الحريق والسرقة، ونظام
                  إدارة مخزون إلكتروني يتيح لك معرفة أغراضك والوصول إليها بسهولة.
                  نوفر خيارات مرنة للتخزين القصير (أيام أو أسابيع) والطويل (شهور أو
                  سنوات) بأسعار تنافسية.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  خدمات نقل متخصصة أخرى
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  بالإضافة للخدمات الأساسية، نقدم خدمات متخصصة: نقل الأثاث الثقيل
                  والبيانوهات، نقل الأجهزة الطبية والمعدات الحساسة، نقل التحف
                  والأنتيكات النادرة، نقل المحلات التجارية والمطاعم، تنظيف المنزل
                  القديم بعد النقل، وخدمات التخلص من الأثاث القديم بطريقة مسؤولة.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  التغطية الجغرافية الشاملة
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  نخدم{" "}
                  <a href={`/${isArabic ? "" : "en/"}jeddah`} className="text-primary-600 hover:underline">
                    جميع أحياء ومناطق جدة
                  </a>{" "}
                  بدون استثناء: من الأحياء الراقية مثل الحمراء والروضة، إلى الأحياء
                  التاريخية مثل البلد، إلى المناطق الساحلية مثل أبحر والشاطئ. كما
                  نقدم خدمات النقل بين المدن لجميع مدن المملكة بشاحنات مجهزة للسفر
                  الطويل وسائقين محترفين يعرفون الطرق جيداً.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  مميزاتنا التي تجعلنا الأفضل
                </h3>

                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  <li>
                    <strong>فريق محترف ومدرب:</strong> جميع عمالنا مدربون على أعلى
                    مستوى ولديهم خبرة طويلة في مجال النقل. نختارهم بعناية ونوفر لهم
                    تدريباً مستمراً على أحدث تقنيات النقل والتغليف.
                  </li>
                  <li>
                    <strong>معدات وشاحنات حديثة:</strong> نمتلك أسطولاً كبيراً من
                    الشاحنات المجهزة بأحدث أنظمة التثبيت، ومعدات رفع متطورة، وأدوات
                    احترافية لفك وتركيب جميع أنواع الأثاث.
                  </li>
                  <li>
                    <strong>تأمين شامل:</strong> جميع عملياتنا مغطاة بتأمين شامل يحمي
                    ممتلكاتك من أي أضرار محتملة. في حالة حدوث أي ضرر (نادر جداً)،
                    نتحمل المسؤولية الكاملة ونعوضك فوراً.
                  </li>
                  <li>
                    <strong>أسعار شفافة ومنافسة:</strong> نقدم أسعاراً عادلة وواضحة
                    بدون رسوم خفية. معاينة مجانية وعرض سعر مفصل قبل البدء.
                  </li>
                  <li>
                    <strong>خدمة عملاء ممتازة:</strong> فريق خدمة عملاء متفاني متاح
                    24/7 للرد على استفساراتك وحل أي مشاكل بسرعة واحترافية.
                  </li>
                  <li>
                    <strong>سرعة وكفاءة:</strong> نعمل بكفاءة عالية لإنجاز النقل في
                    أقصر وقت ممكن مع الحفاظ على أعلى معايير الجودة والسلامة.
                  </li>
                  <li>
                    <strong>ضمان على الخدمة:</strong> نوفر ضماناً على جميع خدماتنا،
                    خاصة أعمال التركيب والتثبيت. أي مشكلة نعود لحلها فوراً بدون
                    تكلفة إضافية.
                  </li>
                  <li>
                    <strong>مرونة في المواعيد:</strong> نوفر خدمات نقل صباحية ومسائية
                    وليلية وفي عطلات نهاية الأسبوع لتناسب جدولك المزدحم.
                  </li>
                </ul>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  كيف تختار الخدمة المناسبة لك؟
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  اختيار الخدمة المناسبة يعتمد على عدة عوامل: نوع السكن (شقة، منزل،
                  فيلا، مكتب)، حجم الأثاث وكميته، المسافة بين الموقعين، ميزانيتك،
                  والإطار الزمني المتاح. نحن نساعدك في اختيار الباقة الأنسب من خلال
                  استشارة مجانية مع خبرائنا. اتصل بنا وسنرشدك للحل الأمثل.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  ماذا يقول عملاؤنا؟
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  نفخر بثقة آلاف العائلات والشركات فينا. عملاؤنا يقدرون احترافيتنا،
                  حرصنا على ممتلكاتهم، التزامنا بالمواعيد، وتعاملنا الراقي. تقييماتهم
                  الإيجابية ومراجعاتهم المشجعة هي أكبر دليل على جودة خدماتنا. نسعى
                  دائماً لتحقيق رضا كل عميل وتجاوز توقعاته.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  احجز خدمتك الآن
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  لا تتردد في التواصل معنا للحصول على استشارة مجانية واختيار الخدمة
                  المناسبة. نحن متواجدون على مدار الساعة لخدمتك. اتصل الآن على{" "}
                  <a href="tel:+966560586397" className="text-primary-600 hover:underline font-bold">
                    0560586397
                  </a>{" "}
                  أو تواصل معنا عبر{" "}
                  <a href="https://wa.me/966560586397" className="text-primary-600 hover:underline font-bold">
                    واتساب
                  </a>
                  . دع شركة الأفضل تجعل عملية نقلك سهلة ومريحة وخالية من القلق.
                </p>
              </>
            ) : (
              <>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                  Why We're the Best Choice for Furniture Moving in Jeddah?
                </h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                  At{" "}
                  <a href="/en" className="text-primary-600 hover:underline font-semibold">
                    Al Afdal Company
                  </a>
                  , we pride ourselves on providing comprehensive and excellent furniture moving
                  services that meet all your needs. We offer integrated solutions for all types
                  of moving: homes, apartments, villas, offices, and companies. Whatever your needs,
                  we have the experience, equipment, and specialized team to serve you professionally
                  and efficiently.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Home and Apartment Moving Services
                </h3>

                <p className="text-gray-700 leading-relaxed mb-4">
                  <a href="/en/services/home-moving-jeddah" className="text-primary-600 hover:underline font-semibold">
                    Home and apartment moving
                  </a>{" "}
                  requires care and professionalism. We understand how precious your belongings are
                  and handle them with extreme care as if they were our own. We start by visiting
                  your home for accurate inspection and volume assessment, then develop solid moving
                  plan including: professional packing of all contents, furniture disassembly and
                  assembly, safe transport with equipped trucks, and rearranging everything in your
                  new home. We serve all types of housing from small apartments to spacious houses.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Luxury Villa Moving Services
                </h3>

                <p className="text-gray-700 leading-relaxed mb-4">
                  <a href="/en/services/villa-moving-jeddah" className="text-primary-600 hover:underline font-semibold">
                    Villa moving
                  </a>{" "}
                  requires special expertise and significant capabilities. Villas usually contain
                  large quantities of luxury furniture, valuable pieces, and sensitive appliances.
                  We have specialized teams trained to handle luxury villas professionally. We
                  provide advanced lifting equipment for large and heavy pieces, premium packing
                  materials to protect valuable furniture, and large trucks to transport large
                  quantities in one trip. We care about every detail from crystal chandeliers to
                  antique furniture, from artwork to precious artifacts. We also provide villa
                  garden and outdoor decoration moving services.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Office and Company Relocation Services
                </h3>

                <p className="text-gray-700 leading-relaxed mb-4">
                  <a href="/en/services/office-relocation-jeddah" className="text-primary-600 hover:underline font-semibold">
                    Office and company relocation
                  </a>{" "}
                  is completely different from home moving. Time here is crucial factor to minimize
                  work disruption. We provide professional office moving service including: solid
                  advance planning, scheduling work on weekends or after hours, labeling and
                  numbering all pieces for easy rearrangement, safe transport of computers, servers,
                  and sensitive electronic equipment, disassembly and assembly of desks, cabinets,
                  and partitions, and reinstallation of electrical and communication networks in
                  coordination with specialized technicians. We guarantee quick resumption of work
                  without losses.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Packing and Unpacking Services
                </h3>

                <p className="text-gray-700 leading-relaxed mb-4">
                  <a href="/en/services/packing-unpacking" className="text-primary-600 hover:underline font-semibold">
                    Professional packing
                  </a>{" "}
                  is the cornerstone of any successful move. We use finest available packing
                  materials: reinforced cardboard boxes in multiple sizes pressure-resistant,
                  triple-layer bubble wrap to protect glass and mirrors, fabric covers for
                  upholstered furniture, foam rolls for delicate pieces, plastic bags for clothes
                  and linens, and strong packing tape. Our team is trained to pack each type of
                  furniture correctly: dishes and glassware are wrapped individually, electronics
                  in special boxes, paintings and mirrors in flat cases, and wooden furniture in
                  protective covers. We also provide unpacking and item arrangement service in new
                  location.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Furniture Disassembly and Assembly Services
                </h3>

                <p className="text-gray-700 leading-relaxed mb-4">
                  We have specialized technicians in disassembly and assembly of all furniture
                  types. We handle: complex Italian and European bedrooms, modern kitchens of all
                  types, built-in wardrobes and closets, company desks and work partitions,
                  extendable dining tables, beds of all types, libraries and shelves, and more. We
                  use professional tools and keep all pieces and screws organized in numbered bags
                  with photo documentation when needed. We also provide air conditioner, curtain
                  and frame, and home appliance disassembly and assembly services.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Safe Storage Services
                </h3>

                <p className="text-gray-700 leading-relaxed mb-4">
                  Sometimes you need to store your furniture temporarily between your old and new
                  home, or for long period during travel or temporary residence. We provide{" "}
                  <a href="/en/storage" className="text-primary-600 hover:underline">
                    professional storage services
                  </a>{" "}
                  in modern and fully secured warehouses: 24/7 camera surveillance, permanent security
                  guards, complete temperature and humidity control to protect wooden and leather
                  furniture, regular pest control, comprehensive fire and theft insurance, and
                  electronic inventory management system allowing you to know and access your items
                  easily. We provide flexible options for short-term (days or weeks) and long-term
                  (months or years) storage at competitive prices.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Other Specialized Moving Services
                </h3>

                <p className="text-gray-700 leading-relaxed mb-4">
                  In addition to basic services, we provide specialized services: heavy furniture and
                  piano moving, medical equipment and sensitive device moving, rare antique and
                  artifact moving, commercial and restaurant moving, old home cleaning after moving,
                  and responsible old furniture disposal services.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Why Choose Al Afdal for Your Moving?
                </h3>

                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  <li>
                    <strong>Long Experience:</strong> Over 10 years serving Jeddah residents
                  </li>
                  <li>
                    <strong>Qualified Team:</strong> All workers trained and background verified
                  </li>
                  <li>
                    <strong>Modern Equipment:</strong> Latest technology lifts, trucks, and tools
                  </li>
                  <li>
                    <strong>High-Quality Materials:</strong> We use best available packing materials
                  </li>
                  <li>
                    <strong>Comprehensive Insurance:</strong> Full coverage on all your belongings
                  </li>
                  <li>
                    <strong>Competitive Pricing:</strong> Fair prices with no hidden fees
                  </li>
                  <li>
                    <strong>Speed and Efficiency:</strong> We complete your move on time without delays
                  </li>
                  <li>
                    <strong>Excellent Customer Service:</strong> Available 24/7 for your service
                  </li>
                  <li>
                    <strong>Extensive Coverage:</strong> We serve all{" "}
                    <a href="/en/jeddah" className="text-primary-600 hover:underline">
                      Jeddah districts
                    </a>
                  </li>
                  <li>
                    <strong>Service Guarantee:</strong> We guarantee your satisfaction or refund
                  </li>
                </ul>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Our Work Process
                </h3>

                <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-6">
                  <li>
                    <strong>Contact and Consultation:</strong> Call{" "}
                    <a href="tel:+966560586397" className="text-primary-600 hover:underline font-bold">
                      0560586397
                    </a>{" "}
                    for free consultation
                  </li>
                  <li>
                    <strong>Free Home Inspection:</strong> Team visits for volume assessment and
                    challenge identification
                  </li>
                  <li>
                    <strong>Detailed Quote:</strong> We provide accurate quote explaining all items
                  </li>
                  <li>
                    <strong>Schedule Setting:</strong> Choose suitable time for move
                  </li>
                  <li>
                    <strong>Professional Packing:</strong> Team packs all belongings carefully
                  </li>
                  <li>
                    <strong>Safe Loading:</strong> Using proper equipment for loading
                  </li>
                  <li>
                    <strong>Secure Transport:</strong> Moving to new home with full caution
                  </li>
                  <li>
                    <strong>Organized Unloading:</strong> Placing furniture in designated locations
                  </li>
                  <li>
                    <strong>Assembly and Arrangement:</strong> Furniture assembly and item arrangement
                  </li>
                  <li>
                    <strong>Quality Inspection:</strong> Ensuring everything in place and your
                    satisfaction
                  </li>
                </ol>

                <p className="text-gray-700 leading-relaxed mt-8">
                  Don't hesitate to contact us today! Call{" "}
                  <a href="tel:+966560586397" className="text-primary-600 hover:underline font-bold">
                    0560586397
                  </a>{" "}
                  or message us on{" "}
                  <a href="https://wa.me/966560586397" className="text-primary-600 hover:underline font-bold">
                    WhatsApp
                  </a>{" "}
                  for free consultation and accurate quote. Make your move smooth and comfortable
                  experience with Al Afdal - your trusted furniture moving partner in Jeddah.
                </p>
              </>
            )}
          </div>
        </div>
      </section>

      <CTASection
        title={
          isArabic
            ? "هل تحتاج مساعدة في اختيار الخدمة المناسبة؟"
            : "Need Help Choosing the Right Service?"
        }
        description={
          isArabic
            ? "اتصل بنا الآن على 0560586397 وسيساعدك فريقنا في اختيار الخدمة الأنسب لك"
            : "Call us now at 0560586397 and our team will help you choose the most suitable service"
        }
      />
    </>
  );
}
