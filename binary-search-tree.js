// Before starting, copy and paste your guided practice work from
// `binary-search-tree.js` into this file

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {

    constructor() {
        this.root = null
    }

    // insert(val, currentNode = this.root) {
    //     const node = new TreeNode(val)

    //     if (!this.root) {
    //         this.root = node;
    //         return this; // breaking execution so that we don't get a whole nested thing of else/ifs
    //     }

    //     if (val < currentNode.val) { // * less than look to the left: look at the direction it's pointing w/ val as a trick!
    //         if (!currentNode.left) {
    //             currentNode.left = node;
    //             return this;
    //         } else {
    //             return this.insert(val, currentNode.left)
    //         }
    //     }
    //     if (val > currentNode.val) {
    //         if (!currentNode.right) {
    //             currentNode.right = node
    //             return this;
    //         } else {
    //             return this.insert(val, currentNode.right)
    //         }
    //     }
    // }
    // // search(val) { // while loop vsn
    // //   // note that it doesn't have a currentNode as a param, so it wants us to use iteration instead of recursion; but you can try it out recursively if you want; w/ iteration you'll make the node and move based on what that value is

    // //   // if the root is not there return null if it does exist




    // //   // *while loop vsn
    // //   let curr = this.root;


    // //   while (curr) {
    // //     if (curr.val === val) return true; // why inside the while loop?  // we need it inside the while loop so that after going thru the tree we can check again if it is in there, go right go left, then check again the if statement
    // //     //   if (val < curr.val) {
    // //     //     curr = curr.left
    // //     //   } else {
    // //     //     curr = curr.right
    // //     //   }


    // //     // tertiary:
    // //     curr = val < curr.val ? curr.left : curr.right
    // //   }
    // //   return false;
    // // }
    // // search(val, curr = this.root) { // recursive vsn

    // //   if (!curr) return false
    // //   if (curr.val === val) return true

    // //   if (val < curr.val) {
    // //     return this.search(val, curr.left)
    // //   } else {
    // //     return this.search(val, curr.right)
    // //   }
    // // }

    // search(val, curr = this.root) { // recursive vsn
    //     return !curr ? false : curr.val === val ? true : val < curr.val ? this.search(val, curr.left) : this.search(val, curr.right)

    //     // if you can do this ^ , really shows how much you understand the fxn

    // }




    // preOrderTraversal(currentNode = this.root) {
    //     //1. process a node
    //     //2. need to go to the left
    //     //3. need to go to the right
    //     //   pre means we're putting self first then were looking left then we're looking right: ex print the 4 and then recursively to the left printing the 2 then recursively to the left and print the one, then once those are resolved we can go up the call stack, then we can go to the right
    //     //  console.logging
    //     //  * consider leaf and root

    //     if (!currentNode) return;
    //     // DO THE THING
    //     console.log(currentNode.val)
    //     // recursively traverse to the left
    //     this.preOrderTraversal(currentNode.left)

    //     // recursively traverse to the right

    //     this.preOrderTraversal(currentNode.right)

    // }


    // inOrderTraversal(currentNode = this.root) {
    //     //  put the self in the middle: left then self then right => start at 4 recursively call go to 2 recursively call then 1, then it would do itself and print 1, 2 is resolved then it can print to 2 then it can go to the 3, and the 4 can print itself..

    //     if (!currentNode) return;

    //     this.inOrderTraversal(currentNode.left)

    //     console.log(currentNode.val)

    //     this.inOrderTraversal(currentNode.right)
    // }


    // postOrderTraversal(currentNode = this.root) {
    //     // left, right then self. were going all the way to the left then all the way t the right before we can do the entire node, so 4 is the very last one that we can process
    //     //  * consider leaf and root

    //     if (!currentNode) return;

    //     this.postOrderTraversal(currentNode.left)
    //     this.postOrderTraversal(currentNode.right)
    //     console.log(currentNode.val)
    // }

    // // Breadth First Traversal - Iterative
    // breadthFirstTraversal() { // push and shift
    //     //  using queue to traverse: queue = FIFO first in first out, using the enqueue as the push, no dequeue as the shift => going the normal direction that the trees are read
    //     //  will only be done iteratively, due to the nature of the trees; start w/ 4 and work our way down level by level**
    //     const queue = [];
    //     //start by putting the node in the queue
    //     queue.push(this.root)

    //     while (queue.length) {
    //         let node = queue.shift()
    //         console.log(node.val)

    //         if (node.left !== null) {
    //             queue.push(node.left)
    //         }
    //         if (node.right !== null) {
    //             queue.push(node.right)
    //         }
    //     }
    //     //! understand this overall skeleton structure for the rest of the week -- know how to implement and work a breadthFirstTraversal in a binary tree
    // }



    // // Depth First Traversal - Iterative
    // depthFirstTraversal() { // push and pop
    //     //  depth first all the way down all the searches we've done so far, goes all the way down and then works it's way back up

    //     // ! A depth traversal is specifically referring to the iterative version of the depthFirstTraversal, if talking about anything else they'll say it specifically

    //     let stack = [this.root]

    //     while (stack.length > 0) {
    //         let node = stack.pop()

    //         console.log(node.val)

    //         if (node.left) { // if the left node exists
    //             stack.push(node.left)
    //         }
    //         if (node.right) { // if the right node exists
    //             stack.push(node.right)
    //         }
    //     }
    // }

    bstRoot() {

    }

}

module.exports = { BinarySearchTree, TreeNode };
