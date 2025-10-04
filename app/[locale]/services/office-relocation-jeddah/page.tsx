import { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import Hero from "@/components/Hero";
import ProcessSteps from "@/components/ProcessSteps";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Breadcrumbs from "@/components/Breadcrumbs";
import SchemaInjector from "@/components/SchemaInjector";
import { Briefcase, Shield, Clock, Users } from "lucide-react";

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
      ? "نقل مكاتب وشركات بجدة | بدون تعطيل العمل — شركة الأفضل"
      : "Office & Corporate Relocation in Jeddah | No Work Disruption - Al Afdal",
    description: isArabic
      ? "خدمة نقل مكاتب احترافية في جدة - تخطيط محكم، نقل ليلي وعطلات، سرية تامة، بدون تعطيل عملك. اتصل: 0560586397"
      : "Professional office relocation service in Jeddah - Precise planning, night and weekend moving, complete confidentiality, no work disruption.",
    alternates: {
      canonical: `/${locale === "ar" ? "" : locale + "/"}services/office-relocation-jeddah`,
      languages: {
        "ar-SA": "/services/office-relocation-jeddah",
        "en-SA": "/en/services/office-relocation-jeddah",
      },
    },
  };
}

export default function OfficeRelocationPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const isArabic = locale === "ar";

  const breadcrumbs = [
    { label: isArabic ? "الرئيسية" : "Home", href: `/${locale === "ar" ? "" : locale}` },
    { label: isArabic ? "الخدمات" : "Services", href: `/${locale === "ar" ? "" : locale + "/"}services` },
    { label: isArabic ? "نقل مكاتب" : "Office Relocation" },
  ];

  const steps = [
    {
      title: isArabic ? "استشارة وتخطيط" : "Consultation & Planning",
      description: isArabic
        ? "نجتمع مع إدارتكم، نفهم احتياجاتكم، نضع خطة مفصلة وجدول زمني لا يعطّل العمل"
        : "Meet with management, understand needs, develop detailed plan and timeline that doesn't disrupt work",
    },
    {
      title: isArabic ? "التحضير والترتيب" : "Preparation & Organization",
      description: isArabic
        ? "ترقيم الأثاث والمعدات، تسمية الكراتين، إعداد مخطط المكتب الجديد، وتنسيق مع IT"
        : "Number furniture and equipment, label boxes, prepare new office layout, coordinate with IT",
    },
    {
      title: isArabic ? "التنفيذ السريع" : "Quick Execution",
      description: isArabic
        ? "نقل منظم في عطلة نهاية الأسبوع أو ليلاً، فريق كبير لإنجاز سريع، حماية البيانات"
        : "Organized moving on weekend or night, large team for quick completion, data protection",
    },
    {
      title: isArabic ? "التركيب والتشغيل" : "Installation & Operation",
      description: isArabic
        ? "تركيب كل شيء في المكتب الجديد، توصيل الأجهزة، اختبار، ومكتبكم جاهز للعمل صباحاً"
        : "Install everything in new office, connect equipment, test, your office ready for work in morning",
    },
  ];

  const faqs = [
    {
      question: isArabic
        ? "هل يمكنكم نقل المكتب بدون تعطيل العمل؟"
        : "Can you move office without disrupting work?",
      answer: isArabic
        ? "نعم تماماً! هذا تخصصنا. نخطط النقل ليتم في عطلة نهاية الأسبوع أو ليلاً. يوم الخميس مساءً نبدأ النقل، ونعمل طوال الليل، وصباح السبت مكتبكم الجديد جاهز تماماً. موظفوكم لن يشعروا بأي تعطيل — يتركون المكتب القديم الخميس ويعودون للجديد السبت. نقوم بالتنسيق المسبق مع إدارة المبنى القديم والجديد، ونضمن عدم التأثير على سير العمل. الشركات الكبيرة نقلها على مراحل — قسم في كل مرة."
        : "Yes absolutely! This is our specialty. We plan moving to happen on weekend or at night. Thursday evening we start, work all night, and Saturday morning your new office is completely ready. Your employees won't feel any disruption - they leave old office Thursday and return to new one Saturday. We coordinate in advance with old and new building management, and ensure no impact on workflow. Large companies we move in phases - one department at a time.",
    },
    {
      question: isArabic
        ? "كيف تحافظون على سرية وأمان المعلومات؟"
        : "How do you maintain confidentiality and information security?",
      answer: isArabic
        ? "نأخذ السرية بجدية تامة. فريقنا موثوق ومُدرّب على التعامل مع البيئات المكتبية. نوقع اتفاقية سرية (NDA) إذا لزم الأمر. المستندات الحساسة: نوفر صناديق مقفلة تُسلّم لكم مباشرة. الملفات والأرشيف: نرقمها وننقلها بحرص دون فتحها. أجهزة الكمبيوتر والسيرفرات: ننقلها في صناديق مُغلقة مع وسائد واقية. نوصي دائماً بأن يتولى قسم IT نقل السيرفرات والبيانات الحساسة، ونحن ننقل الأثاث والمعدات العادية."
        : "We take confidentiality very seriously. Our team is trustworthy and trained to handle office environments. We sign confidentiality agreement (NDA) if needed. Sensitive documents: we provide locked boxes delivered directly to you. Files and archives: we number and move them carefully without opening. Computers and servers: we move them in closed boxes with protective padding. We always recommend IT department handle servers and sensitive data, while we move furniture and regular equipment.",
    },
    {
      question: isArabic
        ? "كم تستغرق عملية نقل مكتب متوسط الحجم؟"
        : "How long does medium-sized office moving take?",
      answer: isArabic
        ? "مكتب متوسط (20-30 موظف، مساحة 200-300 متر) يستغرق عادة 8-12 ساعة للنقل الكامل. مع فريق كبير (8-12 عامل) يمكن إنجازه في ليلة واحدة. العوامل المؤثرة: عدد المكاتب والكراسي، الخزائن والأرشيف، المعدات (طابعات، ماكينات تصوير)، المسافة بين المكتبين، وتعقيد الترتيب الجديد. مكتب صغير (5-10 موظفين) قد يحتاج 4-6 ساعات فقط. شركة كبيرة (100+ موظف) قد تحتاج عدة أيام أو نقل على مراحل."
        : "Medium office (20-30 employees, 200-300 sqm area) usually takes 8-12 hours for complete moving. With large team (8-12 workers) can be completed in one night. Influencing factors: number of desks and chairs, cabinets and archives, equipment (printers, copiers), distance between offices, and new layout complexity. Small office (5-10 employees) may need only 4-6 hours. Large company (100+ employees) may need several days or phased moving.",
    },
    {
      question: isArabic
        ? "هل تنقلون المعدات التقنية (سيرفرات، شبكات، هواتف)؟"
        : "Do you move technical equipment (servers, networks, phones)?",
      answer: isArabic
        ? "ننقل المعدات التقنية بحرص شديد لكن ننصح بالتنسيق مع قسم IT لديكم. السيرفرات: نوفر صناديق خاصة مبطنة ونقلها بعناية، لكن قسم IT يجب أن يفصلها ويعيد توصيلها. معدات الشبكة (سويتشات، راوترات): نغلفها ونرقمها. أنظمة الهاتف: ننقلها بحرص. الكابلات: نرقمها ونصنفها. الكمبيوترات والشاشات: تغليف احترافي مع حماية من الصدمات. نوصي بعمل backup كامل قبل النقل. إذا كان لديكم فني IT، يمكنه مرافقتنا أثناء النقل لضمان كل شيء صحيح."
        : "We move technical equipment very carefully but recommend coordinating with your IT department. Servers: we provide special padded boxes and move carefully, but IT department should disconnect and reconnect them. Network equipment (switches, routers): we pack and number them. Phone systems: we move carefully. Cables: we number and categorize them. Computers and monitors: professional packing with shock protection. We recommend full backup before moving. If you have IT technician, they can accompany us during moving to ensure everything correct.",
    },
    {
      question: isArabic
        ? "هل تقدمون خدمات إضافية مع نقل المكتب؟"
        : "Do you provide additional services with office moving?",
      answer: isArabic
        ? "نعم، نقدم حزمة شاملة: تفكيك وتركيب الأثاث المكتبي، تفكيك وتركيب الحواجز (partitions)، نقل وتركيب لوحات الإعلانات والديكورات، ترقيم منهجي لكل شيء، ترتيب الأثاث حسب المخطط الجديد، توصيل الأجهزة الأساسية، إزالة التغليف والمخلفات، وحتى تنظيف سريع للمكتب الجديد. يمكننا أيضاً توفير تخزين مؤقت إذا كان هناك فجوة بين ترك المكتب القديم والدخول للجديد. بعض الشركات تطلب منا البقاء صباحاً لمساعدة الموظفين في التعرف على ترتيب الجديد."
        : "Yes, we provide comprehensive package: disassembly and assembly of office furniture, disassembly and assembly of partitions, moving and installing notice boards and decorations, systematic numbering of everything, furniture arrangement according to new layout, connecting basic equipment, removing packing and waste, and even quick cleaning of new office. We can also provide temporary storage if there's gap between leaving old office and entering new one. Some companies ask us to stay in morning to help employees familiarize with new arrangement.",
    },
    {
      question: isArabic
        ? "كم تكلفة نقل مكتب؟"
        : "How much does office moving cost?",
      answer: isArabic
        ? "التكلفة تعتمد على حجم المكتب، عدد الموظفين، كمية الأثاث والمعدات، المسافة، التوقيت (نقل ليلي قد يكون أغلى قليلاً)، والخدمات الإضافية. كقاعدة تقريبية: مكتب صغير (5-10 موظفين) قد يكلف مثل شقة كبيرة، مكتب متوسط (20-30 موظف) يكلف أكثر. نوفر معاينة مجانية وعرض سعر تفصيلي يشمل كل شيء: العمالة، الشاحنات، المواد، التأمين. للشركات الكبيرة نقدم عقود سنوية بأسعار تفضيلية."
        : "Cost depends on office size, number of employees, furniture and equipment quantity, distance, timing (night moving may be slightly more expensive), and additional services. As approximate rule: small office (5-10 employees) may cost like large apartment, medium office (20-30 employees) costs more. We provide free inspection and detailed quote including everything: labor, trucks, materials, insurance. For large companies we offer annual contracts at preferential rates.",
    },
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: isArabic ? "نقل مكاتب وشركات" : "Office & Corporate Relocation",
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
        title={isArabic ? "نقل مكاتب وشركات بجدة — بدون تعطيل عملك" : "Office & Corporate Relocation in Jeddah - No Work Disruption"}
        subtitle={
          isArabic
            ? "نقل مكتبك باحترافية في عطلة نهاية الأسبوع. تخطيط محكم، نقل سريع، وسرية تامة"
            : "Move your office professionally on weekend. Precise planning, quick moving, and complete confidentiality"
        }
        imageUrl="/images/office movers Jeddah.jpg"
        imageAlt={isArabic ? "نقل مكاتب جدة - شركة الأفضل" : "Jeddah Office Moving - Al Afdal"}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-primary-50 p-6 rounded-lg text-center">
                <Briefcase className="w-12 h-12 text-primary-600 mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">{isArabic ? "احترافية عالية" : "High Professionalism"}</h3>
                <p className="text-gray-700 text-sm">
                  {isArabic ? "خبرة واسعة في نقل الشركات" : "Extensive experience in corporate moving"}
                </p>
              </div>

              <div className="bg-primary-50 p-6 rounded-lg text-center">
                <Clock className="w-12 h-12 text-primary-600 mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">{isArabic ? "بدون تعطيل" : "No Disruption"}</h3>
                <p className="text-gray-700 text-sm">
                  {isArabic ? "نقل ليلي أو في العطلات" : "Night or weekend moving"}
                </p>
              </div>

              <div className="bg-primary-50 p-6 rounded-lg text-center">
                <Shield className="w-12 h-12 text-primary-600 mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">{isArabic ? "سرية تامة" : "Complete Confidentiality"}</h3>
                <p className="text-gray-700 text-sm">
                  {isArabic ? "حماية معلوماتك وبياناتك" : "Protect your information and data"}
                </p>
              </div>

              <div className="bg-primary-50 p-6 rounded-lg text-center">
                <Users className="w-12 h-12 text-primary-600 mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">{isArabic ? "فريق كبير" : "Large Team"}</h3>
                <p className="text-gray-700 text-sm">
                  {isArabic ? "نقل سريع وفعال" : "Quick and efficient moving"}
                </p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              {isArabic ? (
                <>
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    نقل المكتب تحدٍّ كبير — لا يمكن تعطيل العمل، البيانات حساسة، والوقت ثمين. في{" "}
                    <strong>شركة الأفضل</strong>، نتخصص في نقل المكاتب والشركات بطريقة لا تؤثر على
                    سير عملك. نخطط بدقة، ننفذ بسرعة، ونسلمك مكتبك الجديد جاهزاً للعمل.
                  </p>

                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                    لماذا الشركات تختارنا؟
                  </h2>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    نفهم احتياجات الشركات — الوقت، السرية، والكفاءة. خدماتنا مصممة خصيصاً للبيئات
                    المكتبية:
                  </p>

                  <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                    <li>
                      <strong>نقل ليلي وفي العطلات:</strong> نبدأ بعد انتهاء الدوام ونسلمك مكتبك
                      جاهزاً صباحاً
                    </li>
                    <li>
                      <strong>تخطيط مُحكم:</strong> نضع خطة تفصيلية بالتنسيق مع إدارتكم قبل أسابيع
                    </li>
                    <li>
                      <strong>ترقيم منهجي:</strong> كل قطعة مرقمة ومسماة لتُوضع في مكانها الصحيح
                    </li>
                    <li>
                      <strong>فريق كبير:</strong> 8-15 عامل للإنجاز السريع
                    </li>
                    <li>
                      <strong>سرية تامة:</strong> فريقنا موثوق ومُدرّب على التعامل مع البيئات
                      الحساسة
                    </li>
                    <li>
                      <strong>حماية المعدات:</strong> تغليف خاص للكمبيوترات والأجهزة الإلكترونية
                    </li>
                  </ul>

                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                    أنواع المكاتب التي نخدمها
                  </h2>

                  <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                    <li>المكاتب الإدارية الصغيرة (5-20 موظف)</li>
                    <li>الشركات المتوسطة (20-100 موظف)</li>
                    <li>المؤسسات الكبيرة (100+ موظف)</li>
                    <li>العيادات الطبية (مع معدات خاصة)</li>
                    <li>مكاتب المحاماة (مع أرشيف ضخم)</li>
                    <li>الشركات التقنية (مع سيرفرات ومعدات حساسة)</li>
                    <li>البنوك والمؤسسات المالية (سرية عالية)</li>
                  </ul>

                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                    كيف نضمن نقل بدون تعطيل؟
                  </h2>

                  <p className="text-gray-700 leading-relaxed mb-4">السر في التخطيط المُحكم:</p>

                  <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-6">
                    <li>
                      <strong>اجتماع تخطيطي:</strong> نجتمع مع إدارتكم قبل 2-3 أسابيع من النقل
                    </li>
                    <li>
                      <strong>مخطط المكتب الجديد:</strong> نحصل على مخطط ونخطط مواقع المكاتب والأقسام
                    </li>
                    <li>
                      <strong>الترقيم المسبق:</strong> قبل النقل بأيام، نضع ملصقات مرقمة على كل قطعة
                    </li>
                    <li>
                      <strong>التنسيق مع IT:</strong> نعمل مع قسم تقنية المعلومات لحماية البيانات
                    </li>
                    <li>
                      <strong>النقل الليلي:</strong> نبدأ الخميس مساءً، نعمل طوال الليل، ننتهي صباح
                      السبت
                    </li>
                    <li>
                      <strong>الإعداد والاختبار:</strong> نركب كل شيء ونختبر الأساسيات قبل وصول
                      الموظفين
                    </li>
                  </ol>

                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                    التعامل مع المعدات الحساسة
                  </h2>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    المكاتب الحديثة مليئة بالمعدات التقنية. طريقتنا:
                  </p>

                  <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                    <li>
                      <strong>السيرفرات:</strong> صناديق خاصة مبطنة، نقل رأسي فقط، يفصلها ويوصلها قسم
                      IT
                    </li>
                    <li>
                      <strong>الكمبيوترات:</strong> كل جهاز في كرتون مبطن مع رقم مكتبه
                    </li>
                    <li>
                      <strong>الشاشات:</strong> تغليف مضاعف بفقاعات هوائية وكراتين قوية
                    </li>
                    <li>
                      <strong>الطابعات والماكينات:</strong> تثبيت داخلي وتغليف خارجي
                    </li>
                    <li>
                      <strong>الكابلات:</strong> ترقيم وتصنيف كل كابل ليُوصل بنفس الطريقة
                    </li>
                    <li>
                      <strong>معدات الشبكة:</strong> تغليف مع ملاحظات لقسم IT
                    </li>
                  </ul>

                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                    نصائح للشركات قبل النقل
                  </h2>

                  <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                    <li>ابدأ التخطيط مبكراً (شهر على الأقل للشركات الكبيرة)</li>
                    <li>أخبر الموظفين مسبقاً عن موعد وخطة النقل</li>
                    <li>اطلب من الموظفين تنظيف مكاتبهم وأخذ المقتنيات الشخصية معهم</li>
                    <li>عمل backup كامل لجميع البيانات والسيرفرات</li>
                    <li>إعلام العملاء والموردين بالعنوان الجديد</li>
                    <li>تحديث العنوان في جميع المستندات الرسمية والموقع الإلكتروني</li>
                    <li>التأكد من جاهزية المكتب الجديد (كهرباء، إنترنت، تكييف)</li>
                  </ul>

                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">عقود الشركات</h2>

                  <p className="text-gray-700 leading-relaxed">
                    للشركات التي تنقل فروعها بانتظام أو تحتاج خدمات نقل دورية، نقدم{" "}
                    <strong>عقود سنوية</strong> بأسعار تفضيلية. العقد يشمل: أولوية في المواعيد،
                    أسعار مخفضة، فريق مخصص يعرف احتياجاتكم، ومرونة في التنفيذ. مثالي للشركات متعددة
                    الفروع، مكاتب الاستشارات، وشركات المقاولات.
                  </p>
                </>
              ) : (
                <p className="text-xl text-gray-700 leading-relaxed">
                  Office moving is major challenge - can't disrupt work, data is sensitive, and
                  time is precious. At Al Afdal, we specialize in moving offices and companies in
                  way that doesn't affect your workflow.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      <ProcessSteps title={isArabic ? "خطوات النقل" : "Moving Steps"} steps={steps} />

      <CTASection
        title={isArabic ? "جاهز لنقل مكتبك؟" : "Ready to Move Your Office?"}
        description={
          isArabic
            ? "تواصل معنا لجدولة اجتماع تخطيطي مجاني"
            : "Contact us to schedule free planning meeting"
        }
      />

      <FAQ items={faqs} />
    </>
  );
}








