import { format, parseISO } from "date-fns";

export function formatISOToDate(isoDate: string) {
  return format(parseISO(isoDate), "yyyy-MM-dd");
}
