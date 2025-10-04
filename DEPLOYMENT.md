# 🚀 دليل نشر الموقع (Deployment Guide)

## نشر على Vercel (الطريقة الأسهل والمجانية)

### الخطوات:

1. **انتقل إلى** [vercel.com](https://vercel.com)
2. **قم بتسجيل الدخول** باستخدام حساب GitHub الخاص بك
3. **اضغط على** "Add New..." ثم "Project"
4. **اختر المستودع:** `naklafshjeddah/naklafshjeddah`
5. **اضغط على** "Import"
6. **Vercel سيكتشف تلقائيًا** أنه مشروع Next.js
7. **اضغط على** "Deploy"

⏱️ **سيستغرق النشر من 2-5 دقائق**

بعد النشر، ستحصل على رابط مثل:
```
https://naklafshjeddah.vercel.app
```

---

## 🌐 ربط النطاق المخصص (naklafshjeddah.com)

بعد النشر الأول على Vercel:

1. **اذهب إلى** Settings > Domains في لوحة تحكم Vercel
2. **أضف نطاقك:** `naklafshjeddah.com`
3. **اتبع التعليمات** لتحديث DNS عند مزود النطاق الخاص بك
4. **أضف أيضًا:** `www.naklafshjeddah.com`

### سجلات DNS المطلوبة:

```
نوع السجل: A
الاسم: @
القيمة: 76.76.21.21

نوع السجل: CNAME
الاسم: www
القيمة: cname.vercel-dns.com
```

⏱️ **قد يستغرق انتشار DNS من 1-48 ساعة**

---

## 🔧 تحديث الموقع بعد النشر

عندما تريد تحديث الموقع:

1. قم بإجراء التعديلات على ملفاتك المحلية
2. ارفع التغييرات إلى GitHub:
   ```bash
   git add .
   git commit -m "وصف التحديث"
   git push origin main
   ```
3. **Vercel سيقوم تلقائيًا** بإعادة نشر الموقع خلال دقائق!

---

## 📊 مراقبة الأداء

بعد النشر، يمكنك:
- ✅ مراقبة عدد الزوار من لوحة تحكم Vercel
- ✅ عرض Core Web Vitals
- ✅ تتبع الأخطاء (إن وجدت)
- ✅ إعداد Google Analytics (إضافي)

---

## ⚡ نصائح السيو بعد النشر

1. **أرسل Sitemap إلى Google:**
   - افتح [Google Search Console](https://search.google.com/search-console)
   - أضف موقعك
   - أرسل Sitemap: `https://naklafshjeddah.com/sitemap.xml`

2. **تحقق من البيانات المنظمة:**
   - استخدم [Rich Results Test](https://search.google.com/test/rich-results)
   - اختبر بعض صفحاتك

3. **اختبار الأداء:**
   - استخدم [PageSpeed Insights](https://pagespeed.web.dev/)
   - تأكد من الحصول على درجات عالية

---

## 🆘 الدعم الفني

إذا واجهت أي مشاكل:
- 📧 دعم Vercel: [vercel.com/support](https://vercel.com/support)
- 📖 وثائق Next.js: [nextjs.org/docs](https://nextjs.org/docs)
- 📖 وثائق next-intl: [next-intl-docs.vercel.app](https://next-intl-docs.vercel.app/)

---

## ✅ قائمة التحقق بعد النشر

- [ ] الموقع يعمل على Vercel
- [ ] النطاق المخصص مربوط (إن أردت)
- [ ] تم إرسال Sitemap إلى Google
- [ ] تم اختبار جميع الصفحات
- [ ] تم اختبار تبديل اللغة
- [ ] تم اختبار النماذج (Contact Form)
- [ ] زر WhatsApp يعمل
- [ ] جميع الصور تظهر بشكل صحيح

---

🎉 **مبروك! موقعك جاهز للانطلاق!**

