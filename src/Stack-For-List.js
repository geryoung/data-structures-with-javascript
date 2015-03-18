/**
 * node: data, next, show(), 
 *
 * push node
 * pop node
 * top node
 * empty 
 * 
*/

(function  (window) {
	var Node = function (data) {
		this.data = data;
		this.next = null;
	};

	Node.prototype = {
		show : function () {
			return this.data;
		}
	};

	var Stack = function () {
		this.root = null;
	};

	Stack.prototype = {
		push : function (data) {
			var node = new Node(data);
			if ( !this.root ) {
				this.root = node;
			} else {
				node.next = this.root;
				this.root = node;
			}
		},
		pop : function () {
			if( !this.root ) {
				return null;
			} else {
				var node = this.root;
				this.root = node.next;
				return node;
			}
		},
		top : function () {
			return this.root;
		},
		empty : function () {
			if (this.root) {
				return false;
			} else {
				return true;
			}
		},
		display : function () {
			var node = this.root;
			var result = [];
			while( node ) {
				result.push(node.show());
				node = node.next;
			}
			return result;
		}
	}

	window.Stack = Stack;
} (window));





// for test
var stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

console.log(stack.display());

console.log(stack.top());
console.log(stack.display());

console.log(stack.pop());
console.log(stack.display());

console.log(stack.empty());
stack.pop();
stack.pop();
stack.pop();
stack.pop();
console.log(stack.empty());
console.log(stack.display());

