var packages = [
	"KittenService: ",
	"Leetmeme: Cyberportal",
	"Cyberportal: Ice",
	"CamelCaser: KittenService",
	"Fraudstream: Leetmeme",
	"Ice: "
];

// Take input and parse into object of arrays
var parseArray = function() {
	var newObject = {};
	packages.forEach(function(value) {
		var node = value.split(':');
		var package = node[0].trim(),
			dependency =  node[1].trim();
		if(!newObject[package]) newObject[package] = [];
		if(!newObject[dependency] && dependency.length > 0) newObject[dependency] = [];
		if (dependency.length > 0) {
			newObject[package].push(dependency);
		}
		
	})
	return newObject;
};

var arrayObject = parseArray(packages);

console.log('array object', arrayObject);

var recursiveInstaller = function(parsedArray) {
    var installOrder = [];	// This is returned to the user
    var sorted = {};	// Keep track of already sorted packages
    var key = Object.keys(parsedArray); // Get the keys inside parsed packages


    function sort(key, edges) {
 		// If package is already sorted, end this function
 		if (sorted[key])
        return;

    	// Package is new and has not been sorted
    	// Add this package to edges array (this is frozen within the function)
     	edges.push(key);
    	// Get the current package based on name
      	var currentPackage = parsedArray[key];

      	// Loop through the dependencies in the package
      	for (var i = 0; i < currentPackage.length; i += 1) {
		  	// If the dependency already exists in the edges array
		  	// (which is frozen based on which package is running)
		  	// this means there is a circular dependency
		  	if (edges.indexOf(currentPackage[i]) >= 0) {
		  		throw 'CIRCULAR DEPENDENCY';
		  	}
			// This loops through all the dependencies in the current package
			// There is no history of this dependency in the edges array
			// Now take this dependency and run it through the sort function on its own
			sort(currentPackage[i], edges);
      	}

		// If there is no history of this dependency in either the edges array or the sorted object,
		// and it does not have dependencies
		// then mark this package as sorted
		sorted[key] = true;

		// Add the sorted (terminal) package to the installOrder array
		installOrder.push(key);
    }

    // Loop through each package
    for (var i = 0; i < key.length; i += 1) {
    	var packageName = key[i];
    	// Run the sort function on the package
    	sort(packageName, []);
    }

    return installOrder;
 };

  var packageInstaller = recursiveInstaller(arrayObject);

  console.log('package install order', packageInstaller);