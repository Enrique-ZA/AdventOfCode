// FIRST SOLUTION

// "SYNC" VERSION
import fs from "fs";

const obj = fs.readFileSync("src/input.txt", "utf-8");

// split into an array of strings
const arr: string[] = obj.split("\n");
// split each string into an array of characters
const arr2: string[][] = arr.map((x) => x.split(""));

let sum: number = 0;

for (let i = 0; i < arr2[5].length; i++) {
  if (arr2[5][i] === "(") {
    sum++;
  } else {
    sum--;
  }
}

console.log(sum);

// "ASYNC" VERSION
import fs from "fs";

const readStream = fs.createReadStream("src/input.txt", "utf-8");

let sum: number = 0;

readStream.on("data", (chunk) => {
  for (let char of chunk.toString()) {
    if (char === "(") {
      sum++;
    } else if (char === ")") {
      sum--;
    }
  }
});

readStream.on("close", () => {
  console.log(sum);
});

// SECOND SOLUTION
import fs2 from "fs";

const readStream2 = fs2.createReadStream("src/input.txt", "utf-8");

let sum2: number = 0;
let counter: number = 0;

readStream2.on("data", (chunk) => {
  for (let char of chunk.toString()) {
    counter++;
    if (char === "(") {
      sum2++;
    } else if (char === ")") {
      sum2--;
    }
    if (sum2 === -1) {
      readStream2.destroy();
      break;
    }
  }
});

readStream2.on("close", () => {
  console.log(counter);
});
