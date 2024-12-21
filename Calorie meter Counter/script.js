const calorieCounter = document.getElementById("calorie_counter");
const budgetNumber = document.getElementById("budget");
const entryDropdown = document.getElementById("entry_dropdown");
const addEntryButton = document.getElementById("add_entry");
const clear = document.getElementById("clear");
const output = document.getElementById("output");
let isError = false;

function isCleanString(str) {
    const regex = /[+-\s]/g;
    return str.replace(regex, "");
}

function isInValidInput(str) {
    const regex = /\d+e\d+/i;
    return str.match(regex);
}

function addEntry(){
    const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input_container`);
    const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length + 1;
    const HTMLString = `
    <label for="${entryDropdown.value}_${entryNumber}_name"> Entry ${entryNumber} Name</label>
    <input type="text" placeholder="Name" id="${entryDropdown.value}_${entryNumber}_name" />
    <label for="${entryDropdown.value}_${entryNumber}_calories"> Entry ${entryNumber} Calories</label>
    <input type="number" placeholder="Calories" id="${entryDropdown.value}_${entryNumber}_calories" />
    `
    targetInputContainer.insertAdjacentHTML("beforeend", HTMLString);
}

function getCaloriesFromInput(list) {
    let calories = 0;

    for (const item of list) {
        const currVal = isCleanString(item.value);
        const invalidInpuMatch = isInValidInput(currVal)

        if (invalidInpuMatch) {
            alert(`Invalid Input: ${invalidInpuMatch[0]}`);
            isError = true;
            return null;
        }
        calories += Number(currVal);
    }
    return calories;
}

addEntryButton.addEventListener("click", addEntry);