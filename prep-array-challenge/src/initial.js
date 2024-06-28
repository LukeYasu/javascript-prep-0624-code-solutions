/* exported initial */
const myArray = [1, 2, 3, 4, 5, 6];
function initial(array) {
  let initial = [];
  for (let index = 0; index < array.length - 1; index++) {
    initial.push(array[index]);
  }
  return initial;
}
initial(myArray);
