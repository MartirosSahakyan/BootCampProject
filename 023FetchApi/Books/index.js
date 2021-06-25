const input = document.querySelector("input");
const btn = document.querySelector("button");
const tBody = document.querySelector("tbody");

const baseUrl = "http://openlibrary.org/search.json";
let inputValue;

function getBook(queryParam) {
  return fetch(`${baseUrl}?q=${queryParam}`).then((res) => res.json());
}
function renderTBody({ title, author_name, publish_year, subject }) {
  let tr = document.createElement("tr");
  let tdTitle = document.createElement("td");
  let tdAuthor = document.createElement("td");
  let tdYear = document.createElement("td");
  let tdSubject = document.createElement("td");
  tdTitle.textContent = title;
  tdAuthor.textContent = author_name[0];
  tdYear.textContent = Math.min(...publish_year);
  tdSubject.textContent = subject[0];
  tBody.append(tr);
  tr.append(tdTitle, tdAuthor, tdYear, tdSubject);
}

input.addEventListener("change", (event) => {
  inputValue = event.target.value.trim().split(" ").join("+");
});

btn.addEventListener("click", () => {
  if (inputValue) {
    getBook(inputValue).then((res) => renderTBody(res.docs[0]));
  }
});
