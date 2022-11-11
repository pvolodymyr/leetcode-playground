const { getStringifyedLinkedList } = require("./utils");
const {
  binaryTree,
  linkedList,
  numbersList,
  chunkOfFiveIslands,
  validPalindromeNumber,
  invalidPalindromeNumber,
  validPalindromeLinkedList,
  invalidPalindromeLinkedList,
} = require("./test_data");

const reverseLinkedList = (testFunction) => {
  console.log(`linked list: ${getStringifyedLinkedList(linkedList)}`);
  console.log(
    `reverted linked list: ${getStringifyedLinkedList(
      testFunction(linkedList)
    )}`
  );
};

const logPalindrome = (testFunction, inputData) =>
  testFunction(inputData) ? "is a palindrome" : "is not a palindrome";

const isLinkedListPalindrome = (testFunction) => {
  console.log(
    `${getStringifyedLinkedList(inputData)} ${logPalindrome(
      testFunction,
      validPalindromeLinkedList
    )};`
  );
  console.log(
    `${getStringifyedLinkedList(inputData)} ${logPalindrome(
      testFunction,
      invalidPalindromeLinkedList
    )};`
  );
};

const calculateNumberOfIslands = (testFunction) => {
  console.log(
    `result: founded ${testFunction(chunkOfFiveIslands)} of 5 islands`
  );
};

const makePascalTriangle = (testFunction) => {
  const triangle = testFunction(7);

  console.log("should log triangle with height of 7");

  for (const slice of triangle) {
    console.log(slice.toString());
  }
};

const twoSum = (testFunction) => {
  const maxPossibleNumber =
    numbersList[numbersList.length - 1] + numbersList[numbersList.length - 2];
  const randomNumber = Math.floor(Math.random() * maxPossibleNumber);

  const [firstIndex, secondIndex] = testFunction(numbersList, randomNumber);

  console.log(
    `${randomNumber} can be obtained by adding the following items: ${numbersList[firstIndex]}, ${numbersList[secondIndex]}`
  );
};

const isNumberPalindrome = (testFunction) => {
  console.log(
    `${validPalindromeNumber} ${logPalindrome(
      testFunction,
      validPalindromeNumber
    )}`
  );
  console.log(
    `${invalidPalindromeNumber} ${logPalindrome(
      testFunction,
      invalidPalindromeNumber
    )}`
  );
};

const getBinaryTreeDeepth = (testFunction) => {
  const treeDepth = testFunction(binaryTree);

  console.log(`The depth of binary tree is ${treeDepth}`);
};

module.exports = {
  twoSum,
  reverseLinkedList,
  makePascalTriangle,
  isNumberPalindrome,
  getBinaryTreeDeepth,
  isLinkedListPalindrome,
  calculateNumberOfIslands,
};
