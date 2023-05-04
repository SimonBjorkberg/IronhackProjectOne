const instructions = document.getElementById('instructions')
const test = document.getElementById('instruction-container')

instructions.addEventListener('mouseover', () => {
    test.style.display = 'block'
})
instructions.addEventListener('mouseout', () => {
    test.style.display = 'none'
})