let clickedArray = []

let matchedArray = []

const container = document.querySelector('.container')

const button = document.querySelector('.btn')

const loss = document.querySelector('.loss')

const winBanner = document.querySelector('.win')

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

function displayLoss() {
  loss.classList.toggle('hidden')
}

function startTimer() {
  let seconds = 60

  setInterval(() => {
    seconds--

    if (seconds >= 0) {
      let secondsElement = document.querySelector('.seconds')
      secondsElement.innerHTML = seconds
    } else {
      displayLoss()
    }
  }, 1000)
}

function displayWin() {
  winBanner.classList.toggle('hidden')
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
          matchedArray.push(card)
        })
        if (matchedArray.length == 12) {
          displayWin()
        }
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
