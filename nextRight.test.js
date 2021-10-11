const nextRight = require('./nextRight');

class Node {
    constructor(item) {
        this.data = item;
        this.left = null;
        this.right = null;
    }
}

let root;

test('nextRight function exists', () => {
    expect(nextRight).toBeDefined();
})

test('nextRigh value [[null, A]] equal to null', () => { 
    root = new Node('A')
    expect(nextRight(root, 'A')).toBeNull();
})

test('nextRigh value [[A, Z]] NOT to null', () => { 
    root.left = new Node('Z')
    expect(nextRight(root, 'Z')).toBeDefined();
})
 
// test('nextRigh value [[A, Y]] equal to null', () => { 
//     root.right = new Node('Y')
//     expect(nextRight(root, 'A')).toBeNull();
// })
