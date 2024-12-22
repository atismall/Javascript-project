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

function calculateCalories(e) {
    e.preventDefault();
    isError = false;
    const breakFastNumberInputs = document.querySelectorAll(`#breakfast input[type="number"]`);
    const lunchNumberInputs = document.querySelectorAll(`#lunch input[type="number"]`);
    const dinnerNumberInputs = document.querySelectorAll(`#dinner input[type="number"]`);
    const snacksNumberInputs = document.querySelectorAll(`#snacks input[type="number"]`);
    const exerciseNumberInputs = document.querySelectorAll(`#exercise input[type="number"]`);

    const breakfastCalories = getCaloriesFromInput(breakFastNumberInputs);
    const lunchCalories = getCaloriesFromInput(lunchNumberInputs);
    const dinnerCalories = getCaloriesFromInput(dinnerNumberInputs);
    const snacksCalories = getCaloriesFromInput(snacksNumberInputs);
    const exerciseCalories = getCaloriesFromInput(exerciseNumberInputs);

    const budgetCalories = getCaloriesFromInput([budgetNumber])

    if(isError) {
        return;
    }

    const consumedCalories = breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;
    const remainingCalories = budgetCalories - consumedCalories + exerciseCalories;

    const surplusOrDeficit = remainingCalories < 0 ? "Surplus" : "Deficit";

    output.innerHTML = `
    <span class="${surplusOrDeficit.toLowerCase()}">${Math.abs(remainingCalories)} Calories ${surplusOrDeficit}</span>
    <hr />
    <p>${budgetCalories} Calories Budgeted</p>
    <p>${consumedCalories} Calories Consumed</p>
    <p>${exerciseCalories} Calories Burned</p>
    `
    output.classList.remove('hide');
}

function clearForm() {
    const inputContainers = Array.from(document.querySelectorAll(".input_container"));
    
    for (const container of inputContainers) {
        container.innerHTML = '';
    }
    budgetNumber.value = '';
    output.innerText = '';
    output.classList.add('hide');
}

calorieCounter.addEventListener('submit', calculateCalories);
clear.addEventListener('click', clearForm);
addEntryButton.addEventListener("click", addEntry);