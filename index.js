const Stack = require('./stack.js');

const stack = new Stack();

stack.print(); // 1,2,3,4,5,6,7,8,9,10

const deq = stack.Dequeue();
console.log(deq)
stack.print();

stack.Queue(11);

stack.print();