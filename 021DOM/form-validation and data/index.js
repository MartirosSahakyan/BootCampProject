const submitBtn = document.querySelector(".submit-btn");
const nameField = document.querySelector(".name-field");
const passField = document.querySelector(".pass-field");
const error = document.querySelector(".error");
const userForm = document.querySelector(".user-form");
let data = [];

submitBtn.addEventListener("click", (event) => {
  event.preventDefault()
  let formData = new FormData(userForm);
  if (nameField.value.length < 3 || passField.value.length < 3) {
    error.style.display = "block";
  } else {
    error.style.display = "none";
    data.push({
       username: formData.get('username'),
       password: formData.get('password'),
    })
  }
    console.log(data);
});
