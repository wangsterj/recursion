// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
	var elementCollection = [];
	var docBod = document.body;
	helperFunc(docBod);

	function helperFunc(node) {
		var classList = node.classList;
		if (classList!= undefined && classList.contains(className)) {
			elementCollection.push(node);
		}
		var docChildren = node.childNodes;
		for (var i = 0; i < docChildren.length; i++) {
			helperFunc(docChildren[i]);
		}
	}
	return elementCollection;
};
