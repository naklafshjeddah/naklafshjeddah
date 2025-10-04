import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { site } from "@/config/site";
import { Phone, MapPin, Clock, Mail } from "lucide-react";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const isArabic = locale === "ar";

  return {
    title: isArabic ? "اتصل بنا - شركة الأفضل لنقل العفش" : "Contact Us - Al Afdal Moving Company",
    description: isArabic
      ? "تواصل مع شركة الأفضل لنقل العفش بجدة. متاح 24/7 على الهاتف والواتساب. معاينة مجانية وعروض أسعار فورية"
      : "Contact Al Afdal Furniture Moving Company in Jeddah. Available 24/7 by phone and WhatsApp. Free inspection and instant quotes",
    alternates: {
      canonical: `/${locale === "ar" ? "" : locale + "/"}contact`,
      languages: {
        "ar-SA": "/contact",
        "en-SA": "/en/contact",
      },
    },
  };
}

export default function ContactPage({ params: { locale } }: { params: { locale: string } }) {
  const isArabic = locale === "ar";

  const breadcrumbs = [
    { label: isArabic ? "الرئيسية" : "Home", href: `/${locale === "ar" ? "" : locale}` },
    { label: isArabic ? "اتصل بنا" : "Contact" },
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbs} isRTL={isArabic} />

      <section className="py-16 bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {isArabic ? "تواصل معنا" : "Contact Us"}
          </h1>
          <p className="text-xl text-primary-50 max-w-2xl mx-auto">
            {isArabic
              ? "نحن متاحون على مدار الساعة لخدمتك. تواصل معنا الآن للحصول على استشارة مجانية وعرض سعر دقيق"
              : "We're available 24/7 to serve you. Contact us now for free consultation and accurate quote"}
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                {isArabic ? "معلومات الاتصال" : "Contact Information"}
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4 bg-gray-50 p-6 rounded-lg">
                  <Phone className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">{isArabic ? "الهاتف" : "Phone"}</h3>
                    <a
                      href={`tel:${site.phone}`}
                      className="text-primary-600 hover:text-primary-800 text-lg"
                      dir="ltr"
                    >
                      {site.phone}
                    </a>
                    <p className="text-gray-600 text-sm mt-1">
                      {isArabic ? "متاح 24 ساعة / 7 أيام" : "Available 24/7"}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-gray-50 p-6 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">{isArabic ? "العنوان" : "Address"}</h3>
                    <p className="text-gray-700">{site.address.full}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-gray-50 p-6 rounded-lg">
                  <Clock className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">
                      {isArabic ? "ساعات العمل" : "Business Hours"}
                    </h3>
                    <p className="text-gray-700">
                      {isArabic
                        ? "جميع أيام الأسبوع: 24 ساعة"
                        : "All Days of the Week: 24 Hours"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {isArabic ? "تواصل سريع" : "Quick Contact"}
                </h3>
                <div className="flex flex-wrap gap-4">
                  <a
                    href={`tel:${site.phone}`}
                    className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-primary-700 transition-all"
                  >
                    <Phone className="w-5 h-5" />
                    {isArabic ? "اتصل الآن" : "Call Now"}
                  </a>

                  <a
                    href={site.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition-all"
                  >
                    {isArabic ? "واتساب" : "WhatsApp"}
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                {isArabic ? "موقعنا على الخريطة" : "Our Location"}
              </h2>
              <div className="bg-gray-200 rounded-lg overflow-hidden h-96 lg:h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.453!2d39.156!3d21.565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDMzJzU0LjAiTiAzOcKwMDknMjEuNiJF!5e0!3m2!1sen!2ssa!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Contact Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {isArabic ? "لماذا تتصل بنا؟" : "Why Contact Us?"}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">
                  {isArabic ? "استجابة فورية" : "Instant Response"}
                </h3>
                <p className="text-gray-600">
                  {isArabic
                    ? "نرد على اتصالاتك ورسائلك فوراً على مدار الساعة"
                    : "We respond to your calls and messages instantly 24/7"}
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">
                  {isArabic ? "استشارة مجانية" : "Free Consultation"}
                </h3>
                <p className="text-gray-600">
                  {isArabic
                    ? "نقدم استشارة مجانية وعرض سعر دقيق بدون أي التزام"
                    : "We provide free consultation and accurate quote with no obligation"}
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">
                  {isArabic ? "معاينة ميدانية" : "On-Site Inspection"}
                </h3>
                <p className="text-gray-600">
                  {isArabic
                    ? "نزور موقعك مجاناً لتقييم دقيق وتخطيط محكم"
                    : "We visit your location for free for accurate assessment and precise planning"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}








