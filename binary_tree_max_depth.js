const printResult = require("./utils/print_result");

const checkDepth = (node, currentDepth) => {
  if (node === null) {
    return currentDepth;
  }

  return Math.max(
    checkDepth(node.leftNode, currentDepth + 1),
    checkDepth(node.rightNode, currentDepth + 1)
  );
};

const getBinaryTreeDeepth = (tree) => {
  let depth = 0;
  if (tree.root === null) return depth;

  return checkDepth(tree.root, depth);
};

printResult.getBinaryTreeDeepth(getBinaryTreeDeepth);
