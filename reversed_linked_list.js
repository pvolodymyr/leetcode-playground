const printResult = require("./utils/print_result");

const reverseLinkedList = (head) => {
  let current = JSON.parse(JSON.stringify(head));
  let previous = null;
  let next;

  while (current !== null) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }

  return previous;
};

printResult.reverseLinkedList(reverseLinkedList);

module.exports = { reverseLinkedList };
