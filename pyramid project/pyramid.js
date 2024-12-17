let hashtag = "#";
let rows = [];
let count = 8;
console.log(rows.length);

function rowCharacter(rowNumber, rowCount){
    return " ".repeat(rowCount - rowNumber) + hashtag.repeat(2*rowNumber-1) + " ".repeat(rowCount - rowNumber);
}

// for(let i = 1; i <= count; i++){
//     rows.push(rowCharacter(i, count));
// }

while (rows.length + 1 < count){
    rows.push(rowCharacter(rows.length + 1, count));
    console.log(rows.length)
}
let result = "";
for(const row of rows){
    console.log(row)
    // result = result + row + "\n";
}

// console.log(result);