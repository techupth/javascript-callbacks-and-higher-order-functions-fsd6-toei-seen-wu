//Exercise #2: At Least Five Function

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

function atLeastFive(classNumber, array, operation, ) {
  let passCount = 0;
  for (let i = 0; i < array.length; i++) {
    if (operation(array[i])) {
      passCount++;
    }
  }
  let passResult = passCount >= 5;
  if (passResult) {
    console.log(`นักเรียนห้องที่ ${classNumber} ผ่านเกณฑ์`);
  } else {
    console.log(`นักเรียนห้องที่ ${classNumber} ไม่ผ่านเกณฑ์`);
  }
  return passResult;
}

atLeastFive(1, studentScoresRoom1, function (score) {
  return score > 70;
});
atLeastFive(2, studentScoresRoom2, function (score) {
  return score > 70;
});
atLeastFive(3, studentScoresRoom3, function (score) {
  return score > 70;
});
