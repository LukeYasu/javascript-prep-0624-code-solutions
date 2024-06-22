function isAdult(age) {
  if (age > 18) {
    return true;
  }
  if (age < 18) {
    return false;
  }
}

const isAdultResult = isAdult(21);

console.log(isAdultResult);

function didStudentPass(grade) {
  if (grade > 70) {
    return true;
  } else {
    return false;
  }
}

didStudentPassResult = didStudentPass(60);
console.log(didStudentPassResult);

function gradeCalculator(score) {
  if (score <= 59) {
    return 'F';
  } else if (score <= 69) {
    return 'D';
  } else if (score <= 79) {
    return 'C';
  } else if (score <= 89) {
    return 'B';
  } else if (score <= 100) {
    return 'A';
  } else if (score > 100) {
    return 'A++';
  }
}

gradeCalculatorResult = gradeCalculator(90);
console.log(gradeCalculatorResult);

function seasonMessenger(season) {
  if (season === 'summer') {
    return 'it is hot today';
  } else if (season === 'spring') {
    return 'the flowers are blooming';
  } else if (season === 'autumn') {
    return 'the leaves are changing color';
  } else if (season === 'winter') {
    return 'it is cold today';
  } else {
    return 'please enter a valid season';
  }
}

seasonMessengerResult = seasonMessenger('winter');
console.log(seasonMessengerResult);

function dayDetector(dayOfTheWeek) {
  if (dayOfTheWeek === 'saturday' || dayOfTheWeek === 'sunday') {
    return 'have a good weekend';
  } else {
    return 'it is a weekday';
  }
}

dayDetectorResult = dayDetector('saturday');
console.log(dayDetectorResult);
