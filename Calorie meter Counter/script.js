const calorieCounter = document.getElementById("calorie_counter");
const budgetNumber = document.getElementById("budget");
const entryDropdown = document.getElementById("entry_dropdown");
const addEntry = document.getElementById("add_entry");
const clear = document.getElementById("clear");
const output = document.getElementById("output");
let isError = false;

function isCleanString(str) {
    const regex = /[+-\s]/g;
    return str.replace(regex, "");
}

function isValidInput(str) {
    const regex = /\d+e\d+/i;
    return str.match(regex);
}

console.log(isValidInput("1e3"));
console.log(isValidInput("13"));