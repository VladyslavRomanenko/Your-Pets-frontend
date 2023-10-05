export const transformOption = (option) => {
  switch (option) {
    case "up to 1 year":
      return "1";
    case "up to 2 years":
      return "2";
    case "from 2 years":
      return ">2";
    default:
      return option;
  }
};
