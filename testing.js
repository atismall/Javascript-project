const myArray = [];

// let i = 0;
// while (i <= 5) {
//   myArray.unshift(i);
//   i++;
// }
// for (let i = 0; i < 6; i++) {
//     myArray.push(i)
//   }

// for (let i = 1; i < 10; i += 2 ) {
//     myArray.push(i);
//   }
// const myArr = [2, 3, 4, 5, 6];
// let total = 0;
// for (let i = 0; i < myArr.length; i++){
//     total += myArr[i]
//   }
// console.log(total)

const arr = [
    [1, 2], [3, 4], [5, 6]
  ];
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  console.log(product);
