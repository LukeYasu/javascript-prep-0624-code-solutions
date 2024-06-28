/* exported isVowel */
function isVowel(char) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const lowerChar = char.toLowerCase();
  if (vowels.includes(lowerChar)) {
    return true;
  } else {
    return false;
  }
}
