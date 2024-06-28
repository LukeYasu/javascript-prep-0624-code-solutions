/* exported capitalize */
function capitalize(word) {
  let capLetter = '';
  let lowerLetters = '';
  for (let index = 0; index < word.length; index++) {
    if (index === 0) {
      capLetter = word[index].toUpperCase();
    } else {
      lowerLetters += word[index].toLowerCase();
    }
  }
  word = capLetter + lowerLetters;
  return word;
}
