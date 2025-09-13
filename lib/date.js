import { format, formatDistanceToNowStrict, addDays, isBefore } from "date-fns";

export function formatDate(date) {
  try {
    return format(date, "PPP");
  } catch {
    return "";
  }
}

export function formatRelative(date) {
  try {
    return formatDistanceToNowStrict(date, { addSuffix: true });
  } catch {
    return "";
  }
}

export function snooze(date, days) {
  return addDays(date ?? new Date(), days);
}

export function isDue(date) {
  return !!date && isBefore(date, new Date());
}

