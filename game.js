let clickedArray = []
let firstSelection = ''
let secondSelection = ''

function doesMatch() {
  clickedArray.forEach((clickedCard) => {})
}

const cards = document.querySelectorAll('.cards .card')
cards.forEach((card) => {
  card.addEventListener('click', () => {
    card.classList.add('clicked')
    clickedArray.push(card)
    if (clickedArray.length % 2 == 0) {
      doesMatch()
    }
  })
})
