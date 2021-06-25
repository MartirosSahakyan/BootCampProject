const baseUrl = "https://dog.ceo/api/";
const image = document.querySelector(".img");
const selectDog = document.querySelector(".select-dog");
const warning = document.querySelector(".warning");
const loading = document.querySelector(".loading");

function getDogImgUrl(breedName) {
  return fetch(`${baseUrl}breed/${breedName}/images`)
    .then((res) => {
      if (res.status !== 200) {
        throw new Error();
      }
      return res.json();
    })
    .then((res) => res.message[0])
    .catch(() => {
      warning.style.display = "block";
      image.style.display = "none";
    });
}

function getBreedNames() {
  return fetch(`${baseUrl}breeds/list/all`)
    .then((res) => res.json())
    .then((res) => res.message)
    .catch((err) => alert(err));
}

getBreedNames()
  .then((breedNames) => {
    for (const name in breedNames) {
      if (breedNames[name].length === 0) {
        let option = document.createElement("option");
        option.setAttribute("value", name);
        option.innerText = name;
        selectDog.append(option);
      } else {
        breedNames[name].forEach((el) => {
          let option = document.createElement("option");
          option.setAttribute("value", `${name}-${el}`);
          option.innerText = `${name} ${el}`;
          selectDog.append(option);
        });
      }
    }
  })
  .catch(() => alert("REFRESH PAGE"));

selectDog.addEventListener("change", (event) => {
  breedName = event.target.value;
  if (breedName !== "") {
    warning.style.display = "none";
    image.style.display = "block";
    loading.style.visibility = "visible";
    getDogImgUrl(breedName).then((imageUrl) => {
      loading.style.visibility = "hidden";
      image.setAttribute("src", imageUrl);
    });
  } else {
    warning.style.display = "block";
    image.style.display = "none";
  }
});
