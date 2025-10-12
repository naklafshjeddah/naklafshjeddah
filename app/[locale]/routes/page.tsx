import { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import { routes } from "@/config/site";
import { Truck, MapPin, Clock } from "lucide-react";

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
      ? "نقل عفش بين المدن من جدة - شركة الأفضل"
      : "Intercity Furniture Moving from Jeddah - Al Afdal",
    description: isArabic
      ? "خدمات نقل عفش بين المدن من جدة إلى الرياض، مكة، المدينة، الطائف، وجميع مدن المملكة. نقل آمن وسريع مع ضمان شامل"
      : "Intercity furniture moving services from Jeddah to Riyadh, Makkah, Madinah, Taif, and all Saudi cities. Safe and fast moving with comprehensive guarantee",
    alternates: {
      canonical: `/${locale === "ar" ? "" : locale + "/"}routes`,
      languages: {
        "ar-SA": "/routes",
        "en-SA": "/en/routes",
      },
    },
  };
}

export default function RoutesPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const isArabic = locale === "ar";

  const breadcrumbs = [
    { label: isArabic ? "الرئيسية" : "Home", href: `/${locale === "ar" ? "" : locale}` },
    { label: isArabic ? "النقل بين المدن" : "Intercity Moving" },
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbs} isRTL={isArabic} />

      <Hero
        title={
          isArabic
            ? "نقل عفش بين المدن من جدة لجميع مدن المملكة"
            : "Intercity Furniture Moving from Jeddah to All Saudi Cities"
        }
        subtitle={
          isArabic
            ? "نقل آمن وموثوق من جدة إلى الرياض، مكة، المدينة، الطائف وجميع مدن المملكة. شاحنات مجهزة وسائقون محترفون"
            : "Safe and reliable moving from Jeddah to Riyadh, Makkah, Madinah, Taif and all Saudi cities. Equipped trucks and professional drivers"
        }
        imageUrls={[
          "/images/moving trucks Jeddah.jpg",
          "/images/truck rental Jeddah.jpg",
          "/images/Saudi Arabia movers.jpg",
          "/images/long distance movers.jpg",
        ]}
        imageAlt={isArabic ? "نقل عفش بين المدن" : "Intercity Moving"}
        ctaPrimary={isArabic ? "اتصل الآن" : "Call Now"}
        ctaSecondary={isArabic ? "واتساب" : "WhatsApp"}
      />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            {isArabic ? "وجهاتنا الرئيسية" : "Our Main Destinations"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {routes.map((route) => (
              <Link
                key={route.slug}
                href={`/${locale === "ar" ? "" : locale + "/"}routes/${route.slug}`}
                className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all p-6 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary-600" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors mb-2">
                      {isArabic ? `جدة ← ${route.to}` : `Jeddah → ${route.toEn}`}
                    </h3>

                    <div className="space-y-1 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Truck className="w-4 h-4" />
                        <span>{route.distance}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{route.duration}</span>
                      </div>
                    </div>

                    <p className="text-primary-600 font-semibold mt-3 text-sm">
                      {isArabic ? "اعرف المزيد ←" : "Learn More →"}
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                  خدمات نقل عفش احترافية بين المدن من جدة
                </h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                  النقل بين المدن يحتاج خبرة خاصة ومعدات متطورة. في{" "}
                  <a href="/" className="text-primary-600 hover:underline font-semibold">
                    شركة الأفضل
                  </a>
                  ، لدينا خبرة واسعة في نقل العفش من جدة إلى جميع مدن المملكة. سواء كنت
                  تنتقل إلى الرياض، مكة، المدينة، الطائف، أو أي مدينة أخرى، نحن نضمن لك نقلاً
                  آمناً وسريعاً وموثوقاً. نستخدم شاحنات مجهزة خصيصاً للمسافات الطويلة، سائقين
                  محترفين يعرفون الطرق جيداً، ونخطط كل رحلة بدقة لضمان وصول ممتلكاتك سليمة
                  وفي الموعد المحدد.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 not-prose">
                  <div className="bg-primary-50 p-6 rounded-lg">
                    <Truck className="w-10 h-10 text-primary-600 mb-3" />
                    <h3 className="font-bold text-lg mb-2">شاحنات مجهزة</h3>
                    <p className="text-gray-700 text-sm">
                      شاحنات كبيرة مغلقة مجهزة خصيصاً للمسافات الطويلة مع أنظمة تثبيت
                    </p>
                  </div>

                  <div className="bg-primary-50 p-6 rounded-lg">
                    <MapPin className="w-10 h-10 text-primary-600 mb-3" />
                    <h3 className="font-bold text-lg mb-2">سائقون محترفون</h3>
                    <p className="text-gray-700 text-sm">
                      سائقون خبراء يعرفون الطرق جيداً ومدربون على القيادة الآمنة
                    </p>
                  </div>

                  <div className="bg-primary-50 p-6 rounded-lg">
                    <Clock className="w-10 h-10 text-primary-600 mb-3" />
                    <h3 className="font-bold text-lg mb-2">التزام بالمواعيد</h3>
                    <p className="text-gray-700 text-sm">
                      نلتزم بمواعيد التسليم المتفق عليها مع متابعة مباشرة
                    </p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  لماذا النقل بين المدن يحتاج خبرة خاصة؟
                </h3>

                <p className="text-gray-700 leading-relaxed mb-4">
                  النقل المحلي داخل{" "}
                  <a href={`/${isArabic ? "" : "en/"}jeddah`} className="text-primary-600 hover:underline">
                    جدة
                  </a>{" "}
                  يختلف كثيراً عن النقل بين المدن. طرق طويلة تمتد لمئات الكيلومترات، ظروف
                  مناخية متغيرة، تحديات لوجستية، واحتمالية التأخيرات - كل هذا يتطلب تخطيطاً
                  دقيقاً وخبرة عميقة. لا يكفي أن تضع الأثاث في شاحنة وتنطلق. النقل الناجح
                  بين المدن يحتاج:
                </p>

                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  <li>شاحنات مخصصة للمسافات الطويلة مع أنظمة تعليق محسّنة</li>
                  <li>تغليف إضافي ومقاوم للاهتزازات الطويلة</li>
                  <li>تثبيت محكم جداً لمنع الحركة أثناء الرحلة</li>
                  <li>سائقون خبراء في الطرق السريعة والظروف المختلفة</li>
                  <li>صيانة دورية للشاحنات لتجنب الأعطال</li>
                  <li>تنسيق دقيق للمواعيد مع فارق التوقيت</li>
                </ul>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  ما الذي يميز خدمتنا للنقل بين المدن؟
                </h3>

                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  <li>
                    <strong>شاحنات متخصصة:</strong> أسطول من الشاحنات المغلقة الكبيرة
                    المجهزة خصيصاً للمسافات الطويلة
                  </li>
                  <li>
                    <strong>تغليف مضاعف:</strong> نستخدم{" "}
                    <a href={`/${isArabic ? "" : "en/"}services/packing-unpacking`} className="text-primary-600 hover:underline">
                      طبقات حماية إضافية
                    </a>{" "}
                    للطرق الطويلة
                  </li>
                  <li>
                    <strong>تأمين شامل:</strong> تغطية تأمينية كاملة طوال الرحلة من نقطة
                    الاستلام حتى التسليم
                  </li>
                  <li>
                    <strong>متابعة GPS:</strong> تتبع حي للشاحنة طوال الطريق لمعرفة
                    موقعها في أي وقت
                  </li>
                  <li>
                    <strong>فريق استقبال:</strong> في المدينة المستهدفة لإتمام عملية
                    التسليم وفك التغليف
                  </li>
                  <li>
                    <strong>مرونة في الجدولة:</strong> نحدد موعد الاستلام والتسليم حسب
                    احتياجك وظروفك
                  </li>
                  <li>
                    <strong>تواصل مستمر:</strong> نبقيك على اطلاع بكل تحديث أثناء
                    الرحلة
                  </li>
                </ul>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  كيف نضمن سلامة عفشك في الطريق؟
                </h3>

                <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-6">
                  <li>
                    <strong>معاينة وتقييم:</strong> نعاين العفش ونحدد طريقة التغليف
                    والشاحنة المناسبة
                  </li>
                  <li>
                    <strong>تغليف احترافي مضاعف:</strong> بمواد عالية الجودة ومقاومة
                    للصدمات
                  </li>
                  <li>
                    <strong>تثبيت محكم:</strong> داخل الشاحنة بأحزمة قوية وحواجز واقية
                  </li>
                  <li>
                    <strong>توزيع الوزن:</strong> بشكل متوازن لضمان ثبات الشاحنة على
                    الطريق
                  </li>
                  <li>
                    <strong>سائقون خبراء:</strong> مدربون على القيادة الآمنة على الطرق
                    السريعة
                  </li>
                  <li>
                    <strong>فحوصات دورية:</strong> نتوقف بانتظام لفحص الحمولة والتثبيت
                  </li>
                  <li>
                    <strong>تسليم آمن:</strong> فريق متخصص يستقبل ويفرغ بعناية في
                    الوجهة
                  </li>
                </ol>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  وجهاتنا الرئيسية من جدة
                </h3>

                <p className="text-gray-700 leading-relaxed mb-4">
                  نقدم خدمات نقل منتظمة من جدة إلى:
                </p>

                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  <li>
                    <strong>جدة - الرياض:</strong> المسار الأكثر طلباً، حوالي 950 كم، نقل
                    سريع وآمن للعاصمة
                  </li>
                  <li>
                    <strong>جدة - مكة المكرمة:</strong> مسافة قصيرة 80 كم، خدمة يومية
                    متاحة
                  </li>
                  <li>
                    <strong>جدة - المدينة المنورة:</strong> 420 كم، نقل احترافي للمدينة
                    المنورة
                  </li>
                  <li>
                    <strong>جدة - الطائف:</strong> 170 كم، طريق جبلي يحتاج خبرة خاصة
                  </li>
                  <li>
                    <strong>جدة - الدمام:</strong> 1340 كم، نقل للمنطقة الشرقية مع تخطيط
                    دقيق
                  </li>
                  <li>
                    <strong>وجهات أخرى:</strong> أبها، جازان، تبوك، حائل، وجميع مدن
                    المملكة
                  </li>
                </ul>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  التسعير والتكلفة
                </h3>

                <p className="text-gray-700 leading-relaxed mb-4">
                  تكلفة النقل بين المدن تعتمد على عدة عوامل:
                </p>

                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  <li>
                    <strong>المسافة:</strong> المسافات الطويلة (جدة-الرياض) تكلف أكثر من
                    القصيرة (جدة-مكة)
                  </li>
                  <li>
                    <strong>حجم العفش:</strong> كمية الأثاث تحدد حجم الشاحنة المطلوبة
                  </li>
                  <li>
                    <strong>نوع الأثاث:</strong> القطع الثقيلة أو الحساسة قد تحتاج معاملة
                    خاصة
                  </li>
                  <li>
                    <strong>خدمات إضافية:</strong> التغليف، الفك والتركيب، التخزين المؤقت
                  </li>
                  <li>
                    <strong>الموسم:</strong> بعض الفترات (نهاية الشهر، الإجازات) قد تكون
                    أكثر ازدحاماً
                  </li>
                </ul>

                <p className="text-gray-700 leading-relaxed mb-4">
                  نوفر عروض أسعار شفافة ومفصلة بدون رسوم مخفية. للحصول على عرض سعر دقيق
                  لوجهتك، اضغط على المدينة من القائمة أعلاه أو{" "}
                  <a href="tel:+966560586397" className="text-primary-600 hover:underline font-bold">
                    اتصل بنا
                  </a>{" "}
                  مباشرة.
                </p>

                <p className="text-gray-700 leading-relaxed mt-8 text-center font-semibold">
                  هل تخطط للانتقال إلى مدينة أخرى؟ دعنا نساعدك! اتصل الآن على{" "}
                  <a href="tel:+966560586397" className="text-primary-600 hover:underline">
                    0560586397
                  </a>{" "}
                  للحصول على استشارة مجانية وعرض سعر مخصص لوجهتك.
                </p>
              </>
            ) : (
              <>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                  Why Choose Al Afdal for Intercity Moving?
                </h2>

                <p className="text-gray-700 leading-relaxed">
                  Intercity moving requires special expertise - long routes, changing weather
                  conditions, and logistical challenges. At Al Afdal, we have extensive experience
                  moving furniture between all Saudi cities.
                </p>
              </>
            )}
          </div>
        </div>
      </section>

      <CTASection
        title={isArabic ? "هل تخطط للانتقال إلى مدينة أخرى؟" : "Planning to Move to Another City?"}
        description={
          isArabic
            ? "احصل على عرض سعر مجاني لوجهتك"
            : "Get free quote for your destination"
        }
      />
    </>
  );
}








