const c = document.getElementById('')
const b = document.getElementById('')
const l = document.getElementById('loading')

l.style.display = 'none'

b.addEventListener('click', evt => {
    l.style.display; 'block'
    const xhr = new XMLHttpRequest() //crea el objeto
    xhr.open('GET', '/data.html', true)       // el data.html se debe cambiar por el lugar al que vamos a hacer la petición

    //Qué se hace con la data?
    xhr.addEventListener('load', e => {
        console.log(e.target)
        c.innerHTML = e.target.responseText
        l.style.display = 'none'
    })

    //Realice la petición
    xhr.send()
})