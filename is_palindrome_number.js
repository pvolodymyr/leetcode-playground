const printResult = require("./utils/print_result");

const isNumberPalindrome = (number) => {
  if (!number) return false;

  const numberList = number.toString().split("");
  let pointer_a = 0;
  let pointer_z = numberList.length - 1;

  while (pointer_a < pointer_z) {
    if (numberList[pointer_a] !== numberList[pointer_z]) return false;

    pointer_a += 1;
    pointer_z -= 1;
  }

  return true;
};

printResult.isNumberPalindrome(isNumberPalindrome);
