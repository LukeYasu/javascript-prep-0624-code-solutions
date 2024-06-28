/* exported isUpperCased */
function isUpperCased(word) {
  for (letters in word) {
    letters = word.toUpperCase();
    if (letters === word) {
      return true;
    } else {
      return false;
    }
  }
}
