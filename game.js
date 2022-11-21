let clickedArray = []

const container = document.querySelector('.container')

const button = document.querySelector('.btn')

button.addEventListener('click', () => {
  console.log('start button working')
})

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
  let seconds = 60

  setInterval(() => {
    seconds--

    if (seconds >= 0) {
      let secondsElement = document.querySelector('.seconds')
      secondsElement.innerHTML = seconds
    }
  }, 1000)
}

function showContainer() {
  container.classList.toggle('hidden')
}

const cards = document.querySelectorAll('.cards .card')

button.addEventListener(
  'click',
  () => {
    startTimer()
    showContainer()
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
