document.addEventListener('DOMContentLoaded', () => {

    const items = document.querySelectorAll('.item'),
          selected = document.querySelector('.selected'),
          radios = document.querySelectorAll('.radio'),
          total = document.querySelector('mark'),
          select = document.querySelector('select'),
          selectedLicence = document.querySelectorAll('.selectedLicense')

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
    // Отображение выбранной лицензии
    const setSelected = (i = 0) => {
        selected.innerHTML = `Selected plan: ${selectedLicence[i].innerHTML}`
    }

    calcTotal()
    setSelected()


    // Модальное окно:
    const modal = document.querySelector('.modal'),
        btn = document.querySelector('.btn'),
        closeModal = document.querySelector('.closeModal');
        
    //Функция показа модального окна
    const showModal = () => {
        modal.style.display = 'flex'
    }
    //Функция скрытия модального окна
    const hideModal = () => {
        modal.style.display = 'none'
    }

    btn.addEventListener('click', showModal)

    closeModal.addEventListener('click', hideModal)
//Скрытие модального окна при клике на пустое место за его пределами
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            hideModal()
        }
    })
})
