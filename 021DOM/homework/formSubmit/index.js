const submitBtn = document.querySelector('input[type="submit"]')
const form = document.querySelector('form')
// console.log(form);
submitBtn.addEventListener('click', (event)=>{
    event.preventDefault()
    let formData = new FormData(form)
    let user = {}
    for (const field of formData) {
        user = {
            ...user,
            [field[0]]: field[1]
        }
    }
    alert(JSON.stringify(user))
})

