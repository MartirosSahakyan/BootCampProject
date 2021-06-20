const inputColor = document.querySelector(".text-color");
const inputBgColor = document.querySelector(".bg-color");
const btn = document.querySelector("button");
const p = document.querySelector("p");

btn.addEventListener("click", () => {
  const color = inputColor.value;
  const bgColor = inputBgColor.value;
  if (color.length === 7 && color.charAt(0) === "#") {
    p.style.color = color;
  }
  if (bgColor.length === 7 && bgColor.charAt(0) === "#") {
    p.style.backgroundColor = bgColor;
  }
});
