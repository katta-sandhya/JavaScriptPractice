const examScores = [75, 82, 90, 55, 68];

function passed(score) {
  return score >= 60;
}

const allPassed = examScores.every(passed);//every()-executes a function for each array element
const allPassed1 = examScores.some(passed);//some()-
console.log(allPassed); // Output will be False
console.log(allPassed1);//output : true
const result = examScores.filter(passed);//filter()-method creates a new array filled with elements that pass a test provided by a function
console.log(result);

