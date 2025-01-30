// Pyramid generator
const symbol = "#";
const count = 8;
const rows = [];
let inverted = true;


for (let i = 1; i <= count; i++) {
    if(inverted) {
        rows.push(pyramidGenerator(i, count))
    } else {
        rows.unshift(pyramidGenerator(i, count))
    }
}

// while(rows.length < count) {
//     rows.push(pyramidGenerator(rows.length + 1, count))
// }



function pyramidGenerator (rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) + symbol.repeat(2*rowNumber - 1) + " ".repeat(rowCount - rowNumber)
} 



let result = "";

for(const row of rows){
    result = result + row + "\n";
}

console.log(result)