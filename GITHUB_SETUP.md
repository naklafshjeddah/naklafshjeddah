# خطوات رفع المشروع على GitHub

## الخطوة 1: إنشاء Repository على GitHub

1. اذهب إلى: **https://github.com/naklafshjeddah**
2. اضغط على زر **"+"** في الأعلى، ثم اختر **"New repository"**
3. املأ المعلومات التالية:
   - **Repository name:** `naklafshjeddah` أو `naklafshjeddah-website`
   - **Description:** "Complete Next.js furniture moving company website with Arabic/English i18n - شركة الأفضل لنقل العفش بجدة"
   - اختر **Public** (عام) أو **Private** (خاص) حسب رغبتك
   - **لا تختر** "Add a README file" (لأننا لدينا README بالفعل)
   - **لا تختر** "Add .gitignore" (لدينا .gitignore بالفعل)
   - اضغط **"Create repository"**

## الخطوة 2: رفع الملفات

بعد إنشاء الـ repository، ستظهر لك صفحة بها تعليمات. 

### إذا كان اسم الـ repository هو `naklafshjeddah`:

افتح PowerShell في مجلد المشروع وقم بتنفيذ:

```powershell
git push -u origin main
```

### إذا كان اسم الـ repository مختلفاً (مثلاً `naklafshjeddah-website`):

```powershell
git remote set-url origin https://github.com/naklafshjeddah/[اسم-الـrepository].git
git push -u origin main
```

## الخطوة 3: المصادقة

قد يطلب منك GitHub:
- **Username:** naklafshjeddah
- **Password:** استخدم **Personal Access Token** (وليس كلمة المرور)

### كيفية إنشاء Personal Access Token:

1. اذهب إلى: https://github.com/settings/tokens
2. اضغط **"Generate new token"** → **"Generate new token (classic)"**
3. املأ:
   - **Note:** "naklafshjeddah website"
   - **Expiration:** 90 days (أو حسب رغبتك)
   - **Select scopes:** اختر **"repo"** (كامل)
4. اضغط **"Generate token"**
5. **انسخ الـ token فوراً** (لن تتمكن من رؤيته مرة أخرى!)
6. استخدمه كـ password عند الـ push

## البديل: استخدام GitHub Desktop

إذا كنت تفضل واجهة مرئية:

1. حمّل **GitHub Desktop**: https://desktop.github.com/
2. سجل دخول بحسابك
3. اضغط **File** → **Add Local Repository**
4. اختر مجلد `naklafshjeddah`
5. اضغط **Publish repository**

---

## ملخص ما تم إنجازه محلياً:

✅ تم تهيئة Git repository
✅ تم إضافة جميع الملفات (97 ملف)
✅ تم عمل commit أولي
✅ تم إعداد remote للـ GitHub
✅ الملفات جاهزة للرفع

**ينقصك فقط:** إنشاء الـ repository على GitHub ثم تنفيذ `git push`

---

## المحتويات التي سيتم رفعها:

- ✅ 18 صفحة خدمات كاملة
- ✅ 6 صفحات قطاعات
- ✅ 15 مقالة مدونة
- ✅ 31 صفحة أحياء جدة
- ✅ 10 صفحات مسارات بين المدن
- ✅ جميع الصور (41 صورة)
- ✅ نظام i18n كامل (عربي/إنجليزي)
- ✅ جميع المكونات والتكوينات
- ✅ ملفات التوثيق (README, QUICKSTART, إلخ)

**إجمالي:** 16,158 سطر من الكود! 🚀

