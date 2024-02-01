const colors = ["red", "blue", "green", "yellow", "orange"];
const reversed = [];
for (let i = colors.length - 1; i >= 0; i--) {
  reversed.push(colors[i]);
}
console.log(reversed);
//Method 2
const reverse = [];
for (x of colors) {
  reverse.unshift(x);
}
console.log(reverse);
