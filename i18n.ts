import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

export const locales = ["ar", "en"] as const;
export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as Locale)) notFound();

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});







