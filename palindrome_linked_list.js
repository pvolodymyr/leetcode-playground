const printResult = require("./utils/print_result");

const { reverseLinkedList } = require("./reversed_linked_list");

const isLinkedListPalindrome = (head) => {
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

printResult.isLinkedListPalindrome(isLinkedListPalindrome);
