import { Metadata } from "next";
import Hero from "@/components/Hero";
import ProcessSteps from "@/components/ProcessSteps";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Breadcrumbs from "@/components/Breadcrumbs";
import SchemaInjector from "@/components/SchemaInjector";
import { CheckCircle2 } from "lucide-react";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const isArabic = locale === "ar";

  return {
    title: isArabic
      ? "نقل فلل بجدة | فريق مختص وضمان — شركة الأفضل"
      : "Villa Moving in Jeddah | Expert Team - Al Afdal",
    description: isArabic
      ? "خدمة نقل فلل احترافية في جدة - معدات خاصة للقطع الثقيلة والفاخرة، فريق كبير، وضمان شامل. اتصل: 0560586397"
      : "Professional villa moving service in Jeddah - Special equipment for heavy and luxury items, large team, comprehensive guarantee.",
    alternates: {
      canonical: `/${locale === "ar" ? "" : locale + "/"}services/villa-moving-jeddah`,
      languages: {
        "ar-SA": "/services/villa-moving-jeddah",
        "en-SA": "/en/services/villa-moving-jeddah",
      },
    },
  };
}

export default function VillaMovingPage({ params: { locale } }: { params: { locale: string } }) {
  const isArabic = locale === "ar";

  const breadcrumbs = [
    { label: isArabic ? "الرئيسية" : "Home", href: `/${locale === "ar" ? "" : locale}` },
    { label: isArabic ? "الخدمات" : "Services", href: `/${locale === "ar" ? "" : locale + "/"}services` },
    { label: isArabic ? "نقل فلل" : "Villa Moving" },
  ];

  const steps = [
    {
      title: isArabic ? "زيارة ميدانية شاملة" : "Comprehensive Site Visit",
      description: isArabic
        ? "معاينة دقيقة للفيلا وجميع محتوياتها، تقييم القطع الثقيلة والفاخرة، وتحديد المتطلبات"
        : "Thorough villa inspection and all contents, assess heavy and luxury items, determine requirements",
    },
    {
      title: isArabic ? "تخطيط استراتيجي" : "Strategic Planning",
      description: isArabic
        ? "وضع خطة تفصيلية تشمل عدد الفريق، المعدات الخاصة، الجدول الزمني، والاحتياطات الأمنية"
        : "Develop detailed plan including team size, special equipment, timeline, and security precautions",
    },
    {
      title: isArabic ? "تنفيذ محترف" : "Professional Execution",
      description: isArabic
        ? "تغليف فاخر، فك وتركيب دقيق، استخدام معدات متخصصة، ونقل آمن لجميع المحتويات"
        : "Luxury packing, precise disassembly and assembly, specialized equipment use, safe moving of all contents",
    },
    {
      title: isArabic ? "تسليم وضمان" : "Delivery & Guarantee",
      description: isArabic
        ? "تركيب كامل في الفيلا الجديدة، تنظيف الموقع، ومتابعة ما بعد النقل مع ضمان شامل"
        : "Complete installation in new villa, site cleanup, and post-moving follow-up with comprehensive guarantee",
    },
  ];

  const faqs = [
    {
      question: isArabic ? "كم تستغرق عملية نقل فيلا كبيرة؟" : "How long does large villa moving take?",
      answer: isArabic
        ? "فيلا متوسطة (4-5 غرف) تستغرق عادة يوم كامل، بينما الفلل الكبيرة (6+ غرف) قد تحتاج يومين أو أكثر حسب الكمية والتعقيد. نحن نخطط بدقة لضمان إنجاز النقل بكفاءة دون عجلة تؤثر على الجودة. يمكننا العمل في نوبات متعددة إذا لزم الأمر. العوامل المؤثرة: حجم الفيلا، عدد الطوابق، كمية الأثاث، القطع الخاصة (بيانو، تحف)، المسافة، والخدمات الإضافية مثل التخزين المؤقت."
        : "Medium villa (4-5 rooms) usually takes full day, while large villas (6+ rooms) may need two days or more depending on quantity and complexity. We plan precisely to ensure efficient completion without rush affecting quality. We can work in multiple shifts if needed. Influencing factors: villa size, number of floors, furniture quantity, special items (piano, antiques), distance, and additional services like temporary storage.",
    },
    {
      question: isArabic ? "كم عدد العمال المطلوب لنقل فيلا؟" : "How many workers needed for villa moving?",
      answer: isArabic
        ? "حسب حجم الفيلا، عادة نوفر فريق من 6-12 عامل محترف بالإضافة إلى مشرف. الفلل الكبيرة جداً قد تحتاج فريقين يعملان بالتوازي. كل عامل متخصص في مهمة: التغليف، الفك والتركيب، الحمل، القيادة. هذا العدد يضمن إنجاز العمل بسرعة وأمان. نختار الفريق بناءً على طبيعة الأثاث — القطع الثقيلة تحتاج عمال أقوياء، والتحف تحتاج متخصصين."
        : "Depending on villa size, we usually provide team of 6-12 professional workers plus supervisor. Very large villas may need two teams working in parallel. Each worker specializes in task: packing, disassembly and assembly, loading, driving. This number ensures fast and safe completion. We choose team based on furniture nature - heavy items need strong workers, antiques need specialists.",
    },
    {
      question: isArabic
        ? "هل تتعاملون مع القطع الفاخرة والأثاث الثمين؟"
        : "Do you handle luxury and valuable furniture?",
      answer: isArabic
        ? "بالتأكيد، لدينا خبرة واسعة في التعامل مع الأثاث الفاخر، التحف، اللوحات الفنية، الثريات الكريستال، البيانو، والقطع الثمينة. نستخدم مواد تغليف خاصة: صناديق خشبية مخصصة (crating)، إسفنج عالي الكثافة، أغطية قماشية فاخرة. كل قطعة ثمينة تُصور قبل وبعد، تُغلف بشكل فردي، وتُنقل بحرص شديد. لدينا تأمين إضافي للقطع عالية القيمة."
        : "Absolutely, we have extensive experience handling luxury furniture, antiques, artworks, crystal chandeliers, pianos, and valuable pieces. We use special packing materials: custom wooden crates, high-density foam, luxury fabric covers. Each valuable item is photographed before and after, individually packed, and moved with extreme care. We have additional insurance for high-value items.",
    },
    {
      question: isArabic
        ? "هل تنقلون الحدائق والديكورات الخارجية؟"
        : "Do you move gardens and outdoor decorations?",
      answer: isArabic
        ? "نعم، نقدم خدمات شاملة تشمل الأثاث الخارجي، الديكورات، التماثيل، النوافير، والنباتات الكبيرة في الأحواض. لدينا معدات خاصة لنقل القطع الحجرية الثقيلة والتماثيل. النباتات نتعامل معها بعناية للحفاظ على جذورها. أثاث الحدائق (طاولات، كراسي، مظلات) نغلفه لحمايته أثناء النقل. الأنظمة الكهربائية الخارجية (إضاءة، نوافير) يمكن فكها وتركيبها بواسطة فنيين متخصصين."
        : "Yes, we provide comprehensive services including outdoor furniture, decorations, statues, fountains, and large potted plants. We have special equipment for moving heavy stone pieces and statues. Plants are handled carefully to preserve their roots. Garden furniture (tables, chairs, umbrellas) is packed for protection during moving. Outdoor electrical systems (lighting, fountains) can be disconnected and installed by specialized technicians.",
    },
    {
      question: isArabic ? "ما التكلفة التقريبية لنقل فيلا؟" : "What's the approximate cost of villa moving?",
      answer: isArabic
        ? "التكلفة تختلف بشكل كبير حسب عدة عوامل: حجم الفيلا (عدد الغرف والأدوار)، كمية الأثاث، نوع الأثاث (عادي أم فاخر)، المسافة، الخدمات الإضافية (تغليف فاخر، تخزين، فك وتركيب شامل). كقاعدة عامة، فيلا متوسطة تكلف أكثر من شقة كبيرة بـ 2-3 أضعاف. نوفر معاينة مجانية وعرض سعر تفصيلي ودقيق قبل الالتزام. لا توجد مفاجآت في الفاتورة — كل شيء موضح مسبقاً."
        : "Cost varies significantly based on several factors: villa size (number of rooms and floors), furniture quantity, furniture type (regular or luxury), distance, additional services (luxury packing, storage, comprehensive assembly). As general rule, medium villa costs 2-3 times more than large apartment. We provide free inspection and detailed accurate quote before commitment. No surprises in bill - everything explained upfront.",
    },
    {
      question: isArabic
        ? "هل تنقلون الفلل بين المدن (مثل جدة - الرياض)؟"
        : "Do you move villas between cities (like Jeddah - Riyadh)?",
      answer: isArabic
        ? "نعم بالتأكيد، نقدم خدمات نقل الفلل بين جميع مدن المملكة. لدينا شاحنات كبيرة مجهزة خصيصاً للمسافات الطويلة، وفرق متخصصة في النقل بين المدن. النقل من جدة إلى الرياض، مكة، المدينة، الطائف، أبها، أو أي مدينة أخرى. نخطط الرحلة بدقة، نستخدم طرق آمنة، ونضمن وصول جميع ممتلكاتك سليمة. التكلفة تشمل: الوقود، السائقين، التأمين على الطريق، والإقامة إذا لزم الأمر."
        : "Yes absolutely, we provide villa moving services between all Saudi cities. We have large trucks specially equipped for long distances, and teams specialized in intercity moving. Moving from Jeddah to Riyadh, Makkah, Madinah, Taif, Abha, or any other city. We plan journey precisely, use safe routes, and ensure all your belongings arrive safely. Cost includes: fuel, drivers, road insurance, and accommodation if needed.",
    },
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: isArabic ? "نقل فلل" : "Villa Moving",
    provider: {
      "@type": "MovingCompany",
      name: "شركة الأفضل",
      telephone: "+966560586397",
    },
    areaServed: {
      "@type": "City",
      name: "Jeddah",
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
      <SchemaInjector schema={serviceSchema} />
      <SchemaInjector schema={faqSchema} />
      <Breadcrumbs items={breadcrumbs} isRTL={isArabic} />

      <Hero
        title={isArabic ? "نقل فلل بجدة — خدمة احترافية للفلل الكبيرة" : "Villa Moving in Jeddah - Professional Service for Large Villas"}
        subtitle={
          isArabic
            ? "نقل آمن ومنظم لفيلتك مع فريق كبير ومعدات متخصصة. خبرة في التعامل مع القطع الفاخرة والثقيلة"
            : "Safe and organized villa moving with large team and specialized equipment. Experience in handling luxury and heavy items"
        }
        imageUrl="/images/villa movers Jeddah.jpg"
        imageAlt={isArabic ? "نقل فلل جدة - شركة الأفضل" : "Jeddah Villa Moving - Al Afdal"}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            {isArabic ? (
              <>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  نقل الفيلا تحدٍّ أكبر بكثير من نقل الشقة — مساحات واسعة، أثاث ثقيل، قطع فاخرة،
                  وتفاصيل كثيرة. في <strong>شركة الأفضل</strong>، نمتلك الخبرة والموارد لنقل فيلتك
                  بالكامل بأمان واحترافية. فريقنا الكبير ومعداتنا المتخصصة تجعل العملية سلسة ومريحة لك.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-6">
                  لماذا نحن الأفضل في نقل الفلل؟
                </h2>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                    <span>
                      <strong>فرق كبيرة ومنظمة:</strong> من 6 إلى 12 عامل محترف حسب حجم الفيلا،
                      بالإضافة إلى مشرف متخصص لتنسيق العمل
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                    <span>
                      <strong>معدات متخصصة:</strong> ونش هيدروليكي، رافعات، عربات نقل، وأدوات فك
                      وتركيب احترافية
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                    <span>
                      <strong>خبرة في الأثاث الفاخر:</strong> تعامل خاص مع التحف، اللوحات، الثريات،
                      والبيانو
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                    <span>
                      <strong>شاحنات كبيرة:</strong> أسطول من الشاحنات بأحجام مختلفة لنقل محتويات
                      الفيلا دفعة واحدة أو على دفعات
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                    <span>
                      <strong>تأمين شامل:</strong> تغطية كاملة لجميع محتويات الفيلا مهما كانت قيمتها
                    </span>
                  </li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                  خدماتنا الشاملة لنقل الفلل
                </h2>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. المعاينة التفصيلية</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  نزور فيلتك ونقيّم كل شيء: عدد الغرف والأدوار، أنواع الأثاث، القطع الثقيلة (خزائن
                  كبيرة، طاولات رخامية)، القطع الحساسة (تحف، لوحات)، الديكورات الخارجية، والمعدات
                  الخاصة المطلوبة. بناءً على ذلك نضع خطة تفصيلية وعرض سعر دقيق.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  2. التغليف الفاخر والمتخصص
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  كل قطعة تُعامل حسب طبيعتها. الأثاث الخشبي الفاخر: أغطية قماشية سميكة وإسفنج واقي.
                  الزجاجيات والثريات: صناديق مبطنة وفقاعات هوائية متعددة الطبقات. التحف واللوحات:
                  صناديق خشبية مخصصة (custom crating). السجاد والستائر: لفائف واقية. كل صندوق يُعنون
                  بوضوح ليسهل التعرف عليه.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  3. الفك والتفكيك المحترف
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  الفلل عادة تحتوي أثاث معقد: غرف نوم فاخرة متعددة، مطابخ كبيرة، دواليب ضخمة، مكتبات
                  خشبية، أسرّة king size، طاولات طعام قابلة للتمديد. فريقنا يفك كل شيء باحترافية،
                  يُرقّم القطع، يحفظ البراغي في أكياس معنونة، ويصور الخطوات المعقدة لضمان التركيب
                  الصحيح.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. النقل الآمن</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  نستخدم شاحنات كبيرة (10-12 متر) مغلقة ونظيفة، مجهزة بأحزمة تثبيت قوية، حواجز داخلية،
                  وأرضيات مبطنة. القطع الثقيلة تُحمل بمعدات رفع آمنة. نقود بحرص وعلى سرعات معتدلة. إذا
                  كانت المسافة طويلة، نتابع الشاحنة عبر GPS ونبقيك على اطلاع.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  5. التركيب والترتيب في الفيلا الجديدة
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  في فيلتك الجديدة، نركب كل ما فككناه، نضع الأثاث في الأماكن التي تحددها، نعلّق
                  اللوحات والثريات، نفرش السجاد، ونزيل جميع مواد التغليف. نترك فيلتك جاهزة تماماً
                  للسكن. كما نقدم خدمات إضافية: تركيب الستائر، توصيل الأجهزة الكهربائية، وفك وتركيب
                  المكيفات.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                  التحديات الخاصة في نقل الفلل
                </h2>

                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  <li>
                    <strong>القطع الثقيلة جداً:</strong> خزائن، طاولات رخام، أجهزة رياضية ضخمة —
                    نستخدم معدات خاصة ومنحدرات آمنة
                  </li>
                  <li>
                    <strong>الثريات الكريستال:</strong> فك دقيق، تغليف كل قطعة على حدة، وتركيب
                    احترافي بواسطة كهربائيين
                  </li>
                  <li>
                    <strong>البيانو:</strong> معاملة فائقة الحرص — تغليف خاص، نقل بزاوية صحيحة، وتثبيت
                    محكم
                  </li>
                  <li>
                    <strong>الحدائق والديكورات الخارجية:</strong> نقل النباتات الكبيرة، التماثيل،
                    النوافير، والأثاث الخارجي
                  </li>
                  <li>
                    <strong>الأدوار المتعددة:</strong> تنسيق دقيق لنقل محتويات كل دور دون خلط
                  </li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">نصائح قبل نقل الفيلا</h2>

                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  <li>
                    <strong>ابدأ التخطيط مبكراً:</strong> نقل الفيلا يحتاج وقت — احجز قبل أسبوعين على
                    الأقل
                  </li>
                  <li>
                    <strong>رتّب الأغراض:</strong> هذه فرصة للتخلص من غير المستخدم وتوفير المساحة
                    والتكلفة
                  </li>
                  <li>
                    <strong>أخبرنا عن القطع الخاصة:</strong> التحف، اللوحات الثمينة، الأجهزة الحساسة
                    — نعدّ لها خطة خاصة
                  </li>
                  <li>
                    <strong>تأكد من جاهزية الفيلا الجديدة:</strong> الكهرباء، الماء، والنظافة جاهزة
                    قبل النقل
                  </li>
                  <li>
                    <strong>احتفظ بالمستندات معك:</strong> أوراق الملكية، العقود، والمجوهرات في حقيبة
                    يدوية
                  </li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">التسعير</h2>

                <p className="text-gray-700 leading-relaxed mb-4">
                  نقل الفيلا تكلفته أعلى من الشقة بسبب الحجم والتعقيد. العوامل المؤثرة:
                </p>

                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  <li>حجم الفيلا (عدد الغرف والأدوار)</li>
                  <li>كمية الأثاث ونوعه (عادي/فاخر/ثقيل)</li>
                  <li>عدد العمال المطلوب (6-12 عامل)</li>
                  <li>عدد الشاحنات (حسب الكمية)</li>
                  <li>المعدات الخاصة (ونش، رافعات، صناديق خشبية)</li>
                  <li>المسافة والوقت المتوقع</li>
                  <li>الخدمات الإضافية (تخزين، فك وتركيب شامل)</li>
                </ul>

                <p className="text-gray-700 leading-relaxed">
                  <strong>المعاينة المجانية</strong> تعطينا تقييم دقيق ونقدم عرض سعر تفصيلي. نحن
                  شفافون تماماً — لا توجد تكاليف خفية.
                </p>
              </>
            ) : (
              <p className="text-xl text-gray-700 leading-relaxed">
                Moving a villa is much bigger challenge than apartment - large spaces, heavy
                furniture, luxury items, and many details. At Al Afdal Company, we have experience
                and resources to move your entire villa safely and professionally.
              </p>
            )}
          </div>
        </div>
      </section>

      <ProcessSteps title={isArabic ? "كيف نعمل؟" : "How We Work?"} steps={steps} />

      <CTASection
        title={isArabic ? "احصل على عرض سعر مجاني لنقل فيلتك" : "Get Free Quote for Your Villa Moving"}
        description={
          isArabic
            ? "معاينة شاملة مجانية في فيلتك وعرض سعر تفصيلي"
            : "Comprehensive free inspection at your villa and detailed quote"
        }
      />

      <FAQ items={faqs} />
    </>
  );
}








