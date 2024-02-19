const BTN_CALCULATE = window.document.querySelector('button')
const SCREEN_RESULT = window.document.querySelector('.result > span')

BTN_CALCULATE.addEventListener('click', function calculate() {
    const value = Number(window.document.querySelector('#value').value)
    const time = Number(window.document.querySelector('#time').value)
    const fee = Number(window.document.querySelector('#fee').value) / 100
    const result = value * (1 + fee)**time
    SCREEN_RESULT.innerText = `$${result.toFixed(2)}`
})
