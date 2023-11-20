let color = 'red';
const colors = ['red','green','blue'];
colors.push("black");
console.log(colors);
const redColor = colors.shift();
colors.shift();
console.log(colors);
console.log(redColor);
console.log(colors);
colors.unshift('black');
colors.unshift('white');
console.log(colors.includes('black'));
let blueColor = colors.pop();
console.log(blueColor);
console.log(colors);

colors[1] = 'black';
console.log(colors[1]);

console.log(colors.length);