/* exported tail */
function tail(array) {
  let tail = [];
  for (let index = 1; index < array.length; index++) {
    tail.push(array[index]);
  }
  return tail;
}
