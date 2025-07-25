// tabs for section Menu
function changeImage(imageId) {
  const img = document.getElementById('image');
  if (imageId === 'img1') {
    img.src = 'img/menu-img.png';
  } else if (imageId === 'img2') {
    img.src = 'img/menu-img2.png';
  } else if (imageId === 'img3') {
    img.src = 'img/menu-img3.png';
  }
}

// burger-menu
// здесь мы определяем функцию, которая отвеает за работу меню, в ней не нужно ничего менять
function setBurger(params) {
  const btn = document.querySelector(`.${params.btnClass}`);
  const menu = document.querySelector(`.${params.menuClass}`);
  
  menu.addEventListener('animationend', function () {
    if (this.classList.contains(params.hiddenClass)) {
      this.classList.remove(params.activeClass);
      this.classList.remove(params.hiddenClass);
    }
  });

  btn.addEventListener('click', function () {
    this.classList.toggle(params.activeClass);
    
    if (!menu.classList.contains(params.activeClass) && !menu.classList.contains(params.hiddenClass)) {
      menu.classList.add(params.activeClass);
    } else {
      menu.classList.add(params.hiddenClass);
    }
  });
}

// здесь мы вызываем функцию и передаем в нее классы наших элементов
setBurger({
  btnClass: 'burger', // класс бургера
  menuClass: 'burger__menu', // класс меню
  activeClass: 'is-opened', // класс открытого состояния
  hiddenClass: 'is-closed' // класс закрывающегося состояния (удаляется сразу после закрытия)
});