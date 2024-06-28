/* exported isUpperCased */
function isLowerCased(word) {
  for (letters in word) {
    letters = word.toLowerCase();
    if (letters === word) {
      return true;
    } else {
      return false;
    }
  }
}
