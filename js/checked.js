// Kiválasztjuk a checkbox-t, a slider title-t és a slider nav-ot
const checkbox = document.getElementById('nav-checkbox');
const sliderTitles = document.querySelectorAll('.slider-title');
const sliderNav = document.querySelector('.slider-nav');

// Figyeljük a checkbox változását
checkbox.addEventListener('change', () => {
  // Ha a checkbox be van jelölve, akkor elrejtjük az összes slider title-t és a slider nav-ot
  if (checkbox.checked) {
    sliderTitles.forEach(sliderTitle => {
      sliderTitle.style.display = 'none';
    });
    sliderNav.style.display = 'none';
  } else {
    // Ha a checkbox nincs bejelölve, visszaállítjuk az összes slider title és a slider nav megjelenítését
    sliderTitles.forEach(sliderTitle => {
      sliderTitle.style.display = 'block';
    });
    sliderNav.style.display = 'flex';
  }
});
