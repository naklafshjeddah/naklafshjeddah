import { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import Hero from "@/components/Hero";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Shield, Video, Thermometer, Bug, Lock } from "lucide-react";

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
      ? "تخزين عفش آمن بجدة | مخازن مراقبة ومكيفة - شركة الأفضل"
      : "Safe Furniture Storage in Jeddah | Monitored & Climate-Controlled - Al Afdal",
    description: isArabic
      ? "مخازن تخزين عفش آمنة ومراقبة 24/7 في جدة. تحكم في درجة الحرارة، مكافحة حشرات، تأمين شامل. تخزين قصير وطويل المدى. اتصل: 0560586397"
      : "Safe and 24/7 monitored furniture storage warehouses in Jeddah. Temperature control, pest control, comprehensive insurance. Short and long-term storage.",
    alternates: {
      canonical: `/${locale === "ar" ? "" : locale + "/"}storage`,
      languages: {
        "ar-SA": "/storage",
        "en-SA": "/en/storage",
      },
    },
  };
}

export default function StoragePage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const isArabic = locale === "ar";

  const breadcrumbs = [
    { label: isArabic ? "الرئيسية" : "Home", href: `/${locale === "ar" ? "" : locale}` },
    { label: isArabic ? "التخزين" : "Storage" },
  ];

  const faqs = [
    {
      question: isArabic ? "كم تكلفة تخزين العفش؟" : "How much does furniture storage cost?",
      answer: isArabic
        ? "تعتمد تكلفة التخزين على حجم المساحة المطلوبة ومدة التخزين. نوفر خيارات مرنة: تخزين يومي، أسبوعي، شهري، أو سنوي. كلما طالت المدة، قل السعر اليومي. نقدم عروض خاصة للتخزين طويل المدى (6 شهور فأكثر). اتصل بنا لعرض سعر مخصص حسب احتياجاتك. المعاينة وحساب الحجم المطلوب مجانية."
        : "Storage cost depends on required space size and storage duration. We offer flexible options: daily, weekly, monthly, or annual storage. The longer the duration, the lower the daily rate. We provide special offers for long-term storage (6+ months). Call us for customized quote based on your needs. Inspection and space calculation are free.",
    },
    {
      question: isArabic
        ? "هل المخازن آمنة ومراقبة؟"
        : "Are the warehouses safe and monitored?",
      answer: isArabic
        ? "نعم تماماً. مخازننا مجهزة بأنظمة أمان متطورة: كاميرات مراقبة بتقنية HD تعمل 24/7، حراسة أمنية دائمة، أنظمة إنذار ضد السرقة والحريق، أبواب إلكترونية بصلاحيات محدودة، وإضاءة محيطية. كل وحدة تخزين لها رقم فريد ومفتاح خاص. لديك تأمين شامل على محتوياتك. راحتك وأمان عفشك أولويتنا."
        : "Yes absolutely. Our warehouses are equipped with advanced security systems: HD CCTV cameras operating 24/7, permanent security guards, theft and fire alarm systems, electronic doors with limited access, and perimeter lighting. Each storage unit has unique number and private key. You have comprehensive insurance on your contents. Your peace of mind and furniture safety are our priority.",
    },
    {
      question: isArabic
        ? "هل المخازن مكيفة؟ وما تأثير ذلك على الأثاث؟"
        : "Are warehouses climate-controlled? What's the effect on furniture?",
      answer: isArabic
        ? "مخازننا مجهزة بأنظمة تحكم في درجة الحرارة والرطوبة. نحافظ على درجة حرارة معتدلة (20-25 درجة) ورطوبة مثالية (40-60%). هذا ضروري لحماية الأثاث الخشبي من التمدد أو الانكماش، منع نمو العفن، حماية الأقمشة والجلود، ومنع صدأ الأجزاء المعدنية. هذه البيئة المستقرة تضمن خروج عفشك بنفس حالته الممتازة."
        : "Our warehouses are equipped with temperature and humidity control systems. We maintain moderate temperature (20-25°C) and ideal humidity (40-60%). This is necessary to protect wooden furniture from expansion or contraction, prevent mold growth, protect fabrics and leather, and prevent metal parts rust. This stable environment ensures your furniture comes out in same excellent condition.",
    },
    {
      question: isArabic
        ? "هل يمكنني الوصول لعفشي أثناء التخزين؟"
        : "Can I access my furniture during storage?",
      answer: isArabic
        ? "بالتأكيد! نوفر مرونة كاملة في الوصول لعفشك. ساعات العمل من 8 صباحاً حتى 8 مساءً يومياً. يمكنك زيارة المخزن، إضافة أو إخراج قطع، أو الاطمئنان على محتوياتك متى شئت. فقط اتصل بنا مسبقاً لتنسيق الزيارة. بعض العملاء يفضلون التخزين طويل المدى دون زيارات، وهذا مقبول تماماً. المرونة لك."
        : "Absolutely! We provide complete flexibility in accessing your furniture. Working hours are 8 AM to 8 PM daily. You can visit the warehouse, add or remove items, or check on your contents whenever you wish. Just call us in advance to coordinate the visit. Some clients prefer long-term storage without visits, and that's perfectly acceptable. Flexibility is yours.",
    },
    {
      question: isArabic
        ? "هل تقدمون خدمة التغليف للتخزين؟"
        : "Do you provide packing service for storage?",
      answer: isArabic
        ? "نعم، نقدم خدمة تغليف احترافية مخصصة للتخزين طويل المدى. نستخدم مواد عالية الجودة: كراتين مقوى، فقاعات هوائية، أغطية قماشية للأثاث، ومواد واقية للحواف. التغليف الصحيح ضروري لحماية العفش من الغبار والخدوش أثناء التخزين. نوفر أيضاً رفوف ومنصات خشبية لتخزين آمن بعيداً عن الأرض. الخدمة شاملة من النقل حتى التخزين."
        : "Yes, we provide professional packing service customized for long-term storage. We use high-quality materials: reinforced boxes, bubble wrap, fabric furniture covers, and edge protection materials. Proper packing is necessary to protect furniture from dust and scratches during storage. We also provide shelves and wooden pallets for safe storage off the ground. The service is comprehensive from moving to storage.",
    },
    {
      question: isArabic
        ? "ماذا لو احتجت تخزين مؤقت أثناء النقل؟"
        : "What if I need temporary storage during moving?",
      answer: isArabic
        ? "هذا سيناريو شائع جداً ونتعامل معه يومياً. إذا كان هناك فجوة زمنية بين ترك منزلك القديم والدخول للجديد (بسبب تأخر التسليم، التجديدات، السفر، وغيره)، نوفر تخزين مؤقت قصير المدى. نستلم عفشك من المنزل القديم، نخزنه بأمان، ثم نسلمه للمنزل الجديد في الموعد المحدد. خدمة متكاملة بسعر تنافسي."
        : "This is very common scenario and we handle it daily. If there's time gap between leaving old home and entering new one (due to delivery delay, renovations, travel, etc.), we provide temporary short-term storage. We receive your furniture from old home, store it safely, then deliver to new home at specified time. Complete service at competitive price.",
    },
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbs} isRTL={isArabic} />

      <Hero
        title={isArabic ? "تخزين عفش آمن ومراقب بجدة" : "Safe & Monitored Furniture Storage in Jeddah"}
        subtitle={
          isArabic
            ? "مخازن حديثة مكيفة ومراقبة 24/7 لتخزين عفشك بأمان تام. تخزين قصير وطويل المدى بأسعار تنافسية"
            : "Modern climate-controlled and 24/7 monitored warehouses for completely safe furniture storage. Short and long-term storage at competitive prices"
        }
        imageUrl="/images/storage services Jeddah.jpg"
        imageAlt={isArabic ? "تخزين عفش جدة" : "Jeddah Furniture Storage"}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              {isArabic ? "لماذا تختار مخازننا؟" : "Why Choose Our Warehouses?"}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <div className="flex gap-4 bg-primary-50 p-6 rounded-lg">
                <Shield className="w-10 h-10 text-primary-600 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-2">
                    {isArabic ? "حماية وتأمين شامل" : "Complete Protection & Insurance"}
                  </h3>
                  <p className="text-gray-700">
                    {isArabic
                      ? "تأمين كامل ضد جميع المخاطر - الحريق، السرقة، الأضرار. راحة بال تامة"
                      : "Full insurance against all risks - fire, theft, damage. Complete peace of mind"}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 bg-primary-50 p-6 rounded-lg">
                <Video className="w-10 h-10 text-primary-600 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-2">
                    {isArabic ? "مراقبة 24/7" : "24/7 Surveillance"}
                  </h3>
                  <p className="text-gray-700">
                    {isArabic
                      ? "كاميرات HD في كل زاوية، حراسة أمنية دائمة، وأنظمة إنذار متطورة"
                      : "HD cameras in every corner, permanent security guards, and advanced alarm systems"}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 bg-primary-50 p-6 rounded-lg">
                <Thermometer className="w-10 h-10 text-primary-600 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-2">
                    {isArabic ? "تحكم في المناخ" : "Climate Control"}
                  </h3>
                  <p className="text-gray-700">
                    {isArabic
                      ? "درجة حرارة ورطوبة مثالية للحفاظ على الأثاث الخشبي والأقمشة"
                      : "Ideal temperature and humidity to preserve wooden furniture and fabrics"}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 bg-primary-50 p-6 rounded-lg">
                <Bug className="w-10 h-10 text-primary-600 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-2">
                    {isArabic ? "مكافحة حشرات دورية" : "Regular Pest Control"}
                  </h3>
                  <p className="text-gray-700">
                    {isArabic
                      ? "برنامج وقائي شهري لمكافحة الحشرات والقوارض - مخازن نظيفة تماماً"
                      : "Monthly preventive program for pest and rodent control - completely clean warehouses"}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 bg-primary-50 p-6 rounded-lg">
                <Lock className="w-10 h-10 text-primary-600 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-2">
                    {isArabic ? "خصوصية كاملة" : "Complete Privacy"}
                  </h3>
                  <p className="text-gray-700">
                    {isArabic
                      ? "كل عميل له وحدة مستقلة مقفلة - لا أحد يصل لعفشك إلا أنت"
                      : "Each client has independent locked unit - no one accesses your furniture except you"}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 bg-primary-50 p-6 rounded-lg">
                <Shield className="w-10 h-10 text-primary-600 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-2">
                    {isArabic ? "مرونة في المدة" : "Flexible Duration"}
                  </h3>
                  <p className="text-gray-700">
                    {isArabic
                      ? "من يوم واحد لعدة سنوات - أنت تحدد المدة ونحن نلتزم"
                      : "From one day to several years - you decide duration and we commit"}
                  </p>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none mt-12">
              {isArabic ? (
                <>
                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                    متى تحتاج خدمة التخزين؟
                  </h2>

                  <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                    <li>
                      <strong>فجوة زمنية في الانتقال:</strong> بين ترك المنزل القديم والدخول
                      للجديد
                    </li>
                    <li>
                      <strong>تجديدات أو صيانة:</strong> تفريغ المنزل أثناء الدهان أو التجديد
                      الشامل
                    </li>
                    <li>
                      <strong>السفر الطويل:</strong> إذا كنت مسافراً لشهور وتريد إخلاء المنزل
                    </li>
                    <li>
                      <strong>تصغير المنزل:</strong> انتقلت لمنزل أصغر ولديك أثاث زائد
                    </li>
                    <li>
                      <strong>الميراث أو الطلاق:</strong> تخزين مؤقت حتى تحسم أمورك
                    </li>
                    <li>
                      <strong>الشركات:</strong> تخزين أثاث المكاتب، الأرشيف، أو المخزون الزائد
                    </li>
                  </ul>

                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                    كيف تعمل خدمة التخزين؟
                  </h2>

                  <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-6">
                    <li>
                      <strong>الاتصال والاستشارة:</strong> نناقش احتياجاتك ونحدد الحجم والمدة
                    </li>
                    <li>
                      <strong>المعاينة المجانية:</strong> نزورك لتقييم دقيق للكمية
                    </li>
                    <li>
                      <strong>عرض السعر:</strong> سعر شفاف حسب المساحة والمدة
                    </li>
                    <li>
                      <strong>التغليف والنقل:</strong> نُغلف ونَنقل عفشك للمخزن بأمان
                    </li>
                    <li>
                      <strong>التخزين الآمن:</strong> نضع عفشك في وحدة مخصصة ومقفلة
                    </li>
                    <li>
                      <strong>الاستلام عند الحاجة:</strong> نُسلمك عفشك في الموعد المحدد
                    </li>
                  </ol>

                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                    نصائح قبل التخزين
                  </h2>

                  <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                    <li>نظّف الأثاث جيداً قبل التخزين (خاصة الأقمشة والسجاد)</li>
                    <li>أفرغ جميع الأدراج والخزانات من المحتويات</li>
                    <li>فك القطع الكبيرة لتوفير المساحة وتسهيل التخزين</li>
                    <li>لا تخزن المواد القابلة للاشتعال أو الطعام أو النباتات</li>
                    <li>صوّر القطع الثمينة قبل التخزين كتوثيق</li>
                    <li>احتفظ بقائمة مفصلة بما خزنته</li>
                  </ul>

                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">أسعار تنافسية</h2>

                  <p className="text-gray-700 leading-relaxed">
                    نقدم أسعار تخزين عادلة ومرنة. التكلفة تعتمد على حجم المساحة ومدة التخزين. لدينا
                    خصومات خاصة للتخزين طويل المدى (6 شهور فأكثر). السعر يشمل: المساحة المخصصة،
                    الأمان والمراقبة، التحكم بالمناخ، التأمين الأساسي، والصيانة الدورية. يمكننا
                    إضافة خدمات النقل والتغليف بأسعار تفضيلية.
                  </p>
                </>
              ) : (
                <>
                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                    When Do You Need Storage Service?
                  </h2>

                  <p className="text-gray-700 leading-relaxed">
                    Storage service is useful in many situations: time gap during moving, home
                    renovations, long travel, downsizing, inheritance matters, or business storage
                    needs. Our warehouses are ready to serve you anytime.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title={isArabic ? "احجز مساحة تخزين آمنة الآن" : "Book Safe Storage Space Now"}
        description={
          isArabic
            ? "معاينة مجانية وعرض سعر مخصص لاحتياجاتك"
            : "Free inspection and customized quote for your needs"
        }
      />

      <FAQ title={isArabic ? "أسئلة شائعة عن التخزين" : "Storage FAQs"} items={faqs} />
    </>
  );
}








