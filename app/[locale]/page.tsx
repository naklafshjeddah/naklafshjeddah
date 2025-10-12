import { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import ProcessSteps from "@/components/ProcessSteps";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import SchemaInjector from "@/components/SchemaInjector";
import { site } from "@/config/site";
import { Star, Shield, Clock, Users } from "lucide-react";
import { localBusinessLD, imageLD, renderJSONLD } from "@/lib/jsonld";

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
      ? "شركة نقل عفش بجدة — شركة الأفضل | تغليف وفك وتركيب وتخزين 24/7"
      : "Furniture Moving Company in Jeddah - Al Afdal | Packing, Moving & Storage 24/7",
    description: isArabic
      ? "شركة الأفضل لنقل العفش بجدة - خدمات نقل منازل وفلل ومكاتب مع فريق محترف وضمان شامل. تغليف آمن، فك وتركيب، تخزين. متاح 24/7. اتصل الآن: 0560586397"
      : "Al Afdal Furniture Moving Company in Jeddah - Professional home, villa, and office moving services with expert team and comprehensive guarantee. Safe packing, disassembly, storage. Available 24/7.",
    alternates: {
      canonical: "/",
      languages: {
        "ar-SA": "/",
        "en-SA": "/en",
      },
    },
  };
}

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const isArabic = locale === "ar";

  const services = [
    {
      title: isArabic ? "نقل منازل وشقق" : "Home & Apartment Moving",
      description: isArabic
        ? "نقل آمن ومنظم لجميع محتويات منزلك مع فريق مدرب وأدوات احترافية"
        : "Safe and organized moving of all your home contents with trained team and professional tools",
      imageUrl: "/images/home movers Jeddah.jpg",
      href: `/${isArabic ? "" : "en/"}services/home-moving-jeddah`,
    },
    {
      title: isArabic ? "نقل فلل" : "Villa Moving",
      description: isArabic
        ? "خدمات متخصصة لنقل الفلل الكبيرة مع التعامل الخاص بالقطع الثمينة والثقيلة"
        : "Specialized services for large villa moving with special handling for valuable and heavy items",
      imageUrl: "/images/villa movers Jeddah.jpg",
      href: `/${isArabic ? "" : "en/"}services/villa-moving-jeddah`,
    },
    {
      title: isArabic ? "نقل مكاتب وشركات" : "Office & Corporate Moving",
      description: isArabic
        ? "نقل مكتبك أو شركتك بدون تعطيل العمل، مع خطة مُنظمة ومرونة في المواعيد"
        : "Move your office or company without work disruption, with organized plan and flexible timing",
      imageUrl: "/images/office movers Jeddah.jpg",
      href: `/${isArabic ? "" : "en/"}services/office-relocation-jeddah`,
    },
    {
      title: isArabic ? "تغليف وفك تغليف" : "Packing & Unpacking",
      description: isArabic
        ? "تغليف احترافي بمواد عالية الجودة لحماية ممتلكاتك من الخدوش والكسر"
        : "Professional packing with high-quality materials to protect your belongings from scratches and breakage",
      imageUrl: "/images/packing services Jeddah.jpg",
      href: `/${isArabic ? "" : "en/"}services/packing-unpacking`,
    },
    {
      title: isArabic ? "فك وتركيب الأثاث" : "Furniture Assembly",
      description: isArabic
        ? "فك وتركيب غرف النوم، المطابخ، الدواليب، والأثاث المعقد بخبرة واحترافية"
        : "Disassembly and assembly of bedrooms, kitchens, wardrobes, and complex furniture with expertise",
      imageUrl: "/images/assembling furniture Jeddah.jpg",
      href: `/${isArabic ? "" : "en/"}services/disassembly-reassembly`,
    },
    {
      title: isArabic ? "تخزين آمن" : "Safe Storage",
      description: isArabic
        ? "مخازن مؤمنة ومراقبة على مدار الساعة لتخزين عفشك قصير أو طويل المدى"
        : "Secured and monitored warehouses for short or long-term furniture storage",
      imageUrl: "/images/storage services Jeddah.jpg",
      href: `/${isArabic ? "" : "en/"}services/storage`,
    },
  ];

  const steps = [
    {
      title: isArabic ? "المعاينة والتقييم" : "Inspection & Assessment",
      description: isArabic
        ? "زيارة الموقع وتقييم الكمية والحجم لتحديد السعر الدقيق والاحتياجات"
        : "Site visit and assessment of quantity and volume to determine accurate price and needs",
    },
    {
      title: isArabic ? "التخطيط والجدولة" : "Planning & Scheduling",
      description: isArabic
        ? "وضع خطة تفصيلية للنقل وتحديد الموعد المناسب والفريق والمعدات"
        : "Develop detailed moving plan and determine suitable date, team, and equipment",
    },
    {
      title: isArabic ? "التنفيذ الاحترافي" : "Professional Execution",
      description: isArabic
        ? "تغليف، فك، تحميل، نقل، وتركيب بخبرة ودقة مع الحفاظ على سلامة الممتلكات"
        : "Packing, disassembly, loading, moving, and installation with expertise and precision",
    },
    {
      title: isArabic ? "المتابعة والضمان" : "Follow-up & Guarantee",
      description: isArabic
        ? "التأكد من رضاك الكامل وتقديم ضمان على الخدمة وسرعة الاستجابة لأي ملاحظات"
        : "Ensure your complete satisfaction and provide service guarantee with quick response to any feedback",
    },
  ];

  const faqs = [
    {
      question: isArabic
        ? "كم تكلفة نقل العفش في جدة؟"
        : "How much does furniture moving cost in Jeddah?",
      answer: isArabic
        ? "تختلف التكلفة حسب عدة عوامل: حجم المنزل أو الشقة، عدد الغرف، نوع الأثاث وثقله، المسافة بين الموقعين، الطابق ووجود مصعد، والخدمات الإضافية مثل التغليف أو التخزين. نوفر معاينة مجانية لتحديد سعر دقيق وشفاف بدون مفاجآت. اتصل بنا الآن للحصول على عرض سعر مخصص يناسب احتياجاتك وميزانيتك."
        : "Cost varies based on several factors: home or apartment size, number of rooms, furniture type and weight, distance between locations, floor and elevator availability, and additional services like packing or storage. We provide free inspection to determine accurate and transparent pricing without surprises. Call us now for customized quote that fits your needs and budget.",
    },
    {
      question: isArabic
        ? "هل تقدمون خدمة التغليف والفك والتركيب؟"
        : "Do you provide packing, disassembly, and assembly services?",
      answer: isArabic
        ? "نعم، نقدم خدمات شاملة تشمل التغليف الاحترافي بمواد عالية الجودة (كراتين مقوى، فقاعات هوائية، لفائف حماية)، فك وتركيب جميع أنواع الأثاث (غرف نوم، مطابخ، دواليب، مكاتب)، فك وتركيب المكيفات والستائر، وحتى تركيب الأجهزة الكهربائية والتلفزيونات. فريقنا مدرب على التعامل مع القطع المعقدة بأمان."
        : "Yes, we provide comprehensive services including professional packing with high-quality materials (reinforced cartons, bubble wrap, protective wraps), disassembly and assembly of all furniture types (bedrooms, kitchens, wardrobes, offices), AC and curtain installation, and even electrical appliance and TV mounting. Our team is trained to handle complex items safely.",
    },
    {
      question: isArabic ? "هل لديكم ضمان على الخدمة؟" : "Do you have service guarantee?",
      answer: isArabic
        ? "نعم، نوفر ضمان شامل على جميع خدماتنا. نحن ملتزمون بحماية ممتلكاتك وضمان وصولها بحالة ممتازة. في حالة حدوث أي ضرر (وهو نادر جداً)، لدينا تغطية تأمينية ونتحمل المسؤولية الكاملة. كما نوفر متابعة ما بعد الخدمة للتأكد من رضاك التام واستعدادنا لإصلاح أي مشكلة فوراً."
        : "Yes, we provide comprehensive guarantee on all our services. We are committed to protecting your belongings and ensuring they arrive in excellent condition. In case of any damage (which is very rare), we have insurance coverage and take full responsibility. We also provide post-service follow-up to ensure your complete satisfaction and readiness to fix any issue immediately.",
    },
    {
      question: isArabic
        ? "كم تستغرق عملية نقل المنزل؟"
        : "How long does home moving take?",
      answer: isArabic
        ? "تعتمد المدة على حجم المنزل والمسافة. شقة من غرفتين عادة تستغرق 4-6 ساعات، فيلا كبيرة قد تحتاج يوم كامل أو يومين. نحن نعمل بكفاءة عالية مع الحفاظ على الجودة والسلامة. نوفر أيضاً خدمة النقل السريع والطارئ إذا كنت في عجلة من أمرك، بالإضافة لخدمات النقل الليلي وفي عطلات نهاية الأسبوع لمرونة أكبر."
        : "Duration depends on home size and distance. A two-bedroom apartment usually takes 4-6 hours, large villa may need full day or two. We work with high efficiency while maintaining quality and safety. We also provide express and emergency moving service if you're in hurry, plus night and weekend moving services for more flexibility.",
    },
    {
      question: isArabic
        ? "هل تخدمون جميع أحياء جدة والنقل بين المدن؟"
        : "Do you serve all Jeddah districts and intercity moving?",
      answer: isArabic
        ? "نعم، نغطي جميع أحياء ومناطق جدة بدون استثناء: الحمراء، الروضة، الشاطئ، السلامة، النعيم، الرحاب، أبحر، البلد، وجميع الأحياء الأخرى. كما نقدم خدمات النقل بين المدن من وإلى الرياض، مكة المكرمة، المدينة المنورة، الطائف، ينبع، أبها، وباقي مدن المملكة مع ضمان السلامة والالتزام بالمواعيد."
        : "Yes, we cover all Jeddah districts without exception: Al Hamra, Al Rawdah, Ash Shati, As Salama, Al Naeem, Ar Rihab, Obhur, Al Balad, and all other districts. We also provide intercity moving services from and to Riyadh, Makkah, Madinah, Taif, Yanbu, Abha, and other Saudi cities with safety guarantee and time commitment.",
    },
    {
      question: isArabic
        ? "هل يمكنني تخزين العفش لديكم؟ وما مدى الأمان؟"
        : "Can I store furniture with you? How safe is it?",
      answer: isArabic
        ? "بالتأكيد، لدينا مخازن حديثة مجهزة بأنظمة أمان متقدمة: كاميرات مراقبة 24/7، حراسة دائمة، تحكم في درجة الحرارة والرطوبة، مكافحة حشرات دورية، وتأمين ضد الحريق. مخازننا نظيفة ومنظمة وآمنة تماماً. نوفر تخزين قصير المدى (أيام أو أسابيع) وطويل المدى (شهور أو سنوات) بأسعار تنافسية ومرونة في الوصول لعفشك."
        : "Absolutely, we have modern warehouses equipped with advanced security systems: 24/7 CCTV surveillance, permanent guards, temperature and humidity control, periodic pest control, and fire insurance. Our warehouses are clean, organized, and completely safe. We provide short-term (days or weeks) and long-term (months or years) storage at competitive prices with flexible access to your furniture.",
    },
  ];

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    name: site.brand,
    image: "https://naklafshjeddah.com/images/movers in Jeddah.jpg",
    "@id": "https://naklafshjeddah.com",
    url: "https://naklafshjeddah.com",
    telephone: site.phone,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.streetAddress,
      addressLocality: site.address.addressLocality,
      postalCode: site.address.postalCode,
      addressCountry: site.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 21.565,
      longitude: 39.156,
    },
    openingHoursSpecification: site.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.day,
      opens: h.opens,
      closes: h.closes,
    })),
    areaServed: site.areaServed.map((area) => ({
      "@type": "City",
      name: area,
    })),
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
      
      {/* Enhanced Local Business JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={renderJSONLD(localBusinessLD())}
      />
      
      {/* Hero Image with GEO Location */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={renderJSONLD(
          imageLD({
            url: "https://www.naklafshjeddah.com/images/home movers Jeddah.jpg",
            caption: isArabic
              ? "خدمات نقل عفش احترافية في جدة - شركة الأفضل"
              : "Professional Furniture Moving Services in Jeddah - Al Afdal",
            width: 1200,
            height: 800,
          })
        )}
      />

      <Hero
        title={
          isArabic
            ? "شركة نقل عفش بجدة — الأفضل في التغليف والنقل والتخزين"
            : "Furniture Moving Company in Jeddah - The Best in Packing, Moving & Storage"
        }
        subtitle={
          isArabic
            ? "نقل آمن ومحترف لمنزلك أو مكتبك مع فريق خبير وضمان شامل. متاح 24/7 في جميع أحياء جدة"
            : "Safe and professional moving for your home or office with expert team and comprehensive guarantee. Available 24/7 in all Jeddah districts"
        }
        imageUrls={[
          "/images/movers in Jeddah.jpg",
          "/images/home movers Jeddah.jpg",
          "/images/villa movers Jeddah.jpg",
          "/images/office movers Jeddah.jpg",
          "/images/packing services Jeddah.jpg",
          "/images/furniture moving Jeddah.jpg"
        ]}
        imageAlt={isArabic ? "نقل عفش جدة - شركة الأفضل" : "Jeddah Movers - Al Afdal"}
        ctaPrimary={isArabic ? "اتصل الآن" : "Call Now"}
        ctaSecondary={isArabic ? "واتساب" : "WhatsApp"}
      />

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            {isArabic ? (
              <>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  شركة الأفضل - شريكك الموثوق في نقل العفش بجدة
                </h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                  عندما تفكر في نقل منزلك أو مكتبك، أول ما يشغل بالك هو سلامة ممتلكاتك وراحة
                  البال. في <strong>شركة الأفضل</strong>، ندرك تماماً قيمة كل قطعة أثاث لديك
                  وأهمية وصولها سليمة إلى وجهتها الجديدة. لهذا نقدم لك{" "}
                  <a href={`/${isArabic ? "" : "en/"}services`} className="text-primary-600 hover:underline">
                    خدمات نقل عفش احترافية بجدة
                  </a>{" "}
                  مبنية على سنوات من الخبرة والتزام حقيقي بجودة الخدمة.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  نحن نتفهم أن النقل ليس مجرد عملية لوجستية، بل هو انتقال لحياة كاملة بكل ما
                  تحمله من ذكريات وآمال. لذلك نحرص على تقديم خدمة تفوق توقعاتك في كل مرحلة. سواء
                  كنت تبحث عن{" "}
                  <a href={`/${isArabic ? "" : "en/"}services/home-moving-jeddah`} className="text-primary-600 hover:underline">
                    نقل منازل وشقق
                  </a>{" "}
                  أو{" "}
                  <a href={`/${isArabic ? "" : "en/"}services/villa-moving-jeddah`} className="text-primary-600 hover:underline">
                    نقل فلل فاخرة
                  </a>{" "}
                  أو حتى{" "}
                  <a href={`/${isArabic ? "" : "en/"}services/office-relocation-jeddah`} className="text-primary-600 hover:underline">
                    نقل مكاتب وشركات
                  </a>
                  ، فإن فريقنا المحترف مستعد لخدمتك بأعلى معايير الجودة والاحترافية.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                  لماذا تختار شركة الأفضل لنقل العفش؟
                </h3>

                <p className="text-gray-700 leading-relaxed mb-6">
                  في عالم مليء بالمنافسة، نفخر بأن نكون الخيار الأول لآلاف العائلات والشركات
                  في جدة. خبرتنا الممتدة لأكثر من عشر سنوات جعلتنا ندرك تماماً ما يحتاجه
                  عملاؤنا وكيف نحقق لهم أفضل تجربة نقل ممكنة. نحن لا نتعامل مع الأثاث كمجرد
                  أغراض، بل كجزء من حياة أناس نحترمهم ونقدر ثقتهم فينا.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                  <div className="flex gap-4 bg-primary-50 p-6 rounded-lg">
                    <Star className="w-8 h-8 text-primary-600 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg mb-2">خبرة موثوقة</h4>
                      <p className="text-gray-700">
                        أكثر من 10 سنوات في خدمة أهالي جدة مع آلاف العملاء الراضين
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 bg-primary-50 p-6 rounded-lg">
                    <Shield className="w-8 h-8 text-primary-600 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg mb-2">ضمان شامل</h4>
                      <p className="text-gray-700">
                        تأمين كامل على جميع الممتلكات وضمان على جودة الخدمة
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 bg-primary-50 p-6 rounded-lg">
                    <Clock className="w-8 h-8 text-primary-600 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg mb-2">متاح 24/7</h4>
                      <p className="text-gray-700">
                        خدمة عاجلة وليلية وفي العطلات - نحن دائماً في خدمتك
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 bg-primary-50 p-6 rounded-lg">
                    <Users className="w-8 h-8 text-primary-600 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg mb-2">فريق محترف</h4>
                      <p className="text-gray-700">
                        عمال مدربون وسائقون محترفون ومشرفون متخصصون
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                  خدماتنا الشاملة لنقل العفش
                </h3>

                <p className="text-gray-700 leading-relaxed mb-4">
                  نحن لا نقدم مجرد خدمة نقل، بل تجربة متكاملة تبدأ من اللحظة التي تتصل بنا فيها
                  وحتى تطمئن على آخر قطعة أثاث في منزلك الجديد. نوفر لك باقة شاملة من الخدمات
                  المتخصصة التي تضمن راحتك وسلامة ممتلكاتك:
                </p>

                <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                  1. المعاينة المجانية والاستشارة
                </h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  نبدأ معك بزيارة مجانية لموقعك الحالي، حيث يقوم فريق متخصص بتقييم دقيق لكمية
                  الأثاث ونوعيته، قياس القطع الكبيرة، تحديد المتطلبات الخاصة، وفهم احتياجاتك
                  بشكل كامل. نقدم لك بعد ذلك عرض سعر مفصل وشفاف بدون أي تكاليف خفية أو مفاجآت
                  لاحقة. نساعدك أيضاً في اختيار أفضل يوم ووقت للنقل يناسب ظروفك.
                </p>

                <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                  2. خدمات التغليف الاحترافية
                </h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  نستخدم أفضل مواد التغليف المتوفرة في السوق لضمان حماية كاملة لممتلكاتك. لدينا{" "}
                  <a href={`/${isArabic ? "" : "en/"}services/packing-unpacking`} className="text-primary-600 hover:underline">
                    خدمة تغليف وفك تغليف احترافية
                  </a>{" "}
                  تشمل: كراتين مقوى بأحجام مختلفة حسب نوع الأغراض، فقاعات هوائية لحماية الزجاج
                  والمرايا، أغطية واقية للأثاث المنجد، لفائف إسفنجية للقطع الحساسة، وأشرطة تغليف
                  قوية. فريقنا مدرب على تغليف كل قطعة بالطريقة الصحيحة حسب طبيعتها وحساسيتها.
                </p>

                <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                  3. فك وتركيب الأثاث بخبرة
                </h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  لدينا فنيون متخصصون في فك وتركيب جميع أنواع الأثاث مهما كانت معقدة. نتعامل مع
                  غرف النوم الإيطالية الفاخرة، المطابخ الألمانية الحديثة، الدواليب المخصصة،
                  مكاتب الشركات، المكيفات والستائر، والأجهزة الكهربائية. نستخدم أدوات احترافية
                  ونحافظ على تنظيم القطع والمسامير والبراغي في أكياس مرقمة لسهولة إعادة التركيب.
                  كل قطعة نفكها نركبها في موقعها الجديد بنفس الإتقان والجودة.
                </p>

                <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                  4. معدات رفع حديثة وآمنة
                </h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  نمتلك معدات رفع متطورة للتعامل مع المباني ذات الأدوار العليا: ونش هيدروليكي
                  قوي وآمن، رافعات كهربائية لنقل القطع الثقيلة، عربات يدوية متخصصة، وأحزمة رفع
                  احترافية. هذا يضمن نقل أثاثك من وإلى أي طابق بسهولة وأمان دون الاعتماد على
                  المصاعد أو السلالم الضيقة، مما يحمي الأثاث والمبنى من أي أضرار محتملة.
                </p>

                <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                  5. أسطول شاحنات مجهز بالكامل
                </h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  نمتلك أسطولاً متنوعاً من الشاحنات المغلقة بأحجام مختلفة لتناسب جميع احتياجات
                  النقل. جميع شاحناتنا مجهزة بأنظمة تثبيت داخلية، أرضيات خشبية مبطنة، حواجز
                  واقية، وأحزمة تثبيت قوية. هذا يمنع حركة الأثاث أثناء النقل ويحميه من الخدوش
                  والصدمات. كما أن شاحناتنا خاضعة للصيانة الدورية ومؤمنة بالكامل.
                </p>

                <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                  6. خدمات التخزين الآمنة
                </h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  إذا كنت بحاجة لتخزين أثاثك مؤقتاً، نوفر لك{" "}
                  <a href={`/${isArabic ? "" : "en/"}storage`} className="text-primary-600 hover:underline">
                    مخازن حديثة وآمنة
                  </a>{" "}
                  مجهزة بأحدث أنظمة الأمان: كاميرات مراقبة 24/7، حراسة دائمة، تحكم في درجة
                  الحرارة والرطوبة، مكافحة حشرات دورية، تأمين ضد الحريق والسرقة، ونظام إدارة
                  مخزون إلكتروني. مخازننا نظيفة ومنظمة وتوفر خيارات تخزين قصيرة وطويلة المدى
                  بأسعار تنافسية.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                  نخدم جميع أحياء ومناطق جدة
                </h3>

                <p className="text-gray-700 leading-relaxed mb-4">
                  تغطيتنا الجغرافية شاملة لكل أحياء ومناطق جدة بدون استثناء. سواء كنت تنتقل
                  داخل نفس الحي أو من طرف المدينة للآخر، نصل إليك بنفس السرعة والكفاءة. نخدم{" "}
                  <a href={`/${isArabic ? "" : "en/"}jeddah/al-hamra`} className="text-primary-600 hover:underline">
                    حي الحمراء
                  </a>
                  ،{" "}
                  <a href={`/${isArabic ? "" : "en/"}jeddah/al-rawdah`} className="text-primary-600 hover:underline">
                    الروضة
                  </a>
                  ،{" "}
                  <a href={`/${isArabic ? "" : "en/"}jeddah/ash-shati`} className="text-primary-600 hover:underline">
                    الشاطئ
                  </a>
                  ،{" "}
                  <a href={`/${isArabic ? "" : "en/"}jeddah/as-salama`} className="text-primary-600 hover:underline">
                    السلامة
                  </a>
                  ،{" "}
                  <a href={`/${isArabic ? "" : "en/"}jeddah/al-naeem`} className="text-primary-600 hover:underline">
                    النعيم
                  </a>
                  ، المرجان، الرحاب، النهضة، الزهراء، البوادي، الربوة، الصفا، الخالدية، الأندلس،
                  العزيزية، البلد، الرويس، بني مالك، الورود، النسيم، أبحر الشمالية والجنوبية،
                  وجميع الأحياء الأخرى.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  كما نقدم خدمات نقل بين المدن من وإلى جدة، بما في ذلك{" "}
                  <a href={`/${isArabic ? "" : "en/"}routes/jeddah-to-riyadh`} className="text-primary-600 hover:underline">
                    النقل إلى الرياض
                  </a>
                  ،{" "}
                  <a href={`/${isArabic ? "" : "en/"}routes/jeddah-to-makkah`} className="text-primary-600 hover:underline">
                    مكة المكرمة
                  </a>
                  ،{" "}
                  <a href={`/${isArabic ? "" : "en/"}routes/jeddah-to-madinah`} className="text-primary-600 hover:underline">
                    المدينة المنورة
                  </a>
                  ،{" "}
                  <a href={`/${isArabic ? "" : "en/"}routes/jeddah-to-taif`} className="text-primary-600 hover:underline">
                    الطائف
                  </a>
                  ، وباقي مدن المملكة مع ضمان السلامة الكاملة والالتزام بالمواعيد المحددة.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                  التسعير الشفاف والعادل
                </h3>

                <p className="text-gray-700 leading-relaxed mb-4">
                  نحن نؤمن بالشفافية الكاملة في التعامل. نظام التسعير لدينا واضح ومبني على
                  عوامل محددة: حجم المنزل أو الشقة أو الفيلا، عدد الغرف والصالات، نوعية الأثاث
                  وكميته، وزن القطع الكبيرة، المسافة بين الموقعين، الطابق ووجود مصعد، الوقت
                  المطلوب (عادي أو عاجل)، والخدمات الإضافية مثل التغليف أو التخزين.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  نقدم معاينة مجانية لتحديد سعر دقيق قبل البدء في العمل. لا نفاجئك بتكاليف
                  إضافية أو رسوم خفية بعد إتمام العمل. أسعارنا تنافسية وعادلة، ونركز على تقديم
                  قيمة حقيقية مقابل المال بدلاً من مجرد تقديم أرخص الأسعار. الجودة والاحترافية
                  لها ثمن، ونحن نضمن لك أن كل ريال تدفعه يذهب لخدمة متميزة تستحقها.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                  نصائح مهمة قبل نقل العفش
                </h3>

                <p className="text-gray-700 leading-relaxed mb-4">
                  لضمان عملية نقل سلسة وناجحة، نقدم لك بعض النصائح المهمة من خبرتنا الطويلة:
                </p>

                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  <li>
                    <strong>التخطيط المبكر:</strong> احجز موعد النقل قبل أسبوعين على الأقل،
                    خاصة في مواسم الذروة (نهاية الشهر، الإجازات، الصيف). هذا يضمن لك أفضل
                    الأوقات ويتيح لنا التخطيط الجيد.
                  </li>
                  <li>
                    <strong>الفرز والتنظيم:</strong> رتب أغراضك وتخلص من كل ما لا تحتاجه.
                    كلما قل حجم المنقولات، قلت التكلفة والوقت. تبرع أو بع الأثاث غير المستخدم.
                  </li>
                  <li>
                    <strong>التوثيق بالصور:</strong> التقط صوراً للأثاث الثمين والإلكترونيات
                    قبل النقل. هذا مفيد للتوثيق ولتذكر طريقة التركيب الصحيحة.
                  </li>
                  <li>
                    <strong>إفراغ الخزانات:</strong> أفرغ جميع الأدراج والخزانات من المحتويات
                    الشخصية، الملابس، والأدوات. الأثاث الفارغ أسهل في النقل وأقل عرضة للضرر.
                  </li>
                  <li>
                    <strong>العناية بالممتلكات الثمينة:</strong> احتفظ بالمستندات المهمة،
                    المجوهرات، الأدوية، والمقتنيات الثمينة معك شخصياً. لا تضعها ضمن المنقولات.
                  </li>
                  <li>
                    <strong>التواصل الواضح:</strong> أخبرنا عن أي قطع حساسة أو ثمينة تحتاج
                    عناية خاصة، أو قطع ثقيلة جداً، أو أي تحديات في الموقع (ممرات ضيقة، سلالم
                    صعبة).
                  </li>
                  <li>
                    <strong>التأكد من الموقع الجديد:</strong> تأكد من أن المنزل أو المكتب
                    الجديد جاهز لاستقبال الأثاث، مع عمل التنظيف اللازم وإجراء أي صيانة مسبقة.
                  </li>
                </ul>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                  الضمان والتأمين
                </h3>

                <p className="text-gray-700 leading-relaxed mb-4">
                  نوفر ضماناً شاملاً على جميع خدماتنا لراحة بالك الكاملة. جميع عملياتنا مغطاة
                  بتأمين شامل يحمي ممتلكاتك من أي أضرار محتملة (وهي نادرة جداً بفضل احترافيتنا).
                  في الحالات النادرة التي يحدث فيها أي ضرر، نتحمل المسؤولية الكاملة ونعوضك
                  فوراً حسب قيمة الضرر. كما نوفر ضماناً على أعمال التركيب والتثبيت لفترة محددة،
                  ونعود لإصلاح أي مشكلة بدون أي تكلفة إضافية.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                  خدمة العملاء والمتابعة
                </h3>

                <p className="text-gray-700 leading-relaxed mb-4">
                  علاقتنا بعملائنا لا تنتهي بإتمام النقل. لدينا قسم خدمة عملاء متخصص متاح على
                  مدار الساعة للرد على استفساراتك، حل أي مشاكل، وتقديم الدعم اللازم. نتابع معك
                  بعد النقل للتأكد من رضاك الكامل واستقرار كل شيء في مكانه. نستمع لملاحظاتك
                  ونعمل باستمرار على تحسين خدماتنا بناءً على تجارب عملائنا. رضاك هو مقياس نجاحنا
                  الحقيقي، ونسعى دائماً لتحقيقه وتجاوز توقعاتك.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                  احجز خدمتك الآن
                </h3>

                <p className="text-gray-700 leading-relaxed mb-4">
                  لا تتردد في التواصل معنا اليوم للحصول على استشارة مجانية وعرض سعر دقيق.
                  نحن متواجدون على مدار الساعة لخدمتك. اتصل الآن على{" "}
                  <a href="tel:+966560586397" className="text-primary-600 hover:underline font-bold">
                    0560586397
                  </a>{" "}
                  أو تواصل معنا عبر{" "}
                  <a href="https://wa.me/966560586397" className="text-primary-600 hover:underline font-bold">
                    واتساب
                  </a>
                  . دع شركة الأفضل تجعل انتقالك تجربة سلسة ومريحة لا تُنسى. نحن هنا لنخدمك
                  بكل احترافية وإخلاص، ونتطلع لأن نكون جزءاً من رحلة انتقالك إلى حياة جديدة
                  أفضل.
                </p>
              </>
            ) : (
              <>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Al Afdal - Your Trusted Furniture Moving Partner in Jeddah
                </h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                  When thinking about moving your home or office, your first concern is the safety
                  of your belongings and peace of mind. At <strong>Al Afdal Company</strong>, we
                  fully understand the value of every furniture piece and importance of safe arrival
                  to new destination. That's why we provide professional furniture moving services
                  in Jeddah built on years of experience and genuine commitment to service quality.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  We don't just provide moving service, but complete experience from the moment you
                  call us until you're satisfied with last furniture piece in your new home. Our
                  services include free inspection, professional packing, specialized assembly,
                  modern equipment, equipped vehicles, and safe storage.
                </p>
              </>
            )}
          </div>
        </div>
      </section>

      <ProcessSteps
        title={isArabic ? "خطوات العمل معنا" : "Our Work Process"}
        steps={steps}
      />

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            {isArabic ? "خدماتنا المتكاملة" : "Our Comprehensive Services"}
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            {isArabic
              ? "نقدم مجموعة شاملة من خدمات نقل العفش والتخزين لتلبية جميع احتياجاتك"
              : "We provide comprehensive range of furniture moving and storage services to meet all your needs"}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} isRTL={isArabic} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={isArabic ? "جاهز للانتقال؟ نحن هنا لمساعدتك" : "Ready to Move? We're Here to Help"}
        description={
          isArabic
            ? "احصل على استشارة مجانية وعرض سعر دقيق اليوم - فريقنا متاح 24/7"
            : "Get free consultation and accurate quote today - Our team available 24/7"
        }
        primaryText={isArabic ? "اتصل الآن" : "Call Now"}
        secondaryText={isArabic ? "واتساب" : "WhatsApp"}
      />

      <FAQ title={isArabic ? "الأسئلة الشائعة" : "Frequently Asked Questions"} items={faqs} />
    </>
  );
}

