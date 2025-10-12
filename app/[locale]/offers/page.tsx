import { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import Breadcrumbs from "@/components/Breadcrumbs";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import { Tag, Clock, Gift, Percent } from "lucide-react";

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
  setRequestLocale(locale);
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

      <Hero
        title={
          isArabic
            ? "🎉 عروض وخصومات حصرية على نقل العفش"
            : "🎉 Exclusive Offers and Discounts on Furniture Moving"
        }
        subtitle={
          isArabic
            ? "استفد من عروضنا الخاصة واحصل على أفضل خدمة نقل عفش احترافية بأسعار لا تُقاوم. خصومات وعروض محدودة"
            : "Take advantage of our special offers and get the best professional furniture moving service at unbeatable prices. Limited discounts and deals"
        }
        imageUrls={[
          "/images/affordable movers Jeddah.jpg",
          "/images/best movers in Jeddah.jpg",
          "/images/reliable movers Jeddah.jpg",
        ]}
        imageAlt={isArabic ? "عروض نقل العفش" : "Moving Offers"}
        ctaPrimary={isArabic ? "اتصل الآن" : "Call Now"}
        ctaSecondary={isArabic ? "واتساب" : "WhatsApp"}
      />

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
                  عروض حصرية على خدمات نقل العفش في جدة
                </h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                  في{" "}
                  <a href="/" className="text-primary-600 hover:underline font-semibold">
                    شركة الأفضل لنقل العفش
                  </a>
                  ، نؤمن بتقديم أفضل قيمة لعملائنا. لذلك نقدم عروض وخصومات حصرية على{" "}
                  <a href={`/${isArabic ? "" : "en/"}services`} className="text-primary-600 hover:underline">
                    خدمات نقل العفش
                  </a>{" "}
                  الاحترافية في جدة. هذه العروض مصممة لتوفير المال عليك دون التنازل عن
                  الجودة أو الاحترافية التي نشتهر بها.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  كيفية الاستفادة من العروض؟
                </h3>

                <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-6">
                  <li>
                    <strong>اتصل بنا:</strong> على{" "}
                    <a href="tel:+966560586397" className="text-primary-600 hover:underline font-bold">
                      0560586397
                    </a>{" "}
                    أو{" "}
                    <a href="https://wa.me/966560586397" className="text-primary-600 hover:underline font-bold">
                      واتساب
                    </a>{" "}
                    وأخبرنا بالعرض الذي تريده
                  </li>
                  <li>
                    <strong>اذكر كود الخصم:</strong> عند طلب عرض السعر لتطبيق الخصم
                    مباشرة
                  </li>
                  <li>
                    <strong>احجز موعدك:</strong> نؤكد الخصم المطبق ونحدد موعد مناسب
                  </li>
                  <li>
                    <strong>استمتع بالخدمة:</strong> احصل على خدمة احترافية بسعر مخفض
                    وجودة ممتازة
                  </li>
                </ol>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  لماذا نقدم هذه العروض؟
                </h3>

                <p className="text-gray-700 leading-relaxed mb-4">
                  نقل العفش قد يبدو مكلفاً للكثيرين. نحن ندرك ذلك ونريد أن نجعل خدماتنا
                  الاحترافية متاحة للجميع. عروضنا ليست مجرد خصومات، بل هي التزام منا بخدمة
                  المجتمع وبناء علاقات طويلة الأمد مع عملائنا. نريدك أن تجرب خدماتنا وتثق
                  فينا، ونعلم أن تجربتك الأولى ستجعلك عميلاً دائماً.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  شروط وأحكام العروض
                </h3>

                <div className="bg-gray-50 p-6 rounded-lg not-prose mb-6">
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>لا يمكن الجمع بين أكثر من عرض في نفس الوقت</li>
                    <li>العروض صالحة فقط داخل مدينة جدة للنقل المحلي</li>
                    <li>يجب ذكر كود الخصم عند الحجز الأولي قبل إصدار عرض السعر</li>
                    <li>العروض لا تشمل خدمات التخزين المنفصلة</li>
                    <li>الشركة تحتفظ بحق إلغاء أو تعديل العروض في أي وقت</li>
                    <li>بعض العروض قد تكون لفترة محدودة - اتصل لمعرفة صلاحية العرض</li>
                    <li>الخصومات تطبق على الخدمات الأساسية، قد لا تشمل خدمات إضافية محددة</li>
                    <li>العروض غير قابلة للتحويل أو الاستبدال نقداً</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  نصائح لتوفير المزيد
                </h3>

                <p className="text-gray-700 leading-relaxed mb-4">
                  بالإضافة لعروضنا، إليك بعض النصائح لتوفير المزيد عند{" "}
                  <a href={`/${isArabic ? "" : "en/"}services/home-moving-jeddah`} className="text-primary-600 hover:underline">
                    نقل منزلك
                  </a>
                  :
                </p>

                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  <li>
                    <strong>احجز مبكراً:</strong> الحجز المسبق يتيح لنا تنظيم أفضل وقد
                    يوفر لك المال
                  </li>
                  <li>
                    <strong>نظم أغراضك:</strong> تخلص من الأثاث غير المستخدم لتقليل
                    الحجم والتكلفة
                  </li>
                  <li>
                    <strong>اختر أيام منتصف الأسبوع:</strong> عادة أقل ازدحاماً وأحياناً
                    أرخص
                  </li>
                  <li>
                    <strong>قم ببعض التغليف بنفسك:</strong> إذا كنت قادراً، غلف
                    الأشياء الصغيرة بنفسك
                  </li>
                  <li>
                    <strong>اسأل عن باقات شاملة:</strong> أحياناً الباقات الشاملة أوفر
                    من الخدمات المنفصلة
                  </li>
                </ul>

                <p className="text-gray-700 leading-relaxed mt-8 text-center font-semibold">
                  لا تفوت فرصة الاستفادة من عروضنا الحصرية! اتصل بنا الآن على{" "}
                  <a href="tel:+966560586397" className="text-primary-600 hover:underline">
                    0560586397
                  </a>{" "}
                  للحصول على عرض سعر مخصص مع الخصم. العروض محدودة!
                </p>
              </>
            ) : (
              <>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                  Exclusive Offers on Furniture Moving Services in Jeddah
                </h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                  At{" "}
                  <a href="/en" className="text-primary-600 hover:underline font-semibold">
                    Al Afdal Moving Company
                  </a>
                  , we believe in providing the best value to our customers. That's why we offer
                  exclusive discounts on{" "}
                  <a href="/en/services" className="text-primary-600 hover:underline">
                    professional furniture moving services
                  </a>{" "}
                  in Jeddah. These offers are designed to save you money without compromising
                  the quality or professionalism we're known for.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  How to Take Advantage of Offers?
                </h3>

                <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-6">
                  <li>
                    <strong>Contact Us:</strong> Call{" "}
                    <a href="tel:+966560586397" className="text-primary-600 hover:underline font-bold">
                      0560586397
                    </a>{" "}
                    or{" "}
                    <a href="https://wa.me/966560586397" className="text-primary-600 hover:underline font-bold">
                      WhatsApp
                    </a>{" "}
                    and tell us which offer you want
                  </li>
                  <li>
                    <strong>Mention Discount Code:</strong> When requesting quote to apply
                    discount directly
                  </li>
                  <li>
                    <strong>Book Your Date:</strong> We confirm applied discount and set
                    suitable time
                  </li>
                  <li>
                    <strong>Enjoy the Service:</strong> Get professional service at discounted
                    price with excellent quality
                  </li>
                </ol>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Why Do We Offer These Deals?
                </h3>

                <p className="text-gray-700 leading-relaxed mb-4">
                  Furniture moving may seem expensive to many. We understand that and want to
                  make our professional services accessible to everyone. Our offers aren't just
                  discounts; they're our commitment to serving the community and building
                  long-term relationships with our customers.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Terms and Conditions
                </h3>

                <div className="bg-gray-50 p-6 rounded-lg not-prose mb-6">
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Cannot combine more than one offer at the same time</li>
                    <li>Offers valid only within Jeddah city for local moving</li>
                    <li>Must mention discount code at initial booking before quote issuance</li>
                    <li>Offers do not include separate storage services</li>
                    <li>Company reserves the right to cancel or modify offers anytime</li>
                    <li>Some offers may be for limited time - call to check validity</li>
                    <li>Discounts apply to basic services, may not include specific additional services</li>
                    <li>Offers are non-transferable and cannot be exchanged for cash</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  Tips to Save More
                </h3>

                <p className="text-gray-700 leading-relaxed mb-4">
                  In addition to our offers, here are tips to save more when{" "}
                  <a href="/en/services/home-moving-jeddah" className="text-primary-600 hover:underline">
                    moving your home
                  </a>
                  :
                </p>

                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  <li>
                    <strong>Book Early:</strong> Early booking allows better organization and
                    may save you money
                  </li>
                  <li>
                    <strong>Organize Your Items:</strong> Get rid of unused furniture to reduce
                    volume and cost
                  </li>
                  <li>
                    <strong>Choose Mid-Week Days:</strong> Usually less crowded and sometimes
                    cheaper
                  </li>
                  <li>
                    <strong>Do Some Packing Yourself:</strong> If able, pack small items
                    yourself
                  </li>
                  <li>
                    <strong>Ask About Packages:</strong> Sometimes comprehensive packages are
                    more economical
                  </li>
                </ul>

                <p className="text-gray-700 leading-relaxed mt-8 text-center font-semibold">
                  Don't miss our exclusive offers! Call us now at{" "}
                  <a href="tel:+966560586397" className="text-primary-600 hover:underline">
                    0560586397
                  </a>{" "}
                  for customized quote with discount. Limited offers!
                </p>
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



