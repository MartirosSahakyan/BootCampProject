const input = document.querySelector("input");
const span = document.querySelector("span");

input.addEventListener("input", (event) => {
  if (event.target.value.match(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/)) {
    span.textContent = event.target.value;
  }
});
