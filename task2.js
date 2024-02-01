const numbers = [12, 98, 5, 41, 23, 78, 46];
const evenNumbers = [];
for (x of numbers) {
  if (x % 2 === 0) {
    evenNumbers.push(x);
  }
}
console.log(evenNumbers);
