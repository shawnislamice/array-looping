const numbers2 = [1, 2, 3, 4, 5];
const numbers = [1, 2, 3, 4, 5];
console.log(numbers2.reverse());

let reverse = [];
for (let i = numbers.length - 1; i >= 0; i--) {
  reverse += numbers[i];
}
console.log(reverse.split(" "));
const numbers3 = [1, 2, 3, 4, 5, 6, 7];
const reversed = [];
for (x of numbers3) {
  reversed.unshift(x);
}
console.log(reversed);

const numberS = [1, 2, 3, 4, 5];
const numberS2 = [];
for (let i = numberS.length-1; i >= 0; i--) {
  numberS2.push(numberS[i]);
}
console.log(numberS2);
const numberS3 = [1, 2, 3, 4, 5];
const numberS4 = [];
for (let i = numberS3.length-1; i >= 0; i--) {
  numberS4.unshift(numberS3[i]);
}
console.log(numberS4);
