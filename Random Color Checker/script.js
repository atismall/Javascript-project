const colorButtonChanger = document.getElementById("change_bg");
const body = document.querySelector("body");
const hexCode = document.querySelector("#color_hex_code");

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
   const color = sampleColor[getRandomIndex()];

   hexCode.innerText = color;
   body.style.backgroundColor = color;
}

colorButtonChanger.onclick = activeColor;
