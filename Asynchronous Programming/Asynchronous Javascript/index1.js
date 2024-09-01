const intervalID = setInterval(() => {
  document.querySelector(".text").textContent = "Hello World From Callback";
}, 3000);

const btn = document.querySelector(".cancel");
btn.addEventListener("click", () => {
  console.log(intervalID);
  clearInterval(intervalID);
  console.log("Timer Deleted!");
});
