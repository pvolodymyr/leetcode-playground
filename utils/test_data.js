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

const binaryTree = {
  root: {
    value: 10,
    leftNode: {
      value: 5,
      leftNode: {
        value: 2,
        leftNode: null,
        rightNode: {
          value: 4,
          leftNode: null,
          rightNode: null,
        },
      },
      rightNode: {
        value: 3,
        leftNode: null,
        rightNode: null,
      },
    },
    rightNode: {
      value: 7,
      leftNode: null,
      rightNode: {
        value: 6,
        leftNode: {
          value: 17,
          leftNode: {
            value: 21,
            leftNode: null,
            rightNode: null,
          },
          rightNode: null,
        },
        rightNode: {
          value: 11,
          leftNode: null,
          rightNode: null,
        },
      },
    },
  },
};

const treeSumTarget = 4;
const treeSumNumbers = [-1, 2, 1, -4, 3];

module.exports = {
  binaryTree,
  linkedList,
  numbersList,
  treeSumTarget,
  treeSumNumbers,
  chunkOfFiveIslands,
  validPalindromeNumber,
  invalidPalindromeNumber,
  validPalindromeLinkedList,
  invalidPalindromeLinkedList,
};
