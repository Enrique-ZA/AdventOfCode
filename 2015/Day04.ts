// FIRST SOLUTION

const input = "bgvyzdsv";
const md5 = require("md5");

let i = 0;
let hash = md5(input + i);
while (hash.slice(0, 5) !== "00000") {
  i++;
  hash = md5(input + i);
}

console.log(i);

// SECOND SOLUTION

const input = "bgvyzdsv";
const md5 = require("md5");

let i = 0;
let hash = md5(input + i);
while (hash.slice(0, 6) !== "000000") {
  i++;
  hash = md5(input + i);
}

console.log(i);
