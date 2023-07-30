export const capitalizeFirstWord = function (string) {
  const words = string.split(" ");
  const capWords = words.map((word) => {
    return word[0].toUpperCase() + word.substring(1);
  });
  const newString = capWords.join(" ");

  return newString;
};

export const formatDate = function (dateObject) {
  const dateString = dateObject.toISOString();
  const date = dateString.slice(0, 10);
  return date;
};
