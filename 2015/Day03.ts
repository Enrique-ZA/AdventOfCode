// FIRST SOLUTION
import fs from "fs";

const readStream = fs.createReadStream("./input.txt", "utf-8");

let sum = 0;

const houses = new Map<string, number>();

readStream.on("data", (chunk: string) => {
  let x: number = 0;
  let y: number = 0;
  const key = `${x},${y}`;
  houses.set(key, 1);

  for (let char of chunk) {
    switch (char) {
      case "^":
        y++;
        break;
      case ">":
        x++;
        break;
      case "v":
        y--;
        break;
      case "<":
        x--;
        break;
    }
    const key = `${x},${y}`;
    if (houses.get(key) !== 1) {
      houses.set(key, 1);
    }
  }

  sum = Array.from(houses.values()).reduce((acc, curr) => {
    if (curr === 1) {
      return acc + curr;
    }
    return acc;
  }, 0);
});

readStream.on("end", () => {
  console.log(sum);
});

// SECOND SOLUTION
import fs from "fs";

const readStream = fs.createReadStream("./input.txt", "utf-8");

let sum = 0;

const houses = new Map<string, number>();

readStream.on("data", (chunk: string) => {
  let santaX: number = 0;
  let santaY: number = 0;
  let robotX: number = 0;
  let robotY: number = 0;
  const key = `${santaX},${santaY}`;
  houses.set(key, 1);

  let turn = 1;
  for (let char of chunk) {
    if (turn === 1) {
      switch (char) {
        case "^":
          santaY++;
          break;
        case ">":
          santaX++;
          break;
        case "v":
          santaY--;
          break;
        case "<":
          santaX--;
          break;
      }
      const santaKey = `${santaX},${santaY}`;
      if (houses.get(santaKey) !== 1) {
        houses.set(santaKey, 1);
      }
      turn = 0;
    } else {
      switch (char) {
        case "^":
          robotY++;
          break;
        case ">":
          robotX++;
          break;
        case "v":
          robotY--;
          break;
        case "<":
          robotX--;
          break;
      }
      const robotKey = `${robotX},${robotY}`;
      if (houses.get(robotKey) !== 1) {
        houses.set(robotKey, 1);
      }
      turn++;
    }
  }

  sum = Array.from(houses.values()).reduce((acc, curr) => {
    if (curr === 1) {
      return acc + curr;
    }
    return acc;
  }, 0);
});

readStream.on("end", () => {
  console.log(sum);
});
