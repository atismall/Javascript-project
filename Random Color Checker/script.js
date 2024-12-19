const colorButtonChanger = document.getElementById("change_bg");

let sampleColor = [
  "#2C3E50",
  "#34495E",
  "#2C2C2C",
  "#616A6B",
  "#4A235A",
  "#2F4F4F",
  "#0E4B5A",
  "#36454F",
  "#2C3E50",
  "#800020",
];

function getRandomIndex() {
   return Math.floor(Math.random() * sampleColor.length);
};

function activeColor() {
   return document.body.style.backgroundColor = sampleColor[getRandomIndex()];
}
console.log(activeColor())
colorButtonChanger.onclick() = activeColor();
