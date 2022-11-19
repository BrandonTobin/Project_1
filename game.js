let clickedArray = []
let firstSelection = ''
let secondSelection = ''

function doesMatch(arr) {
  animalNames = []
  arr.forEach((clickedCard) => {
    animalNames.push(clickedCard.getAttribute('animal'))
  })
  uniqueArray = animalNames.filter(function (item, pos) {
    return animalNames.indexOf(item) == pos
  })
  return uniqueArray.length == 1
}

const cards = document.querySelectorAll('.cards .card')
cards.forEach((card) => {
  card.addEventListener('click', () => {
    card.classList.add('clicked')
    console.log(card)
    clickedArray.push(card)
    if (clickedArray.length % 2 == 0) {
      if (doesMatch(clickedArray)) {
        clickedArray.forEach((card) => {
          card.classList.toggle('match')
          card.classList.toggle('clicked')
          clickedArray = []
        })
      }
      console.log(doesMatch(clickedArray))
    }
  })
})
