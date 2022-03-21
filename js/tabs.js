const tabButtons = document.querySelectorAll('.design-list__item')
const tabDescriptions = document.querySelectorAll('.design__descr')
const tabImages = document.querySelectorAll('.design-images')
const tabFeature = document.querySelectorAll('.feature__img')

document.title = document.querySelector('.design-list__item.design-list__item_active').textContent

tabButtons.forEach((tab) => {
  tab.addEventListener('click', (event) => {
    const dataValue = tab.dataset.tabsHandler
    
    document.title = tab.textContent

    tabButtons.forEach((btn) =>  
      btn === event.target 
      ? btn.classList.add('design-list__item_active') 
      : btn.classList.remove('design-list__item_active')
    ) 

    changeContent(tabImages, dataValue)
    changeContent(tabFeature, dataValue)
    changeContent(tabDescriptions, dataValue)
  })
})

const changeContent = (array, value) =>  
  array.forEach(elem => elem.dataset.tabsField === value ? elem.classList.remove('hidden') : elem.classList.add('hidden')) 


