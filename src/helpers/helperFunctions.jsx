export const capitalizeFirstWord = function (string) {
  const words = string.split(" ");
  const capWords = words.map((word) => {
    return word[0].toUpperCase() + word.substring(1);
  });
  const newString = capWords.join(" ");

  return newString;
};
