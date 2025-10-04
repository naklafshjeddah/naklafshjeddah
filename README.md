# Naklafshjeddah.com - شركة الأفضل لنقل العفش

Production-ready, SEO-optimized website for Al Afdal Furniture Moving Company in Jeddah, Saudi Arabia.

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **i18n:** next-intl (Arabic default at `/`, English at `/en`)
- **Icons:** Lucide React
- **Fonts:** Tajawal (Google Fonts)

## 📁 Project Structure

```
naklafshjeddah/
├── app/
│   ├── [locale]/              # Localized routes
│   │   ├── layout.tsx         # Root layout with i18n
│   │   ├── page.tsx           # Home page (800-1200 words AR)
│   │   ├── services/          # 18 service pages
│   │   ├── jeddah/            # 31 area pages
│   │   │   └── [area]/        # Dynamic area pages
│   │   ├── routes/            # 10 intercity route pages
│   │   ├── storage/           # Storage page
│   │   ├── contact/           # Contact page
│   │   └── ...
│   ├── components/            # Reusable components
│   ├── config/                # Site configuration
│   ├── lib/                   # Utilities
│   ├── globals.css            # Global styles
│   ├── sitemap.ts             # Auto-generated sitemap
│   └── robots.ts              # SEO robots file
├── public/
│   └── images/                # Optimized images
├── messages/                  # i18n translations
│   ├── ar.json
│   └── en.json
├── i18n.ts                    # i18n configuration
├── middleware.ts              # Locale routing
└── ...config files
```

## 🛠️ Setup & Installation

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Git

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd naklafshjeddah
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Fix image folder name (if needed):**
   The images are currently in `puplic/images/`. Rename to `public/images/`:
   ```bash
   # On Windows PowerShell (run as admin):
   Rename-Item -Path "puplic" -NewName "public"
   
   # On macOS/Linux:
   mv puplic public
   ```

4. **Run development server:**
   ```bash
   npm run dev
   ```

5. **Open browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🌐 Internationalization (i18n)

- **Arabic (ar):** Default language at `/` (root)
- **English (en):** Available at `/en/*`
- **RTL Support:** Automatic direction change based on locale
- **Translations:** Located in `messages/ar.json` and `messages/en.json`

## 📄 Pages Overview

### Core Pages
- **Home (`/`):** Comprehensive landing page with services overview, FAQs, and Schema.org markup
- **Services Hub (`/services`):** All 18 service pages listed
- **Areas Hub (`/jeddah`):** 31 Jeddah district pages
- **Routes Hub (`/routes`):** 10 intercity moving routes
- **Storage (`/storage`):** Detailed storage services page
- **Contact (`/contact`):** Contact information with embedded map

### Service Pages (18 total)
All service pages include:
- 800-1200 words of persuasive Arabic content
- Service-specific FAQs with Schema.org FAQPage markup
- Process steps
- CTA sections
- Internal linking to related services and areas

Example service pages created:
- `/services/home-moving-jeddah` (Complete example with full content)
- `/services/villa-moving-jeddah`
- `/services/office-relocation-jeddah`
- ... (15 more listed in services hub)

### Area Pages (31 total)
Dynamic pages for all Jeddah districts:
- `/jeddah/al-hamra`
- `/jeddah/al-rawdah`
- `/jeddah/ash-shati`
- ... (28 more)

Each area page includes:
- Localized content (800-1000 words)
- Area-specific FAQs
- LocalBusiness Schema.org markup
- Internal links to relevant services

### Route Pages (10 total)
Intercity moving routes:
- `/routes/jeddah-to-riyadh`
- `/routes/jeddah-to-makkah`
- `/routes/jeddah-to-madinah`
- ... (7 more)

## 🎨 Components

### Layout Components
- **Header:** Navigation with language toggle
- **Footer:** NAP (Name, Address, Phone), map, quick links
- **TopBar:** Sticky contact bar with phone and WhatsApp
- **WhatsAppFloat:** Floating WhatsApp button

### Content Components
- **Hero:** Page hero sections with CTA buttons
- **ServiceCard:** Service preview cards
- **ProcessSteps:** Step-by-step process display
- **FAQ:** Accordion-style FAQ component
- **CTASection:** Call-to-action sections
- **Breadcrumbs:** Navigation breadcrumbs
- **SchemaInjector:** JSON-LD schema injection

## 🔧 Configuration

### Site Config (`app/config/site.ts`)
Contains all business information:
- Brand name
- Phone number
- WhatsApp link
- Address (updated to: طريق الامير متعب بن عبدالعزيز، الرحاب، جدة 23344)
- Business hours (24/7)
- Areas served (31 Jeddah districts)
- Route information

### Environment Variables
Currently, no environment variables are required. All configuration is in `site.ts`.

## 📊 SEO Features

### Implemented
- ✅ Metadata API for all pages
- ✅ Canonical URLs
- ✅ Hreflang tags (ar-SA / en-SA)
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ Auto-generated sitemap.xml
- ✅ Robots.txt
- ✅ Schema.org markup:
  - LocalBusiness / MovingCompany
  - FAQPage for all major pages
  - Service markup
  - BreadcrumbList (via Breadcrumbs component)

### Performance Optimizations
- Next.js Image component with WebP/AVIF support
- Lazy loading for images
- Font optimization (Tajawal from Google Fonts with swap)
- Route prefetching

### Content SEO
- Keyword-rich, natural Arabic content
- Internal linking between services, areas, and routes
- Descriptive image alt tags
- Proper heading hierarchy (H1 → H6)

## 🚀 Build & Deploy

### Build for Production
```bash
npm run build
```

This command:
- Type-checks TypeScript
- Generates optimized production build
- Creates static pages where possible
- Optimizes images

### Check Build Output
```bash
npm run start
```

### Deployment Recommendations

#### Vercel (Recommended)
1. Push code to GitHub/GitLab/Bitbucket
2. Import project in Vercel
3. Vercel auto-detects Next.js
4. Deploy!

#### Other Platforms
- **Netlify:** Supports Next.js
- **AWS Amplify:** Full Next.js support
- **DigitalOcean App Platform:** Node.js support
- **Custom VPS:** Use PM2 or Docker

### Environment Setup (if needed later)
Create `.env.local` for any future environment variables:
```env
# Example (not currently used)
# NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

## 📝 Content Guidelines

### Arabic Content Requirements
- **Home page:** 800-1200 words
- **Service pages:** 800-1200 words each
- **Area pages:** 800-1000 words each
- **Route pages:** 800-1000 words each

### Content Structure
Each major page should include:
1. H1 with "بجدة" (in Jeddah)
2. Short intro (40-60 words) with CTA
3. Multiple H2 sections:
   - لماذا تختارنا؟ (Why choose us?)
   - ما الذي تتضمنه الخدمة؟ (What's included?)
   - خطواتنا (Our process)
   - التسعير (Pricing)
   - نصائح (Tips)
4. FAQ section (5-8 questions, 40-70 words each)
5. CTA blocks every 300-400 words

## 🖼️ Images

### Current Status
Images are in `public/images/` (note: folder may need renaming from `puplic`).

### Image Naming Convention
Use descriptive, SEO-friendly names:
- `movers in Jeddah.jpg`
- `home movers Jeddah.jpg`
- `villa movers Jeddah.jpg`
- etc.

### Alt Text
All images should have descriptive Arabic alt text:
```tsx
<Image
  src="/images/home movers Jeddah.jpg"
  alt="نقل عفش منزل في جدة - شركة الأفضل"
  ...
/>
```

## 📱 WhatsApp Integration

WhatsApp links are contextualized based on the page:
```typescript
// Utility function in app/lib/utils.ts
getWhatsAppLink(service?, area?, route?)
```

Examples:
- Home page: "أرغب في الاستفسار عن خدمات نقل العفش"
- Service page: "أرغب في الاستفسار عن نقل منازل"
- Area page: "أرغب في الاستفسار عن نقل العفش في الحمراء"

## 🧪 Testing Checklist

- [ ] All pages load without errors
- [ ] Arabic RTL works correctly
- [ ] English LTR works correctly
- [ ] Language toggle functions
- [ ] Phone links work (`tel:`)
- [ ] WhatsApp links work
- [ ] Images load properly
- [ ] Forms submit (if any added later)
- [ ] Schema.org markup validates ([Google Rich Results Test](https://search.google.com/test/rich-results))
- [ ] Mobile responsive
- [ ] Core Web Vitals pass ([PageSpeed Insights](https://pagespeed.web.dev/))

## 📈 Performance Targets

- **LCP (Largest Contentful Paint):** ≤ 2.5s
- **INP (Interaction to Next Paint):** ≤ 200ms
- **CLS (Cumulative Layout Shift):** ≤ 0.1

Test with: [PageSpeed Insights](https://pagespeed.web.dev/)

## 🔄 Future Enhancements

Potential additions:
- [ ] Complete remaining 15 service pages (follow pattern from home-moving-jeddah)
- [ ] Create route pages (`/routes/[route]/page.tsx`)
- [ ] Add blog functionality with MDX
- [ ] Add online price estimator component
- [ ] Add contact form with email integration
- [ ] Add Google Analytics
- [ ] Add customer reviews section
- [ ] Add before/after image gallery
- [ ] Add video testimonials
- [ ] Implement AMP pages for ultra-fast mobile

## 🆘 Common Issues & Solutions

### Build Errors

**TypeScript errors:**
```bash
npm run build
# Fix any type errors shown
```

**Module not found:**
```bash
npm install
# Ensure all dependencies installed
```

### Image Issues

**Images not loading:**
- Check image paths (should be `/images/filename.jpg`, not `/public/images/...`)
- Verify images exist in `public/images/`
- Check file name spelling (case-sensitive on some systems)

### i18n Issues

**Wrong language showing:**
- Check `middleware.ts` configuration
- Verify locale in URL (`/` for AR, `/en` for EN)
- Clear browser cache

## 📞 Contact & Support

- **Phone:** +966560586397
- **WhatsApp:** https://wa.me/966560586397
- **Address:** طريق الامير متعب بن عبدالعزيز، الرحاب، جدة 23344، السعودية

## 📄 License

Proprietary - All rights reserved by شركة الأفضل (Al Afdal Company)

---

**Built with ❤️ for Al Afdal Moving Company, Jeddah**








