import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { Tag, Clock, Gift, Percent } from "lucide-react";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const isArabic = locale === "ar";

  return {
    title: isArabic
      ? "عروض وخصومات نقل العفش - شركة الأفضل"
      : "Moving Offers and Discounts - Al Afdal",
    description: isArabic
      ? "احصل على أفضل العروض والخصومات على خدمات نقل العفش في جدة. عروض خاصة وأسعار تنافسية"
      : "Get the best offers and discounts on furniture moving services in Jeddah. Special deals and competitive prices",
    alternates: {
      canonical: `/${locale === "ar" ? "" : locale + "/"}offers`,
      languages: {
        "ar-SA": "/offers",
        "en-SA": "/en/offers",
      },
    },
  };
}

export default function OffersPage({ params: { locale } }: { params: { locale: string } }) {
  const isArabic = locale === "ar";

  const breadcrumbs = [
    { label: isArabic ? "الرئيسية" : "Home", href: `/${locale === "ar" ? "" : locale}` },
    { label: isArabic ? "العروض" : "Offers" },
  ];

  const offers = [
    {
      icon: Percent,
      title: isArabic ? "خصم 20% للعملاء الجدد" : "20% Discount for New Customers",
      description: isArabic
        ? "احصل على خصم 20% على أول خدمة نقل عند الحجز خلال هذا الشهر. عرض محدود!"
        : "Get 20% discount on your first moving service when booking this month. Limited offer!",
      color: "bg-blue-50 border-blue-500",
      iconColor: "text-blue-600",
      code: "NEW20",
    },
    {
      icon: Gift,
      title: isArabic ? "تغليف مجاني" : "Free Packing",
      description: isArabic
        ? "احصل على خدمة التغليف الأساسية مجاناً عند حجز خدمة نقل فيلا أو مكتب كامل"
        : "Get basic packing service for free when booking villa or full office moving service",
      color: "bg-green-50 border-green-500",
      iconColor: "text-green-600",
      code: "FREEPACK",
    },
    {
      icon: Clock,
      title: isArabic ? "خصم الحجز المبكر" : "Early Booking Discount",
      description: isArabic
        ? "احجز قبل 3 أسابيع واحصل على خصم 15% على إجمالي الفاتورة"
        : "Book 3 weeks in advance and get 15% discount on total bill",
      color: "bg-purple-50 border-purple-500",
      iconColor: "text-purple-600",
      code: "EARLY15",
    },
    {
      icon: Tag,
      title: isArabic ? "عرض منتصف الأسبوع" : "Mid-week Offer",
      description: isArabic
        ? "احصل على خصم 10% على النقل يومي الثلاثاء والأربعاء فقط"
        : "Get 10% discount on moving on Tuesday and Wednesday only",
      color: "bg-amber-50 border-amber-500",
      iconColor: "text-amber-600",
      code: "MIDWEEK10",
    },
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbs} isRTL={isArabic} />

      <section className="py-16 bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {isArabic ? "🎉 عروض وخصومات حصرية" : "🎉 Exclusive Offers and Discounts"}
          </h1>
          <p className="text-xl text-primary-50 max-w-3xl mx-auto leading-relaxed">
            {isArabic
              ? "استفد من عروضنا الخاصة واحصل على أفضل خدمة نقل بأسعار لا تُقاوم"
              : "Take advantage of our special offers and get the best moving service at unbeatable prices"}
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {offers.map((offer, index) => {
              const Icon = offer.icon;
              return (
                <div
                  key={index}
                  className={`${offer.color} border-r-4 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1`}
                >
                  <div className={`${offer.iconColor} mb-4`}>
                    <Icon className="w-12 h-12" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{offer.title}</h3>

                  <p className="text-gray-700 leading-relaxed mb-6">{offer.description}</p>

                  <div className="bg-white rounded-lg px-4 py-3 inline-block">
                    <span className="text-sm text-gray-600">
                      {isArabic ? "كود الخصم:" : "Discount Code:"}
                    </span>
                    <span className="font-mono font-bold text-primary-600 mr-2 text-lg">
                      {offer.code}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            {isArabic ? (
              <>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                  شروط وأحكام العروض
                </h2>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>لا يمكن الجمع بين أكثر من عرض في نفس الوقت</li>
                    <li>العروض صالحة فقط داخل مدينة جدة</li>
                    <li>يجب ذكر كود الخصم عند الحجز الأولي</li>
                    <li>العروض لا تشمل خدمات التخزين المنفصلة</li>
                    <li>الشركة تحتفظ بحق إلغاء أو تعديل العروض في أي وقت</li>
                    <li>بعض العروض قد تكون لفترة محدودة</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                  كيفية الاستفادة من العروض؟
                </h3>

                <ol className="list-decimal list-inside space-y-3 text-gray-700">
                  <li>
                    <strong>اتصل بنا</strong> على 0560586397 أو واتساب وأخبرنا بالعرض الذي
                    تريده
                  </li>
                  <li>
                    <strong>اذكر كود الخصم</strong> عند طلب عرض السعر
                  </li>
                  <li>
                    <strong>احجز موعدك</strong> مع تأكيد الخصم المطبق
                  </li>
                  <li>
                    <strong>استمتع بالخدمة</strong> بسعر مخفض وجودة عالية
                  </li>
                </ol>

                <p className="text-gray-700 leading-relaxed mt-8 text-center font-semibold">
                  لمزيد من المعلومات أو استفسار عن العروض المتاحة، لا تتردد في التواصل معنا على
                  مدار الساعة.
                </p>
              </>
            ) : (
              <>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                  Terms and Conditions
                </h2>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Cannot combine more than one offer at the same time</li>
                    <li>Offers valid only within Jeddah city</li>
                    <li>Must mention discount code at initial booking</li>
                    <li>Offers do not include separate storage services</li>
                    <li>Company reserves the right to cancel or modify offers anytime</li>
                    <li>Some offers may be for limited time</li>
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      <CTASection
        title={
          isArabic
            ? "جاهز للحجز والاستفادة من العروض؟"
            : "Ready to Book and Take Advantage of Offers?"
        }
        description={
          isArabic
            ? "لا تفوت الفرصة! اتصل الآن واحصل على عرض سعر مخصص مع الخصم"
            : "Don't miss the opportunity! Call now and get customized quote with discount"
        }
      />
    </>
  );
}



