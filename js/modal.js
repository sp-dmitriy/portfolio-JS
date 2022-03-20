const modalButton = document.querySelector('.more')
const modal = document.querySelector('.modal')
const overlay = modal.querySelector('.overlay')
const closeButton = modal.querySelector('.modal__close')

closeModal = () => modal.classList.add('hidden')  

modalButton.addEventListener('click', () => {
  modal.classList.remove('hidden')  
})

overlay.addEventListener('click', () => {
  closeModal()
})

closeButton.addEventListener('click', () => {
  closeModal()
})