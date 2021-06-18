const card = document.querySelector(".card");
const header = document.querySelector(".header");
const img = document.querySelector(".img");

// bubbling (default)
// card.addEventListener('click', ()=>{
//     console.log('card');
// })
// header.addEventListener('click', ()=>{
//     console.log('header');
// })
// img.addEventListener('click', ()=>{
//     console.log('img');
// })

// Capturing
card.addEventListener('click', ()=>{
    console.log('card');
}, true)
header.addEventListener('click', (event)=>{
    // event.stopPropagation()
    // event.stopImmediatePropagation()
    console.log('header');
}, {capture: true})
img.addEventListener('click', ()=>{
    console.log('img');
}, true)

