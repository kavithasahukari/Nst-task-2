const toggleBtn = document.getElementById('menu-toggle');
const navLinks = document.querySelector('nav ul');

toggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
