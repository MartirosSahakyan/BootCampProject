const span = document.querySelector('span')
document.querySelector('button').addEventListener('click', ()=>{
    span.style.display = 'inline-block'
    span.textContent = new Date().toLocaleTimeString()
})

  setInterval(() => {
      span.textContent = new Date().toLocaleTimeString()
  }, 2500);  



  
  