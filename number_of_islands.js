const printResult = require("./utils/print_result");

const setSurroundedCellsToZero = (grid, rowIndex, cellIndex) => {
  if (
    rowIndex < 0 ||
    cellIndex < 0 ||
    rowIndex >= grid.length ||
    cellIndex >= grid[rowIndex].length ||
    grid[rowIndex][cellIndex] === 0
  ) {
    return;
  }

  grid[rowIndex][cellIndex] = 0;

  setSurroundedCellsToZero(grid, rowIndex - 1, cellIndex);
  setSurroundedCellsToZero(grid, rowIndex + 1, cellIndex);
  setSurroundedCellsToZero(grid, rowIndex, cellIndex - 1);
  setSurroundedCellsToZero(grid, rowIndex, cellIndex + 1);
};

const calculateNumberOfIslands = (grid) => {
  let count = 0;

  for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
    for (let cellIndex = 0; cellIndex < grid[rowIndex].length; cellIndex++) {
      if (grid[rowIndex][cellIndex] === 1) {
        count += 1;

        setSurroundedCellsToZero(grid, rowIndex, cellIndex);
      }
    }
  }

  return count;
};

printResult.calculateNumberOfIslands(calculateNumberOfIslands);
