import { Metadata } from "next";
import Hero from "@/components/Hero";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Breadcrumbs from "@/components/Breadcrumbs";
import SchemaInjector from "@/components/SchemaInjector";
import { Package, Shield, CheckCircle2 } from "lucide-react";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const isArabic = locale === "ar";

  return {
    title: isArabic
      ? "خدمات التغليف وفك التغليف بجدة | مواد عالية الجودة — شركة الأفضل"
      : "Packing & Unpacking Services in Jeddah | High-Quality Materials - Al Afdal",
    description: isArabic
      ? "خدمة تغليف احترافية في جدة - كراتين مقوى، فقاعات هوائية، حماية شاملة. تغليف آمن لجميع أنواع الأثاث. اتصل: 0560586397"
      : "Professional packing service in Jeddah - reinforced boxes, bubble wrap, comprehensive protection. Safe packing for all furniture types.",
    alternates: {
      canonical: `/${locale === "ar" ? "" : locale + "/"}services/packing-unpacking`,
      languages: {
        "ar-SA": "/services/packing-unpacking",
        "en-SA": "/en/services/packing-unpacking",
      },
    },
  };
}

export default function PackingPage({ params: { locale } }: { params: { locale: string } }) {
  const isArabic = locale === "ar";

  const breadcrumbs = [
    { label: isArabic ? "الرئيسية" : "Home", href: `/${locale === "ar" ? "" : locale}` },
    { label: isArabic ? "الخدمات" : "Services", href: `/${locale === "ar" ? "" : locale + "/"}services` },
    { label: isArabic ? "التغليف وفك التغليف" : "Packing & Unpacking" },
  ];

  const faqs = [
    {
      question: isArabic ? "ما أنواع مواد التغليف التي تستخدمونها؟" : "What types of packing materials do you use?",
      answer: isArabic
        ? "نستخدم مواد تغليف عالية الجودة فقط: كراتين مقوى بأحجام مختلفة (صغير للكتب، متوسط للملابس، كبير للفراش)، فقاعات هوائية بطبقات متعددة للزجاجيات والسيراميك، أغطية قماشية سميكة للأثاث الخشبي والجلود، إسفنج واقي للحواف والزوايا، شرائط لاصقة قوية، ولفائف بلاستيكية للحماية من الرطوبة. للقطع الثمينة نوفر صناديق خشبية مخصصة (custom crating). جميع مواد تغليفنا جديدة ونظيفة وقوية."
        : "We use only high-quality packing materials: reinforced boxes in different sizes (small for books, medium for clothes, large for bedding), multi-layer bubble wrap for glass and ceramics, thick fabric covers for wooden and leather furniture, protective foam for edges and corners, strong adhesive tapes, and plastic wraps for moisture protection. For valuable items we provide custom wooden crates. All our packing materials are new, clean, and strong.",
    },
    {
      question: isArabic ? "هل التغليف ضروري أم يمكنني نقل الأثاث بدونه؟" : "Is packing necessary or can I move furniture without it?",
      answer: isArabic
        ? "التغليف الاحترافي ضروري جداً لحماية ممتلكاتك. بدون تغليف، معدل الخدوش والكسر يرتفع بنسبة كبيرة. الأثاث الخشبي يُخدش بسهولة، الزجاجيات تنكسر، والأقمشة تتسخ. التغليف يحمي من: الخدوش أثناء الحمل والنقل، الكسر بسبب الاهتزاز، الغبار والأتربة، الرطوبة، والاحتكاك بين القطع. الاستثمار البسيط في التغليف يوفر عليك تكاليف الإصلاح أو الاستبدال الباهظة. نحن ننصح دائماً بالتغليف الاحترافي."
        : "Professional packing is very necessary to protect your belongings. Without packing, scratching and breaking rate increases significantly. Wooden furniture scratches easily, glass breaks, and fabrics get dirty. Packing protects from: scratches during loading and moving, breaking due to vibration, dust and dirt, moisture, and friction between pieces. Small investment in packing saves you expensive repair or replacement costs. We always recommend professional packing.",
    },
    {
      question: isArabic ? "هل يمكنني شراء مواد التغليف فقط والتغليف بنفسي؟" : "Can I buy packing materials only and pack myself?",
      answer: isArabic
        ? "نعم بالتأكيد! نوفر جميع مواد التغليف للبيع: كراتين بجميع الأحجام، فقاعات هوائية بالمتر، أغطية قماشية، إسفنج واقي، شرائط لاصقة، وأقلام تعليم. يمكنك شراء ما تحتاج والتغليف بنفسك لتوفير التكلفة. لكن للحصول على أفضل حماية ننصح بالتغليف الاحترافي — فريقنا خبير في تغليف القطع الحساسة والثمينة بطريقة آمنة. إذا اخترت التغليف بنفسك، يمكننا تقديم نصائح وإرشادات مجانية."
        : "Yes absolutely! We provide all packing materials for sale: boxes in all sizes, bubble wrap by meter, fabric covers, protective foam, adhesive tapes, and marking pens. You can buy what you need and pack yourself to save cost. But for best protection we recommend professional packing - our team is expert in packing sensitive and valuable items safely. If you choose to pack yourself, we can provide free tips and guidance.",
    },
    {
      question: isArabic ? "كم يستغرق تغليف منزل كامل؟" : "How long does packing entire home take?",
      answer: isArabic
        ? "يعتمد على حجم المنزل. شقة من غرفتين: 3-4 ساعات مع فريق من 2-3 عمال. شقة من 4 غرف: 5-7 ساعات. فيلا كبيرة: يوم كامل أو أكثر. نعمل بكفاءة عالية دون التأثير على الجودة. يمكننا البدء مبكراً والانتهاء في نفس اليوم. أو نغلف على مراحل إذا كنت لا تزال تسكن في المنزل — نغلف الغرف غير المستخدمة أولاً. المرونة في جدولتك هي أولويتنا."
        : "Depends on home size. Two-bedroom apartment: 3-4 hours with team of 2-3 workers. Four-bedroom apartment: 5-7 hours. Large villa: full day or more. We work with high efficiency without affecting quality. We can start early and finish same day. Or pack in phases if you're still living in home - pack unused rooms first. Flexibility in your schedule is our priority.",
    },
    {
      question: isArabic ? "هل تغلفون القطع الثمينة بطريقة خاصة؟" : "Do you pack valuable items in special way?",
      answer: isArabic
        ? "بالتأكيد! القطع الثمينة تحتاج عناية خاصة. التحف والأنتيكات: تغليف فردي مع طبقات متعددة + صندوق خشبي مخصص. اللوحات الفنية: حماية زوايا + كرتون مسطح خاص. الثريات الكريستال: فك كل قطعة + تغليف منفصل + صندوق مقسم. المجوهرات والساعات الثمينة: نوصي بحملها معك شخصياً. الأجهزة الإلكترونية الحساسة: تغليف مضاد للكهرباء الساكنة. نصور كل قطعة ثمينة قبل وبعد التغليف كتوثيق."
        : "Absolutely! Valuable items need special care. Antiques: individual packing with multiple layers + custom wooden crate. Artworks: corner protection + special flat cardboard. Crystal chandeliers: disassemble each piece + separate packing + divided box. Jewelry and valuable watches: we recommend carrying them personally. Sensitive electronic devices: anti-static packing. We photograph each valuable item before and after packing as documentation.",
    },
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: isArabic ? "التغليف وفك التغليف" : "Packing & Unpacking",
    provider: {
      "@type": "MovingCompany",
      name: "شركة الأفضل",
      telephone: "+966560586397",
    },
    areaServed: {
      "@type": "City",
      name: "Jeddah",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <SchemaInjector schema={serviceSchema} />
      <SchemaInjector schema={faqSchema} />
      <Breadcrumbs items={breadcrumbs} isRTL={isArabic} />

      <Hero
        title={isArabic ? "خدمات التغليف وفك التغليف الاحترافية" : "Professional Packing & Unpacking Services"}
        subtitle={
          isArabic
            ? "حماية شاملة لممتلكاتك بمواد عالية الجودة وخبرة احترافية"
            : "Comprehensive protection for your belongings with high-quality materials and professional expertise"
        }
        imageUrl="/images/packing services Jeddah.jpg"
        imageAlt={isArabic ? "خدمات التغليف جدة - شركة الأفضل" : "Jeddah Packing Services - Al Afdal"}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-primary-50 p-6 rounded-lg text-center">
                <Package className="w-12 h-12 text-primary-600 mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">{isArabic ? "مواد عالية الجودة" : "High-Quality Materials"}</h3>
                <p className="text-gray-700 text-sm">
                  {isArabic ? "كراتين مقوى وفقاعات هوائية قوية" : "Reinforced boxes and strong bubble wrap"}
                </p>
              </div>

              <div className="bg-primary-50 p-6 rounded-lg text-center">
                <Shield className="w-12 h-12 text-primary-600 mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">{isArabic ? "حماية شاملة" : "Comprehensive Protection"}</h3>
                <p className="text-gray-700 text-sm">
                  {isArabic ? "من الخدوش والكسر والرطوبة" : "From scratches, breaking, and moisture"}
                </p>
              </div>

              <div className="bg-primary-50 p-6 rounded-lg text-center">
                <CheckCircle2 className="w-12 h-12 text-primary-600 mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">{isArabic ? "فريق خبير" : "Expert Team"}</h3>
                <p className="text-gray-700 text-sm">
                  {isArabic ? "تدريب عالي على التغليف الآمن" : "High training in safe packing"}
                </p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              {isArabic ? (
                <>
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    التغليف الاحترافي هو أساس النقل الآمن. في <strong>شركة الأفضل</strong>، نقدم
                    خدمة تغليف شاملة باستخدام مواد عالية الجودة وتقنيات متقدمة لحماية جميع ممتلكاتك
                    — من الأطباق الصغيرة إلى الثريات الكريستال.
                  </p>

                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                    لماذا التغليف الاحترافي مهم؟
                  </h2>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    90% من الأضرار أثناء النقل تحدث بسبب التغليف السيء أو عدمه. التغليف الصحيح:
                  </p>

                  <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                    <li>
                      <strong>يحمي من الخدوش:</strong> الأثاث الخشبي والمعدني يُخدش بسهولة أثناء الحمل
                    </li>
                    <li>
                      <strong>يمنع الكسر:</strong> الزجاج، السيراميك، والمرايا تحتاج حماية مضاعفة
                    </li>
                    <li>
                      <strong>يقلل الحركة:</strong> تثبيت القطع يمنع اهتزازها واصطدامها ببعض
                    </li>
                    <li>
                      <strong>يحفظ النظافة:</strong> الأقمشة والملابس تبقى نظيفة ومحمية من الغبار
                    </li>
                    <li>
                      <strong>ييسّر التنظيم:</strong> كراتين معنونة تسهل التعرف على المحتويات
                    </li>
                  </ul>

                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">مواد التغليف التي نستخدمها</h2>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. الكراتين المقوى</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    كراتين جديدة من عدة أحجام، مقوى ثلاثي الطبقات يتحمل وزن كبير. صغير (للكتب
                    والأغراض الثقيلة الصغيرة)، متوسط (للملابس والألعاب)، كبير (للفراش والوسائد)،
                    وخاص (لل شاشات والأجهزة). كل كرتون جديد ونظيف ومعالج من الرطوبة.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. الفقاعات الهوائية</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    طبقات متعددة من الفقاعات الهوائية القوية للزجاجيات، الأطباق، الأكواب، المزهريات،
                    والقطع الحساسة. نلف كل قطعة على حدة ثم نضعها في كرتون مبطن. للقطع الثمينة جداً
                    نستخدم طبقتين أو ثلاث.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. الأغطية القماشية</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    أغطية قماش سميكة (blankets) للأثاث الخشبي الكبير: الطاولات، الدواليب، الأسرّة،
                    الكنب. تحمي من الخدوش والصدمات. قابلة لإعادة الاستخدام وصديقة للبيئة.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. الإسفنج الواقي</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    إسفنج خاص لحماية الزوايا والحواف الحادة. نضعه على زوايا الطاولات، أطراف
                    المرايا، وحواف الدواليب. يمنع الخدوش والكسر.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. الشرائط اللاصقة القوية</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    شرائط لاصقة عالية القوة لإغلاق الكراتين بإحكام. مقاومة للحرارة ولا تترك أثراً.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. اللفائف البلاستيكية</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    لف بلاستيكي شفاف قوي (stretch wrap) نستخدمه للأدراج والأبواب لمنع فتحها أثناء
                    النقل، وللحماية من الرطوبة والغبار.
                  </p>

                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">تقنيات التغليف المتخصصة</h2>

                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                      <span>
                        <strong>الأطباق والزجاجيات:</strong> كل قطعة تُلف بفقاعات هوائية منفصلة، توضع
                        في كرتون عمودياً (ليست مسطحة)، مع حشوة في الفراغات
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                      <span>
                        <strong>المرايا واللوحات:</strong> حماية زوايا + كرتون مسطح خاص + وضع عمودي
                        في الشاحنة
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                      <span>
                        <strong>الملابس:</strong> كراتين خاصة أو أكياس معلقة للبدلات والفساتين
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                      <span>
                        <strong>الكتب:</strong> كراتين صغيرة (الكتب ثقيلة) + ترتيب أفقي
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                      <span>
                        <strong>الأجهزة الإلكترونية:</strong> فصل الكابلات + تغليف مضاد للكهرباء
                        الساكنة + كرتون أصلي إن وُجد
                      </span>
                    </li>
                  </ul>

                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">خدمة فك التغليف</h2>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    بعد النقل، لا تريد قضاء أيام في فك التغليف. نحن نقدم خدمة فك تغليف شاملة:
                  </p>

                  <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                    <li>فك الكراتين وإخراج المحتويات بحرص</li>
                    <li>وضع الأغراض في الأماكن التي تحددها</li>
                    <li>إزالة جميع مواد التغليف والمخلفات</li>
                    <li>إعادة تدوير الكراتين والمواد القابلة للتدوير</li>
                    <li>تنظيف سريع للفوضى</li>
                  </ul>

                  <p className="text-gray-700 leading-relaxed bg-accent-50 p-6 rounded-lg">
                    <strong>نصيحة:</strong> التغليف الاحترافي يبدو تكلفة إضافية، لكنه في الحقيقة
                    توفير كبير. قطعة أثاث واحدة تالفة تكلف أكثر بكثير من تغليف المنزل كله. استثمر في
                    الحماية وارتاح البال.
                  </p>
                </>
              ) : (
                <p className="text-xl text-gray-700 leading-relaxed">
                  Professional packing is foundation of safe moving. At Al Afdal, we provide
                  comprehensive packing service using high-quality materials and advanced techniques
                  to protect all your belongings.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title={isArabic ? "احمِ ممتلكاتك بتغليف احترافي" : "Protect Your Belongings with Professional Packing"}
        description={
          isArabic
            ? "احصل على عرض سعر مجاني لخدمة التغليف"
            : "Get free quote for packing service"
        }
      />

      <FAQ items={faqs} />
    </>
  );
}








