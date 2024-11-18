console.log('자바스크립트 동작')

const filterForm = document.getElementById('filter')
const submitBtn = filterForm.querySelector('button')
const card = document.getElementById('card')
submitBtn.addEventListener('click', submitEvent)

function submitEvent (e) {
    const input = filterForm.querySelector('input')
    const value = input.value
    e.preventDefault()
    if(value === '') card.style.backgroundColor = ''
    card.style.backgroundColor = value
    input.value = ''
}
