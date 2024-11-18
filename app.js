console.log('자바스크립트 동작')

const filterForm = document.getElementById('filter')
const submitBtn = filterForm.querySelector('button')
const card = document.getElementById('card')
submitBtn.addEventListener('click', submitEvent)

function submitEvent (e) {
    const value = filterForm.querySelector('input').value
    e.preventDefault()
    if(value === '') card.style.backgroundColor = ''
    card.style.backgroundColor = value
}
