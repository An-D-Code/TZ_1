const items = document.querySelectorAll('.item'),
      selected = document.querySelector('.selected'),
      radios = document.querySelectorAll('.radio'),
      total = document.querySelector('mark'),
      select = document.querySelector('select'),
      selectedLicence = document.querySelectorAll('.selectedLicense')
      
let activeRadio = document.querySelector('.active .radio')

//Функция, которая устанавливает активный класс
const setActiveClass = item => {
    item.classList.add('active')
}
//Функция, которая удаляет активный класс
const removeActiveClass = (items) => {
    items.forEach(item => {
        item.classList.remove('active');
    })
}

//Сам функционал переключения между лицензий
items.forEach((item, i) => {
    item.addEventListener('click', () => {
        removeActiveClass(items)
        setActiveClass(item)
        calcTotal(i)
        setSelected(i)
    })
})
//Функция, отслеживающая изменение select
select.addEventListener('change', () => {
    items.forEach((item, i) => {
        if (item.classList.contains('active')) {
            calcTotal(i)
        }
    })
})

// Функция рассчета total
const calcTotal = (i = 0) => {
    total.innerHTML= radios[i].value * select.value
}

const setSelected = (i = 0) => {
    selected.innerHTML = `Selected plan: ${selectedLicence[i].innerHTML}`
}

calcTotal()
setSelected()


// Модальное окно:
const modal = document.querySelector('.modal'),
      btn = document.querySelector('.btn'),
      closeModal = document.querySelector('.closeModal');
      
      
let modalShown = false

const showModal = () => {
    modal.style.display = 'flex'
    modalShown = true
}

const hideModal = () => {
    modal.style.display = 'none'
    modalShown = false
}

btn.addEventListener('click', () => {
    showModal()
})

closeModal.addEventListener('click', () => {
    hideModal()
})

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        hideModal()
    }
})