const baseUrl = "https://ghibliapi.herokuapp.com/";
const titleSpan = document.querySelector(".title");
const descSpan = document.querySelector(".desc");
const directorSpan = document.querySelector(".director");
const producerSpan = document.querySelector(".producer");
const dateSpan = document.querySelector(".date");
const filmTitles = document.querySelector(".film-title__list");


function getFilmsList() {
  return fetch(`${baseUrl}films`)
  .then((res) => res.json())
  .catch(err => alert('Please refresh the page'))
}
function renderList({title, description, director, producer, release_date}) {
        titleSpan.textContent = title;
        descSpan.textContent = description;
        directorSpan.textContent = director;
        producerSpan.textContent = producer;
        dateSpan.textContent = release_date;
}


getFilmsList()
.then(films=>{
    const list = document.createElement('ol')
    films.forEach(film => {
       let listItem = document.createElement('li')
       listItem.innerText = film.title
       list.appendChild(listItem)
       listItem.addEventListener('click', ()=> renderList(film))
    })
    filmTitles.append(list)
})


