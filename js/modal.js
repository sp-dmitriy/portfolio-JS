const modalButtons = document.querySelectorAll('.more')
const modal = document.querySelector('.modal')
const overlay = modal.querySelector('.overlay')
const closeButton = modal.querySelector('.modal__close')

const closeModal = () => modal.classList.add('hidden')  

modalButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    modal.classList.remove('hidden')  
  })
})

overlay.addEventListener('click', () => {
  closeModal()
})

closeButton.addEventListener('click', () => {
  closeModal()
})