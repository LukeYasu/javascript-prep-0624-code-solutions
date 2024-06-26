function whileLoop1() {
  const array = [];
  let num = 0;
  while (array.length < 10) array.push(num++);
  return array;
}

const whileLoop1Result = whileLoop1();
console.log(whileLoop1Result);

function whileLoop2() {
  num = 0;
  const array = [0];
  while (array.length < 10) array.push((num += 2));
  return array;
}

console.log(whileLoop2());

function forLoop1() {
  const array = [];
  for (let index = 0; index < 10; array.push(index++)) {}
  return array;
}

const forLoop1Result = forLoop1();
console.log(forLoop1Result);

function forLoop2() {
  for (let index = 100; index > 0; index--) {
    console.log(`Time till explosion ${index}!`);
  }
}

const forLoop2Result = forLoop2();
console.log(forLoop2Result);

const person = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};

function forInLoop1(object) {
  const array = [];
  for (prop in object) {
    array.push(prop);
  }
  return array;
}

forInLoop1Result = forInLoop1(person);
console.log(forInLoop1Result);

function forInLoop2(object) {
  const array = [];
  for (prop in object) {
    array.push(object[prop]);
  }
  return array;
}

forInLoop2Result = forInLoop2(person);
console.log(forInLoop2Result);
