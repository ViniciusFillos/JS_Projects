const BUTTON = document.querySelector('button')
const MIN = document.querySelector('#min')
const MAX = document.querySelector('#max')
const RESULT = document.querySelector('#result')
copy = 0
repeat = true

BUTTON.addEventListener('click', showRandomNumber)

function showRandomNumber() {
    let random = generate()
    RESULT.innerHTML = `${random}`
}

function generate() {
    let minValue = Number(MIN.value)
    let maxValue = Number(MAX.value)
    let random = randomNumberGenerator(minValue, maxValue)
    return random
}

function randomNumberGenerator(min, max) {
    final = Math.floor(Math.random() * (max - min + 1) + min)
    final = checkResult(final, min, max)
    return final
}

function checkResult(final, min, max) {
    while (repeat) {
        if (final == copy) {
            final = Math.floor(Math.random() * (max - min + 1) + min) //WHY randomNumberGenerator(min, max) DOESN'T WORK
        } else {
            copy = final
            approved = false
            return final
        }
    }
}