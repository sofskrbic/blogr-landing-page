const hamburger = document.getElementById('hamburger')
const mobileMenu = document.getElementById('main')
hamburger.addEventListener('click', () => {
    if (mobileMenu.style.display === 'none') {
      mobileMenu.style.display = 'block';
      hamburger.setAttribute('src', './images/icon-close.svg')
    } else {
      hamburger.setAttribute('src', './images/icon-hamburger.svg')
      mobileMenu.style.display = 'none';
    }
  });
