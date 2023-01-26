// list of elements
const elements = [
	{
		name: "H",
		symbol: "Hydrogen",
	}, {
		name: "He",
		symbol: "Helium",
	}, {
		name: "Li",
		symbol: "Lithium",
	}, {
		name: "Be",
		symbol: "Beryllium",
	}, {
		name: "B",
		symbol: "Boron",
	}, {
		name: "C",
		symbol: "Carbon",
	}, {
		name: "N",
		symbol: "Nitrogen",
	}, {
		name: "O",
		symbol: "Oxygen",
	}, {
		name: "F",
		symbol: "Fluorine",
	}, {
		name: "Ne",
		symbol: "Neon",
	}, {
		name: "Na",
		symbol: "Sodium",
	}, {
		name: "Mg",
		symbol: "Magnesium",
	}, {
		name: "Al",
		symbol: "Aluminium",
	}, {
		name: "Si",
		symbol: "Silicon",
	}, {
		name: "P",
		symbol: "Phosphorus",
	}, {
		name: "S",
		symbol: "Sulfur",
	}, {
		name: "Cl",
		symbol: "Chlorine",
	}, {
		name: "Ar",
		symbol: "Argon",
	}, {
		name: "K",
		symbol: "Potassium",
	}, {
		name: "Ca",
		symbol: "Calcium",
	}, {
		name: "Sc",
		symbol: "Scandium",
	}, {
		name: "Ti",
		symbol: "Titanium",
	}, {
		name: "V",
		symbol: "Vanadium",
	}, {
		name: "Cr",
		symbol: "Chromium",
	}, {
		name: "Mn",
		symbol: "Manganese",
	}, {
		name: "Fe",
		symbol: "Iron",
	}, {
		name: "Co",
		symbol: "Cobalt",
	}, {
		name: "Ni",
		symbol: "Nickel",
	}, {
		name: "Cu",
		symbol: "Copper",
	}, {
		name: "Zn",
		symbol: "Zinc",
	}, {
		name: "Ga",
		symbol: "Gallium",
	}, {
		name: "Ge",
		symbol: "Germanium",
	}, {
		name: "As",
		symbol: "Arsenic",
	}, {
		name: "Se",
		symbol: "Selenium",
	}, {
		name: "Br",
		symbol: "Bromine",
	}, {
		name: "Kr",
		symbol: "Krypton",
	}, {
		name: "Rb",
		symbol: "Rubidium",
	}, {
		name: "Sr",
		symbol: "Strontium",
	}, {
		name: "Y",
		symbol: "Yttrium",
	}, {
		name: "Zr",
		symbol: "Zirconium",
	}, {
		name: "Nb",
		symbol: "Niobium",
	}, {
		name: "Mo",
		symbol: "Molybdenum",
	}, {
		name: "Tc",
		symbol: "Technetium",
	}, {
		name: "Ru",
		symbol: "Ruthenium",
	}, {
		name: "Rh",
		symbol: "Rhodium",
	}, {
		name: "Pd",
		symbol: "Palladium",
	}, {
		name: "Ag",
		symbol: "Silver",
	}, {
		name: "Cd",
		symbol: "Cadmium",
	}, {
		name: "In",
		symbol: "Indium",
	}, {
		name: "Sn",
		symbol: "Tin",
	}, {
		name: "Sb",
		symbol: "Antimony",
	}, {
		name: "Te",
		symbol: "Tellurium",
	}, {
		name: "I",
		symbol: "Iodine",
	}, {
		name: "Xe",
		symbol: "Xenon",
	}, {
		name: "Cs",
		symbol: "Cesium",
	}, {
		name: "Ba",
		symbol: "Barium",
	}, {
		name: "Au",
		symbol: "Gold",
	}, {
		name: "Hg",
		symbol: "Mercury",
	}, {
		name: "U",
		symbol: "Uranium",
	}
]
// functions
// getting all dom elements
var guessInput = document.getElementById("guess-input");
var submitButton = document.getElementById("submit-button");
var hintButton = document.getElementById("hint-button");
var feedback = document.getElementById("feedback");
var prompt = document.getElementById("prompt");
var nameSymbolPicker = document.getElementById("name-symbol-picker");

nameSymbolPicker.addEventListener("change", changeQuiz)
var currentQuiz;
var correctAnswer;
var hintCount;


startRound();
function changeQuiz() {
	startRound()
}
function keyPress(event) {
	if (event.key == "Enter") {
		return submitAnswer();
	}
}
function startRound() {
	hintCount = 0
	currentQuiz = nameSymbolPicker.value;
	console.log(currentQuiz)
	guessInput.value = ""

	// generate random number + element
	let randomNumber = Math.floor(Math.random() * elements.length)
	let randomElement = elements[randomNumber];

	if (currentQuiz == "name") {
		correctAnswer = randomElement["symbol"];
		prompt.innerText = randomElement["name"]
	} else {
		correctAnswer = randomElement["name"];
		prompt.innerText = randomElement["symbol"];
	}
}

function submitAnswer() {
	if (guessInput.value == correctAnswer) {
		feedback.innerText = "Correct!!"
		feedback.className = "center correct"
		return startRound();
	} else {
		feedback.innerText = "The answer you gave was incorrect"
		feedback.className = "center wrong"
	}
}

function getHint() {
	guessInput.value = correctAnswer.substring(0, ++hintCount);
}

