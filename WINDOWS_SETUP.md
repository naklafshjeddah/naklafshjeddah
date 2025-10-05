# 🪟 إعداد Windows | Windows Setup Guide

دليل سريع لإعداد بيئة التطوير على Windows لمشروع naklafshjeddah.com

---

## ⚡ الإعداد السريع | Quick Setup

### 1️⃣ تثبيت ExifTool (مطلوب)

**الطريقة 1: Chocolatey (الأسهل)**

```powershell
# تثبيت Chocolatey (إذا لم يكن مثبتاً)
Set-ExecutionPolicy Bypass -Scope Process -Force
[System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072
iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))

# تثبيت ExifTool
choco install exiftool -y

# التحقق
exiftool -ver
```

**الطريقة 2: التحميل المباشر**

1. اذهب إلى: https://exiftool.org/
2. حمّل "Windows Executable"
3. استخرج `exiftool(-k).exe`
4. أعد تسميته إلى `exiftool.exe`
5. انقله إلى `C:\Windows\`

**التحقق:**
```powershell
exiftool -ver
# يجب أن يظهر: 12.70 (أو أحدث)
```

---

## 🚀 استخدام Scripts

### الأوامر المتاحة:

```powershell
# إضافة GEO metadata للصور (42 صورة)
npm run geo:images

# إضافة GEO metadata للفيديوهات
npm run geo:videos

# التحقق من البيانات
npm run geo:verify

# تنفيذ كل شيء
npm run geo:all
```

### ماذا تفعل هذه الأوامر؟

**`npm run geo:images`:**
- ✅ تقرأ جميع الصور من `public\images\`
- ✅ تضيف GPS coordinates (Jeddah + jitter)
- ✅ تضيف City/Country metadata
- ✅ تضيف keywords عربي + إنجليزي
- ✅ تكتشف الأحياء تلقائياً من اسم الملف

**`npm run geo:videos`:**
- ✅ تقرأ جميع الفيديوهات من `public\videos\`
- ✅ تضيف QuickTime GPS coordinates
- ✅ تضيف Location Name

**`npm run geo:verify`:**
- ✅ تعرض metadata لأول 5 صور
- ✅ تعرض metadata لأول 3 فيديوهات
- ✅ تعرض إحصائيات

---

## 🔧 حل المشاكل | Troubleshooting

### مشكلة: "exiftool is not recognized"

**السبب:** ExifTool غير مثبت أو غير موجود في PATH

**الحل:**
```powershell
# تحقق من التثبيت
where.exe exiftool

# إذا لم يظهر شيء، أعد التثبيت:
choco install exiftool -y
```

---

### مشكلة: "running scripts is disabled"

**السبب:** سياسة تنفيذ PowerShell

**الحل:**
```powershell
# السماح بتشغيل Scripts المحلية
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser

# أو تشغيل مباشرة:
powershell -ExecutionPolicy Bypass -File scripts/exif/tag_images.ps1
```

---

### مشكلة: "No images found"

**السبب:** الصور في مكان خاطئ

**التحقق:**
```powershell
# عرض الصور
Get-ChildItem -Path public\images -Recurse -Include *.jpg,*.webp,*.png

# يجب أن تشاهد قائمة بـ 42 صورة
```

---

## 📂 هيكل المجلدات | Folder Structure

```
naklafshjeddah/
├── public/
│   ├── images/          # ← 42 صورة هنا
│   │   ├── home movers Jeddah.jpg
│   │   ├── villa movers Jeddah.jpg
│   │   └── ...
│   └── videos/          # ← فيديوهات هنا (اختياري)
└── scripts/
    └── exif/
        ├── tag_images.ps1    # ← PowerShell (Windows)
        ├── tag_videos.ps1    # ← PowerShell (Windows)
        ├── verify_meta.ps1   # ← PowerShell (Windows)
        ├── tag_images.sh     # ← Bash (Mac/Linux)
        ├── tag_videos.sh     # ← Bash (Mac/Linux)
        └── verify_meta.sh    # ← Bash (Mac/Linux)
```

---

## ✅ خطوات التشغيل الكاملة | Complete Workflow

### الخطوة 1: تثبيت ExifTool
```powershell
choco install exiftool -y
```

### الخطوة 2: التحقق من الصور
```powershell
# التأكد من وجود الصور
Get-ChildItem -Path public\images -Recurse -Include *.jpg,*.webp,*.png | Measure-Object

# يجب أن يظهر: Count : 42
```

### الخطوة 3: إضافة GEO metadata
```powershell
npm run geo:images
```

**المتوقع:**
```
🗺️  Starting GEO metadata tagging for images...
📍 Base location: Jeddah (21.4925, 39.17757)

✅ home movers Jeddah.jpg → 21.493521, 39.178432
✅ villa movers Jeddah.jpg → 21.491xxx, 39.176xxx
...
🎉 Completed! Tagged 42 images with GEO metadata
```

### الخطوة 4: التحقق
```powershell
npm run geo:verify
```

### الخطوة 5: رفع التغييرات
```powershell
git add public/images
git commit -m "Add GEO metadata to all images"
git push origin main
```

---

## 🎯 نصائح Windows | Windows Tips

### 1. استخدام PowerShell بدلاً من CMD

```powershell
# افتح PowerShell (ليس CMD)
# Windows Key + X → Windows PowerShell
```

### 2. تشغيل مباشر بدون npm

```powershell
# إذا كانت npm scripts لا تعمل:
powershell -ExecutionPolicy Bypass -File scripts/exif/tag_images.ps1
```

### 3. عرض metadata لصورة محددة

```powershell
# عرض كل البيانات
exiftool -G1 -a -s "public\images\home movers Jeddah.jpg"

# عرض GPS فقط
exiftool -GPS:all "public\images\home movers Jeddah.jpg"
```

### 4. Git Bash (بديل)

إذا كان لديك Git Bash مثبت:
```bash
# يمكنك استخدام bash scripts مباشرة
npm run geo:images:bash
npm run geo:videos:bash
npm run geo:verify:bash
```

---

## 📊 مثال عملي | Practical Example

### قبل:
```powershell
PS> exiftool "public\images\home movers Jeddah.jpg" | Select-String GPS
# (لا يوجد نتائج)
```

### بعد `npm run geo:images`:
```powershell
PS> exiftool "public\images\home movers Jeddah.jpg" | Select-String GPS

[XMP]           GPS Latitude                    : 21.493521
[XMP]           GPS Longitude                   : 39.178432
[XMP]           GPS Altitude                    : 12
```

```powershell
PS> exiftool "public\images\home movers Jeddah.jpg" | Select-String City

[XMP-photoshop] City                            : Jeddah
[IPTC]          City                            : جدة
```

---

## 🔄 إعادة تشغيل Scripts

إذا أردت إعادة تشغيل scripts على نفس الصور:

```powershell
# Scripts تستخدم -overwrite_original
# يمكنك تشغيلها مرة أخرى بأمان
npm run geo:images

# سيتم استبدال البيانات القديمة بجديدة
```

---

## 📚 ملفات مرجعية | Reference Files

- **`EXIFTOOL_INSTALL.md`** - دليل تثبيت ExifTool مفصل
- **`GEO_SEO_GUIDE.md`** - دليل شامل لنظام GEO SEO
- **`IMAGE_OPTIMIZATION.md`** - تحسين الصور

---

## ✅ Checklist

- [ ] تثبيت ExifTool (`choco install exiftool`)
- [ ] التحقق من التثبيت (`exiftool -ver`)
- [ ] التحقق من وجود الصور (42 صورة)
- [ ] تشغيل `npm run geo:images`
- [ ] التحقق `npm run geo:verify`
- [ ] رفع التغييرات `git push`

---

## 🆘 الدعم | Support

إذا واجهت أي مشاكل:

1. تأكد من تثبيت ExifTool بشكل صحيح
2. تأكد من وجود الصور في `public\images\`
3. استخدم PowerShell (ليس CMD)
4. راجع `GEO_SEO_GUIDE.md` للتفاصيل

---

**تم التحديث:** 2025-01-05

