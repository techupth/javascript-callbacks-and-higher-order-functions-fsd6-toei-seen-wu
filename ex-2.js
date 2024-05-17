//Exercise #2: At Least Five Function

function atLeastFive(roomNum, array, operation) {
  if (operation(array) >= 5) {
    return `นักเรียนห้องที่ ${roomNum} ผ่านเกณฑ์✅`;
  } else {
    return `นักเรียนห้องที่ ${roomNum} ไม่ผ่านเกณฑ์❌`;
  }
}

function compareScore(studentScore) {
  let passed = 0;
  for (let score of studentScore) {
    if (score > 70) {
      passed++;
    }
  }
  return passed;
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here

let scoreRoom1Result = atLeastFive(1, studentScoresRoom1, compareScore);
let scoreRoom2Result = atLeastFive(2, studentScoresRoom2, compareScore);
let scoreRoom3Result = atLeastFive(3, studentScoresRoom3, compareScore);

console.log(scoreRoom1Result);
console.log(scoreRoom2Result);
console.log(scoreRoom3Result);
