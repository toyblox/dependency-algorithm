var packages = [
	"Dumbledore: harryPotter",
	"harryPotter: ronWeasley",
	"Hermione: ",
	"Snape: Dumbledore",
	"siriusBlack: Hermione"
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
			console.log(package);
			console.log(dependency);
		if (dependency.length > 0) {
			newObject[package].push(dependency);
		}
		
	})
	console.log(newObject);
	return newObject;
};

var newStuff = parseArray(packages);