const carrossel = document.getElementById('carrossel');
const btnPrev = document.querySelector('.prev');
const btnNext = document.querySelector('.next');

btnNext.addEventListener('click', () => {
  carrossel.scrollBy({ left: 320, behavior: 'smooth' });
});

btnPrev.addEventListener('click', () => {
  carrossel.scrollBy({ left: -320, behavior: 'smooth' });
});

// Auto scroll
setInterval(() => {
  if ((carrossel.scrollLeft + carrossel.clientWidth) >= carrossel.scrollWidth) {
    carrossel.scrollTo({ left: 0, behavior: 'smooth' });
  } else {
    carrossel.scrollBy({ left: 320, behavior: 'smooth' });
  }
}, 4000);
