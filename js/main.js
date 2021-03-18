function openMenu() {
  const hamburger = document.getElementById('hamburger')
  const mobileMenu = document.getElementById('main')
  hamburger.addEventListener('click', () => {
    if (mobileMenu.style.display === 'none') {
      mobileMenu.style.display = 'block';
    } else {
      mobileMenu.style.display = 'none';
    }
  });
}