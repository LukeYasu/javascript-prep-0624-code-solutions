/* exported reverse */
function reverse(array) {
  let reverse = [];
  for (let index = array.length - 1; index >= 0; index--) {
    reverse.push(array[index]);
  }
  return reverse;
}
