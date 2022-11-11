const { reverseLinkedList } = require("./reversed_linked_list");
const { getStringifyedLinkedList } = require("./utils/utils");

const validPalindrome = {
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

const invalidPalindrome = {
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

const isPalindrome = (head) => {
  let pointer_a = head;
  let pointer_b = head;

  while (pointer_a !== null && pointer_a.next !== null) {
    pointer_a = pointer_a.next.next;
    pointer_b = pointer_b.next;
  }

  pointer_b = reverseLinkedList(pointer_b);
  pointer_a = head;

  while (pointer_b !== null) {
    if (pointer_b.value !== pointer_a.value) return false;
    pointer_b = pointer_b.next;
    pointer_a = pointer_a.next;
  }

  return true;
};

const log = (inputData) =>
  console.log(
    `${getStringifyedLinkedList(inputData)} ${
      isPalindrome(inputData) ? "is a palindrome" : "is not a palindrome"
    }`
  );

log(validPalindrome);
log(invalidPalindrome);
