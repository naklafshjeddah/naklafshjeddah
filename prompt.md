You are a senior full-stack engineer & UX copywriter. Build a production-ready, local-SEO website for “naklafshjeddah.com” (Brand: “شركة الأفضل”).
**Default language:** Arabic (ar-SA, RTL) at ROOT “/” (no prefix). **English:** under “/en” only (hreflang ar-SA/en-SA).

=== Tech & Setup ===
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS + shadcn/ui + lucide-react
- i18n (next-intl or similar) with routing: prefix_except_default (AR at “/”, EN at “/en”). Generate canonical + hreflang per page.
- next/metadata SEO base + sitemap.xml + robots.txt + OG/Twitter
- Performance: next/image (webp/avif), lazy, prefetch; Core Web Vitals targets: LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1
- ESLint + Prettier; absolute imports; RTL utilities; local Arabic font (Tajawal)
- README with env/config + build/deploy; `next build` must pass with zero type errors

=== Config (create: app/config/site.ts) ===
export const site = {
  brand: "شركة الأفضل",
  phone: "+966560586397",                 // E.164
  whatsapp: "https://wa.me/966560586397", // no leading +
  address: {
    full: "بني مالك، 8026، بني مالك، جدة 23234",
    streetAddress: "8026، حي بني مالك",
    addressLocality: "جدة",
    postalCode: "23234",
    addressCountry: "SA"
  },
  hours: [
    { day: "Monday", opens: "00:00", closes: "23:59" },
    { day: "Tuesday", opens: "00:00", closes: "23:59" },
    { day: "Wednesday", opens: "00:00", closes: "23:59" },
    { day: "Thursday", opens: "00:00", closes: "23:59" },
    { day: "Friday", opens: "00:00", closes: "23:59" },
    { day: "Saturday", opens: "00:00", closes: "23:59" },
    { day: "Sunday", opens: "00:00", closes: "23:59" }
  ]
};

=== Global UI ===
- Sticky top bar: `tel:+966560586397` + WhatsApp CTA (persistent)
- Header (AR/EN): Home, Services, Sectors, Areas & Routes, Storage, Offers, Blog, Contact
- Footer: show NAP from config (name/phone/address/hours) + mini map + quick links + WhatsApp CTA
- WhatsAppFloat (fixed, bottom-right) uses site.whatsapp and prefilled message with page context (service/area/route + UTM)

=== Content Rules (CRITICAL) ===
For **every** major AR page (Home, each Service, each Area, each Route, Storage, Offers, Contact):
1) **Human, persuasive Arabic** (people-first): **800–1200 words** (EN versions 400–700). Avoid keyword stuffing; write as a local expert for Jeddah residents/office managers.
2) Structure:
   - H1 includes “بجدة”
   - Short intro (40–60 words): pain + promise + primary CTA (Call/WhatsApp)
   - H2 blocks: لماذا تختارنا؟ / ما الذي تتضمنه الخدمة؟ / خطواتنا (معاينة→خطة→تنفيذ→متابعة) / المدة والتسعير بعوامل واضحة / نصائح قبل/بعد / الضمان / الأسئلة الشائعة
   - FAQ: 5–8 أسئلة (40–70 كلمة لكل إجابة) + **FAQPage JSON-LD**
   - CTA blocks كل ~300–400 كلمة
3) On-page SEO:
   - Unique Title (≤60 chars) + Meta (140–160 chars)
   - Internal links: ربط الخدمات ببعضها + ربط الأحياء/الرحلات بالخدمات الملائمة
   - فقرات قصيرة (≤3 أسطر)، قوائم نقطية، لغة نشطة وواضحة
4) E-E-A-T: ترخيص، سنوات الخبرة، صور فريق حقيقية، قبل/بعد، إجراءات السلامة، مقتطفات آراء حقيقية (بدون ادعاءات)
5) Media:
   - استخدم فقط `/public/images` بأسماء دلالية: 
     `jeddah-moving-hero-truck.webp`, `packing-bubble-wrap-kitchen.webp`,
     `bedroom-disassembly.webp`, `ac-removal-installation.webp`,
     `sofa-hoist-crane.webp`, `office-relocation-team.webp`,
     `storage-warehouse.webp`, `piano-moving.webp`
   - ALT عربي محلي: “نقل عفش شقة بحي الروضة بجدة – تغليف زجاجيات” (عدّل حسب الصفحة)

=== Schema (JSON-LD via <SchemaInjector/>) ===
- Home: LocalBusiness with:
  - name: site.brand
  - telephone: site.phone
  - address: PostalAddress {
      streetAddress, addressLocality, postalCode, addressCountry
    }
  - openingHoursSpecification from site.hours
  - areaServed: ["Jeddah","Al Hamra","Ash Shati","Al Rawdah","As Salama","Al Naeem","Al Murjan","An Nahdah","An Nuzha","Az Zahraa","Al Bawadi","Ar Rabwa","Al Safa","Al Khalidiya","Al Andalus","Al Aziziyah","Ar Riyhab","Al Balad","Ar Ruwais","Ash Sharafiyah","Bani Malik","Al Woroud","An Naseem","Al Baghdadiyah Ash Sharqiyah","Al Mohamadiyah","Al Basateen","Ath Tha’alaba","As Sulaymaniyah","Al Jamaa","Obhur North","Obhur South","Al Hamdaniyah"]
- Service pages: `Service` + `FAQPage` (+ `Offer` if listing packages)
- Area/Route pages: LocalBusiness with `areaServed` (the حي أو مسار المدن)
- Blog: `Article`
- BreadcrumbList + canonical on deep pages

=== Routes (app/) ===
- `/` (AR default) | `/en` (EN)
- `/services` (hub) + children (create all):
  1) /services/home-moving-jeddah            — نقل منازل/شقق بجدة
  2) /services/villa-moving-jeddah           — نقل فلل
  3) /services/office-relocation-jeddah      — نقل مكاتب وشركات
  4) /services/packing-unpacking             — التغليف وفك التغليف
  5) /services/disassembly-reassembly        — فك وتركيب غرف النوم/الأثاث
  6) /services/ac-curtains-installation      — فك/تركيب المكيفات والستائر
  7) /services/appliances-tv-mounting        — تركيب الأجهزة والتلفزيونات
  8) /services/hoist-crane-moving            — الونش والرافع للعفش الثقيل
  9) /services/intra-building-moving         — نقل داخلي داخل المبنى/الأبراج
 10) /services/urgent-night-weekend          — نقل عاجل/ليلي/عطلات
 11) /services/long-distance-moving          — نقل بين المدن (جدة↔الرياض/مكة/المدينة/الطائف/ينبع/أبها…)
 12) /services/piano-heavy-items             — نقل البيانو والعناصر الثقيلة
 13) /services/fine-art-antiques            — تحريك أثاث فاخر/تحف/لوحات
 14) /services/it-server-relocation          — نقل غرف السيرفر والأجهزة الحساسة
 15) /services/kitchen-disassembly           — فك/تركيب المطابخ
 16) /services/materials-supply              — توريد مواد تغليف (كراتين/فقاعات/Crating)
 17) /services/storage                       — تخزين آمن قصير/طويل المدى
 18) /services/corporate-contracts           — حلول الشركات والعقود
  (Each AR page: **800–1200 words** per Content Rules)

- `/sectors`: Residential, Corporate/Offices, Hospitality, Warehouses/Factories, Education, Healthcare (AR 400–700 words each + CTA)

- `/jeddah` (Areas hub) + static area pages (slugs EN, headings AR):
  al-hamra, ash-shati, al-rawdah, as-salama, al-naeem, al-murjan, an-nahdah, an-nuzha,
  az-zahraa, al-bawadi, ar-rabwa, al-safa, al-khalidiya, al-andalus, al-aziziyah,
  ar-rihab, al-balad, ar-ruwais, ash-sharafiyah, bani-malik, al-woroud, an-naseem,
  al-baghdadiyah-ash-sharqiyah, al-mohamadiyah, al-basateen, ath-tha’alaba,
  as-sulaymaniyah, al-jamaa, obhur-north, obhur-south, al-hamdaniyah
  (Each AR area page: **800–1000 words** + FAQ + CTA)

- `/routes` (intercity hub) + children:
  jeddah-to-riyadh, jeddah-to-makkah, jeddah-to-madinah, jeddah-to-taif,
  jeddah-to-yanbu, jeddah-to-abha, jeddah-to-jazan, jeddah-to-tabuk,
  jeddah-to-buraidah, jeddah-to-hail
  (Each AR route page: **800–1000 words**: distance/time, pricing factors, checklist, CTA)

- `/storage`  (AR 600–900 words: safety, climate notes, access hours, pest-controlled, insurance notes)
- `/offers`   (AR 600–900 words: packages, price-range snippet, FAQs)
- `/blog`     (MDX; seed 3 AR posts 800–1000 words: packing tips, pricing factors, hoist usage)
- `/contact`  (short persuasive copy + form; embed map + NAP + schema)

=== Components ===
<Hero>, <ServiceCard>, <ProcessSteps>, <ReviewCard>, <FAQ>, <Estimator>, <ContactForm>,
<WhatsAppFloat>, <AreaGrid>, <RouteCard>, <Breadcrumbs>, <SchemaInjector>

- Estimator: client-side price RANGE from rooms/floors/elevator/distance/heavy items (no checkout; lead-gen only)
- SchemaInjector: inject JSON-LD per page using values from config.site
- Breadcrumbs with schema; canonical links on deep pages

=== Titles/Meta (AR) ===
- Home:   "شركة نقل عفش بجدة — شركة الأفضل | تغليف وفك وتركيب وتخزين 24/7"
- Service:"نقل <service> بجدة | فريق مختص وضمان — شركة الأفضل"
- Area:   "نقل عفش بحي <area> جدة — استجابة سريعة وتسعير واضح"
- Route:  "نقل عفش من جدة إلى <city> | تسعير واضح وضمان — شركة الأفضل"

=== Image & File Hygiene ===
- Use only /public/images; descriptive Arabic ALT with local context; compress webp/avif; lazy-load below the fold.

=== QA Checklist ===
- Word count per AR page meets spec (800–1200); clear CTAs every ~300–400 words
- Internal links between related services + hubs
- LocalBusiness/Service/FAQ JSON-LD valid
- Core Web Vitals budgets met; Lighthouse report noted in README
•	Business address : طريق الامير متعب بن عبدالعزيز، الرحاب، جدة 23344، السعودية
	•	Business phone number : +966560586397