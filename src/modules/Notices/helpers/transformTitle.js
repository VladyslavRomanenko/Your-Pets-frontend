export const transformTitle = (title) => {
  const words = title.split(" ");

  words[0] = words[0][0].toUpperCase() + words[0].slice(1);

  const result = words.join(" ");

  return result;
};
