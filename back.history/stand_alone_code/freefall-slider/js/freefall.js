const menu = document.getElementById('sliding-menu');
let isOpen = false;

menu.addEventListener('mouseover', function () {
  if (!isOpen) {
    if (menu.classList.contains('right')) {
      menu.style.transform = 'translateX(0)';
    } else if (menu.classList.contains('left')) {
      menu.style.transform = 'translateX(0)';
    } else if (menu.classList.contains('top')) {
      menu.style.transform = 'translateY(0)';
    } else if (menu.classList.contains('bottom')) {
      menu.style.transform = 'translateY(0)';
    }
  }
});

menu.addEventListener('mouseout', function () {
  if (!isOpen) {
    if (menu.classList.contains('right')) {
      menu.style.transform = 'translateX(295px)';
    } else if (menu.classList.contains('left')) {
      menu.style.transform = 'translateX(-295px)';
    } else if (menu.classList.contains('top')) {
      menu.style.transform = 'translateY(-295px)';
    } else if (menu.classList.contains('bottom')) {
      menu.style.transform = 'translateY(295px)';
    }
  }
});

menu.addEventListener('click', function () {
  isOpen = !isOpen;
  menu.classList.toggle('slide-open');
});

// Update color variables dynamically
const sliders = document.querySelectorAll('.slider');
sliders.forEach(slider => {
  slider.addEventListener('input', (event) => {
    const variable = event.target.dataset.var;
    document.documentElement.style.setProperty(variable, event.target.value);
  });
});
