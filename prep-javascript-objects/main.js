const person = {
  firstName: 'Nas',
  lastName: 'Reid',
  hobby: 'basketball',
};
console.log(person);

const fullName = person.firstName + ' ' + person.lastName;
console.log("The person's full name is: ", fullName);

person.job = 'Basketball Player';
console.log("The person's current job is: ", person.job);

person['previousJob'] = 'Ballerina';
console.log("The person's previous job is:", person['previousJob']);

console.log('the complete person object:', person);
