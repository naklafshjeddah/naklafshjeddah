import { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
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

      <section className="py-16 bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <Truck className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {isArabic ? "نقل عفش بين المدن من جدة" : "Intercity Furniture Moving from Jeddah"}
          </h1>
          <p className="text-xl text-primary-50 max-w-3xl mx-auto leading-relaxed">
            {isArabic
              ? "نقل آمن وموثوق من جدة إلى جميع مدن المملكة. شاحنات مجهزة، سائقون محترفون، وضمان على جميع ممتلكاتك"
              : "Safe and reliable moving from Jeddah to all Saudi cities. Equipped trucks, professional drivers, and guarantee on all your belongings"}
          </p>
        </div>
      </section>

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
                  لماذا تختار شركة الأفضل للنقل بين المدن؟
                </h2>

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

                <p className="text-gray-700 leading-relaxed mb-4">
                  النقل بين المدن يحتاج خبرة خاصة — طرق طويلة، ظروف مناخية متغيرة، وتحديات
                  لوجستية. في <strong>شركة الأفضل</strong>، لدينا خبرة واسعة في نقل العفش بين جميع
                  مدن المملكة. نستخدم شاحنات كبيرة مجهزة، سائقين محترفين، ونخطط كل رحلة بدقة لضمان
                  وصول ممتلكاتك سليمة وفي الموعد.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  ما الذي يميز خدمة النقل بين المدن؟
                </h3>

                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  <li>
                    <strong>شاحنات مخصصة للمسافات الطويلة:</strong> مجهزة بأنظمة تعليق محسّنة وتثبيت
                    قوي
                  </li>
                  <li>
                    <strong>تغليف إضافي:</strong> طبقات حماية إضافية للطرق الطويلة
                  </li>
                  <li>
                    <strong>تأمين شامل:</strong> تغطية كاملة طوال الرحلة
                  </li>
                  <li>
                    <strong>متابعة GPS:</strong> تتبع الشاحنة طوال الطريق
                  </li>
                  <li>
                    <strong>فريق استقبال:</strong> في المدينة المستهدفة لإتمام التسليم
                  </li>
                  <li>
                    <strong>مرونة في المواعيد:</strong> نحدد موعد الاستلام والتسليم حسب احتياجك
                  </li>
                </ul>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  كيف نضمن سلامة عفشك في الطريق؟
                </h3>

                <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-6">
                  <li>تغليف احترافي مضاعف بمواد عالية الجودة</li>
                  <li>تثبيت محكم داخل الشاحنة بأحزمة وحواجز</li>
                  <li>توزيع الوزن بشكل متوازن</li>
                  <li>سائقون خبراء في القيادة على الطرق السريعة</li>
                  <li>صيانة دورية للشاحنات</li>
                  <li>استراحات منتظمة لفحص الحمولة</li>
                </ol>

                <p className="text-gray-700 leading-relaxed">
                  <strong>التسعير:</strong> يعتمد على المسافة، الكمية، ونوع الأثاث. المسافات
                  الطويلة (مثل جدة-الرياض) تكلف أكثر من القصيرة (جدة-مكة). نوفر عروض أسعار شفافة
                  ومفصلة. اضغط على المدينة التي تريد النقل إليها للحصول على معلومات وعرض سعر مخصص.
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








