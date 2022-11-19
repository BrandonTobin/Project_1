let clickedArray = []
let firstSelection = ''
let secondSelection = ''

function doesMatch(arr) {
  animalNames = []
  arr.forEach((clickedCard) => {
    animalNames.push(clickedCard.getAttribute('animal'))
  })
  animalNames.unique()
  console.log(animalNames.unique())
}

const cards = document.querySelectorAll('.cards .card')
cards.forEach((card) => {
  card.addEventListener('click', () => {
    card.classList.add('clicked')
    console.log(card)
    clickedArray.push(card)
    if (clickedArray.length % 2 == 0) {
      doesMatch(clickedArray)
    }
  })
})
