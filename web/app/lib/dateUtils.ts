import { parseISO, format } from "date-fns";

export const readableDate = (date: string): string | undefined => {
  if (date) {
    return format(parseISO(date), "yyyy-MM-dd");
  }
  return undefined;
};

export const slugDate = (date: string): string | undefined => {
  if (date) {
    return format(parseISO(date), "yyyy/MM");
  }
  return undefined;
};
