const image = document.querySelector(".img");
const selectDog = document.querySelector(".select-dog");
const baseUrl = "https://dog.ceo/api/breed/";

function getDogImgUrl(breedName) {
  return fetch(`${baseUrl}${breedName}/images`)
    .then((res) => res.json())
    .then((imgUrls) => imgUrls.message[0])
    .catch((err) => alert(err));
}

selectDog.addEventListener("change", (event) => {
    breedName = event.target.value
  getDogImgUrl(breedName)
  .then((imageUrl) => {
    image.setAttribute("src", imageUrl);
  });
});

