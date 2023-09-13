const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST(rootNode) {
  // Start at root node
  let currentNode = rootNode
  // Traverse left until we reach the leftmost leaf
  while (currentNode.left !== null) {
    currentNode = currentNode.left
  }
  //Leftmost leaf is the min value of BST
  return currentNode.val
}

function findMaxBST(rootNode) {
  // Start at root node
  let currentNode = rootNode;
  // Traverse right until we reach the rightmost leaf
  while (currentNode.right !== null) {
    currentNode = currentNode.right
  }
  // Rightmost leaf is the max value of BST
  return currentNode.val;
}

function findMinBT(rootNode) {
  // if there is no rootNode, return a value that reps there's no min
  if (rootNode === null) {
    return Infinity
  }

  const leftMin = findMinBT(rootNode.left) //recursively finds the left minimum value
  const rightMin = findMinBT(rootNode.right) // recursively finds the right minimum value

  // compares the minimum values and returns the smallest ones
  return Math.min(rootNode.val, leftMin, rightMin)

}

function findMaxBT(rootNode) {
  if (rootNode === null) {
    return -Infinity; // Return a small value to represent "no max"
  }

  // Recursively find the maximum value in the left and right subtrees
  const leftMax = findMaxBT(rootNode.left);
  const rightMax = findMaxBT(rootNode.right);

  // Compare the maximum values and return the largest
  return Math.max(rootNode.val, leftMax, rightMax);
}


function getHeight(rootNode) {
  if (rootNode === null) {
    return -1; // Height of an empty tree is -1
  }

  // Recursively find the height of the left and right subtrees
  const leftHeight = getHeight(rootNode.left);
  const rightHeight = getHeight(rootNode.right);

  // Return the maximum of the left and right heights, plus 1 for the current node
  return Math.max(leftHeight, rightHeight) + 1;
}
//   if (rootNode === null)
//   return -1;

//   let leftMaxBst = findMaxBST(rootNode.left)
//   let rightMaxBst = findMaxBST(rootNode.right)
//   let leftMinBst = findMinBST(rootNode.left)
//   let rightMinBst = findMinBST(rootNode.right)

//   return leftMaxBst - leftMinBst;


// }

function balancedTree(rootNode) {
  if (rootNode === null) return true

  // Recursively find the height of the left and right subtrees
  const leftHeight = getHeight(rootNode.left);
  const rightHeight = getHeight(rootNode.right);


  return Math.abs(leftHeight - rightHeight) <= 1 && balancedTree(rootNode.left) && balancedTree(rootNode.right)

}

function countNodes(rootNode) {
  // Your code here
}

function getParentNode(rootNode, target) {
  // Your code here
}

function inOrderPredecessor(rootNode, target) {
  // Your code here
}

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent

  // Undefined if the target cannot be found

  // Set target based on parent

  // Case 0: Zero children and no parent:
  //   return null

  // Case 1: Zero children:
  //   Set the parent that points to it to null

  // Case 2: Two children:
  //  Set the value to its in-order predecessor, then delete the predecessor
  //  Replace target node with the left most child on its right side,
  //  or the right most child on its left side.
  //  Then delete the child that it was replaced with.

  // Case 3: One child:
  //   Make the parent point to the child

}

module.exports = {
  findMinBST,
  findMaxBST,
  findMinBT,
  findMaxBT,
  getHeight,
  countNodes,
  balancedTree,
  getParentNode,
  inOrderPredecessor,
  deleteNodeBST
}
