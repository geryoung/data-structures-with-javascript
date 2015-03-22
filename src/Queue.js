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
(function (window) {

	var Node = function (data) {
		this.data = data;
		this.next = null;
		this.pre = null;
	};

	Node.prototype = {
		show : function () {
			return this.data;
		}
	};

	var Queue = function () {
		this.head = null;
		this.end = null;
		this.length = 0;
	};

	Queue.prototype = {
		push : function ( data ) {
			var node = new Node(data);
			if (this.length === 0) {
				this.head = node;
				this.end = node;
			} else {
				var lastSecond = this.end;
				lastSecond.next = node;
				node.pre = lastSecond;
				this.end = node;
			}
			this.length ++;
		},
		peek : function () {
			return this.head;
		},
		clear : function () {
			var node = this.head;
			while(node !== null) {
				var nextNode = node.next;
				node.pre = null;
				node.next = null;
				node = nextNode;
				this.length --;
			}
			this.head = null;
			this.end = null;
		},
		shift : function () {
			var tobeRemoved = this.head;
			if (tobeRemoved) {
				
				var first = tobeRemoved.next;
				first.pre = null;
				this.head = first;
				this.length -- ;	
			};
			
			return tobeRemoved;
		},
		size : function() {
			var node = this.end;
			var _size = 0;
			while(node) {
				_size++;
				node = node.pre;
			}
			return _size;
		},
		display : function () {
			var result = [];
			var node = this.end.pre;
			// while()
		}

	};

	window.Queue = Queue;

} (window));


// for test

var queue = new Queue();
queue.push(1);
queue.push(2);
queue.push(3);
console.log( queue.size());
queue.push(4);
queue.push(5);

console.log( queue.display() ); //


console.log( queue.peek().show() ==  1);


console.log( queue.length === 5 );

queue.shift();
queue.shift();
console.log( queue.length === 3 );
console.log( queue.size() === 3 );

queue.clear();
console.log( queue.length );
console.log( queue.length === 0 );


console.log( queue.size() === 0 );


