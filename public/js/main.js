/* Change nav bar style on scroll */

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
  })



// Show and hide faq answer

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('open');

    const icon = faq.querySelector('.faq__icon i');
    if(icon.className === 'uil uil-plus') {
      icon.className = "uil uil-minus"
    } else {
      icon.className = "uil uil-plus"
    }
  })
})  

// SHOW FAQ end

// Ефект появи карток секції category
document.addEventListener("DOMContentLoaded", function() {
  const categories = document.querySelectorAll('.category');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  categories.forEach(category => {
    observer.observe(category);
  });
});

// Кінець коду появи картор

// //show/hide nav menu
// Выбор всех пунктов меню
const menuItems = document.querySelectorAll(".nav__menu a");

// Существующий код для открытия и закрытия меню
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => {
  menu.style.display = "flex";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display = "none";
});

const closeNav = () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav);

// Добавление обработчика событий для всех пунктов меню
menuItems.forEach(item => {
  item.addEventListener('click', closeNav);
});


// //show/hide nav menu END ///