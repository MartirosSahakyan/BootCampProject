const submitBtn = document.querySelector('input[type="submit"]');
const form = document.querySelector("form");
// console.log(form);
submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  let formData = new FormData(form);
  let user = Object.fromEntries(formData.entries())
  alert(JSON.stringify(user));
});


