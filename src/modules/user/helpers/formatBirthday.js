import { parse, format } from "date-fns";

export const formatBirthday = (date) => {
  if (date) {
    return format(parse(date, "dd-MM-yyyy", new Date()), "yyyy-MM-dd");
  }
};

export const formatSubmitBirthday = (date) => {
  if (date) {
    return date.split("-").reverse().join("-");
  }
};
