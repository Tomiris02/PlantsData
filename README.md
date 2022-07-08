# Description:
Agrilution builds vertical farming devices with which a customer can grow plants. This coding challenge is centered around building a user interface for users to get information on specific plants and modify the led intensity.
Therefore, our product includes a special LED allowing to adjust the color spectrum of the light individually. 
The various color types have certain effects on the plants, however each plant requires a different mix of color spectrum, and expects a certain min and max range on the spectrum intensity. 
The colors are:

- blue:	Ensures healthy roots, strong stems, and healthy - bigger- leafs.
- white: Minor impact on plant growth or health. Effects production of essential oil and thus taste of the greens(plants).
- red: Essential for flowering or very weak stage in plants.
- far-red: Impacts the height grow of the plant. Plant is potentially getting bigger with weaker stems when far-red value is higher.

# API Endpoint 

For this task, you will work with the following api endpoint:

Unsecured:
http://dev.api.agrilution.com/plantData.json

Secured:
https://dev.api.agrilution.com/plantData.json

The endpoint returns an object with different fields. An example and explanation of these fields is shown below:

Example:
```json
"some_id": {
	"title": "Kale",
	"description": "abc",
	"images": ["url"],
	"light_settings": {
		"blue": [33, 74],
		"farred": [13, 94],
		"red": [3, 78],
		"white": [2, 79]
	},
	"price": "9.95",
	"tags": ["harvestweeks:3-4", "line:essentials"]
}
```

Explanation:
```
some_id = an unique id for each plant
title = the english title of the plant
description = a description for the plant
images = urls pointing to one or more images of the plant
light_settings = the range of light settings allowed in %. In this example, the plant can handle any blue light intensity between 33 and 74% 
price = the price for the plant in euros
tags = a list of tags which describe the plants
```

# Your Task
- Retrieve the data from this endpoint dynamically (as a fallback: load the json file within this repository)
- Build a UI that fulfills the following:
	- List all available plants
	- Select a specific plant
	- Has a seperated page for the above selected plant that:
		- Showcases its features
		- Guides the user through the effects of the different colors
		- Lets the user select a light intensity for each color that lies within the intensity range specified for this plant (e.g. "blue": [30, 100] means that the minimum intensity is 30% and the maximum intensity is 100%)
		- Ensures that the overall light value (all colours added up) does not exceed 300%

# Requirements:
- Create a web page using HTML, CSS and your favorite JavaScript framework (you can overwrite the index.html accordingly)
- Provide a documentation on how to run your webpage
- Commit all your results to the git repository


# Bonus Tasks
No need to do them if you already spend too much time on the upper tasks. 

- Use different urls for each plant
- Implement a tag search: clicking on a tag on the plant specific page should reveal a list with all available plants that have the same tag
- Try using this API endpoint instead: https://dev.api.agrilution.com/plantData2.json (Spoiler: it returns the same data, its something else that is not quite alright)... can you tell what is wrong? Describe in your own words what the problem is and how this could be mitigated. No need to implement.
- Show a visual display of the intensities of each of the color for a selected plant (You can utilize chartjs or any similar library of your choice). This can be as a bar chart with min and max values as 0 and 100.

# Evaluation Criteria:
- Clean and well documented code 
- Meaningful separation and naming of files and variables
- Modular and reusable components where possible
- Stick to best practices of the used libraries

# Bonus Points for:
- Doing the bonus tasks
- Creative UIs
- Using Less or Sass

---

Frontend Coding Challenge: Plant UI

(c) 2021 Agrilution, written by Jakob Oelkers