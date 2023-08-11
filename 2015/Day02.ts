// FIRST SOLUTION
import fs from "fs";

const readStream = fs.createReadStream("src/input.txt", "utf-8");

let sum: number = 0;

readStream.on("data", (chunk) => {
  let num: string = "";
  let nums: number[] = [];
  for (let char of chunk.toString()) {
    if (char !== "\n" && char !== "x") {
      num += char;
    } else {
      nums.push(parseInt(num));
      num = "";
      if (nums.length === 3) {
        let l = nums[0] * nums[1];
        let w = nums[1] * nums[2];
        let h = nums[2] * nums[0];
        let smallestSideArea = Math.min(l, w, h);
        sum += 2 * l + 2 * w + 2 * h + smallestSideArea;
        nums = [];
      }
    }
  }
});

readStream.on("end", () => {
  console.log(sum);
});

// SECOND SOLUTION
import fs2 from "fs";

const readStream2 = fs2.createReadStream("src/input.txt", "utf-8");

let sum2: number = 0;

readStream2.on("data", (chunk) => {
  let num: string = "";
  let nums: number[] = [];
  for (let char of chunk.toString()) {
    if (char !== "\n" && char !== "x") {
      num += char;
    } else {
      nums.push(parseInt(num));
      num = "";
      if (nums.length === 3) {
        nums.sort((a, b) => a - b);
        let wrap: number = 2 * nums[0] + 2 * nums[1];
        let bow: number = nums[0] * nums[1] * nums[2];
        sum2 += wrap + bow;
        nums = [];
      }
    }
  }
});

readStream2.on("end", () => {
  console.log(sum2);
});
