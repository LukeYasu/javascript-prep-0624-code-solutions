/* exported getValue */
function getValues(object) {
  let array = [];
  for (item in object) {
    array.push(object[item]);
  }
  return array;
}
