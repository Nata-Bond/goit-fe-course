const findLongestWord = function (string) {
  let arrayOfWords = string.split(" ");

  let total = arrayOfWords[0];
  for (let i = 1; i < arrayOfWords.length; i += 1) {
    if (arrayOfWords[i].length > total.length) {
      total = arrayOfWords[i];
    }
  }
  return total;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
