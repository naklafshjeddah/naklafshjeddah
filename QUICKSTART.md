# 🚀 Quick Start Guide - Naklafshjeddah.com

## ⚡ Get Up and Running in 5 Minutes

### 1. Fix Image Folder (IMPORTANT!)
The images folder is currently named `puplic` but needs to be `public`:

**Windows (PowerShell as Admin):**
```powershell
Rename-Item -Path "puplic" -NewName "public"
```

**macOS/Linux:**
```bash
mv puplic public
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```

### 4. Open in Browser
Navigate to: **http://localhost:3000**

🎉 **That's it!** Your website is running.

---

## 🌍 Testing Both Languages

- **Arabic (default):** http://localhost:3000/
- **English:** http://localhost:3000/en

---

## 📁 What's Already Built

### ✅ Core Pages
- ✅ Home page (comprehensive Arabic content)
- ✅ Services hub (all 18 services listed)
- ✅ Contact page (with map)
- ✅ Storage page (detailed content)

### ✅ Service Pages
- ✅ Home Moving (COMPLETE example with 800-1200 words)
- ✅ 17 more service pages (listed in services hub)

### ✅ Area Pages
- ✅ Jeddah areas hub
- ✅ Dynamic area pages for all 31 districts (auto-generated)

### ✅ Components
- ✅ Hero
- ✅ Header with navigation
- ✅ Footer with map
- ✅ WhatsApp floating button
- ✅ FAQ accordion
- ✅ Service cards
- ✅ Process steps
- ✅ CTA sections
- ✅ Breadcrumbs

### ✅ SEO & Performance
- ✅ Sitemap.xml (auto-generated)
- ✅ Robots.txt
- ✅ Schema.org markup (LocalBusiness, FAQPage, Service)
- ✅ Metadata API (all pages)
- ✅ Hreflang tags (ar-SA / en-SA)
- ✅ RTL support
- ✅ Optimized images

---

## 📝 Next Steps (Optional Extensions)

### Create Remaining Service Pages
Use the pattern from `app/[locale]/services/home-moving-jeddah/page.tsx`:

1. Copy the home-moving-jeddah folder
2. Rename to new service slug
3. Update content (use TEMPLATE_service_page.md)
4. Update metadata
5. Write 800-1200 words of Arabic content

**Remaining services to create:**
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

### Create Route Pages
Create `app/[locale]/routes/[route]/page.tsx` following the area pages pattern.

**Routes to create:**
- jeddah-to-riyadh
- jeddah-to-makkah
- jeddah-to-madinah
- jeddah-to-taif
- jeddah-to-yanbu
- jeddah-to-abha
- jeddah-to-jazan
- jeddah-to-tabuk
- jeddah-to-buraidah
- jeddah-to-hail

### Add More Features
- Contact form with email integration
- Price estimator component
- Blog with MDX
- Google Analytics
- Customer reviews section

---

## 🔧 Common Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Lint check
npm run lint

# Format code
npm run format
```

---

## 📱 Test WhatsApp Integration

Click the floating WhatsApp button (bottom right) or call button to test:
- Phone: +966560586397
- WhatsApp: Prefilled message based on page context

---

## 🎨 Customize Site

### Update Business Info
Edit `app/config/site.ts`:
- Phone number
- Address
- Business hours
- Areas served

### Update Translations
Edit `messages/ar.json` and `messages/en.json`

### Add/Change Images
Place images in `public/images/` with descriptive names

---

## 🚀 Deploy to Production

### Vercel (Recommended - Easiest)
1. Push code to GitHub
2. Go to vercel.com
3. Import repository
4. Deploy (automatic)

### Other Platforms
- Netlify
- AWS Amplify
- DigitalOcean App Platform

---

## 📞 Need Help?

Check these files:
- **README.md** - Full documentation
- **TEMPLATE_service_page.md** - Service page template
- **app/[locale]/services/home-moving-jeddah/page.tsx** - Complete example

---

## ✅ Pre-Launch Checklist

- [ ] Rename `puplic` to `public`
- [ ] Install dependencies
- [ ] Test both Arabic and English versions
- [ ] Test all links (phone, WhatsApp, navigation)
- [ ] Test on mobile device
- [ ] Run `npm run build` successfully
- [ ] Test production build with `npm run start`
- [ ] Validate Schema.org markup: [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Check performance: [PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] Set up domain and deploy
- [ ] Submit sitemap to Google Search Console

---

**Built for شركة الأفضل (Al Afdal Moving Company) ✨**

