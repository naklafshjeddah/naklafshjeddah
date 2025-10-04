# Service Page Template

Use this template to create the remaining service pages quickly.

## File Location
`app/[locale]/services/[service-slug]/page.tsx`

## Example Service Slugs (remaining to create)
- villa-moving-jeddah
- office-relocation-jeddah
- packing-unpacking
- disassembly-reassembly
- ac-curtains-installation
- appliances-tv-mounting
- hoist-crane-moving
- intra-building-moving
- urgent-night-weekend
- long-distance-moving
- piano-heavy-items
- fine-art-antiques
- it-server-relocation
- kitchen-disassembly
- materials-supply
- corporate-contracts

## Template Structure

```tsx
import { Metadata } from "next";
import Hero from "@/components/Hero";
import ProcessSteps from "@/components/ProcessSteps";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Breadcrumbs from "@/components/Breadcrumbs";
import SchemaInjector from "@/components/SchemaInjector";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const isArabic = locale === "ar";

  return {
    title: isArabic
      ? "نقل [SERVICE_NAME_AR] بجدة | فريق مختص وضمان — شركة الأفضل"
      : "[SERVICE_NAME_EN] in Jeddah | Expert Team - Al Afdal",
    description: isArabic
      ? "[SERVICE_DESCRIPTION_AR] - اتصل: 0560586397"
      : "[SERVICE_DESCRIPTION_EN]",
    alternates: {
      canonical: `/${locale === "ar" ? "" : locale + "/"}services/[service-slug]`,
      languages: {
        "ar-SA": "/services/[service-slug]",
        "en-SA": "/en/services/[service-slug]",
      },
    },
  };
}

export default function ServicePage({ params: { locale } }: { params: { locale: string } }) {
  const isArabic = locale === "ar";

  const breadcrumbs = [
    { label: isArabic ? "الرئيسية" : "Home", href: `/${locale === "ar" ? "" : locale}` },
    { label: isArabic ? "الخدمات" : "Services", href: `/${locale === "ar" ? "" : locale + "/"}services` },
    { label: isArabic ? "[SERVICE_NAME_AR]" : "[SERVICE_NAME_EN]" },
  ];

  const steps = [
    {
      title: isArabic ? "[STEP_1_TITLE_AR]" : "[STEP_1_TITLE_EN]",
      description: isArabic ? "[STEP_1_DESC_AR]" : "[STEP_1_DESC_EN]",
    },
    // Add 3-4 steps total
  ];

  const faqs = [
    {
      question: isArabic ? "[QUESTION_1_AR]?" : "[QUESTION_1_EN]?",
      answer: isArabic ? "[ANSWER_1_AR]" : "[ANSWER_1_EN]",
    },
    // Add 5-8 FAQs total (40-70 words each)
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: isArabic ? "[SERVICE_NAME_AR]" : "[SERVICE_NAME_EN]",
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
        title={isArabic ? "[HERO_TITLE_AR]" : "[HERO_TITLE_EN]"}
        subtitle={isArabic ? "[HERO_SUBTITLE_AR]" : "[HERO_SUBTITLE_EN]"}
        imageUrl="/images/[service-image].jpg"
        imageAlt={isArabic ? "[IMAGE_ALT_AR]" : "[IMAGE_ALT_EN]"}
      />

      {/* Main Content - 800-1200 words in Arabic */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            {isArabic ? (
              <>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  [OPENING_PARAGRAPH - 40-60 words with primary CTA]
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-6">
                  لماذا تختار شركة الأفضل لـ [SERVICE_NAME_AR]؟
                </h2>

                <p className="text-gray-700 leading-relaxed mb-4">
                  [WHY_CHOOSE_US - 100-150 words]
                </p>

                {/* Add more H2/H3 sections for comprehensive content */}
                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  ما الذي تتضمنه خدمة [SERVICE_NAME_AR]؟
                </h3>

                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  <li>[FEATURE_1]</li>
                  <li>[FEATURE_2]</li>
                  {/* Add 5-8 features */}
                </ul>

                {/* Continue with more sections until reaching 800-1200 words */}
              </>
            ) : (
              <p>English version (400-700 words)</p>
            )}
          </div>
        </div>
      </section>

      <ProcessSteps title={isArabic ? "خطوات العمل" : "Our Process"} steps={steps} />

      <CTASection
        title={isArabic ? "احصل على عرض سعر مجاني" : "Get Free Quote"}
        description={isArabic ? "تواصل معنا اليوم" : "Contact us today"}
      />

      <FAQ items={faqs} />
    </>
  );
}
```

## Content Guidelines

### Arabic Content Structure (800-1200 words)
1. **Opening (40-60 words):** Problem + Promise + CTA
2. **لماذا تختارنا؟ (Why Us - 150-200 words)**
3. **ما الذي تتضمنه الخدمة؟ (What's Included - 200-250 words)**
4. **خطواتنا (Our Process - 150-200 words)**
5. **التسعير (Pricing - 100-150 words)**
6. **نصائح (Tips - 100-150 words)**
7. **الضمان (Guarantee - 50-100 words)**

### FAQs (5-8 questions)
Each answer should be 40-70 words in Arabic, addressing:
- Pricing questions
- Service scope
- Timeframes
- Special requirements
- Coverage areas
- Safety/guarantee

### Internal Linking
Link to:
- Related services
- Relevant area pages (e.g., link to `/jeddah/al-hamra` when mentioning الحمراء)
- Main services hub
- Contact page

## Example: Villa Moving Page

**Title:** نقل فلل بجدة | فريق مختص وضمان — شركة الأفضل

**Hero:** نقل فلل احترافي في جدة — آمن وسريع

**Content Focus:**
- Challenges of moving large villas
- Specialized equipment for heavy items
- Experience with luxury furniture
- Team size and coordination
- Pricing factors specific to villas

**Image:** `/images/villa movers Jeddah.jpg`

**FAQs:**
- كم تكلفة نقل فيلا كبيرة؟
- كم عدد العمال المطلوب لنقل فيلا؟
- هل تنقلون الحدائق والديكورات الخارجية؟
- etc.

---

Use `app/[locale]/services/home-moving-jeddah/page.tsx` as your primary reference example!








