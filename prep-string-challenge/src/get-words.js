/* exported getWords */
function getWords(string) {
  const splitString = string.split(' ');
  let array = [];
  if (splitString[0] === '') {
    return (array = []);
  }
  for (let index = 0; index < splitString.length; index++) {
    array.push(splitString[index]);
  }
  return array;
}
