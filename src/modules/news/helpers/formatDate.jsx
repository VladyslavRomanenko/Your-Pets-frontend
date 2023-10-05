import { format } from "date-fns";

const formatDate = (date) => {
  if (date) {
    return format(new Date(date), "dd/MM/yy");
  }
};

export default formatDate;
