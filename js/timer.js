const timerBlock = document.querySelector('.timer__time')
const deadline = '31 march 2022'

let interval 

const updateClock = () => {
  const date = new Date().getTime()
  const dateDeadline = new Date(deadline).getTime()
  const timeRemaining = (dateDeadline - date) / 1000

  const days = Math.floor(timeRemaining / 60 / 60 / 24)
  const hours = Math.floor((timeRemaining / 60 / 60 ) % 24)
  const minutes = Math.floor((timeRemaining / 60) % 60)
  const seconds = Math.floor(timeRemaining % 60)


  const fHours = hours < 10 ? '0' + hours : hours
  const fMinutes = minutes < 10 ? '0' + minutes : minutes
  const fSeconds = seconds < 10 ? '0' + seconds : seconds
  timerBlock.textContent = formatDays(days)  + `${fHours}:${fMinutes}:${fSeconds}`

  if (timeRemaining <= 0) {
    clearInterval(interval)
    timerBlock.textContent = '00:00:00'
  }
}

updateClock()

interval = setInterval(updateClock, 500)

function formatDays(val) {
  return val > 0 ? val + num_word(val, [' День ', ' Дня ', ' Дней ']) : ''
}

function num_word(value, words){
	value = Math.abs(value) % 100 
	let num = value % 10
	if (value > 10 && value < 20) return words[2]
	if (num > 1 && num < 5) return words[1]
	if (num == 1) return words[0]
	return words[2]
}