document.addEventListener('DOMContentLoaded', function () {
    const navCheckbox = document.getElementById('nav-checkbox');
    const navLinks = document.querySelectorAll('.nav-list a');
  
    navLinks.forEach((link) => {
      link.addEventListener('click', function () {
        setTimeout(() => {
          navCheckbox.checked = false;
        }, 300); // 300 milliszekundum (vagy más időtartam) késleltetés hozzáadása
      });
    });
  });
  