const link = document.querySelector(".link-to");
const warning = document.querySelector(".warning");
const btnOk = document.querySelector("#btn-ok");
const btnCancel = document.querySelector("#btn-cancel");
const warningText = document.querySelector(".warning-text");


link.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(event.defaultPrevented);
  warning.style.display = "block";
});

btnCancel.addEventListener("click", (event) => {
    event.preventDefault();
  warning.style.display = "none";
});

btnOk.addEventListener("click", () => {
  warning.style.display = "none";
});

warningText.addEventListener('mousedown', (event)=>{
    event.preventDefault()
})