/*
 * 定义节点
 * 树的生成
 * 节点的插入
 * 节点的删除
 * 节点的查找 － 遍历
*/

(function() {

	var Node = function (data, left, right) {
		var show = function () {
			return this.data;
		};

		this.data = data;
		this.left = left;
		this.right = right;
		this.show = show;

	};

	var BST = function (root) {
		var insert = function (node) {

		};

		this.root = root;
		this.insert = insert;
	}

	this.Node = Node;
	this.BST = BST;
} ());


