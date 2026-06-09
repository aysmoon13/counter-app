let count = 0;
let num = document.getElementById("number");
let inc = document.getElementById("inc");
let dec = document.getElementById("dec");
let reset = document.getElementById("reset");

inc.addEventListener("click", () => {
  ++count;
  showNumber();
});

dec.addEventListener("click", () => {
  --count;
  showNumber();
});

reset.addEventListener("click", () => {
  count = 0;

  showNumber();
});

function showNumber() {
  num.textContent = count;
}
