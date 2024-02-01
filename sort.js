const persons = ["AKib", "Rakib", "Nokib", "Sakib"];
const persons2 = ["AKib", "akib", "Nokib", "sakib"];
const sortPerson = persons.sort();
const sortPerson2 = persons2.sort();
console.log(sortPerson);
console.log(sortPerson2);
const numbers = [5, 8, 7, 3, 6, 9, 1, 4, 5, 2, 36];

const sortedNumbers = [...numbers].sort(function (a, b) {
  return a - b;
});
const sortedNumbers2 = [...numbers].sort(function (a, b) {
  return b - a;
});
console.log(sortedNumbers);
console.log(sortedNumbers2);
