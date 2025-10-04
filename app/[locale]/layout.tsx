import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import "../globals.css";
import { locales } from "@/../../i18n";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
  variable: "--font-tajawal",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://naklafshjeddah.com"),
  title: {
    default: "شركة نقل عفش بجدة — شركة الأفضل | تغليف وفك وتركيب وتخزين 24/7",
    template: "%s | شركة الأفضل",
  },
  description:
    "شركة الأفضل لنقل العفش بجدة - خدمات نقل منازل وفلل ومكاتب مع فريق محترف وضمان شامل. تغليف آمن، فك وتركيب، تخزين. متاح 24/7",
  keywords: [
    "نقل عفش جدة",
    "شركة نقل عفش",
    "نقل منازل جدة",
    "تخزين عفش جدة",
    "شركة الأفضل",
    "نقل فلل",
    "نقل مكاتب",
  ],
  authors: [{ name: "شركة الأفضل" }],
  openGraph: {
    type: "website",
    locale: "ar_SA",
    alternateLocale: "en_SA",
    siteName: "شركة الأفضل لنقل العفش",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale as (typeof locales)[number])) {
    notFound();
  }

  const messages = await getMessages();

  const isRTL = locale === "ar";

  return (
    <html lang={locale} dir={isRTL ? "rtl" : "ltr"} className={tajawal.variable}>
      <body className="font-sans">
        <NextIntlClientProvider messages={messages}>
          <TopBar />
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <WhatsAppFloat />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

