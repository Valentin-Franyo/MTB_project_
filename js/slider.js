const radioButtons = document.querySelectorAll('[type="radio"]');
const navBars = document.querySelectorAll('.slider-nav-bar');
let interval;
let currentRadio = 0;
let progress = 0;

const animateProgressBar = () => {
  progress += 2;

  if (progress > 100) {
    progress = 0;
  }

  navBars[currentRadio].style.background = `linear-gradient(to right, #A1FC22 ${progress}%, white ${progress}%)`;
};

const toggleCheckedState = () => {
  radioButtons[currentRadio].checked = false;
  currentRadio = (currentRadio + 1) % radioButtons.length;
  radioButtons[currentRadio].checked = true;
  progress = 0;
  resetNavBars(); // Frissíti az előző csík színét
};

const resetNavBars = () => {
  navBars.forEach((bar, index) => {
    bar.style.background = index === currentRadio ? '#A1FC22' : 'white';
  });
};

const startInterval = () => {
  interval = setInterval(() => {
    animateProgressBar();
    if (progress === 0) {
      toggleCheckedState();
    }
  }, 100);
};

const stopInterval = () => {
  clearInterval(interval);
};

startInterval();

window.addEventListener("resize", () => {
  stopInterval();
  startInterval();
});
