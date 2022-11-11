const printResult = require("./utils/print_result");

const makePascalTriangle = (triangleHeight) => {
  const result = [];

  if (triangleHeight < 1) return result;
  result[0] = [1];

  for (let i = 1; i < triangleHeight; i++) {
    result[i] = [1];

    for (let j = 0; j < result[i - 1].length; j++) {
      nextValue = (result[i - 1][j] ?? 1) + (result[i - 1][j + 1] ?? 0);
      result[i].push(nextValue);
    }
  }

  return result;
};

printResult.makePascalTriangle(makePascalTriangle);
