// Exercise #1: For Each Function

function forEach(array, operation) {
  for (let salary of array) {
    newEmployeeSalaries.push(operation(salary));
  }
}

function riseSalaries(Salary) {
  return Salary + 5000;
}

const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
const newEmployeeSalaries = [];

forEach(employeeSalaries, riseSalaries);

console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]
