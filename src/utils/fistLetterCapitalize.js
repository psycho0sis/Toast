export const fistLetterCapitalize = (str) => {
  return str.split("")
    .map((letter, index, arr) => {
      if (index === 0) {
        return arr[index].toUpperCase();
      }
      return letter;
    })
    .join("");
}
