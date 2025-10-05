# 📦 تثبيت ExifTool | ExifTool Installation Guide

ExifTool مطلوب لتشغيل scripts إضافة GEO metadata للصور والفيديوهات.

---

## 🍎 macOS

### باستخدام Homebrew (الطريقة الموصى بها):

```bash
# تثبيت Homebrew إذا لم يكن مثبتاً
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# تثبيت ExifTool
brew install exiftool

# التحقق من التثبيت
exiftool -ver
```

### باستخدام MacPorts:

```bash
sudo port install p5-image-exiftool
```

---

## 🐧 Linux

### Ubuntu / Debian:

```bash
sudo apt-get update
sudo apt-get install libimage-exiftool-perl

# التحقق من التثبيت
exiftool -ver
```

### Fedora / CentOS / RHEL:

```bash
sudo yum install perl-Image-ExifTool

# أو
sudo dnf install perl-Image-ExifTool

# التحقق من التثبيت
exiftool -ver
```

### Arch Linux:

```bash
sudo pacman -S perl-image-exiftool

# التحقق من التثبيت
exiftool -ver
```

---

## 🪟 Windows

### الطريقة 1: تحميل مباشر (سهلة)

1. **تحميل ExifTool:**
   - اذهب إلى: https://exiftool.org/
   - حمّل "Windows Executable"
   - ملف مضغوط اسمه: `exiftool-12.xx.zip`

2. **فك الضغط:**
   - افتح الملف المضغوط
   - استخرج `exiftool(-k).exe`

3. **إعادة التسمية:**
   - غيّر الاسم من `exiftool(-k).exe` إلى `exiftool.exe`

4. **نقل إلى مجلد PATH:**
   
   **الخيار أ - نقل إلى Windows:**
   ```cmd
   # افتح cmd كـ Administrator
   move exiftool.exe C:\Windows\
   ```
   
   **الخيار ب - إنشاء مجلد مخصص:**
   ```cmd
   # إنشاء مجلد
   mkdir C:\ExifTool
   move exiftool.exe C:\ExifTool\
   
   # إضافة إلى PATH
   setx PATH "%PATH%;C:\ExifTool"
   ```

5. **التحقق:**
   ```cmd
   # أعد فتح cmd
   exiftool -ver
   ```

### الطريقة 2: باستخدام Chocolatey

```powershell
# تثبيت Chocolatey إذا لم يكن مثبتاً
Set-ExecutionPolicy Bypass -Scope Process -Force
[System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072
iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))

# تثبيت ExifTool
choco install exiftool

# التحقق
exiftool -ver
```

### الطريقة 3: باستخدام Scoop

```powershell
# تثبيت Scoop إذا لم يكن مثبتاً
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
irm get.scoop.sh | iex

# تثبيت ExifTool
scoop install exiftool

# التحقق
exiftool -ver
```

---

## ✅ التحقق من التثبيت

بعد التثبيت، تحقق من أن ExifTool يعمل:

```bash
# عرض الإصدار
exiftool -ver

# يجب أن تشاهد رقم مثل: 12.70

# اختبار سريع
exiftool path/to/any/image.jpg
```

---

## 🚀 استخدام Scripts

بعد تثبيت ExifTool، يمكنك تشغيل scripts المشروع:

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

## 🐚 استخدام Bash على Windows

Scripts المشروع مكتوبة بـ Bash. على Windows، لديك خيارات:

### الخيار 1: Git Bash (موصى به)

- يأتي مع Git for Windows
- تحميل من: https://git-scm.com/download/win
- يشمل Bash shell جاهز

### الخيار 2: WSL (Windows Subsystem for Linux)

```powershell
# تفعيل WSL
wsl --install

# تثبيت Ubuntu
wsl --install -d Ubuntu

# داخل WSL، ثبت ExifTool:
sudo apt-get update
sudo apt-get install libimage-exiftool-perl
```

### الخيار 3: استخدام PowerShell مباشرة

إذا كنت تفضل PowerShell، يمكنك إنشاء scripts بديلة:

```powershell
# مثال: tag_images.ps1
Get-ChildItem -Path "public\images" -Recurse -Include *.jpg,*.webp,*.png | ForEach-Object {
    $lat = 21.492500 + ((Get-Random) / [int32]::MaxValue - 0.5) * 0.0024
    $lon = 39.177570 + ((Get-Random) / [int32]::MaxValue - 0.5) * 0.0024
    
    exiftool -overwrite_original `
        -XMP-photoshop:City="Jeddah" `
        -XMP:GPSLatitude=$lat `
        -XMP:GPSLongitude=$lon `
        $_.FullName
    
    Write-Host "Tagged: $($_.Name)"
}
```

---

## ❓ مشاكل شائعة | Troubleshooting

### "command not found" / "لم يتم العثور على الأمر"

**السبب:** ExifTool غير موجود في PATH

**الحل:**
```bash
# اعرف مكان ExifTool
which exiftool    # Linux/macOS
where exiftool    # Windows

# إذا لم يظهر شيء، أعد التثبيت أو أضف إلى PATH
```

### "Permission denied" / "الإذن مرفوض"

**السبب:** الملف ليس قابلاً للتنفيذ

**الحل:**
```bash
chmod +x scripts/exif/*.sh
```

### Windows: "cannot be loaded because running scripts is disabled"

**السبب:** سياسة التنفيذ في PowerShell

**الحل:**
```powershell
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

---

## 📚 موارد إضافية

- **الموقع الرسمي:** https://exiftool.org/
- **الوثائق:** https://exiftool.org/TagNames/index.html
- **المنتدى:** https://exiftool.org/forum/
- **GitHub:** https://github.com/exiftool/exiftool

---

## ✅ Checklist

- [ ] تثبيت ExifTool
- [ ] التحقق من التثبيت (`exiftool -ver`)
- [ ] تثبيت Bash (Windows فقط)
- [ ] تشغيل `npm run geo:images`
- [ ] تشغيل `npm run geo:verify`

---

**محدّث في:** 2025-01-05

