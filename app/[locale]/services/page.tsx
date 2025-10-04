import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { services } from "@/config/services";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const isArabic = locale === "ar";

  return {
    title: isArabic
      ? "خدماتنا - شركة الأفضل لنقل العفش بجدة"
      : "Our Services - Al Afdal Moving Company Jeddah",
    description: isArabic
      ? "نقدم خدمات نقل عفش شاملة في جدة: نقل منازل، فلل، مكاتب، تغليف، فك وتركيب، تخزين وأكثر"
      : "We offer comprehensive furniture moving services in Jeddah: homes, villas, offices, packing, storage and more",
    alternates: {
      canonical: `/${locale === "ar" ? "" : locale + "/"}services`,
      languages: {
        "ar-SA": "/services",
        "en-SA": "/en/services",
      },
    },
  };
}

export default function ServicesPage({ params: { locale } }: { params: { locale: string } }) {
  const isArabic = locale === "ar";

  const breadcrumbs = [
    { label: isArabic ? "الرئيسية" : "Home", href: `/${locale === "ar" ? "" : locale}` },
    { label: isArabic ? "الخدمات" : "Services" },
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbs} isRTL={isArabic} />

      <section className="py-16 bg-gradient-to-br from-primary-700 to-primary-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {isArabic ? "خدماتنا المتميزة" : "Our Premium Services"}
          </h1>
          <p className="text-xl text-primary-50 max-w-3xl mx-auto leading-relaxed">
            {isArabic
              ? "نقدم مجموعة شاملة من خدمات نقل العفش بأعلى معايير الجودة والاحترافية في جدة"
              : "We provide comprehensive furniture moving services with highest quality and professionalism standards in Jeddah"}
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/${locale === "ar" ? "" : locale + "/"}services/${service.slug}`}
                className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all overflow-hidden hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={isArabic ? service.titleAr : service.titleEn}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {isArabic ? service.titleAr : service.titleEn}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-4 line-clamp-2">
                    {isArabic ? service.descAr : service.descEn}
                  </p>

                  <span className="text-primary-600 font-semibold">
                    {isArabic ? "اعرف المزيد ←" : "Learn More →"}
                  </span>
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
                  لماذا نحن الخيار الأفضل لنقل العفش في جدة؟
                </h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                  في <strong>شركة الأفضل</strong>، نفخر بتقديم خدمات نقل عفش شاملة ومتميزة تلبي
                  جميع احتياجاتك. مع سنوات من الخبرة في مجال نقل العفش بجدة، أصبحنا الخيار
                  المفضل للآلاف من العملاء الراضين.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">مميزاتنا الفريدة</h3>

                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  <li>فريق عمل محترف ومدرب على أعلى مستوى</li>
                  <li>معدات وشاحنات حديثة ومجهزة بالكامل</li>
                  <li>تغليف احترافي بمواد عالية الجودة</li>
                  <li>تأمين شامل على جميع الممتلكات</li>
                  <li>أسعار تنافسية وشفافة بدون رسوم خفية</li>
                  <li>خدمة عملاء متميزة على مدار الساعة</li>
                  <li>سرعة في التنفيذ مع الحفاظ على الجودة</li>
                  <li>ضمان على جميع الخدمات</li>
                </ul>

                <p className="text-gray-700 leading-relaxed">
                  نحن نؤمن بأن نقل العفش ليس مجرد نقل أغراض من مكان لآخر، بل هو نقل حياة كاملة
                  بكل ما تحمله من ذكريات وأحلام. لذلك نتعامل مع كل قطعة أثاث بعناية فائقة كأنها
                  ملكنا الخاص.
                </p>
              </>
            ) : (
              <>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                  Why We're the Best Choice for Furniture Moving in Jeddah?
                </h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                  At <strong>Al Afdal</strong>, we pride ourselves on providing comprehensive and
                  excellent furniture moving services that meet all your needs. With years of
                  experience in furniture moving in Jeddah, we've become the preferred choice for
                  thousands of satisfied customers.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Unique Features</h3>

                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  <li>Professional and highly trained work team</li>
                  <li>Modern and fully equipped trucks and equipment</li>
                  <li>Professional packing with high-quality materials</li>
                  <li>Comprehensive insurance on all properties</li>
                  <li>Competitive and transparent prices with no hidden fees</li>
                  <li>Excellent 24/7 customer service</li>
                  <li>Quick execution while maintaining quality</li>
                  <li>Warranty on all services</li>
                </ul>

                <p className="text-gray-700 leading-relaxed">
                  We believe that moving furniture is not just moving items from one place to
                  another, but moving an entire life with all its memories and dreams. Therefore, we
                  handle each piece of furniture with utmost care as if it were our own.
                </p>
              </>
            )}
          </div>
        </div>
      </section>

      <CTASection
        title={
          isArabic
            ? "هل تحتاج مساعدة في اختيار الخدمة المناسبة؟"
            : "Need Help Choosing the Right Service?"
        }
        description={
          isArabic
            ? "اتصل بنا الآن على 0560586397 وسيساعدك فريقنا في اختيار الخدمة الأنسب لك"
            : "Call us now at 0560586397 and our team will help you choose the most suitable service"
        }
      />
    </>
  );
}
