const { getStringifyedLinkedList } = require("./utils");
const {
  linkedList,
  numbersList,
  chunkOfFiveIslands,
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

const isPalindrome = (testFunction) => {
  const log = (inputData) =>
    console.log(
      `${getStringifyedLinkedList(inputData)} ${
        testFunction(inputData) ? "is a palindrome" : "is not a palindrome"
      }`
    );

  log(validPalindromeLinkedList);
  log(invalidPalindromeLinkedList);
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

module.exports = {
  twoSum,
  isPalindrome,
  reverseLinkedList,
  makePascalTriangle,
  calculateNumberOfIslands,
};
