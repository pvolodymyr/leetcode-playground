const chunkOfFiveIslands = [
  [0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 0, 1],
  [0, 0, 1, 0, 0, 0, 1, 0],
];

const linkedList = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: {
          value: 5,
          next: null,
        },
      },
    },
  },
};

const validPalindromeLinkedList = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 2,
        next: {
          value: 1,
          next: null,
        },
      },
    },
  },
};

const invalidPalindromeLinkedList = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 2,
        next: {
          value: 2,
          next: null,
        },
      },
    },
  },
};

const numbersList = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const validPalindromeNumber = 12321;
const invalidPalindromeNumber = 1231;

module.exports = {
  linkedList,
  numbersList,
  chunkOfFiveIslands,
  validPalindromeNumber,
  invalidPalindromeNumber,
  validPalindromeLinkedList,
  invalidPalindromeLinkedList,
};
