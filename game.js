let counter = 0
let firstSelection = ''
let secondSelection = ''

const cards = document.querySelectorAll('.cards .card')
cards.forEach((card) => {
  card.addEventListener('click', () => {
    card.classList.add('clicked')
    console.log('clicked')
  })
})
