console.log('자바스크립트 동작')

const filterForm = document.getElementById('filter')
const submitBtn = filterForm.querySelector('button')

submitBtn.addEventListener('click', submitEvent)

function submitEvent (e) {
    e.preventDefault()
}