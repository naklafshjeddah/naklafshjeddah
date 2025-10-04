import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { areas } from "@/config/site";
import { MapPin } from "lucide-react";

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
  const isArabic = locale === "ar";

  const breadcrumbs = [
    { label: isArabic ? "الرئيسية" : "Home", href: `/${locale === "ar" ? "" : locale}` },
    { label: isArabic ? "أحياء جدة" : "Jeddah Districts" },
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbs} isRTL={isArabic} />

      <section className="py-16 bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {isArabic ? "نقل عفش في جميع أحياء جدة" : "Furniture Moving in All Jeddah Districts"}
          </h1>
          <p className="text-xl text-primary-50 max-w-3xl mx-auto leading-relaxed">
            {isArabic
              ? "نغطي جميع أحياء ومناطق جدة بخدمات نقل عفش احترافية. اختر حيك للحصول على معلومات مفصلة وعروض خاصة"
              : "We cover all Jeddah districts with professional furniture moving services. Choose your district for detailed information and special offers"}
          </p>
        </div>
      </section>

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
                  لماذا نحن الأفضل في جميع أحياء جدة؟
                </h2>

                <p className="text-gray-700 leading-relaxed mb-4">
                  شركة الأفضل تفتخر بتغطيتها الشاملة لجميع أحياء ومناطق جدة. سواء كنت في الأحياء
                  الراقية مثل الحمراء والروضة، أو الأحياء التاريخية مثل البلد، أو المناطق الساحلية
                  مثل الشاطئ وأبحر، نحن نصل إليك بنفس مستوى الخدمة الاحترافية والأسعار العادلة.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">مميزات خدماتنا المحلية</h3>

                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  <li>معرفة تامة بطرق وشوارع جميع أحياء جدة</li>
                  <li>فرق متعددة لتغطية المناطق المختلفة في نفس الوقت</li>
                  <li>استجابة سريعة - نصل خلال ساعات من اتصالك</li>
                  <li>خبرة في التعامل مع خصوصيات كل حي (أزقة ضيقة، مباني قديمة، أبراج حديثة)</li>
                  <li>أسعار عادلة موحدة لجميع الأحياء بدون تمييز</li>
                </ul>

                <p className="text-gray-700 leading-relaxed">
                  اختر حيك من القائمة أعلاه للحصول على معلومات مفصلة عن خدماتنا في منطقتك، الأوقات
                  المتوقعة، والعروض الخاصة بسكان الحي.
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








