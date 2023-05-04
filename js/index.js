const instructions = document.getElementById('instructions')
const instructionContainer = document.getElementById('instruction-container')

instructions.addEventListener('mouseover', () => {
    instructionContainer.style.display = 'block'
})
instructions.addEventListener('mouseout', () => {
    instructionContainer.style.display = 'none'
})