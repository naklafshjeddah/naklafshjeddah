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
                  Al Afdal Company takes pride in its comprehensive coverage of all Jeddah districts.
                  Whether you're in upscale neighborhoods like Al Hamra and Al Rawdah, historical
                  areas like Al Balad, or coastal areas like Ash Shati and Obhur, we reach you with
                  same professional service level and fair prices.
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








