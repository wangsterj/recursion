// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
 	if (typeof(obj) === "number" || typeof(obj) === "boolean") {
		return obj.toString();
	} else if (obj === null) {
		return "" + obj;
	} else if (typeof(obj) === "string") {
		return "\""+ obj + "\"";
 	} else if (Array.isArray(obj)) {
 		var stringified = "[";
 		for (var i =0; i<obj.length; i++) {
 			if (i !=obj.length -1)
 				stringified += stringifyJSON(obj[i]) + ',';
 			else
 				stringified += stringifyJSON(obj[i]);
 		}
		return stringified + "]";
	} else {
		var objkeys = Object.keys(obj);
		if (objkeys.length == 0) {
			return "{}";
		}
		var stringified = "{";
		for (var i = 0; i < objkeys.length; i++) {
			if ( obj[objkeys[i]] !== undefined && typeof obj[objkeys[i]] != "function")
				if ( i != objkeys.length - 1)
					stringified += "\"" + objkeys[i] + "\":" + stringifyJSON(obj[objkeys[i]]) + ',';
				else
					stringified += "\"" + objkeys[i] + "\":" + stringifyJSON(obj[objkeys[i]]);
		}
		return stringified +"}";
	}
};
