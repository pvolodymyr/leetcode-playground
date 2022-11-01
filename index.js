const target = {
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
