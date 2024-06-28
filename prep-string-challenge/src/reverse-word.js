/* exported reverseWord */
function reverseWord(word) {
  let array = [];
  for (let index = word.length - 1; index >= 0; index--) {
    array.push(word[index]);
  }
  return array.join('');
}
