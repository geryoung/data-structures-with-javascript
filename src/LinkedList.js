/**
 * 
 * insert node
 * remove node
 * search/find node
 * display/traverse list
 * 
*/

(function (window) {

	var Node = function(data) {
		this.data = data;
		this.next = null;
	};

	Node.prototype = {
		show : function () {
			return this.data;
		}
	};

	var LinkedList = function () {
		this.root = null;
	};

	LinkedList.prototype = {
		insert : function (data) {
			var node = new Node(data);
			if ( !this.root ) {
				this.root = node;
			} else {
				node.next = this.root;
				this.root = node;
			}
		},

		remove : function (node) {
			var nonius = this.root;
			var parent = nonius;
			while ( nonius ) {
				if( nonius.show() === node.show() ) {
					parent.next = nonius.next;
					return nonius;
				} else {
					parent = nonius;
					nonius = nonius.next;
				}
			}
			return null;
		},
		find : function (data) {
			var nonius = this.root;
			while( nonius ) {
				if(nonius.show() == data) {
					return nonius;
				} else {
					nonius = nonius.next;
				}
			}
		},
		display : function () {
			var nonius = this.root;
			var result = [];
			while( nonius ) {
				result.push(nonius.show());
				nonius = nonius.next;
			}
			return result;
		},

	};

	window.LinkedList = LinkedList;
	window.Node = Node;
} (window));


//test 
var linkedList = new LinkedList();
linkedList.insert(1);
linkedList.insert(2);
linkedList.insert(3);
linkedList.insert(4);
linkedList.insert(5);

console.log(linkedList.find(4).show() == 4);
console.log(linkedList.display());
var node = new Node(3);
console.log(linkedList.remove(node));
console.log(linkedList.display());




