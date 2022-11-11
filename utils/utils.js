const getStringifyedLinkedList = ({ value, next }) => {
  if (next === null) {
    return value + " > null";
  } else {
    return value + " > " + getStringifyedLinkedList(next);
  }
};

module.exports = { getStringifyedLinkedList };
