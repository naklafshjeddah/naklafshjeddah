import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import SchemaInjector from "@/components/SchemaInjector";
import { blogPosts } from "@/config/blog";
import { Calendar, Tag, User } from "lucide-react";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params: { locale, slug },
}: {
  params: { locale: string; slug: string };
}): Promise<Metadata> {
  const isArabic = locale === "ar";
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return {};

  return {
    title: isArabic ? post.titleAr : post.titleEn,
    description: isArabic ? post.excerptAr : post.excerptEn,
    alternates: {
      canonical: `/${locale === "ar" ? "" : locale + "/"}blog/${slug}`,
      languages: {
        "ar-SA": `/blog/${slug}`,
        "en-SA": `/en/blog/${slug}`,
      },
    },
    openGraph: {
      title: isArabic ? post.titleAr : post.titleEn,
      description: isArabic ? post.excerptAr : post.excerptEn,
      images: [post.image],
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default function BlogPostPage({
  params: { locale, slug },
}: {
  params: { locale: string; slug: string };
}) {
  const isArabic = locale === "ar";
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const breadcrumbs = [
    { label: isArabic ? "الرئيسية" : "Home", href: `/${locale === "ar" ? "" : locale}` },
    { label: isArabic ? "المدونة" : "Blog", href: `/${locale === "ar" ? "" : locale + "/"}blog` },
    { label: isArabic ? post.titleAr : post.titleEn },
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: isArabic ? post.titleAr : post.titleEn,
    description: isArabic ? post.excerptAr : post.excerptEn,
    image: `https://naklafshjeddah.com${post.image}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "شركة الأفضل لنقل العفش",
    },
  };

  const getFullContent = () => {
    const contents: { [key: string]: any } = {
      "best-time-to-move-jeddah": {
        ar: {
          sections: [
            {
              title: "أفضل الأشهر لنقل العفش في جدة",
              content: `تعتبر الفترة من **أكتوبر إلى أبريل** هي الأفضل لنقل العفش في جدة، حيث يكون الطقس معتدلاً والرطوبة منخفضة. خلال هذه الفترة، يمكنك تجنب الحرارة الشديدة التي قد تؤثر على الأثاث الخشبي والإلكترونيات.

الأشهر الأكثر ازدحاماً هي يونيو ويوليو (بسبب الإجازة الصيفية) وأغسطس وسبتمبر (قبل بداية الدراسة). إذا كان لديك مرونة في الموعد، حاول تجنب هذه الفترات للحصول على أسعار أفضل وتوافر أكبر.`,
            },
            {
              title: "أفضل أيام الأسبوع",
              content: `**منتصف الأسبوع (الثلاثاء والأربعاء)** هي أفضل الأيام لنقل العفش. السبب بسيط: معظم الناس يفضلون النقل في عطلة نهاية الأسبوع، مما يجعل هذه الأيام مزدحمة وأغلى سعراً.

مزايا النقل وسط الأسبوع:
- توافر أكبر لطواقم النقل
- أسعار أقل بنسبة 20-30٪
- أقل ازدحاماً في المصاعد والممرات
- سهولة الحصول على تصاريح الدخول في المجمعات السكنية`,
            },
            {
              title: "أفضل وقت خلال اليوم",
              content: `في **الصيف**، يُفضل بشدة البدء مبكراً في الصباح (6-7 صباحاً) لتجنب حرارة الظهيرة. يمكن إنجاز معظم العمل قبل الساعة 12 ظهراً.

في **الشتاء**، يمكنك البدء في أي وقت، لكن الفترة الصباحية (8-10 صباحاً) تظل الأفضل لاستغلال ضوء النهار وتجنب الازدحام المروري.

النقل الليلي متاح أيضاً لمن يفضلون ذلك، خاصة في الصيف، لكنه قد يكلف أكثر بـ15-20٪.`,
            },
            {
              title: "نصائح لتوفير المال",
              content: `1. **احجز مبكراً**: الحجز قبل 2-3 أسابيع يضمن لك أفضل الأسعار والمواعيد
2. **تجنب نهاية ومنتصف الشهر**: أوقات الذروة لتسليم واستلام الإيجارات
3. **قارن الأسعار**: احصل على 3 عروض أسعار على الأقل
4. **اسأل عن العروض**: كثير من الشركات تقدم خصومات خلال فترات هدوء العمل
5. **قلل من الأغراض**: كلما قل ما تنقله، كلما وفرت أكثر`,
            },
          ],
        },
      },
      "furniture-packing-tips": {
        ar: {
          sections: [
            {
              title: "تغليف الأثاث الخشبي",
              content: `الأثاث الخشبي يحتاج عناية خاصة:
- **نظف القطع** جيداً قبل التغليف لمنع الخدوش من الأتربة
- **استخدم بطانيات خاصة** أو فقاعات البلاستيك للأسطح
- **احمِ الزوايا** بواقيات الزوايا الكرتونية أو الفوم
- **لف الأرجل** بشكل منفصل لحمايتها من الكسر
- **ثبت الأدراج** بشريط لاصق لمنعها من الانفتاح`,
            },
            {
              title: "تغليف الأجهزة الإلكترونية",
              content: `الإلكترونيات تحتاج حماية مضاعفة:
- **احتفظ بالصناديق الأصلية** إن أمكن، فهي الأفضل
- **اصنع صوراً** لتوصيلات الكابلات قبل فكها
- **ضع كل القطع الصغيرة** في أكياس مُسمّاة
- **استخدم فقاعات البلاستيك** بسخاء حول الشاشات
- **اكتب "هش" و"أجهزة"** بخط كبير على الصناديق`,
            },
            {
              title: "تغليف الزجاجيات والتحف",
              content: `القطع القابلة للكسر:
- **لف كل قطعة بشكل فردي** بورق تغليف أو فقاعات
- **استخدم صناديق صغيرة** - الصناديق الكبيرة تصبح ثقيلة
- **املأ الفراغات** بورق مجعّد أو فوم لمنع الحركة
- **ضع طبقة حماية** في قاع الصندوق وأعلاه
- **لا تملأ الصندوق بالكامل** - اترك مساحة للحماية`,
            },
          ],
        },
      },
      "moving-cost-factors": {
        ar: {
          sections: [
            {
              title: "حجم الأثاث وكميته",
              content: `هذا العامل الأهم في التسعير. شقة من غرفة واحدة تكلف 800-1500 ريال، بينما فيلا كبيرة قد تكلف 5000-10000 ريال. كلما زاد عدد القطع، زاد عدد العمال المطلوب والوقت المستغرق.`,
            },
            {
              title: "المسافة بين الموقعين",
              content: `النقل داخل جدة يكلف أقل من النقل بين المدن. عادة تحسب الشركات تكلفة الوقود والوقت المستغرق. المسافات القصيرة (أقل من 10 كم) أرخص بكثير من المسافات الطويلة (أكثر من 50 كم).`,
            },
            {
              title: "الخدمات الإضافية المطلوبة",
              content: `الخدمات مثل الفك والتركيب (+300-800 ريال)، التغليف الكامل (+500-1500 ريال)، وصعود الأدوار بدون مصعد (+100-300 ريال لكل دور) تزيد من التكلفة الإجمالية.`,
            },
          ],
        },
      },
      // More blog content...
      "jeddah-neighborhoods-moving-guide": {
        ar: {
          sections: [
            {
              title: "نقل العفش في أحياء شمال جدة",
              content: `أحياء مثل أبحر والحمراء وذهبان تتميز بالفلل الكبيرة والشوارع الواسعة. التحدي الأساسي هنا هو المسافة البعيدة عن وسط المدينة. ننصح بالبدء مبكراً لتجنب الازدحام المروري على كورنيش جدة.`,
            },
            {
              title: "نقل العفش في وسط جدة",
              content: `أحياء مثل الروضة والزهراء أكثر ازدحاماً. المباني هنا عادة أقدم وقد لا تحتوي على مصاعد كبيرة. التنسيق المسبق مع إدارة العقار مهم جداً للحصول على تصريح دخول الشاحنة.`,
            },
          ],
        },
      },
      "villa-moving-checklist": {
        ar: {
          sections: [
            {
              title: "قبل 6 أسابيع من النقل",
              content: `- احصل على 3 عروض أسعار من شركات مختلفة
- حدد تاريخ النقل واحجز الشركة
- ابدأ بالتخلص من الأشياء غير الضرورية
- اصنع قائمة جرد شاملة بكل محتويات الفيلا`,
            },
            {
              title: "قبل 3 أسابيع",
              content: `- اشترِ مواد التغليف (صناديق، شريط لاصق، فقاعات)
- ابدأ تغليف الأغراض الموسمية
- أخطر المدرسة إن كان لديك أطفال
- نقل العنوان الوطني`,
            },
            {
              title: "يوم النقل",
              content: `- كن موجوداً أثناء التحميل
- تأكد من إفراغ كل الأدراج
- افحص كل غرفة قبل المغادرة
- احتفظ بالأشياء القيمة معك`,
            },
          ],
        },
      },
    };

    return (
      contents[slug]?.ar || {
        sections: [
          {
            title: "مقدمة",
            content: post.excerptAr,
          },
          {
            title: "نقاط رئيسية",
            content: `هذا المقال يقدم لك نصائح عملية ومفيدة حول ${isArabic ? post.titleAr : post.titleEn}. سنغطي جميع الجوانب المهمة لمساعدتك على اتخاذ القرار الصحيح.`,
          },
          {
            title: "خلاصة",
            content: `نأمل أن تكون هذه المعلومات مفيدة لك. إذا كان لديك أي استفسار، لا تتردد في الاتصال بنا على 0560586397.`,
          },
        ],
      }
    );
  };

  const content = getFullContent();

  return (
    <>
      <SchemaInjector schema={articleSchema} />
      <Breadcrumbs items={breadcrumbs} isRTL={isArabic} />

      <article className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Hero Image */}
            <div className="relative h-96 rounded-2xl overflow-hidden mb-8 shadow-xl">
              <Image
                src={post.image}
                alt={isArabic ? post.titleAr : post.titleEn}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                {new Date(post.date).toLocaleDateString(isArabic ? "ar-SA" : "en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="flex items-center gap-2">
                <Tag className="w-5 h-5" />
                {post.category}
              </span>
              <span className="flex items-center gap-2">
                <User className="w-5 h-5" />
                {isArabic ? "شركة الأفضل" : "Al Afdal"}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {isArabic ? post.titleAr : post.titleEn}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-gray-600 leading-relaxed mb-12 pb-8 border-b-2 border-gray-200">
              {isArabic ? post.excerptAr : post.excerptEn}
            </p>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              {content.sections.map((section: any, index: number) => (
                <div key={index} className="mb-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{section.title}</h2>
                  <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {section.content}
                  </div>
                </div>
              ))}

              <div className="bg-primary-50 border-r-4 border-primary-600 p-6 rounded-lg my-10">
                <p className="text-gray-800 font-semibold mb-2">
                  {isArabic ? "💡 نصيحة من الخبراء:" : "💡 Expert Tip:"}
                </p>
                <p className="text-gray-700">
                  {isArabic
                    ? "للحصول على أفضل تجربة نقل، احجز خدماتنا مبكراً واحصل على استشارة مجانية من فريقنا المتخصص."
                    : "For best moving experience, book our services early and get free consultation from our specialized team."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      <CTASection
        title={
          isArabic
            ? "هل تحتاج مساعدة في نقل عفشك؟"
            : "Need Help Moving Your Furniture?"
        }
        description={
          isArabic
            ? "فريقنا جاهز لمساعدتك على مدار الساعة. احصل على عرض سعر مجاني الآن!"
            : "Our team is ready to help you 24/7. Get your free quote now!"
        }
      />

      {/* Related Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {isArabic ? "مقالات ذات صلة" : "Related Articles"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts
              .filter((p) => p.slug !== slug)
              .slice(0, 3)
              .map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/${locale === "ar" ? "" : locale + "/"}blog/${relatedPost.slug}`}
                  className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden"
                >
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={relatedPost.image}
                      alt={isArabic ? relatedPost.titleAr : relatedPost.titleEn}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-600">
                      {isArabic ? relatedPost.titleAr : relatedPost.titleEn}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {isArabic ? relatedPost.excerptAr : relatedPost.excerptEn}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}



