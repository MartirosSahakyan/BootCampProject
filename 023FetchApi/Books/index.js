const input = document.querySelector("input");
const btn = document.querySelector("button");
const tBody = document.querySelector("tbody");

const baseUrl = "http://openlibrary.org/search.json";
let inputValue;

function getBook(queryParam) {
  return fetch(`${baseUrl}?q=${queryParam}`).then((res) => res.json());
}
function renderTBody(data) {
  data.forEach(({ title, author_name, publish_year, subject },index) => {
  let tr = document.createElement("tr");
  let tdN = document.createElement("td");
  let tdTitle = document.createElement("td");
  let tdAuthor = document.createElement("td");
  let tdYear = document.createElement("td");
  let tdSubject = document.createElement("td");
  tdN.textContent = index+1
  tdTitle.textContent = title;
  tdAuthor.textContent = author_name
  tdYear.textContent = publish_year ? Math.min(...publish_year) : publish_year ;
  tdSubject.textContent = subject ? subject[0] : subject;
  tBody.append(tr);
  tr.append(tdN, tdTitle, tdAuthor, tdYear, tdSubject);
  });
}

input.addEventListener("change", (event) => {
  inputValue = event.target.value.trim().split(" ").join("+");
});

btn.addEventListener("click", () => {
  if (inputValue) {
    getBook(inputValue).then((res) => renderTBody(res.docs));
  }
});
