const printResult = require("./utils/print_result");

const getClosestTreeSum = (numbers, targetSum) => {
  numbers.sort((a, b) => a - b);
  let resultSum = numbers[0] + numbers[1] + numbers[numbers.length - 1];
  let addedNumbers = [numbers[0], numbers[1], numbers[numbers.length - 1]];

  loop: for (let i = 1; i < numbers.length - 2; i++) {
    let a_pointer = i + 1;
    let b_pointer = numbers.length - 1;

    if (numbers[i] === numbers[i - 1]) continue;

    while (a_pointer < b_pointer) {
      const currentSum = numbers[i] + numbers[a_pointer] + numbers[b_pointer];
      const curentAddedNumbers = [
        numbers[i],
        numbers[a_pointer],
        numbers[b_pointer],
      ];

      if (currentSum === targetSum) {
        resultSum = currentSum;
        addedNumbers = curentAddedNumbers;

        break loop;
      }

      if (currentSum > targetSum) {
        b_pointer -= 1;
      } else {
        a_pointer += 1;
      }

      if (Math.abs(currentSum - targetSum) < Math.abs(resultSum - targetSum)) {
        resultSum = currentSum;
        addedNumbers = curentAddedNumbers;
      }
    }
  }

  return { resultSum, addedNumbers };
};

printResult.getClosestTreeSum(getClosestTreeSum);
