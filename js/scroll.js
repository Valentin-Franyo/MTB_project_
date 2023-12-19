var lastScrollTop = 0;
var delta = 5;
var navbarHeight = document.querySelector('header').offsetHeight; // Az aktuális navigációs menü magassága

window.addEventListener('scroll', function () {
  var st = window.pageYOffset || document.documentElement.scrollTop;

  if (Math.abs(lastScrollTop - st) <= delta)
    return;

  if (st > lastScrollTop && st > navbarHeight) {
    // lefelé görgetés, a navigációs menü eltűnik
    document.querySelector('header').style.top = `-${navbarHeight}px`;
  } else {
    // felfelé görgetés vagy a tetején vagy a navigációs menü megjelenik
    document.querySelector('header').style.top = '0';
  }

  lastScrollTop = st;
});
