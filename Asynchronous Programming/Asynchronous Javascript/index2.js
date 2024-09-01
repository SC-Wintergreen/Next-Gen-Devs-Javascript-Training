colors = [
  "#070952",
  "#730717",
  "#083578",
  "#a86205",
  "#8f067d",
  "#037041",
  "#400404",
];

let intervalID;

function startChange() {
  if (!intervalID) {
    intervalID = setInterval(changeColor, 1000);
    console.log("Process Started");
  }
}
function changeColor() {
  let lenOfArr = colors.length - 1;

  randomIndex = Math.floor(Math.random() * lenOfArr);
  console.log(randomIndex);

  document.querySelector(".container").style.backgroundColor =
    colors[randomIndex];
}

function stopChange() {
  if (intervalID) {
    clearInterval(intervalID);
    intervalID = undefined;
    console.log("Process Stopped");
  } else {
    console.log("Denied!");
  }
}

const btn1 = document.querySelector(".buttons").children[0];
const btn2 = document.querySelector(".buttons").children[1];

btn1.addEventListener("click", startChange);
btn2.addEventListener("click", stopChange);
