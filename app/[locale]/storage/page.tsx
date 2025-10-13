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
        imageUrls={[
          "/images/storage services Jeddah.jpg",
          "/images/warehouse storage Jeddah.jpg",
          "/images/long term storage Jeddah.jpg",
          "/images/short term storage Jeddah.jpg",
        ]}
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
                    خدمات تخزين العفش الآمنة في جدة - الحل الأمثل لحماية ممتلكاتك
                  </h2>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    في الكثير من الحالات، قد تحتاج لمكان آمن ومؤقت لتخزين أثاثك وممتلكاتك.
                    سواء كنت في فترة انتقال بين منزلين، أو تخطط لتجديد شامل لمنزلك، أو مسافر
                    لفترة طويلة، أو تحتاج لتقليص حجم أثاثك، أو حتى تواجه ظروف خاصة كالانفصال
                    أو الميراث - في كل هذه الحالات، تحتاج لمكان يحفظ أثاثك بأمان وجودة عالية.
                    هنا يأتي دور{" "}
                    <a href="/" className="text-primary-600 hover:underline font-semibold">
                      شركة الأفضل
                    </a>{" "}
                    مع خدمات تخزين احترافية ومخازن حديثة مجهزة بأعلى معايير الأمان والحماية.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    لماذا خدمة التخزين ضرورية؟
                  </h3>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    العديد من الأشخاص والعائلات يواجهون مواقف تتطلب تخزين مؤقت للأثاث. من أكثر
                    الحالات شيوعاً:
                  </p>

                  <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                    <li>
                      <strong>فجوة زمنية في الانتقال:</strong> عندما تترك منزلك القديم قبل أن
                      يصبح المنزل الجديد جاهزاً (بسبب تأخر التسليم، التشطيبات، التجهيزات). هذه
                      الفترة قد تمتد من أيام إلى شهور، وتحتاج خلالها لمكان آمن لعفشك.
                    </li>
                    <li>
                      <strong>تجديدات وصيانة شاملة:</strong> إذا كنت تخطط لدهان شامل، تجديد
                      كامل، تغيير أرضيات، أو صيانة كبيرة، يجب تفريغ المنزل من الأثاث لحمايته
                      من الغبار والدهان والأضرار. التخزين المؤقت هنا ضروري.
                    </li>
                    <li>
                      <strong>السفر الطويل:</strong> إذا كنت تسافر لشهور (عمل، دراسة، علاج،
                      سياحة)، قد تفضل إخلاء المنزل وتخزين الأثاث لتوفير الإيجار أو لحمايته
                      من ترك المنزل فارغاً لفترة طويلة.
                    </li>
                    <li>
                      <strong>تصغير حجم المنزل:</strong> عند الانتقال من فيلا كبيرة لشقة أصغر،
                      أو من منزل واسع لاستديو، ستكون لديك أثاث زائد لا يتسع في المكان الجديد.
                      بدلاً من بيعه أو التخلص منه، يمكنك تخزينه لحين العودة لمنزل أكبر.
                    </li>
                    <li>
                      <strong>ظروف خاصة:</strong> مثل حالات الانفصال أو الطلاق حيث يحتاج
                      أحد الطرفين تخزين أثاثه مؤقتاً، أو حالات الميراث حيث يتم توزيع الأثاث
                      بين الورثة ويحتاج تخزين مؤقت.
                    </li>
                    <li>
                      <strong>احتياجات الأعمال والشركات:</strong> تخزين أثاث المكاتب الزائد،
                      الأرشيف والملفات، المخزون الموسمي، أو المعدات غير المستخدمة حالياً.
                    </li>
                  </ul>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    مميزات مخازننا الحديثة
                  </h3>

                  <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                    1. أمان متطور على مدار الساعة
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    الأمان هو أولويتنا القصوى. مخازننا مجهزة بأحدث أنظمة الأمان المتاحة:
                    كاميرات مراقبة عالية الدقة (HD) تغطي كل زاوية وتعمل 24/7 مع تسجيل
                    مستمر، فريق حراسة أمنية مدرب ومتواجد دائماً، أنظمة إنذار متقدمة ضد
                    السرقة والاقتحام متصلة مباشرة بالشرطة، أنظمة كشف حريق حساسة وطفايات
                    حريق آلية ويدوية، إضاءة محيطية قوية تغطي المبنى والمواقف، أبواب
                    إلكترونية ذكية بصلاحيات محدودة وسجل دخول، وأسوار وبوابات أمنية. كل
                    هذا لضمان حماية مطلقة لممتلكاتك.
                  </p>

                  <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                    2. تحكم كامل في المناخ
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    الأثاث، خاصة الخشبي والجلدي والمنسوجات، حساس جداً لدرجة الحرارة
                    والرطوبة. الحرارة العالية قد تسبب جفاف الخشب وتشققه، بينما الرطوبة
                    العالية تسبب انتفاخه ونمو العفن. مخازننا مجهزة بأنظمة تكييف حديثة
                    تحافظ على درجة حرارة معتدلة (20-25 درجة مئوية) ورطوبة مثالية
                    (40-60%). هذا يحمي الأثاث الخشبي من التمدد أو الانكماش، يمنع نمو
                    العفن والفطريات، يحافظ على الأقمشة والجلود من التلف، ويمنع صدأ
                    الأجزاء المعدنية. بيئة مستقرة ومثالية طوال فترة التخزين.
                  </p>

                  <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                    3. نظافة ومكافحة حشرات دورية
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    النظافة أساسية لحماية أثاثك. لدينا برنامج صيانة ونظافة منتظم يشمل:
                    تنظيف شامل للمخازن أسبوعياً، برنامج وقائي لمكافحة الحشرات والقوارض
                    شهرياً بواسطة شركات متخصصة مرخصة، فحص دوري للمخازن للتأكد من عدم
                    وجود أي تسريبات أو رطوبة أو مشاكل، وتهوية جيدة لمنع الروائح
                    الكريهة. مخازننا نظيفة تماماً وخالية من أي حشرات أو قوارض.
                  </p>

                  <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                    4. وحدات تخزين خاصة ومقفلة
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    كل عميل يحصل على وحدة تخزين خاصة به، مقفلة بقفل مزدوج، لها رقم
                    فريد ومفتاح خاص. أنت الوحيد الذي يملك الوصول لوحدتك. لا يدخل أحد
                    لوحدتك - حتى موظفونا - إلا بإذنك وحضورك. خصوصية كاملة وأمان مطلق.
                    الوحدات بأحجام مختلفة (صغيرة، متوسطة، كبيرة، كبيرة جداً) لتناسب
                    احتياجاتك سواء كنت تخزن محتويات غرفة واحدة أو فيلا كاملة.
                  </p>

                  <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                    5. تأمين شامل
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    جميع محتويات المخازن مغطاة بتأمين شامل ضد جميع المخاطر: الحريق،
                    السرقة، الأضرار، الفيضانات، وغيرها. في الحالة النادرة جداً لحدوث
                    أي ضرر أو فقدان، التأمين يعوضك بالكامل حسب قيمة الأثاث. راحة بالك
                    وأمان ممتلكاتك هي أولويتنا.
                  </p>

                  <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                    6. مرونة في الوصول والمدة
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    نوفر لك مرونة كاملة. يمكنك زيارة وحدتك في أي وقت خلال ساعات العمل
                    (8 صباحاً - 8 مساءً) للاطمئنان على عفشك، إضافة قطع جديدة، أو
                    إخراج ما تحتاجه. بالنسبة للمدة، أنت من يحدد: تخزين ليوم واحد،
                    أسبوع، شهر، سنة، أو حتى عدة سنوات. لا التزام طويل الأمد، يمكنك
                    إنهاء التخزين في أي وقت.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    أنواع خدمات التخزين
                  </h3>

                  <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                    تخزين قصير المدى
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    مثالي للاحتياجات المؤقتة: الفجوة بين منزلين (أيام أو أسابيع)،
                    التجديدات المنزلية، أو السفر القصير. نوفر مرونة كاملة بدون
                    التزامات طويلة. يمكنك الاستلام في أي وقت تشاء.
                  </p>

                  <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                    تخزين طويل المدى
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    مناسب للسفر الطويل، تصغير المنزل، أو الأثاث الموسمي الذي لا تحتاجه
                    حالياً. نوفر خصومات خاصة للتخزين لفترات 6 شهور فأكثر. العقود مرنة
                    ويمكن تجديدها أو إنهاؤها بسهولة.
                  </p>

                  <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                    تخزين للشركات
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    حلول تخزين خاصة للشركات: تخزين أثاث المكاتب الزائد، الأرشيف
                    والملفات، المعدات، المخزون الموسمي، أو الأثاث بين مشاريع التوسع.
                    أسعار وعقود خاصة للشركات والمؤسسات.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    خدمات إضافية متكاملة
                  </h3>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    لا نكتفي بتوفير المساحة، بل نقدم خدمة شاملة متكاملة:
                  </p>

                  <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                    <li>
                      <strong>
                        <a href={`/${isArabic ? "" : "en/"}services/packing-unpacking`} className="text-primary-600 hover:underline">
                          التغليف الاحترافي
                        </a>
                        :
                      </strong>{" "}
                      نوفر خدمة تغليف مخصصة للتخزين طويل المدى بمواد عالية الجودة تحمي
                      الأثاث من الغبار والخدوش.
                    </li>
                    <li>
                      <strong>
                        <a href={`/${isArabic ? "" : "en/"}services`} className="text-primary-600 hover:underline">
                          النقل من وإلى المخزن
                        </a>
                        :
                      </strong>{" "}
                      نستلم عفشك من منزلك، ننقله بأمان للمخزن، وعند الحاجة نعيده لمنزلك
                      الجديد أو أي موقع تحدده.
                    </li>
                    <li>
                      <strong>الفك والتركيب:</strong> إذا كنت تخزن أثاث كبير، نفكه
                      لتوفير المساحة، ونركبه عند الاستلام.
                    </li>
                    <li>
                      <strong>الرفوف والمنصات:</strong> نوفر رفوف ومنصات خشبية لتخزين
                      الأثاث بشكل آمن بعيداً عن الأرض.
                    </li>
                    <li>
                      <strong>إدارة المخزون:</strong> نظام إلكتروني لتسجيل كل قطعة
                      تخزنها مع أرقام مرجعية لسهولة التعرف والوصول.
                    </li>
                    <li>
                      <strong>التأمين الإضافي:</strong> بالإضافة للتأمين الأساسي، يمكنك
                      إضافة تأمين إضافي للقطع الثمينة جداً.
                    </li>
                  </ul>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    كيف تعمل خدمة التخزين؟
                  </h3>

                  <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-6">
                    <li>
                      <strong>الاتصال والاستشارة:</strong> اتصل بنا على{" "}
                      <a href="tel:+966560586397" className="text-primary-600 hover:underline font-bold">
                        0560586397
                      </a>{" "}
                      أو عبر{" "}
                      <a href="https://wa.me/966560586397" className="text-primary-600 hover:underline font-bold">
                        واتساب
                      </a>
                      . نناقش احتياجاتك: نوع الأثاث، الكمية التقريبية، المدة المتوقعة،
                      وأي احتياجات خاصة.
                    </li>
                    <li>
                      <strong>المعاينة المجانية:</strong> نزورك في منزلك أو مكتبك لمعاينة
                      الأثاث وتقدير الحجم الدقيق المطلوب. المعاينة مجانية وبدون التزام.
                    </li>
                    <li>
                      <strong>عرض السعر الشفاف:</strong> نقدم لك عرض سعر مفصل وواضح حسب
                      المساحة والمدة. لا رسوم خفية أو مفاجآت.
                    </li>
                    <li>
                      <strong>التغليف والنقل:</strong> إذا اخترت خدماتنا الإضافية، نُغلف
                      أثاثك بشكل احترافي وننقله بأمان للمخزن.
                    </li>
                    <li>
                      <strong>التخزين الآمن:</strong> نضع أثاثك في وحدة مخصصة مقفلة، مع
                      تسجيل كل قطعة في النظام، ونسلمك مفتاح وحدتك.
                    </li>
                    <li>
                      <strong>المتابعة:</strong> يمكنك زيارة وحدتك في أي وقت، أو الاتصال
                      بنا للاطمئنان.
                    </li>
                    <li>
                      <strong>الاستلام عند الحاجة:</strong> عندما تكون جاهزاً، نسلمك عفشك
                      أو نوصله لمنزلك الجديد حسب رغبتك.
                    </li>
                  </ol>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    نصائح مهمة قبل التخزين
                  </h3>

                  <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                    <li>
                      <strong>نظّف الأثاث جيداً:</strong> خاصة الأقمشة والسجاد والمفروشات.
                      التخزين بأثاث نظيف يمنع الروائح ونمو البكتيريا.
                    </li>
                    <li>
                      <strong>أفرغ جميع الأدراج:</strong> أخرج كل المحتويات من الأدراج
                      والخزانات. الأثاث الفارغ أخف وأسهل في النقل والتخزين.
                    </li>
                    <li>
                      <strong>فك القطع الكبيرة:</strong> إذا أمكن، فك الأسرة والطاولات
                      والخزائن لتوفير المساحة ولحماية أفضل.
                    </li>
                    <li>
                      <strong>لا تخزن الممنوعات:</strong> المواد القابلة للاشتعال، الطعام،
                      النباتات، الحيوانات، الأدوية المنتهية، والمواد الخطرة ممنوع تخزينها.
                    </li>
                    <li>
                      <strong>صوّر القطع الثمينة:</strong> التقط صور توثيقية للأثاث الثمين
                      قبل التخزين.
                    </li>
                    <li>
                      <strong>احتفظ بقائمة مفصلة:</strong> اكتب قائمة بكل ما تخزنه لسهولة
                      التتبع والتذكر.
                    </li>
                  </ul>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    أسعار تنافسية وعادلة
                  </h3>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    نقدم أسعار تخزين عادلة ومرنة تناسب جميع الميزانيات. التكلفة تعتمد على
                    عاملين رئيسيين: حجم المساحة المطلوبة (صغيرة، متوسطة، كبيرة، كبيرة
                    جداً) ومدة التخزين. كلما زادت المدة، قل السعر اليومي. لدينا خصومات
                    خاصة للتخزين طويل المدى (6 شهور فأكثر) وللشركات. السعر يشمل: المساحة
                    المخصصة، الأمان والمراقبة 24/7، التحكم بالمناخ، التأمين الأساسي،
                    مكافحة الحشرات، والصيانة الدورية. الخدمات الإضافية (النقل، التغليف،
                    الفك والتركيب) لها أسعار منفصلة تفضيلية.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    لماذا تختار شركة الأفضل للتخزين؟
                  </h3>

                  <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                    <li>خبرة طويلة في خدمات التخزين بجدة</li>
                    <li>مخازن حديثة بأعلى معايير الأمان</li>
                    <li>أسعار شفافة ومنافسة</li>
                    <li>مرونة كاملة في المدة والوصول</li>
                    <li>خدمات إضافية متكاملة (نقل، تغليف، فك وتركيب)</li>
                    <li>تأمين شامل على جميع المحتويات</li>
                    <li>خدمة عملاء متميزة 24/7</li>
                    <li>موقع مناسب وسهل الوصول في جدة</li>
                  </ul>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    إذا كنت تبحث عن مكان آمن لتخزين أثاثك في جدة، لا تتردد في التواصل معنا
                    اليوم. احصل على استشارة مجانية ومعاينة وعرض سعر مخصص يناسب احتياجاتك.
                    نحن هنا لخدمتك وحماية ممتلكاتك بكل احترافية وأمانة.
                  </p>
                </>
              ) : (
                <>
                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                    Safe Furniture Storage Services in Jeddah - Optimal Solution for Protecting Your Belongings
                  </h2>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    In many cases, you may need safe and temporary place to store your furniture and
                    belongings. Whether you're in transition period between two homes, planning
                    comprehensive home renovation, traveling for long period, need to downsize your
                    furniture, or even facing special circumstances like separation or inheritance -
                    in all these cases, you need place that keeps your furniture safely and with high
                    quality. Here comes{" "}
                    <a href="/en" className="text-primary-600 hover:underline font-semibold">
                      Al Afdal Company
                    </a>{" "}
                    with professional storage services and modern warehouses equipped with highest
                    security and protection standards.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    Why is Storage Service Necessary?
                  </h3>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    Many people and families face situations requiring temporary furniture storage.
                    Most common cases:
                  </p>

                  <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                    <li>
                      <strong>Time Gap in Moving:</strong> When you leave old home before new home
                      is ready (due to delivery delay, finishing, furnishing). This period may
                      extend from days to months, during which you need safe place for furniture.
                    </li>
                    <li>
                      <strong>Renovations and Comprehensive Maintenance:</strong> If you're planning
                      complete painting, full renovation, floor change, or major maintenance, you
                      must empty home of furniture to protect it from dust, paint, and damage.
                      Temporary storage here is necessary.
                    </li>
                    <li>
                      <strong>Long Travel:</strong> If traveling for months (work, study, treatment,
                      tourism), you may prefer to vacate home and store furniture to save rent or
                      protect it from leaving home empty for long time.
                    </li>
                    <li>
                      <strong>Downsizing Home:</strong> When moving from large villa to smaller
                      apartment, or from spacious house to studio, you'll have excess furniture that
                      doesn't fit in new place. Instead of selling or disposing it, you can store it
                      until returning to larger home.
                    </li>
                    <li>
                      <strong>Special Circumstances:</strong> Such as separation or divorce cases
                      where one party needs to store furniture temporarily, or inheritance cases
                      where furniture is distributed among heirs and needs temporary storage.
                    </li>
                    <li>
                      <strong>Business and Company Needs:</strong> Storing excess office furniture,
                      archives and files, seasonal inventory, or currently unused equipment.
                    </li>
                  </ul>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    Features of Our Modern Warehouses
                  </h3>

                  <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                    1. Advanced 24/7 Security
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Security is our top priority. Our warehouses are equipped with latest available
                    security systems: high-definition (HD) surveillance cameras covering every corner
                    operating 24/7 with continuous recording, trained security team always present,
                    advanced alarm systems against theft and intrusion directly connected to police,
                    sensitive fire detection systems and automatic and manual fire extinguishers,
                    strong perimeter lighting covering building and parking, smart electronic doors
                    with limited permissions and entry log, and security fences and gates. All this
                    to ensure absolute protection of your belongings.
                  </p>

                  <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                    2. Complete Climate Control
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Furniture, especially wooden, leather and textiles, is very sensitive to
                    temperature and humidity. High heat may cause wood drying and cracking, while
                    high humidity causes swelling and mold growth. Our warehouses are equipped with
                    modern air conditioning systems maintaining moderate temperature (20-25°C) and
                    ideal humidity (40-60%). This protects wooden furniture from expansion or
                    contraction, prevents mold and fungus growth, preserves fabrics and leather from
                    damage, and prevents metal parts rust. Stable and ideal environment throughout
                    storage period.
                  </p>

                  <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                    3. Cleanliness and Regular Pest Control
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Cleanliness is essential for protecting your furniture. We have regular
                    maintenance and cleaning program including: comprehensive warehouse cleaning
                    weekly, preventive program for pest and rodent control monthly by specialized
                    licensed companies, periodic warehouse inspection to ensure no leaks, moisture
                    or problems, and good ventilation to prevent bad odors. Our warehouses are
                    completely clean and free of any insects or rodents.
                  </p>

                  <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                    4. Private and Locked Storage Units
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Each client gets their own storage unit, locked with double lock, has unique
                    number and private key. You're the only one with access to your unit. No one
                    enters your unit - even our staff - except with your permission and presence.
                    Complete privacy and absolute security. Units in different sizes (small, medium,
                    large, extra large) to suit your needs whether storing one room contents or
                    entire villa.
                  </p>

                  <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                    5. Comprehensive Insurance
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    All warehouse contents covered by comprehensive insurance against all risks:
                    fire, theft, damage, floods, and others. In very rare case of any damage or
                    loss, insurance compensates you fully according to furniture value. Your peace
                    of mind and belongings security are our priority.
                  </p>

                  <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                    6. Flexibility in Access and Duration
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We provide complete flexibility. You can visit your unit anytime during working
                    hours (8 AM - 8 PM) to check on furniture, add new pieces, or take out what you
                    need. Regarding duration, you decide: storage for one day, week, month, year, or
                    even several years. No long-term commitment, you can end storage anytime.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    Types of Storage Services
                  </h3>

                  <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                    Short-Term Storage
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Ideal for temporary needs: gap between two homes (days or weeks), home
                    renovations, or short travel. We provide complete flexibility without long
                    commitments. You can receive anytime you wish.
                  </p>

                  <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                    Long-Term Storage
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Suitable for long travel, downsizing home, or seasonal furniture you don't
                    currently need. We provide special discounts for storage periods of 6+ months.
                    Contracts are flexible and can be renewed or terminated easily.
                  </p>

                  <h4 className="text-xl font-bold text-gray-900 mb-3 mt-6">
                    Business Storage
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Special storage solutions for companies: storing excess office furniture,
                    archives and files, equipment, seasonal inventory, or furniture between expansion
                    projects. Special prices and contracts for companies and institutions.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    Additional Integrated Services
                  </h3>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    We don't just provide space, but complete integrated service:
                  </p>

                  <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                    <li>
                      <strong>
                        <a href="/en/services/packing-unpacking" className="text-primary-600 hover:underline">
                          Professional Packing
                        </a>
                        :
                      </strong>{" "}
                      We provide packing service customized for long-term storage with high-quality
                      materials protecting furniture from dust and scratches.
                    </li>
                    <li>
                      <strong>
                        <a href="/en/services" className="text-primary-600 hover:underline">
                          Transport to and from Warehouse
                        </a>
                        :
                      </strong>{" "}
                      We receive your furniture from home, transport it safely to warehouse, and
                      when needed return it to new home or any location you specify.
                    </li>
                    <li>
                      <strong>Disassembly and Assembly:</strong> If storing large furniture, we
                      disassemble it to save space and assemble it upon receipt.
                    </li>
                    <li>
                      <strong>Shelves and Pallets:</strong> We provide wooden shelves and pallets
                      for safely storing furniture off ground.
                    </li>
                    <li>
                      <strong>Inventory Management:</strong> Electronic system to record each piece
                      you store with reference numbers for easy identification and access.
                    </li>
                    <li>
                      <strong>Additional Insurance:</strong> In addition to basic insurance, you can
                      add extra insurance for very valuable pieces.
                    </li>
                  </ul>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    How Does Storage Service Work?
                  </h3>

                  <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-6">
                    <li>
                      <strong>Contact and Consultation:</strong> Call us at{" "}
                      <a href="tel:+966560586397" className="text-primary-600 hover:underline font-bold">
                        0560586397
                      </a>{" "}
                      or via{" "}
                      <a href="https://wa.me/966560586397" className="text-primary-600 hover:underline font-bold">
                        WhatsApp
                      </a>
                    </li>
                    <li>
                      <strong>Free Inspection:</strong> We visit you to assess volume and determine
                      suitable unit size
                    </li>
                    <li>
                      <strong>Customized Quote:</strong> We provide accurate quote including
                      storage and additional services
                    </li>
                    <li>
                      <strong>Packing (if needed):</strong> Team packs your furniture
                      professionally
                    </li>
                    <li>
                      <strong>Safe Transport:</strong> Moving furniture to warehouse with full care
                    </li>
                    <li>
                      <strong>Organized Storage:</strong> Placing furniture in your private unit
                      with inventory documentation
                    </li>
                    <li>
                      <strong>Flexible Access:</strong> You can visit unit anytime during working
                      hours
                    </li>
                    <li>
                      <strong>Return Delivery:</strong> When needed, we deliver furniture to new
                      location and assemble it
                    </li>
                  </ol>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    Storage Tips
                  </h3>

                  <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                    <li>
                      <strong>Clean before storing:</strong> Clean furniture well before storage to
                      prevent odors and stains
                    </li>
                    <li>
                      <strong>Good packing:</strong> Ensure everything is well-packed especially
                      glass and breakables
                    </li>
                    <li>
                      <strong>Clear labeling:</strong> Label each box with contents for easy
                      retrieval later
                    </li>
                    <li>
                      <strong>Disassemble when possible:</strong> Disassemble large furniture to
                      save space and facilitate storage
                    </li>
                    <li>
                      <strong>Document valuable items:</strong> Photograph valuable pieces before
                      storage for documentation
                    </li>
                  </ul>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                    Pricing and Cost
                  </h3>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    Storage cost depends on two main factors: unit size (determined by furniture
                    volume) and storage duration. We offer flexible and competitive pricing:
                  </p>

                  <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                    <li>Daily storage: Suitable for very short periods (days or week)</li>
                    <li>Weekly storage: Ideal for home renovations or brief transitions</li>
                    <li>Monthly storage: Most popular option for medium periods</li>
                    <li>
                      Annual storage: With special discounts for long periods (6+ months)
                    </li>
                  </ul>

                  <p className="text-gray-700 leading-relaxed mt-8">
                    Don't hesitate to contact us today for free consultation and accurate quote.
                    Call{" "}
                    <a href="tel:+966560586397" className="text-primary-600 hover:underline font-bold">
                      0560586397
                    </a>{" "}
                    or message us on{" "}
                    <a href="https://wa.me/966560586397" className="text-primary-600 hover:underline font-bold">
                      WhatsApp
                    </a>
                    . Let Al Afdal provide you with safe and professional storage solution that
                    gives you complete peace of mind.
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








