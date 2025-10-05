# 🗺️ دليل GEO SEO الشامل | Complete GEO SEO Guide

## 📍 نظرة عامة | Overview

تم تطبيق نظام متقدم لتحسين SEO المحلي من خلال إضافة بيانات GEO metadata لجميع الصور والفيديوهات، مع JSON-LD structured data لتحسين الظهور في:
- Google Search
- Google Images
- Google Maps
- Google AI Overviews
- Local Pack Results

---

## 🎯 الإحداثيات | Coordinates

### مركز جدة:
```
Latitude:  21.492500
Longitude: 39.177570
Source: latlong.net
```

### التشويش (Jitter):
- كل صورة/فيديو لها إحداثيات فريدة
- ±0.0012° (≈ 130 متر)
- يمنع تطابق الإحداثيات بين الملفات

---

## 📂 هيكل المشروع | Project Structure

```
naklafshjeddah/
├── scripts/exif/
│   ├── tag_images.sh     # إضافة GEO metadata للصور
│   ├── tag_videos.sh     # إضافة GEO metadata للفيديوهات
│   └── verify_meta.sh    # التحقق من البيانات
├── app/lib/
│   └── jsonld.ts         # مساعدات JSON-LD
└── public/
    ├── images/           # صور الموقع
    └── videos/           # فيديوهات الموقع
```

---

## 🛠️ الأوامر المتاحة | Available Commands

### تثبيت ExifTool (مطلوب):

**macOS:**
```bash
brew install exiftool
```

**Linux (Ubuntu/Debian):**
```bash
sudo apt-get install libimage-exiftool-perl
```

**Windows:**
- تحميل من: https://exiftool.org/
- إضافة إلى PATH

### تشغيل Scripts:

```bash
# إضافة GEO metadata للصور
npm run geo:images

# إضافة GEO metadata للفيديوهات
npm run geo:videos

# التحقق من البيانات
npm run geo:verify

# تنفيذ كل شيء
npm run geo:all
```

---

## 📸 الصور | Images

### البيانات المضافة:

#### XMP Metadata:
- `City`: "Jeddah" / "جدة"
- `State`: "Makkah Province" / "منطقة مكة المكرمة"
- `Country`: "Saudi Arabia" / "المملكة العربية السعودية"
- `CountryCode`: "SA"

#### GPS Coordinates:
- `GPSLatitude`: 21.xxxxx (مع jitter)
- `GPSLongitude`: 39.xxxxx (مع jitter)
- `GPSAltitude`: 12 meters

#### Keywords (XMP-dc:Subject):
**عربي:**
- نقل عفش
- جدة
- شركة نقل
- [اسم الحي إن وُجد]
- [نوع الخدمة إن وُجد]

**English:**
- Furniture Moving
- Jeddah
- Moving Company
- [Neighborhood if detected]
- [Service type if detected]

### الأحياء المدعومة:

| اسم الحي | الكلمة المفتاحية |
|----------|-------------------|
| الحمراء | hamra, alhamra |
| الشاطئ | shatie, shate |
| الروضة | rawdah |
| السلامة | salama |
| النعيم | naeem |
| المرجان | marjan, murjan |
| الخالدية | khalidiya |
| الأندلس | andalus |
| العزيزية | aziziyah |
| البساتين | basateen |
| البوادي | bawadi |
| الحمدانية | hamdaniyah |
| الجامعة | jamaa |
| المحمدية | mohamadiyah |
| النهضة | nahdah |
| النسيم | naseem |
| النزهة | nuzha |
| الربوة | rabwa |
| الرحاب | rihab |
| الرويس | ruwais |
| الشرفية | sharafiyah |
| السليمانية | sulaymaniyah |
| الثعالبة | thalaba |
| الزهراء | zahraa |
| بني مالك | banimalik |
| أبحر | obhur |

### أنواع الخدمات المكتشفة:

| النوع | الكلمة المفتاحية |
|-------|-------------------|
| التغليف | packing, تغليف |
| التخزين | storage, تخزين |
| النقل | truck, شاحنة |
| المكاتب | office, مكتب |
| الفلل | villa, فلل |

### مثال على اسم ملف:
```
furniture-packing-hamra-jeddah.webp
```
**سيضيف:**
- Keywords: "نقل عفش, جدة, الحمراء, تغليف"
- Keywords: "Furniture Moving, Jeddah, Al Hamra, Packing"
- GPS: 21.493xxx, 39.178xxx

---

## 🎥 الفيديوهات | Videos

### البيانات المضافة:

#### QuickTime Metadata:
- `GPSCoordinates`: "21.xxxxx,39.xxxxx,12"
- `LocationName`: "Jeddah, Saudi Arabia"
- `LocationInformation`: "جدة، المملكة العربية السعودية"
- `Make`: "naklafshjeddah.com"
- `Copyright`: "© 2025 شركة الأفضل لنقل العفش"

### ملاحظة مهمة:
- بعد أي تحويل بـ FFmpeg، أعد تشغيل `npm run geo:videos`
- الفيديوهات تفقد metadata عند التحويل

---

## 🔍 JSON-LD Structured Data

### الأنواع المتاحة:

#### 1. LocalBusiness (MovingCompany)
```typescript
import { localBusinessLD, renderJSONLD } from "@/lib/jsonld";

<script 
  type="application/ld+json" 
  dangerouslySetInnerHTML={renderJSONLD(localBusinessLD())} 
/>
```

**الفوائد:**
- ظهور في Google Maps
- معلومات في Local Pack
- ساعات العمل والهاتف

#### 2. ImageObject
```typescript
import { imageLD, renderJSONLD } from "@/lib/jsonld";

<script 
  type="application/ld+json" 
  dangerouslySetInnerHTML={renderJSONLD(imageLD({
    url: "/images/furniture-moving-jeddah.webp",
    caption: "نقل عفش احترافي في جدة",
    width: 1200,
    height: 800,
    neighborhood: "Al Hamra"
  }))} 
/>
```

**الفوائد:**
- ظهور في Google Images
- معلومات الموقع مع الصورة
- Rich Results

#### 3. VideoObject
```typescript
import { videoLD, renderJSONLD } from "@/lib/jsonld";

<script 
  type="application/ld+json" 
  dangerouslySetInnerHTML={renderJSONLD(videoLD({
    name: "كيفية تغليف الأثاث بشكل احترافي",
    description: "شرح مفصل لطريقة تغليف الأثاث",
    url: "/videos/packing-tutorial.mp4",
    thumbnailUrl: "/images/packing-thumb.webp",
    uploadDate: "2025-01-15",
    duration: "PT5M30S",
    neighborhood: "Jeddah"
  }))} 
/>
```

**الفوائد:**
- ظهور في Google Video
- Rich snippets
- معلومات الموقع

#### 4. Service
```typescript
import { serviceLD, renderJSONLD } from "@/lib/jsonld";

<script 
  type="application/ld+json" 
  dangerouslySetInnerHTML={renderJSONLD(serviceLD({
    name: "Home Moving Service",
    nameAr: "خدمة نقل المنازل",
    description: "Professional home moving in Jeddah",
    descriptionAr: "نقل منازل احترافي في جدة",
    url: "/services/home-moving",
    imageUrl: "/images/home-moving.webp",
    neighborhood: "Al Hamra"
  }))} 
/>
```

#### 5. BreadcrumbList
```typescript
import { breadcrumbLD, renderJSONLD } from "@/lib/jsonld";

<script 
  type="application/ld+json" 
  dangerouslySetInnerHTML={renderJSONLD(breadcrumbLD([
    { name: "الرئيسية", url: "/" },
    { name: "الخدمات", url: "/services" },
    { name: "نقل منازل", url: "/services/home-moving" }
  ]))} 
/>
```

---

## 📝 أفضل الممارسات | Best Practices

### 1. Alt Text للصور:
```tsx
// ❌ سيء
<Image src="/images/photo.webp" alt="صورة" />

// ✅ جيد
<Image 
  src="/images/furniture-moving-hamra.webp" 
  alt="شاحنة نقل عفش مجهزة في حي الحمراء بجدة" 
/>

// ✅ ممتاز (مع JSON-LD)
<Image 
  src="/images/furniture-moving-hamra.webp" 
  alt="شاحنة نقل عفش مجهزة في حي الحمراء بجدة" 
/>
<script 
  type="application/ld+json"
  dangerouslySetInnerHTML={renderJSONLD(imageLD({
    url: "/images/furniture-moving-hamra.webp",
    caption: "Professional furniture moving truck in Al Hamra, Jeddah",
    neighborhood: "Al Hamra"
  }))}
/>
```

### 2. أسماء الملفات:
```
✅ جيد:
- furniture-packing-jeddah.webp
- moving-truck-hamra.webp
- storage-facility-rawdah.webp
- villa-moving-salama.webp

❌ سيء:
- IMG_1234.webp
- photo.webp
- pic1.webp
```

### 3. JSON-LD في الصفحات:

**الصفحة الرئيسية:**
- LocalBusiness ✅
- ImageObject (Hero) ✅

**صفحات الخدمات:**
- Service ✅
- BreadcrumbList ✅
- ImageObject (للصور الرئيسية) ✅

**صفحات الأحياء:**
- LocalBusiness مع areaServed محدد ✅
- ImageObject مع neighborhood ✅

**صفحات المدونة:**
- Article ✅
- BreadcrumbList ✅
- ImageObject (للصور المميزة) ✅

---

## 🎯 الكلمات المفتاحية | Focus Keywords

### أساسية:
- نقل عفش (Furniture Moving)
- نقل أثاث (Furniture Relocation)
- شركة نقل (Moving Company)
- جدة (Jeddah)

### خدمات:
- تغليف أثاث (Furniture Packing)
- فك وتركيب (Disassembly & Assembly)
- تخزين عفش (Furniture Storage)
- نقل فلل (Villa Moving)
- نقل مكاتب (Office Relocation)

### أحياء:
- حي الحمراء (Al Hamra)
- حي الشاطئ (Ash Shati)
- حي الروضة (Ar Rawdah)
- حي السلامة (As Salamah)
- حي النعيم (An Naim)
- حي المرجان (Al Murjan)

---

## 📊 النتائج المتوقعة | Expected Results

### Google Search:
- ✅ Rich Snippets مع معلومات الموقع
- ✅ Local Pack appearance
- ✅ Maps integration

### Google Images:
- ✅ صور مع معلومات الموقع
- ✅ محتوى محلي محدد
- ✅ أولوية أعلى في نتائج جدة

### Google Maps:
- ✅ ظهور في البحث عن "نقل عفش جدة"
- ✅ معلومات كاملة (ساعات، هاتف، عنوان)
- ✅ ربط مع الصور والفيديوهات

### AI Overviews:
- ✅ اقتباسات من المحتوى
- ✅ معلومات محلية دقيقة
- ✅ أولوية في الأسئلة المحلية

---

## 🧪 اختبار النتائج | Testing

### 1. Google Rich Results Test:
```
https://search.google.com/test/rich-results
```
اختبر أي صفحة من موقعك

### 2. Schema Markup Validator:
```
https://validator.schema.org/
```
الصق JSON-LD للتحقق من صحته

### 3. Google Search Console:
- انتقل إلى "Enhancements"
- تحقق من "Structured data"
- راقب "Rich results"

### 4. تحقق من EXIF:
```bash
# صورة واحدة
exiftool -G1 -a -s public/images/your-image.webp

# فيديو واحد
exiftool -G1 -a -s public/videos/your-video.mp4

# تقرير كامل
npm run geo:verify
```

---

## 🔄 سير العمل | Workflow

### عند إضافة صور جديدة:
```bash
1. أضف الصور إلى public/images/
2. سمّها بشكل وصفي (furniture-packing-hamra.webp)
3. شغّل: npm run geo:images
4. تحقق: npm run geo:verify
5. أضف JSON-LD في الصفحة المستخدمة
```

### عند إضافة فيديوهات:
```bash
1. أضف الفيديوهات إلى public/videos/
2. شغّل: npm run geo:videos
3. تحقق: npm run geo:verify
4. أضف JSON-LD VideoObject في الصفحة
```

### عند تحديث الموقع:
```bash
1. قم بالتعديلات
2. شغّل: npm run geo:all (إذا أضفت ملفات جديدة)
3. Build: npm run build
4. Deploy: git push
```

---

## ⚠️ ملاحظات مهمة | Important Notes

1. **ExifTool مطلوب:**
   - يجب تثبيته قبل تشغيل Scripts
   - الـ Scripts تتحقق تلقائياً من وجوده

2. **Jitter ضروري:**
   - كل ملف له إحداثيات فريدة
   - يمنع Google من اعتبارها duplicate

3. **النسخ الاحتياطي:**
   - Scripts تستخدم `-overwrite_original`
   - يُفضل عمل backup قبل أول تشغيل

4. **FFmpeg:**
   - إذا حولت فيديوهات، أعد تشغيل geo:videos
   - التحويل يحذف metadata

5. **JSON-LD:**
   - أضفه في `<head>` أو قبل `</body>`
   - لا تكرر نفس البيانات في نفس الصفحة

---

## 📚 مراجع | References

- [Schema.org - LocalBusiness](https://schema.org/LocalBusiness)
- [Schema.org - ImageObject](https://schema.org/ImageObject)
- [Schema.org - VideoObject](https://schema.org/VideoObject)
- [Google - Local Business Structured Data](https://developers.google.com/search/docs/appearance/structured-data/local-business)
- [ExifTool Documentation](https://exiftool.org/TagNames/index.html)

---

## ✅ Checklist

- [ ] تثبيت ExifTool
- [ ] تشغيل `npm run geo:images`
- [ ] تشغيل `npm run geo:videos` (إذا وُجدت فيديوهات)
- [ ] التحقق بـ `npm run geo:verify`
- [ ] إضافة JSON-LD للصفحة الرئيسية
- [ ] إضافة JSON-LD لصفحات الخدمات الرئيسية
- [ ] إضافة JSON-LD لصفحات الأحياء
- [ ] اختبار على Rich Results Test
- [ ] Deploy ومراقبة Search Console

---

**تم إنشاء هذا الدليل في:** 2025-01-05  
**آخر تحديث:** 2025-01-05  
**الإصدار:** 1.0.0

