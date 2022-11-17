const hamIcon = document.querySelector('.fa-bars');
const closeIcon = document.querySelector('.mark');
const showPage = document.querySelectorAll('.nav-item').length;

function expandNav() {
  hamIcon.style.display = 'none';
  closeIcon.style.display = 'block';
  closeIcon.style.color = '#67798e';
  document.querySelector('.page-content').style.visibility = 'hidden';
  document.querySelectorAll('a ')[0].style.visibility = 'hidden';
  document.querySelector('.desktop-nav').style.display = 'block';
}document.querySelector('.fa-bars').addEventListener('click', expandNav);

function toggleNav() {
  hamIcon.style.display = 'block';
  closeIcon.style.display = 'none';
  closeIcon.style.color = '#67798e';
  document.querySelector('.page-content').style.visibility = 'visible';
  document.querySelectorAll('a ')[0].style.visibility = 'visible';
  document.querySelector('.desktop-nav').style.display = 'none';
}document.querySelector('.mark').addEventListener('click', toggleNav);

for (let i = 0; i < showPage; i += 1) {
  document.querySelectorAll('.nav-item')[i].addEventListener('click', () => {
    document.querySelector('.page-content').style.visibility = 'visible';
    document.querySelectorAll('a ')[0].style.visibility = 'visible';
    document.querySelector('.desktop-nav').style.display = 'none';
    hamIcon.style.display = 'block';
    closeIcon.style.display = 'none';
  });
}
