import { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import Hero from "@/components/Hero";
import { areas } from "@/config/site";
import { MapPin } from "lucide-react";

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
    title: isArabic ? "نقل عفش في جميع أحياء جدة - شركة الأفضل" : "Furniture Moving in All Jeddah Districts - Al Afdal",
    description: isArabic
      ? "خدمات نقل عفش في جميع أحياء ومناطق جدة: الحمراء، الروضة، السلامة، النعيم، الرحاب، وجميع الأحياء الأخرى. استجابة سريعة وأسعار تنافسية"
      : "Furniture moving services in all Jeddah districts: Al Hamra, Al Rawdah, As Salama, Al Naeem, Ar Rihab, and all other areas. Quick response and competitive prices",
    alternates: {
      canonical: `/${locale === "ar" ? "" : locale + "/"}jeddah`,
      languages: {
        "ar-SA": "/jeddah",
        "en-SA": "/en/jeddah",
      },
    },
  };
}

export default function JeddahAreasPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const isArabic = locale === "ar";

  const breadcrumbs = [
    { label: isArabic ? "الرئيسية" : "Home", href: `/${locale === "ar" ? "" : locale}` },
    { label: isArabic ? "أحياء جدة" : "Jeddah Districts" },
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbs} isRTL={isArabic} />

      <Hero
        title={
          isArabic
            ? "نقل عفش في جميع أحياء جدة"
            : "Furniture Moving in All Jeddah Districts"
        }
        subtitle={
          isArabic
            ? "تغطية شاملة لجميع أحياء ومناطق جدة بخدمات نقل عفش احترافية وسريعة. نصل إليك أينما كنت"
            : "Comprehensive coverage of all Jeddah districts with professional and fast furniture moving services. We reach you wherever you are"
        }
        imageUrls={[
          "/images/movers in Jeddah.jpg",
          "/images/moving company Jeddah.jpg",
          "/images/local movers Jeddah.jpg",
          "/images/professional movers Jeddah.jpg",
        ]}
        imageAlt={isArabic ? "نقل عفش جدة - جميع الأحياء" : "Jeddah Movers - All Districts"}
        ctaPrimary={isArabic ? "اتصل الآن" : "Call Now"}
        ctaSecondary={isArabic ? "واتساب" : "WhatsApp"}
      />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {areas.map((area) => (
              <Link
                key={area.slug}
                href={`/${locale === "ar" ? "" : locale + "/"}jeddah/${area.slug}`}
                className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all p-6 hover:-translate-y-1"
              >
                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors mb-2">
                      {isArabic ? area.nameAr : area.nameEn}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {isArabic ? "خدمات نقل عفش متكاملة" : "Complete moving services"}
                    </p>
                  </div>
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  شركة الأفضل تخدم جميع أحياء جدة بدون استثناء
                </h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                  تفتخر{" "}
                  <a href="/" className="text-primary-600 hover:underline font-semibold">
                    شركة الأفضل لنقل العفش
                  </a>{" "}
                  بتغطيتها الشاملة والكاملة لجميع أحياء ومناطق مدينة جدة. سواء كنت تعيش في الأحياء
                  الراقية الحديثة، أو الأحياء التاريخية العريقة، أو المناطق الساحلية الجميلة، أو
                  الأحياء السكنية الهادئة، نحن نصل إليك بنفس مستوى الخدمة الاحترافية والسرعة
                  والاهتمام. خبرتنا الطويلة في خدمة أهالي جدة جعلتنا نعرف كل شارع وزقاق وحي،
                  ونفهم خصوصية كل منطقة ومتطلباتها الفريدة.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  لماذا نحن الأفضل في جميع أحياء جدة؟
                </h3>

                <p className="text-gray-700 leading-relaxed mb-6">
                  على مدار أكثر من عشر سنوات من العمل المتواصل في جدة، قمنا بآلاف عمليات النقل
                  في كل حي من أحياء المدينة. هذه الخبرة المتراكمة جعلتنا نتقن التعامل مع كل
                  التحديات: الشوارع الضيقة في الأحياء القديمة، الأبراج الشاهقة في الأحياء الحديثة،
                  الفلل الواسعة في المناطق الراقية، والشقق الصغيرة في الأحياء الشعبية. نعرف أسرع
                  الطرق للوصول، أفضل أوقات العمل لتجنب الازدحام، والطريقة الأمثل للتعامل مع كل
                  نوع من المباني.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  الأحياء الراقية والحديثة
                </h3>

                <p className="text-gray-700 leading-relaxed mb-4">
                  نقدم خدماتنا المتميزة في أرقى أحياء جدة مثل{" "}
                  <a href={`/${isArabic ? "" : "en/"}jeddah/al-hamra`} className="text-primary-600 hover:underline">
                    الحمراء
                  </a>
                  ، حيث الفلل الفاخرة والأثاث الراقي الذي يحتاج عناية خاصة. كذلك{" "}
                  <a href={`/${isArabic ? "" : "en/"}jeddah/al-rawdah`} className="text-primary-600 hover:underline">
                    الروضة
                  </a>{" "}
                  بمبانيها السكنية الراقية وأبراجها الحديثة، و
                  <a href={`/${isArabic ? "" : "en/"}jeddah/ash-shati`} className="text-primary-600 hover:underline">
                    الشاطئ
                  </a>{" "}
                  بإطلالاتها الساحلية الخلابة. هذه الأحياء تتطلب احترافية عالية في التعامل مع
                  الأثاث الفاخر، القطع الفنية الثمينة، والديكورات المميزة. فريقنا مدرب على أعلى
                  مستوى للتعامل مع هذه المتطلبات الخاصة.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  الأحياء السكنية المركزية
                </h3>

                <p className="text-gray-700 leading-relaxed mb-4">
                  نخدم بكفاءة الأحياء السكنية النابضة بالحياة مثل{" "}
                  <a href={`/${isArabic ? "" : "en/"}jeddah/as-salama`} className="text-primary-600 hover:underline">
                    السلامة
                  </a>
                  ،{" "}
                  <a href={`/${isArabic ? "" : "en/"}jeddah/al-naeem`} className="text-primary-600 hover:underline">
                    النعيم
                  </a>
                  ، الرحاب، النهضة، النزهة، والزهراء. هذه الأحياء تتميز بكثافة سكانية عالية ومباني
                  متنوعة من الشقق والعمائر. خبرتنا في هذه المناطق تضمن لك نقل سريع وفعّال مع
                  التعامل الذكي مع الازدحام والمواقف المحدودة. نعرف أفضل الأوقات للعمل وكيفية
                  إدارة عملية النقل بسلاسة.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  المناطق الساحلية
                </h3>

                <p className="text-gray-700 leading-relaxed mb-4">
                  المناطق الساحلية مثل أبحر الشمالية وأبحر الجنوبية والشاطئ لها طابع خاص وتحديات
                  مميزة. الرطوبة العالية تتطلب عناية خاصة في التغليف لحماية الأثاث الخشبي
                  والمنسوجات. المسافات الطويلة نسبياً تحتاج لتخطيط جيد وشاحنات مجهزة. نحن نتفهم
                  هذه الخصوصيات ونقدم حلولاً مناسبة لكل حالة. كما أن معرفتنا بالطرق والمداخل
                  والأنفاق تضمن وصول سريع وآمن.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  الأحياء التاريخية
                </h3>

                <p className="text-gray-700 leading-relaxed mb-4">
                  الأحياء التاريخية مثل البلد، الرويس، والشرفية تتميز بطابعها العريق ومبانيها
                  القديمة. الشوارع الضيقة والأزقة المتعرجة تحتاج خبرة خاصة ومعدات مناسبة. لدينا
                  فرق متخصصة في التعامل مع هذه الأحياء، نستخدم معدات صغيرة الحجم وعربات يدوية
                  مخصصة، ونعمل بحرص شديد للحفاظ على المباني التراثية. نحترم تاريخ هذه الأحياء
                  ونتعامل معها بكل عناية وتقدير.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  أحياء شمال وشرق جدة
                </h3>

                <p className="text-gray-700 leading-relaxed mb-4">
                  نغطي بكفاءة أحياء شمال جدة مثل الصفا، الخالدية، الأندلس، الحمدانية، وأحياء
                  شرق جدة مثل البوادي، الربوة، العزيزية، بني مالك. هذه المناطق تشهد نمواً عمرانياً
                  كبيراً مع مشاريع سكنية جديدة. نحن على معرفة بجميع المشاريع الجديدة والأحياء
                  الناشئة، ونقدم خدماتنا للسكان الجدد الذين ينتقلون لهذه المناطق الحديثة.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  مميزات خدماتنا المحلية
                </h3>

                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  <li>
                    <strong>معرفة تامة بالطرق:</strong> فريقنا يعرف كل طريق وشارع في جدة،
                    أفضل المسارات، الطرق البديلة عند الازدحام، ومواقع الإشارات والمطبات.
                  </li>
                  <li>
                    <strong>فرق متعددة لتغطية شاملة:</strong> لدينا عدة فرق عمل موزعة
                    جغرافياً لتغطية جميع المناطق بسرعة. يمكننا الوصول إليك خلال ساعات قليلة.
                  </li>
                  <li>
                    <strong>خبرة في تحديات كل حي:</strong> نعرف التحديات الخاصة بكل منطقة:
                    الشوارع الضيقة، المداخل الصعبة، المباني القديمة، الأبراج الشاهقة، ولدينا
                    الحلول المناسبة لكل حالة.
                  </li>
                  <li>
                    <strong>أسعار موحدة وعادلة:</strong> نطبق نفس الأسعار العادلة في جميع
                    الأحياء بدون تمييز. لا نضع رسوم إضافية بناءً على المنطقة السكنية.
                  </li>
                  <li>
                    <strong>استجابة سريعة:</strong> نصل إليك بسرعة بغض النظر عن موقعك في
                    جدة. خدمة الطوارئ متاحة 24/7 لجميع الأحياء.
                  </li>
                  <li>
                    <strong>معرفة باللوائح المحلية:</strong> نحترم قوانين المرور المحلية،
                    أوقات الهدوء في الأحياء السكنية، وقواعد المجمعات والأبراج.
                  </li>
                </ul>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  خدمات النقل بين الأحياء
                </h3>

                <p className="text-gray-700 leading-relaxed mb-4">
                  سواء كنت تنتقل داخل نفس الحي، أو من طرف جدة للآخر، نقدم لك نفس مستوى الخدمة
                  الممتازة. النقل من شمال جدة لجنوبها، من شرقها لغربها، أو العكس، كلها عمليات
                  نقوم بها يومياً بكفاءة عالية. نخطط الطريق الأمثل، نختار أفضل الأوقات، ونضمن
                  لك نقل سريع وآمن بغض النظر عن المسافة.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  التعامل مع أنواع المباني المختلفة
                </h3>

                <p className="text-gray-700 leading-relaxed mb-4">
                  لدينا خبرة واسعة في التعامل مع جميع أنواع المباني: الفلل الواسعة بحدائقها، الشقق
                  في العمائر بمختلف الأدوار، الدوبلكس والتربلكس، البنتهاوس الفاخر، الأبراج
                  السكنية الشاهقة، المجمعات السكنية المغلقة، والمباني القديمة. نعرف كيف نتعامل
                  مع المصاعد الصغيرة، السلالم الضيقة، الممرات الطويلة، والمداخل المعقدة.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  خدمات إضافية لسكان جدة
                </h3>

                <p className="text-gray-700 leading-relaxed mb-4">
                  بالإضافة للنقل داخل جدة، نقدم{" "}
                  <a href={`/${isArabic ? "" : "en/"}services`} className="text-primary-600 hover:underline">
                    خدمات متنوعة
                  </a>
                  : النقل بين المدن من وإلى جدة،{" "}
                  <a href={`/${isArabic ? "" : "en/"}storage`} className="text-primary-600 hover:underline">
                    التخزين الآمن
                  </a>{" "}
                  لسكان جدة الذين يحتاجون مكان مؤقت لأثاثهم، التغليف الاحترافي، فك وتركيب
                  الأثاث، ونقل المكاتب والشركات. كل هذه الخدمات متاحة لجميع سكان جدة في كل
                  الأحياء.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  شهادات العملاء من مختلف الأحياء
                </h3>

                <p className="text-gray-700 leading-relaxed mb-4">
                  نفخر بثقة آلاف العائلات من جميع أحياء جدة فينا. عملاؤنا من الحمراء يشهدون
                  باحترافيتنا مع الأثاث الفاخر، عملاؤنا من البلد يقدرون حرصنا على المباني
                  التاريخية، وعملاؤنا من أبحر يثمنون التزامنا بالمواعيد رغم المسافة. تقييماتهم
                  الإيجابية على مختلف المنصات هي أفضل دليل على جودة خدماتنا.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  كيف تحجز خدمة النقل في حيك؟
                </h3>

                <p className="text-gray-700 leading-relaxed mb-4">
                  الحجز سهل وسريع! اختر حيك من القائمة أعلاه لمعلومات مفصلة عن خدماتنا في
                  منطقتك، أو اتصل بنا مباشرة على{" "}
                  <a href="tel:+966560586397" className="text-primary-600 hover:underline font-bold">
                    0560586397
                  </a>{" "}
                  وأخبرنا عن موقعك. سنرسل لك فريق للمعاينة المجانية، نعطيك عرض سعر دقيق، ونحدد
                  معك أفضل موعد للنقل. يمكنك أيضاً التواصل عبر{" "}
                  <a href="https://wa.me/966560586397" className="text-primary-600 hover:underline font-bold">
                    واتساب
                  </a>{" "}
                  لسهولة التواصل والحصول على رد فوري. نحن هنا لخدمة جميع سكان جدة بكل احترافية
                  وإخلاص.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  التزامنا تجاه مدينة جدة
                </h3>

                <p className="text-gray-700 leading-relaxed mb-4">
                  جدة ليست فقط مكان عملنا، بل هي مدينتنا التي نحبها ونعتز بها. نحن جزء من هذا
                  المجتمع الرائع، نعرف أهلها، نحترم عاداتها، ونفخر بخدمة سكانها. التزامنا هو
                  تقديم أفضل خدمة نقل عفش في جدة، المساهمة في راحة السكان، ومساعدة العائلات على
                  الانتقال بسلاسة وأمان. كل عملية نقل ناجحة هي مصدر فخر لنا، وكل عميل راضٍ هو
                  إضافة لسمعتنا الطيبة في هذه المدينة الجميلة.
                </p>
              </>
            ) : (
              <>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Why We're the Best in All Jeddah Districts?
                </h2>

                <p className="text-gray-700 leading-relaxed mb-4">
                  <a href="/en" className="text-primary-600 hover:underline font-semibold">
                    Al Afdal Company
                  </a>{" "}
                  takes pride in its comprehensive coverage of all Jeddah districts. We're not
                  limited to specific areas; we serve all neighborhoods with same professional
                  quality and efficiency. Our deep knowledge of the city, its streets, and
                  challenges of each area makes us your ideal choice regardless of where you live.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Services in Upscale Jeddah Neighborhoods
                </h3>

                <p className="text-gray-700 leading-relaxed mb-4">
                  Luxury neighborhoods like{" "}
                  <a href="/en/jeddah/al-hamra" className="text-primary-600 hover:underline">
                    Al Hamra
                  </a>
                  ,{" "}
                  <a href="/en/jeddah/al-rawdah" className="text-primary-600 hover:underline">
                    Al Rawdah
                  </a>
                  , Al Zahra, and Al Basateen are characterized by luxury villas and high-value
                  furniture. We understand needs of these areas and provide specialized service
                  that meets this level. We use finest packing materials to protect luxury
                  furniture, handle antiques and valuable pieces with extreme care, and ensure
                  maintaining privacy and cleanliness during work. Our teams are highly trained
                  to deal with luxury homes and uphold highest professionalism standards.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Moving in Central Jeddah Districts
                </h3>

                <p className="text-gray-700 leading-relaxed mb-4">
                  Central areas like{" "}
                  <a href="/en/jeddah/as-salama" className="text-primary-600 hover:underline">
                    As Salama
                  </a>
                  , Al Ruwais, Al Baghdadiyah Al Sharqiyah, and Al Faisaliyah are among busiest
                  Jeddah areas. We know traffic challenge, narrow streets, and crowded residential
                  buildings there. That's why we precisely plan work timing to avoid rush hours,
                  use equipment suitable for narrow spaces, and coordinate with buildings for
                  reserved elevators. We also provide express moving service in these areas for
                  those with limited time.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Coastal Area Moving Services
                </h3>

                <p className="text-gray-700 leading-relaxed mb-4">
                  Coastal neighborhoods like{" "}
                  <a href="/en/jeddah/ash-shati" className="text-primary-600 hover:underline">
                    Ash Shati
                  </a>
                  , Obhur, Al Hamra Corniche, and Al Nawras are among Jeddah's most beautiful
                  areas. High humidity there requires special care for furniture. We use
                  moisture-resistant packing materials, apply protective layers on wooden and
                  leather furniture, and ensure safe transport away from salt and humidity. We
                  also understand logistics challenges of moving to coastal towers and high-rise
                  buildings.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Historical Jeddah Areas
                </h3>

                <p className="text-gray-700 leading-relaxed mb-4">
                  Historical areas like Al Balad, Al Mazloum, Al Ammariyah, and Al Kandarah have
                  special character: old buildings with narrow entrances, historical houses with
                  traditional architecture, and streets that may not accommodate large trucks. We
                  have extensive experience in these areas. We use smaller trucks when needed, work
                  manually in places equipment can't reach, and carefully handle old houses to
                  preserve them.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Northern and Eastern Jeddah Services
                </h3>

                <p className="text-gray-700 leading-relaxed mb-4">
                  Growing areas like{" "}
                  <a href="/en/jeddah/al-naeem" className="text-primary-600 hover:underline">
                    Al Naeem
                  </a>
                  , Dhahban, Al Taiebat, and Briman are expanding rapidly. Modern residential
                  complexes, new towers, and upscale villas there require modern moving service
                  matching these developments. We serve these areas regularly, know new
                  neighborhoods well, and reach you quickly despite distance.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Why Our Local Service is Better?
                </h3>

                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  <li>
                    <strong>Deep local knowledge:</strong> We know every Jeddah district,
                    streets, traffic, and challenges
                  </li>
                  <li>
                    <strong>Quick response:</strong> We reach any area in Jeddah in shortest
                    possible time
                  </li>
                  <li>
                    <strong>Understanding local needs:</strong> Each area has its character, and
                    we provide suitable service
                  </li>
                  <li>
                    <strong>Strong local relationships:</strong> We work with many buildings and
                    compounds
                  </li>
                  <li>
                    <strong>Adapted equipment:</strong> We have suitable equipment for all areas,
                    from narrow to open
                  </li>
                </ul>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Inter-District Moving within Jeddah
                </h3>

                <p className="text-gray-700 leading-relaxed mb-4">
                  If you're moving from one Jeddah district to another, we make the process very
                  easy. Whether from north to south, east to west, or vice versa, we handle
                  everything. We know best routes between different areas, avoid congestion, and
                  deliver your furniture to new home quickly and safely. We also coordinate timing
                  to suit both old and new locations.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Handling Different Building Types
                </h3>

                <p className="text-gray-700 leading-relaxed mb-4">
                  We have extensive experience with all building types: spacious villas with
                  gardens, apartments in buildings at various floors, duplex and triplex,
                  luxury penthouses, high-rise towers, gated communities, and old buildings. We
                  know how to deal with small elevators, narrow stairs, long corridors, and
                  complex entrances.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Additional Services for Jeddah Residents
                </h3>

                <p className="text-gray-700 leading-relaxed mb-4">
                  In addition to moving within Jeddah, we provide{" "}
                  <a href="/en/services" className="text-primary-600 hover:underline">
                    various services
                  </a>
                  : intercity moving to and from Jeddah,{" "}
                  <a href="/en/storage" className="text-primary-600 hover:underline">
                    safe storage
                  </a>{" "}
                  for Jeddah residents needing temporary space for furniture, professional
                  packing, furniture disassembly and assembly, and office and company moving. All
                  these services available to all Jeddah residents in all districts.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Customer Testimonials from Different Districts
                </h3>

                <p className="text-gray-700 leading-relaxed mb-4">
                  We're proud of thousands of families' trust from all Jeddah districts. Our
                  customers from Al Hamra testify to our professionalism with luxury furniture,
                  our customers from Al Balad appreciate our care for historical buildings, and
                  our customers from Obhur value our punctuality despite distance. Their positive
                  reviews on various platforms are best proof of our service quality.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  How to Book Moving Service in Your District?
                </h3>

                <p className="text-gray-700 leading-relaxed mb-4">
                  Booking is easy and fast! Choose your district from list above for detailed
                  information about our services in your area, or call us directly at{" "}
                  <a href="tel:+966560586397" className="text-primary-600 hover:underline font-bold">
                    0560586397
                  </a>{" "}
                  and tell us your location. We'll send inspection team for free assessment, give
                  you accurate quote, and set best time for moving. You can also contact via{" "}
                  <a href="https://wa.me/966560586397" className="text-primary-600 hover:underline font-bold">
                    WhatsApp
                  </a>{" "}
                  for easy communication and instant response. We're here to serve all Jeddah
                  residents professionally and dedication.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Our Commitment to Jeddah City
                </h3>

                <p className="text-gray-700 leading-relaxed mb-4">
                  Jeddah is not just our workplace, but our city we love and cherish. We're part
                  of this wonderful community, know its people, respect its customs, and proud to
                  serve its residents. Our commitment is providing best furniture moving service
                  in Jeddah, contributing to residents' comfort, and helping families move
                  smoothly and safely. Every successful move is source of pride for us, and every
                  satisfied customer adds to our good reputation in this beautiful city.
                </p>
              </>
            )}
          </div>
        </div>
      </section>

      <CTASection
        title={isArabic ? "احجز خدمة النقل الآن" : "Book Moving Service Now"}
        description={
          isArabic
            ? "تواصل معنا للحصول على عرض سعر مخصص لحيك"
            : "Contact us for customized quote for your district"
        }
      />
    </>
  );
}








