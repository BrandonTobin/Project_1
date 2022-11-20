let clickedArray = []

function doesMatch(arr) {
  let animalNames = []

  arr.forEach((clickedCard) => {
    animalNames.push(clickedCard.getAttribute('animal'))
  })

  let uniqueArray = animalNames.filter(function (item, pos) {
    return animalNames.indexOf(item) == pos
  })

  return uniqueArray.length == 1
}

function startTimer() {
  let seconds = 2

  setInterval(() => {
    seconds--

    if (seconds >= 0) {
      let secondsElement = document.querySelector('.seconds')
      secondsElement.innerHTML = seconds
    }
  }, 1000)
}

const cards = document.querySelectorAll('.cards .card')

document.addEventListener(
  'click',
  () => {
    startTimer()
  },
  { once: true }
)

cards.forEach((card) => {
  card.addEventListener('click', () => {
    card.classList.add('clicked')
    clickedArray.push(card)

    if (clickedArray.length % 2 == 0) {
      if (doesMatch(clickedArray)) {
        clickedArray.forEach((card) => {
          card.classList.toggle('match')
          card.classList.toggle('clicked')
          clickedArray = []
        })
      } else {
        clickedArray.forEach((card) => {
          setTimeout(() => {
            card.classList.toggle('clicked')
            clickedArray = []
          }, 500)
        })
      }
    }
  })
})
