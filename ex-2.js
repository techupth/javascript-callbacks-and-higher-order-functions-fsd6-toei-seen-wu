//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  let scoreArray = [];
    for (let i = 0; i < array.length; i++){
      if ( array[i] > 70 ){
        scoreArray.push(array[i])
      }
    }
    return operation(scoreArray) 
}

function callback(sortedArray){  
    if ( sortedArray.length >= 5 ){
      return `ผ่านเกณฑ์ ✅`
    } else if ( sortedArray.length < 5 ){
      return `ไม่ผ่านเกณฑ์ ❌` 
    }
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

atLeastFive(studentScoresRoom1, callback);

let scoreRoom1Result = `นักเรียนห้องที่ 1 ${atLeastFive(studentScoresRoom1, callback)}`
let scoreRoom2Result = `นักเรียนห้องที่ 2 ${atLeastFive(studentScoresRoom2, callback)}`
let scoreRoom3Result = `นักเรียนห้องที่ 3 ${atLeastFive(studentScoresRoom3, callback)}`

console.log(scoreRoom1Result) 
console.log(scoreRoom2Result)
console.log(scoreRoom3Result)





