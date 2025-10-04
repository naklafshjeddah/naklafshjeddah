import { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import Hero from "@/components/Hero";
import ProcessSteps from "@/components/ProcessSteps";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Breadcrumbs from "@/components/Breadcrumbs";
import SchemaInjector from "@/components/SchemaInjector";
import { Shield, Star, Clock, CheckCircle2 } from "lucide-react";
import Link from "next/link";

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
      ? "نقل منازل وشقق بجدة | فريق مختص وضمان — شركة الأفضل"
      : "Home & Apartment Moving in Jeddah | Expert Team - Al Afdal",
    description: isArabic
      ? "خدمة نقل منازل احترافية في جدة - تغليف آمن، فك وتركيب، نقل سريع وضمان شامل. أسعار تنافسية وفريق خبير. اتصل: 0560586397"
      : "Professional home moving service in Jeddah - Safe packing, assembly, fast moving and comprehensive guarantee. Competitive prices and expert team.",
    alternates: {
      canonical: `/${locale === "ar" ? "" : locale + "/"}services/home-moving-jeddah`,
      languages: {
        "ar-SA": "/services/home-moving-jeddah",
        "en-SA": "/en/services/home-moving-jeddah",
      },
    },
  };
}

export default function HomeMovingPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const isArabic = locale === "ar";

  const breadcrumbs = [
    { label: isArabic ? "الرئيسية" : "Home", href: `/${locale === "ar" ? "" : locale}` },
    { label: isArabic ? "الخدمات" : "Services", href: `/${locale === "ar" ? "" : locale + "/"}services` },
    { label: isArabic ? "نقل منازل وشقق" : "Home Moving" },
  ];

  const steps = [
    {
      title: isArabic ? "الاتصال والمعاينة" : "Contact & Inspection",
      description: isArabic
        ? "نزور منزلك لتقييم دقيق للأثاث والكمية ونقدم عرض سعر شفاف ومفصل"
        : "We visit your home for accurate furniture and quantity assessment and provide transparent detailed quote",
    },
    {
      title: isArabic ? "التخطيط والتحضير" : "Planning & Preparation",
      description: isArabic
        ? "نضع خطة مفصلة للنقل ونحدد المواد المطلوبة والفريق والمعدات المناسبة"
        : "We develop detailed moving plan and determine required materials, team, and suitable equipment",
    },
    {
      title: isArabic ? "التغليف والفك" : "Packing & Disassembly",
      description: isArabic
        ? "تغليف احترافي لكل قطعة وفك الأثاث المعقد مع ترقيم القطع لسهولة التركيب"
        : "Professional packing of every item and disassembly of complex furniture with numbering for easy assembly",
    },
    {
      title: isArabic ? "النقل والتركيب" : "Moving & Installation",
      description: isArabic
        ? "نقل آمن في شاحنات مجهزة ثم التركيب الدقيق في منزلك الجديد"
        : "Safe moving in equipped trucks then precise installation in your new home",
    },
  ];

  const faqs = [
    {
      question: isArabic
        ? "كم يستغرق نقل شقة من غرفتين في جدة؟"
        : "How long does moving a 2-bedroom apartment in Jeddah take?",
      answer: isArabic
        ? "عادة تستغرق شقة من غرفتين بين 4 إلى 6 ساعات شاملة التغليف والنقل والتركيب، حسب كمية الأثاث والمسافة والطابق. إذا كان الأثاث مُعبأ مسبقاً قد تقل المدة. نحن نعمل بكفاءة عالية دون التأثير على جودة الخدمة أو سلامة ممتلكاتك. يمكننا أيضاً توفير خدمة نقل سريع إذا كنت في عجلة من أمرك."
        : "Typically, a 2-bedroom apartment takes 4-6 hours including packing, moving, and installation, depending on furniture quantity, distance, and floor. If furniture is pre-packed, duration may be less. We work with high efficiency without affecting service quality or safety of your belongings. We can also provide express moving service if you're in hurry.",
    },
    {
      question: isArabic
        ? "هل تقدمون خدمة فك وتركيب غرف النوم؟"
        : "Do you provide bedroom disassembly and assembly service?",
      answer: isArabic
        ? "بالتأكيد، فريقنا متخصص في فك وتركيب جميع أنواع غرف النوم: الخشبية، المودرن، الكلاسيكية، والمعقدة. نستخدم أدوات احترافية ونُرقّم القطع لضمان التركيب الصحيح. نحافظ على جميع البراغي والقطع الصغيرة في أكياس مُعنونة. كما نقدم نفس الخدمة للمطابخ، الدواليب، وقطع الأثاث الأخرى المعقدة."
        : "Absolutely, our team specializes in disassembly and assembly of all bedroom types: wooden, modern, classic, and complex. We use professional tools and number pieces to ensure correct installation. We keep all screws and small parts in labeled bags. We also provide same service for kitchens, wardrobes, and other complex furniture.",
    },
    {
      question: isArabic ? "هل أسعاركم تشمل التغليف؟" : "Do your prices include packing?",
      answer: isArabic
        ? "نوفر خيارين: عرض سعر شامل التغليف أو بدونه حسب احتياجك. التغليف يشمل توفير جميع المواد (كراتين مقوى، فقاعات هوائية، أغطية واقية، شرائط لاصقة) والقيام بالتغليف الاحترافي لكل القطع. إذا كنت تفضل التغليف بنفسك، نوفر المواد فقط أو عرض سعر للنقل فقط. نحن شفافون تماماً في التسعير ونوضح كل بند."
        : "We offer two options: quote including packing or without, based on your needs. Packing includes providing all materials (reinforced boxes, bubble wrap, protective covers, tapes) and professional packing of all items. If you prefer to pack yourself, we provide materials only or quote for moving only. We are completely transparent in pricing and clarify each item.",
    },
    {
      question: isArabic
        ? "ماذا لو كان منزلي في طابق عالٍ بدون مصعد؟"
        : "What if my home is on high floor without elevator?",
      answer: isArabic
        ? "لا مشكلة، لدينا الخبرة والمعدات للتعامل مع هذه الحالات. نستخدم الونش الهيدروليكي (الرافعة) لنقل القطع الثقيلة والكبيرة من الأدوار العليا بأمان تام. القطع الصغيرة يحملها فريقنا المُدرب على الدرج. قد تكون هناك تكلفة إضافية لاستخدام الونش حسب الطابق، لكننا نوضح ذلك في المعاينة المجانية."
        : "No problem, we have experience and equipment to handle these cases. We use hydraulic hoist (crane) to safely move heavy and large items from high floors. Small items are carried by our trained team on stairs. There may be additional cost for hoist use depending on floor, but we clarify that in free inspection.",
    },
    {
      question: isArabic
        ? "هل تنقلون الأجهزة الكهربائية والثلاجات؟"
        : "Do you move electrical appliances and refrigerators?",
      answer: isArabic
        ? "نعم بالطبع، ننقل جميع الأجهزة الكهربائية: الثلاجات، الغسالات، المكيفات، الأفران، وغيرها. نقوم بفصل وتوصيل ما يحتاج لذلك (مثل الغسالات). الثلاجات نُفرغها ونتركها تذوب قبل النقل. نستخدم تغليف خاص للأجهزة الحساسة. كما نوفر خدمة فك وتركيب المكيفات بواسطة فنيين متخصصين."
        : "Yes of course, we move all electrical appliances: refrigerators, washing machines, air conditioners, ovens, etc. We disconnect and reconnect what needs it (like washing machines). We empty and defrost refrigerators before moving. We use special packing for sensitive appliances. We also provide AC installation and removal service by specialized technicians.",
    },
    {
      question: isArabic
        ? "هل تخدمون جميع أحياء جدة؟"
        : "Do you serve all Jeddah districts?",
      answer: isArabic
        ? "نعم تماماً، نغطي جميع أحياء جدة بدون استثناء: الحمراء، الروضة، السلامة، النعيم، الشاطئ، الرحاب، المرجان، النهضة، الزهراء، البوادي، الربوة، الصفا، العزيزية، البلد، بني مالك، أبحر الشمالية والجنوبية، وجميع الأحياء الأخرى. لدينا فرق متعددة لتغطية كافة المناطق والاستجابة السريعة. كما نقدم خدمات النقل بين المدن."
        : "Yes exactly, we cover all Jeddah districts without exception: Al Hamra, Al Rawdah, As Salama, Al Naeem, Ash Shati, Ar Rihab, Al Murjan, An Nahdah, Az Zahraa, Al Bawadi, Ar Rabwa, Al Safa, Al Aziziyah, Al Balad, Bani Malik, Obhur North and South, and all other districts. We have multiple teams to cover all areas and quick response. We also provide intercity moving services.",
    },
    {
      question: isArabic ? "ماذا لو حدث أي ضرر للأثاث؟" : "What if any damage occurs to furniture?",
      answer: isArabic
        ? "نحن ملتزمون بأعلى معايير السلامة ونادراً ما يحدث أي ضرر. لكن في الحالات النادرة جداً، لدينا تغطية تأمينية كاملة ونتحمل المسؤولية. نقوم بتصوير القطع الثمينة قبل وبعد النقل كتوثيق. نصلح أو نعوض أي ضرر بشكل عادل وسريع. رضاك وثقتك هما أولويتنا القصوى. هذا الضمان الشامل يميزنا عن المنافسين."
        : "We are committed to highest safety standards and damage rarely occurs. But in very rare cases, we have full insurance coverage and take responsibility. We photograph valuable items before and after moving as documentation. We repair or compensate any damage fairly and quickly. Your satisfaction and trust are our top priority. This comprehensive guarantee distinguishes us from competitors.",
    },
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: isArabic ? "نقل منازل وشقق" : "Home and Apartment Moving",
    provider: {
      "@type": "MovingCompany",
      name: "شركة الأفضل",
      telephone: "+966560586397",
    },
    areaServed: {
      "@type": "City",
      name: "Jeddah",
    },
    description: isArabic
      ? "خدمة نقل منازل وشقق احترافية في جدة مع تغليف آمن وفك وتركيب وضمان شامل"
      : "Professional home and apartment moving service in Jeddah with safe packing, assembly, and comprehensive guarantee",
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
        title={isArabic ? "نقل منازل وشقق بجدة — آمن واحترافي" : "Home & Apartment Moving in Jeddah - Safe & Professional"}
        subtitle={
          isArabic
            ? "انتقل إلى منزلك الجديد براحة تامة مع فريقنا المحترف. تغليف آمن، نقل سريع، وضمان شامل"
            : "Move to your new home with complete peace of mind with our professional team. Safe packing, fast moving, and comprehensive guarantee"
        }
        imageUrl="/images/home movers Jeddah.jpg"
        imageAlt={isArabic ? "نقل منازل جدة - شركة الأفضل" : "Jeddah Home Moving - Al Afdal"}
      />

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {isArabic ? (
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  نقل المنزل من أكثر التجارب المرهقة التي قد تمر بها — القلق على سلامة
                  ممتلكاتك، تنسيق المواعيد، والضغط النفسي. في <strong>شركة الأفضل</strong>،
                  هدفنا أن نحوّل هذه التجربة إلى عملية سلسة ومريحة. نقدم خدمة{" "}
                  <strong>نقل منازل وشقق بجدة</strong> شاملة ومتكاملة مع فريق خبير وأدوات حديثة.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-6">
                  لماذا نحن الخيار الأفضل لنقل منزلك؟
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                  <div className="flex gap-4 bg-primary-50 p-6 rounded-lg">
                    <Star className="w-8 h-8 text-primary-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">خبرة أكثر من 10 سنوات</h3>
                      <p className="text-gray-700">
                        آلاف المنازل والشقق نقلناها بنجاح في جميع أنحاء جدة
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 bg-primary-50 p-6 rounded-lg">
                    <Shield className="w-8 h-8 text-primary-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">ضمان شامل وتأمين</h3>
                      <p className="text-gray-700">
                        تغطية كاملة لجميع ممتلكاتك طوال فترة النقل والتركيب
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 bg-primary-50 p-6 rounded-lg">
                    <Clock className="w-8 h-8 text-primary-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">التزام بالمواعيد</h3>
                      <p className="text-gray-700">
                        نحترم وقتك ونلتزم بالجدول الزمني المتفق عليه
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 bg-primary-50 p-6 rounded-lg">
                    <CheckCircle2 className="w-8 h-8 text-primary-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">أسعار واضحة وتنافسية</h3>
                      <p className="text-gray-700">بدون تكاليف خفية أو مفاجآت في الفاتورة</p>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                  ما الذي تتضمنه خدمة نقل المنازل؟
                </h2>

                <p className="text-gray-700 leading-relaxed mb-4">
                  خدمتنا ليست مجرد نقل من نقطة أ إلى نقطة ب، بل عملية شاملة مُخططة بدقة:
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. المعاينة المجانية</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  نبدأ بزيارة منزلك لتقييم دقيق للأثاث والمحتويات. نحدد نوع التغليف المطلوب، عدد
                  العمال، حجم الشاحنة، وما إذا كنا نحتاج ونش أو رافعة. بناءً على ذلك نقدم عرض سعر
                  شفاف ومفصل يشمل كل شيء.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  2. التغليف الاحترافي
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  نستخدم مواد تغليف عالية الجودة: كراتين مقوى بأحجام مختلفة، فقاعات هوائية
                  للزجاجيات والسيراميك، أغطية قماشية للأثاث الخشبي، وإسفنج واقي للحواف. كل قطعة
                  تُغلف بعناية وتُعنون لسهولة التعرف عليها في الموقع الجديد.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  3. الفك والتفكيك المتخصص
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  غرف النوم، المطابخ، الدواليب الكبيرة، الأسرّة — كلها نفكها باحترافية. نستخدم
                  أدوات مناسبة، نُرقّم القطع، ونحفظ البراغي والملحقات في أكياس معنونة. هذا يضمن
                  التركيب السليم والسريع في المنزل الجديد.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. النقل الآمن</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  نمتلك أسطول من الشاحنات المغلقة والنظيفة مجهزة بأحزمة تثبيت وحواجز داخلية لمنع
                  الحركة أثناء النقل. سائقونا محترفون ويعرفون طرق جدة جيداً. ننقل بحرص وسرعة دون
                  المساس بالسلامة.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. التركيب وترتيب الأثاث</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  في منزلك الجديد، نركب جميع القطع التي فككناها، نضع الأثاث في الأماكن التي تحددها،
                  نزيل التغليف، ونتخلص من المخلفات. لا تحتاج لرفع إصبع — فقط راقب منزلك يتشكل من
                  جديد.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                  المدة والتسعير — ما تحتاج معرفته
                </h2>

                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>المدة:</strong> شقة صغيرة (غرفة أو غرفتين) تستغرق 3-5 ساعات. شقة متوسطة
                  (3-4 غرف) تحتاج 5-8 ساعات. منزل كبير أو فيلا قد يستغرق يوم كامل. العوامل المؤثرة:
                  الطابق، وجود مصعد، كمية الأثاث، والمسافة.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>التسعير:</strong> يعتمد على عدة عوامل واضحة: عدد الغرف، كمية الأثاث،
                  نوعه (ثقيل/خفيف)، الطابق (مصعد أم درج)، المسافة بين الموقعين، والخدمات الإضافية
                  (تغليف/فك/تركيب/تخزين). نوفر معاينة مجانية لتحديد سعر دقيق. لا توجد تكاليف خفية
                  أبداً.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">نصائح قبل نقل منزلك</h2>

                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  <li>
                    <strong>رتّب مبكراً:</strong> ابدأ بفرز الأغراض والتخلص من غير المستخدم قبل
                    أسبوعين على الأقل
                  </li>
                  <li>
                    <strong>احتفظ بالمهم معك:</strong> المستندات، المجوهرات، والأدوية ضعها في حقيبة
                    يدوية معك
                  </li>
                  <li>
                    <strong>أفرغ الثلاجة:</strong> قبل النقل بيوم، أفرغها واتركها تذوب
                  </li>
                  <li>
                    <strong>صوّر الأثاث الثمين:</strong> قبل وبعد النقل كتوثيق إضافي
                  </li>
                  <li>
                    <strong>احجز مبكراً:</strong> خاصة في نهاية الشهر ومواسم الإجازات
                  </li>
                  <li>
                    <strong>تواصل مع شركة الكهرباء:</strong> لتفعيل الخدمة في المنزل الجديد
                  </li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                  خدمات إضافية تهمك
                </h2>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                    <span>
                      <strong>فك وتركيب المكيفات:</strong> فنيون متخصصون لفك وتركيب التكييفات
                      بأمان
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                    <span>
                      <strong>تركيب الستائر:</strong> تثبيت القضبان والستائر في المنزل الجديد
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                    <span>
                      <strong>نقل باستخدام الونش:</strong> للأدوار العليا بدون مصعد
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                    <span>
                      <strong>التخزين المؤقت:</strong> إذا كان هناك فجوة زمنية بين الخروج
                      والدخول
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                    <span>
                      <strong>النقل العاجل:</strong> خدمة سريعة في نفس اليوم أو اليوم التالي
                    </span>
                  </li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                  نخدم جميع أحياء جدة
                </h2>

                <p className="text-gray-700 leading-relaxed mb-4">
                  أينما كان منزلك في جدة، نحن نصل إليك:{" "}
                  <Link href="/jeddah/al-hamra" className="text-primary-600 hover:underline">
                    الحمراء
                  </Link>
                  ،{" "}
                  <Link href="/jeddah/al-rawdah" className="text-primary-600 hover:underline">
                    الروضة
                  </Link>
                  ،{" "}
                  <Link href="/jeddah/ash-shati" className="text-primary-600 hover:underline">
                    الشاطئ
                  </Link>
                  ،{" "}
                  <Link href="/jeddah/as-salama" className="text-primary-600 hover:underline">
                    السلامة
                  </Link>
                  ،{" "}
                  <Link href="/jeddah/al-naeem" className="text-primary-600 hover:underline">
                    النعيم
                  </Link>
                  ،{" "}
                  <Link href="/jeddah/ar-rihab" className="text-primary-600 hover:underline">
                    الرحاب
                  </Link>
                  ،{" "}
                  <Link href="/jeddah/al-murjan" className="text-primary-600 hover:underline">
                    المرجان
                  </Link>
                  ،{" "}
                  <Link href="/jeddah/bani-malik" className="text-primary-600 hover:underline">
                    بني مالك
                  </Link>
                  ، وجميع الأحياء الأخرى. لدينا تغطية كاملة لكل جدة.
                </p>
              </div>
            ) : (
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Moving your home is one of the most stressful experiences — worrying about your
                  belongings' safety, coordinating schedules, and psychological pressure. At{" "}
                  <strong>Al Afdal Company</strong>, our goal is to transform this experience into
                  smooth and comfortable process. We provide comprehensive home and apartment moving
                  service in Jeddah with expert team and modern equipment.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <ProcessSteps
        title={isArabic ? "كيف نعمل؟" : "How We Work?"}
        steps={steps}
      />

      <CTASection
        title={isArabic ? "احصل على عرض سعر مجاني الآن" : "Get Free Quote Now"}
        description={
          isArabic
            ? "معاينة مجانية في منزلك وعرض سعر دقيق بدون التزام"
            : "Free inspection at your home and accurate quote with no obligation"
        }
      />

      <FAQ title={isArabic ? "الأسئلة الشائعة" : "Frequently Asked Questions"} items={faqs} />
    </>
  );
}








