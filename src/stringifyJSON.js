// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  
  if (typeof obj === 'string') {
  	return '"' + obj + '"'; // add delivery quotes
  }
  if (Array.isArray(obj)) {
  	var result = [];
  	for (var i = 0; i < obj.length; i++) {
  		result.push(stringifyJSON(obj[i]));
  	}
  	return '[' + result.join(',') + ']';
  }
  if (obj && typeof obj === 'object') {
  	var result = [];
//alt start  	
		for (var key in obj) {
  		if ( stringifyJSON(obj[key]) ) {
  			result.push( stringifyJSON(key) + ':' + stringifyJSON(obj[key]) );
  		}		
		}
		return '{' + result.join(',') + '}';
  }

  if (typeof obj === 'function' || typeof obj === 'undefined') {
  	return;
  }

 	return "" + obj;
};
// alternate 
// 	for (var key in obj) {
//   	if (typeof obj[key] === 'function' || typeof obj[key] === 'undefined') {
//   		continue;
//   	} 
// 		result.push( stringifyJSON(key) + ':' + stringifyJSON(obj[key]) );
//   		}		
// 		}
// 		return '{' + result.join(',') + '}';
//   }

//  	return "" + obj;
// };