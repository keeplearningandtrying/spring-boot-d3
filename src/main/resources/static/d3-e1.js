	// can also call .csv files
	// d3.json("mydata.json", function (data) { 								

        var data = [
	{"name": "Maria", "age": 30},
	{"name": "Fred", "age": 50},	
	{"name": "Francis", "age": 12}
];
	
			// create canvas
			var canvas = d3.select("body").append("svg")					
							.attr("width", 500)
							.attr("height", 500);

			canvas.selectAll("rect")
					.data(data)
					.enter()
						.append("rect")
						.attr("width", function (d) { return d.age * 10; }) // age in json
						.attr("height", 48)
						.attr("y", function (d, i) { return i * 50; })
						.attr("fill", "#0000CD");

			canvas.selectAll("text")
					.data(data)
					.enter()
						.append("text")
						.attr("fill", "white")
						.attr("x", function (d, i) {return i + 5; })
						.attr("y", function (d, i) { return i * 50 + 24; })
						.text(function (d) { return d.name; });
	// })