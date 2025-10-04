import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPhoneNumber(phone: string): string {
  return phone.replace(/^\+966/, "0");
}

export function generateWhatsAppMessage(
  service?: string,
  area?: string,
  route?: string
): string {
  let message = "السلام عليكم، أرغب في الاستفسار عن خدمات نقل العفش";

  if (service) {
    message += ` - ${service}`;
  }

  if (area) {
    message += ` في ${area}`;
  }

  if (route) {
    message += ` - ${route}`;
  }

  return encodeURIComponent(message);
}

export function getWhatsAppLink(service?: string, area?: string, route?: string): string {
  const baseUrl = "https://wa.me/966560586397";
  const message = generateWhatsAppMessage(service, area, route);
  return `${baseUrl}?text=${message}`;
}







