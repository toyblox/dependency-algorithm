var packages = [
	"KittenService: ",
	"Leetmeme: Cyberportal",
	"Cyberportal: Ice",
	"CamelCaser: KittenService",
	"Fraudstream: Leetmeme",
	"Ice: "
];

// packages to object array

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

var newStuff = parseArray(packages);

console.log('newStuff', newStuff);

var recursiveInstaller = function(parsedArray) {
    var installOrder = [];
    var sorted = {};

    Object.keys(parsedArray).forEach(function(key) {	// get the keys of the parsed packages, run them through loop
      sort(key, []);
      console.log('sorted[key]', sorted[key]);
    });

}