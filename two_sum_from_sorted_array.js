const printResult = require("./utils/print_result");

const twoSum = (numbers, numberToFound) => {
  if (!numbers || numbers.length === 0 || !numberToFound) return null;

  let pointer_a = 0;
  let pointer_b = numbers.length - 1;

  while (pointer_a <= pointer_b) {
    const sum = numbers[pointer_a] + numbers[pointer_b];

    if (sum < numberToFound) {
      pointer_a += 1;
    } else if (sum > numberToFound) {
      pointer_b -= 1;
    } else if (sum === numberToFound) {
      return [pointer_a, pointer_b];
    }
  }
};

printResult.twoSum(twoSum);
