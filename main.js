// Get elements from the DOM
const randomBtn = document.querySelector("#random-btn"),
	orderlyBtn = document.querySelector("#order-btn"),
	hexBtn = document.querySelector("#hex-btn"),
	colorName = document.querySelector(".color"),
	colorNames = document.querySelectorAll(".colors li span"),

	// Array of color values
	colors = [ "red", "green", "orange", "rgb(179, 47, 255)", "#e60676" ];
	

// This is going to specify the index of a color value in the array above at any point in time.
let index;
// A function that generates a random number between 0 - 4
function getRandomNumber() {
	return Math.floor(Math.random() * colors.length);
}

// Random button 
randomBtn.addEventListener("click", () => {
	// The index is set to whatever random number that is generated
	index = getRandomNumber();

	// The text and color of some elements are set to the color value with the index specified
	document.body.style.backgroundColor = colors[index];
	colorName.textContent = colors[index];
	changeColorNameColor();
});

orderlyBtn.addEventListener("click", () => {
	if (index === undefined) {
		index = 0;
		document.body.style.backgroundColor = colors[index];
	} else {
		index++;
		if (index > colors.length - 1) {
			index = 0;
		}
		document.body.style.backgroundColor = colors[index];
		colorName.textContent = colors[index];
	}
	changeColorNameColor();
});

function changeColorNameColor() {
	colorNames.forEach((name, position) => {
		if (position === index) {
			name.style.color = colors[index];
		} else {
			name.style.color = "rgb(47, 189, 255)";
		}
	});
	// let activeElement = document.querySelector(".active");
	// activeElement.style.color = colors[index];
}
