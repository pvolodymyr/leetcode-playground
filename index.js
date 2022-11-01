const target = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const twoSum = (numbers, numberToFound) => {
  if (!numbers || numbers.length === 0 || !numberToFound) return;

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
