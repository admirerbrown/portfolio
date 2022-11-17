const viewProject = document.querySelectorAll('.btn').length;
const myWorks = [
  {
    image: 'images/project_image.svg',
    title: 'Multi-Post Stories   Gain+Glory',
    language: ['Ruby on rails', 'Css', 'JavaScript', 'html'],
    buttons: 'See project',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea"
  },
  {
    image: 'images/project_image.svg',
    title: 'Multi-Post Stories  Gain+Glory',
    language: ['Ruby on rails', 'Css', 'JavaScript', 'html'],
    buttons: 'See project',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea"
  },
  {
    image: 'images/project_image.svg',
    title: 'Multi-Post Stories  Gain+Glory',
    language: ['Ruby on rails', 'Css', 'JavaScript', 'html'],
    buttons: 'See project',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea"
  },
  {
    image: 'images/project_image.svg',
    title: 'Multi-Post Stories  Gain+Glory',
    language: ['Ruby on rails', 'Css', 'JavaScript', 'html'],
    buttons: 'See project',
    description: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea"
  },
  {
    image: 'images/project_image.svg',
    title: 'Multi-Post Stories  Gain+Glory',
    language: ['Ruby on rails', 'Css', 'JavaScript', 'html'],
    buttons: 'See project',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea"
  },
  {
    image: 'images/project_image.svg',
    title: 'Multi-Post Stories  Gain+Glory',
    language: ['Ruby on rails', 'Css', 'JavaScript', 'html'],
    buttons: 'See project',
    description: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea"
  },
];

const recentWorks = document.querySelector('.grid-container');

recentWorks.innerHTML += myWorks.map((project) => `
      <div class="card-flex">
        <div class="project-image" src='${project.image}' ></div>
        <div class="description">
          <h2 class="new">${project.title}</h2>
          <ul class="list p-lang">
          ${project.language.map((technology) =>
  `<li>
              <button class="btn-btn" type="">${technology}</button>
            </li>
          `).join('')}
          </ul>
          <div class="sec2-btn">
            <button class="screen-xl btn view" type="button">
              ${project.buttons}
            </button>
          </div>
    </div>
  </div>
  `).join('');

for (let k = 0; k < viewProject; k += 1) {
  document.querySelectorAll('.btn')[k].addEventListener('click', () => {
    document.querySelector('#mobile-popUp').style.display = 'block';
    document.querySelector('.grid-container').style.filter = 'blur(8px)';
  });
}