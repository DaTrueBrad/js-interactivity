let message = document.querySelector(`#message`)

function addMovie(event) {
    event.preventDefault()
    const inputField = document.querySelector(`input`)
    let movie = document.createElement('li')
    let movieTitle = document.createElement('span')
    movieTitle.textContent = inputField.value
    movieTitle.addEventListener(`click`, crossOffMovie)
    movie.appendChild(movieTitle)

    let deleteBtn = document.createElement(`button`)
    deleteBtn.textContent = `X`
    deleteBtn.addEventListener('click', deleteMovie)    
    movie.appendChild(deleteBtn)

    document.querySelector('ul').appendChild(movie)

    console.log(movieTitle.textContent)
    message.textContent = `${inputField.value} Added!`
    inputField.value = ``
    revealMessage()
}

function deleteMovie(event) {
    event.target.parentNode.remove()
    message.textContent = `${event.target.parentNode.firstChild.textContent} DELETED!!!`
    revealMessage()
}

function crossOffMovie(event) {
    event.target.classList.toggle(`checked`)
    if(event.target.classList.contains(`checked`)) {
        message.textContent = `${event.target.textContent} was watched!`
    } else {
        message.textContent = `${event.target.textContent} was added back on watchlist.`
    }
    revealMessage()
}

function revealMessage() {
    message.classList.remove(`hide`)
    setTimeout(function test() {
        message.classList.add('hide')}, 1000)

}


document.querySelector(`form`).addEventListener(`submit`, addMovie)