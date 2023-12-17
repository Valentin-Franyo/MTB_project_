
import { openWebshop } from './button.js';

document.addEventListener('DOMContentLoaded', function () {
  const navCheckbox = document.getElementById('nav-checkbox');
  const navLinks = document.querySelectorAll('.nav-list a');

  navLinks.forEach((link) => {
    link.addEventListener('click', function () {
      navCheckbox.checked = false;
    });
  });

  openWebshop(); 
});
