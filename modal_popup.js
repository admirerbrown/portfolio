const viewProject = document.querySelectorAll('.btn').length;
console.log(viewProject);

for (let k = 0; k < viewProject; k += 1) {
  document.querySelectorAll('.btn')[k].addEventListener('click', () => {
    document.querySelector('#mobile-popUp').style.display = 'block';
    document.querySelector('.grid-container').style.filter = 'blur(8px)';
  });
}