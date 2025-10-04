import createMiddleware from "next-intl/middleware";
import { locales } from "./i18n";

export default createMiddleware({
  locales,
  defaultLocale: "ar",
  localePrefix: "as-needed",
  localeDetection: false, // Disable automatic locale detection from browser
});

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};



