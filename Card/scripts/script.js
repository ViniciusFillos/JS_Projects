let button = document.querySelector('#readButton')

button.addEventListener('click', function() {
    let card = document.querySelector('.card')
    card.classList.toggle('active')

    if (card.classList.contains('active')) {
        return button.textContent = 'Read less'
    }
    button.textContent = 'Read more'
})
