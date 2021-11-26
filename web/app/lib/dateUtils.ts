import { parseISO, format } from "date-fns";

export const readableDate = (date: string): string | undefined => {
  if (parseISO(date)) {
    return format(parseISO(date), "yyyy-MM-dd");
  }
  return undefined;
};
