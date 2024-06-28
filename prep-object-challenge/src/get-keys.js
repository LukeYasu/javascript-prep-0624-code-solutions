/* exported getKeys */
function getKeys(object) {
  array = [];
  for (items in object) {
    array.push(items);
  }
  return array;
}
