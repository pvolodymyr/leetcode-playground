const getStringifyedLinkedList = ({ value, next }) => {
  if (next === null) {
    return value + " > null";
  } else {
    return value + " > " + getStringifyedLinkedList(next);
  }
};

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

const reverseLinkedList = (head) => {
  let current = head;
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

console.log(`linked list: ${getStringifyedLinkedList(linkedList)}`);
console.log(
  `reverted linked list: ${getStringifyedLinkedList(
    reverseLinkedList(linkedList)
  )}`
);
