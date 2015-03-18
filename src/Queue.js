/**
 * node: data, next, show(), 
 *
 * length
 * peek() node
 * clear() node
 * push() node
 * shift()  
 * 
*/



// for test

var queue = new Queue();
queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
queue.push(5);

console.log( queue.display() ); //


console.log( queue.peek().show() ==  1);


console.log( queue.length === 5 );

queue.shift();
queue.shift();
console.log( queue.length === 3 );

queue.clear();
console.log( queue.length === 0 );


