const hexBtn = document.querySelector("#hex-btn"),
	colorName = document.querySelector(".color"),
	hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

function getRandomHexCode() {
	return Math.floor(Math.random() * hexValues.length);
}

hexBtn.addEventListener("click", () => {
	let hexColor = "#";
	for (i = 0; i < 6; i++) {
		hexColor += hexValues[getRandomHexCode()];
	}
	document.body.style.backgroundColor = hexColor;
	colorName.textContent = hexColor;
});
