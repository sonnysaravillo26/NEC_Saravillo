
// Javascript program to find next right of a given key
// A binary tree node
class Node {
    constructor(item) {
        this.data = item;
        this.left = null;
        this.right = null;
    }
}

let root;

// Method to find next right of given key k,
// it returns NULL if k is not present in
// tree or k is the rightmost node of its level 

function nextRight(first, k) {

    // Base Case
    if (first == null)
        return null;

    // Create an empty queue for level
    // order traversal. A queue to
    // store node addresses
    let qn = [];

    // Another queue to store node levels
    let ql = [];

    // Initialize level as 0
    let level = 0;

    // Enqueue Root and its level
    qn.push(first);
    ql.push(level);

    // A standard BFS loop
    while (qn.length > 0) {

        // dequeue an node from qn and its level from ql
        let node = qn[0];
        level = ql[0];
        qn.shift();
        ql.shift();

        // If the dequeued node has the given key k
        if (node.data == k) {

            // If there are no more items in queue
            // or given node is the rightmost node
            // of its level, then return NULL
            if (ql.length == 0 || ql[0] != level)
                return null;

            // Otherwise return next node
            // from queue of nodes
            return qn[0];
        }

        // Standard BFS steps: enqueue
        // children of this node
        if (node.left != null) {
            qn.push(node.left);
            ql.push(level + 1);
        }
        if (node.right != null) {
            qn.push(node.right);
            ql.push(level + 1);
        }
    }

    // We reach here if given key
    // x doesn't exist in tree
    return null;
}

// A utility function to test above functions
function test(node, k) {
    let nr = nextRight(root, k);
    if (nr != null) {
        console.log("Node " + k + " - Right Node is " + nr.data);
        // console.log(JSON.stringify(nr));
    }
    else {
        console.log("Node " + k + " - No right node"); 
        // console.log(nr);
    }
}

// Driver code
root = new Node('A')
root.left = new Node('Z')
root.right = new Node('Y')
root.right.right = new Node('X')
root.left.left = new Node('C')
root.left.right = new Node('B')
root.right.right = new Node('W')

test(root, 'A')
test(root, 'Z')
test(root, 'Y')
test(root, 'X')
test(root, 'C')
test(root, 'B')
test(root, 'W')
