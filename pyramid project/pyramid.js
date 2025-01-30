// Pyramid generator
const symbol = "#";
const count = 8;
const rows = [];

function pyramidGenerator (rowNumber, rowCount) {
    return " ".repeat(rowNumber) + symbol.repeat(2*rowNumber - 1) + " ".repeat(rowNumber)
} 

for (let i = 0; i <= count; i++){
    rows.push(pyramidGenerator(i+1))
}

let result = "";

for(const row of rows){
    result = result + row + "\n";
}

console.log(result)