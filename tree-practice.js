const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST(node) {
  // Start at root node
  let currentNode = node
  // Traverse left until we reach the leftmost leaf
  while (currentNode.left !== null) {
    currentNode = currentNode.left
  }
  //Leftmost leaf is the min value of BST
  return currentNode.val
}

function findMaxBST(node) {
  // Start at root node
  let currentNode = node;
  // Traverse right until we reach the rightmost leaf
  while (currentNode.right !== null) {
    currentNode = currentNode.right
  }
  // Rightmost leaf is the max value of BST
  return currentNode.val;
}

function findMinBT(node) {
  // if there is no node, return a value that reps there's no min
  if (node === null) {
    return Infinity
  }

  const leftMin = findMinBT(node.left) //recursively finds the left minimum value
  const rightMin = findMinBT(node.right) // recursively finds the right minimum value

  // compares the minimum values and returns the smallest ones
  return Math.min(node.val, leftMin, rightMin)

}

function findMaxBT(node) {
  if (node === null) {
    return -Infinity; // Return a small value to represent "no max"
  }

  // Recursively find the maximum value in the left and right subtrees
  const leftMax = findMaxBT(node.left);
  const rightMax = findMaxBT(node.right);

  // Compare the maximum values and return the largest
  return Math.max(node.val, leftMax, rightMax);
}


function getHeight(node) {
  if (node === null) {
    return -1; // Height of an empty tree is -1
  }

  // Recursively find the height of the left and right subtrees
  const leftHeight = getHeight(node.left);
  const rightHeight = getHeight(node.right);

  // Return the maximum of the left and right heights, plus 1 for the current node
  return Math.max(leftHeight, rightHeight) + 1;
}
//   if (node === null)
//   return -1;

//   let leftMaxBst = findMaxBST(node.left)
//   let rightMaxBst = findMaxBST(node.right)
//   let leftMinBst = findMinBST(node.left)
//   let rightMinBst = findMinBST(node.right)

//   return leftMaxBst - leftMinBst;


// }

function balancedTree(node) {
  if (node === null) return true

  // Recursively find the height of the left and right subtrees
  const leftHeight = getHeight(node.left);
  const rightHeight = getHeight(node.right);


  return Math.abs(leftHeight - rightHeight) <= 1 && balancedTree(node.left) && balancedTree(node.right)

}

function countNodes(node) {
  let count = 0
  if (node === null)
    return count; // No nodes in empty tree

  // Recursively count nodes in left and right subtrees
  const leftCount = countNodes(node.left);
  const rightCount = countNodes(node.right);
  // return total count plus current node
  return leftCount + rightCount + 1;

}

function getParentNode(node, target) {
  // if (!target) return undefined
  // if (target && !node) return null

  //takes the node of getParentNode fxn and the target VALUE, then the function should return the NODE that points to the target value


  // if (node === null) return null; // if the node's value is null return null

  // // if (parent === null) return undefined



  // if ((node.left !== null) && (node.left.val === target) || (node.right !== null) && (node.right.val === target)) {
  //   return node
  // }

  // return leftParent !== null ? leftParent : rightParent
}



function inOrderPredecessor(node, target) {
  // Your code here
}

function deleteNodeBST(node, target) {
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
