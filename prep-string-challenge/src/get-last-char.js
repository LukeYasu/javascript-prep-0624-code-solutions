/* exported getLastChar */
function getLastChar(string) {
  for (char in string) {
    return string[string.length - 1];
  }
}
