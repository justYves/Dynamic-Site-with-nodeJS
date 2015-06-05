var fs = require("fs");

function mergeValues(values,content){
		//Cycle over the keys
		for (var key in values){
		//Replace all {{keys}} with the value from the values object
		content = content.replace("{{" + key + "}}", values[key]);
	}
		//return merged content
		
		return content;
		
	}

	function view(templateName, values, response){
	//Read from the template file
	var fileContents = fs.readFileSync("./views/" + templateName + ".html",{encoding: "utf8"});
	fileContents = mergeValues(values, fileContents);
	//Insert values into the content
	//Wirte out the contents to the response
	response.write(fileContents);
}

module.exports.view = view;