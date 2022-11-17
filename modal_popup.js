// const viewProject = document.querySelectorAll(".btn").length;
const myWorks = [
  {
    image: 'images/project_image.svg',
    title: ['Multi-Post Stories   Gain+Glory', ' Keeping track of hundreds of components'],
    language: ['Ruby on rails', 'Css', 'JavaScript', 'html'],
    techstacks: ['CodeKit', 'GitHub', 'BootStrap', 'Terminal', 'Codepen'],
    buttons: 'See project',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  },

  {
    image: 'images/project_image.svg',
    title: ['Multi-Post Stories   Gain+Glory', ' Keeping track of hundreds of components'],
    language: ['Ruby on rails', 'Css', 'JavaScript', 'html'],
    techstacks: ['CodeKit', 'GitHub', 'BootStrap', 'Terminal', 'Codepen'],
    buttons: 'See project',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  },
  {
    image: 'images/project_image.svg',
    title: ['Multi-Post Stories   Gain+Glory', ' Keeping track of hundreds of components'],
    language: ['Ruby on rails', 'Css', 'JavaScript', 'html'],
    techstacks: ['CodeKit', 'GitHub', 'BootStrap', 'Terminal', 'Codepen'],
    buttons: 'See project',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  },
  {
    image: 'images/project_image.svg',
    title: ['Multi-Post Stories   Gain+Glory', ' Keeping track of hundreds of components'],
    language: ['Ruby on rails', 'Css', 'JavaScript', 'html'],
    techstacks: ['CodeKit', 'GitHub', 'BootStrap', 'Terminal', 'Codepen'],
    buttons: 'See project',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  },
  {
    image: 'images/project_image.svg',
    title: ['Multi-Post Stories   Gain+Glory', ' Keeping track of hundreds of components'],
    language: ['Ruby on rails', 'Css', 'JavaScript', 'html'],
    techstacks: ['CodeKit', 'GitHub', 'BootStrap', 'Terminal', 'Codepen'],
    buttons: 'See project',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  },

  {
    image: 'images/project_image.svg',
    title: ['Multi-Post Stories   Gain+Glory', ' Keeping track of hundreds of components'],
    language: ['Ruby on rails', 'Css', 'JavaScript', 'html'],
    techstacks: ['CodeKit', 'GitHub', 'BootStrap', 'Terminal', 'Codepen'],
    buttons: 'See project',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  },
];

const recentWorks = document.querySelector('.grid-container');

recentWorks.innerHTML += myWorks
  .map(
    (project) => `
      <div class="card-flex">
        <div class="project-image" src='${project.image}' ></div>
        <div class="description">
          <h2 class="new">${project.title[0]}</h2>
          <ul class="list p-lang">
          ${project.language
    .map(
      (technology) => `<li>
              <button class="btn-btn" type="">${technology}</button>
            </li>
          `,
    )
    .join('')}
          </ul>
          <div class="sec2-btn">
            <button class="screen-xl btn view" type="button">
              ${project.buttons}
            </button>
          </div>
    </div>
  </div>
  `,
  )
  .join('');

// modalPopup
const modal = document.querySelector('#modal');
const viewProj = document.querySelectorAll('.btn');

let popup = myWorks.map(
  (modalPopup) => `
  
  <div id="overlay">
          <div class="modal-card">
            <div class="collapse-modal">
              <a class="default"><i class="fa-sharp fa-solid fa-xmark"></i></a>
            </div>
            <div class="modal-img" src='${modalPopup.image
}' alt=" thumbnail-image">
            </div>
            <div class="modal-body">
              <div class="modal-content">
                <div class="modal-header">
                  <h2 class="modal-title">${modalPopup.title[1]}</h2>
                  <div class="tech-badges">
                    <ul class="list p-lang mod-badge">
                    ${modalPopup.language
    .map(
      (technology) => `
                    <li class="btn-btn"> ${technology}</li>
                    `,
    )
    .join('')}
                    </ul>
                  </div>
                </div>

                <div class="modal-text">
                  <p>${modalPopup.description}</p>
                </div>
              </div>
              <div class="modal-buttons">
                <a href="https://admirerbrown.github.io/portfolio/"><button class="btn">See Live<img
                      src="images/btn_icon.svg" alt="link to live demo page "></button></a>
                <a href="https://github.com/admirerbrown/portfolio"><button class="btn">See Source<img
                      src="images/Icon -GitHub.svg" alt="link to project source code on github"></button></a>
              </div>
            </div>
          </div>
        </div>
  `,
);

function collapseModal() {
  const closeToggle = document.querySelector('.collapse-modal');
  const mod = document.querySelector('#overlay');
  closeToggle.addEventListener('click', () => {
    mod.remove();
  });
}

viewProj.forEach((button, index) => button.addEventListener('click', () => {
  if (window.innerWidth > 768) {
    popup = myWorks.map(
      (modalPopup) => `
  
  <div id="overlay">
          <div class="modal-card">
            <div class="collapse-modal">
              <a class="default"><i class="fa-sharp fa-solid fa-xmark"></i></a>
            </div>
            <div class="modal-img" src='${modalPopup.image
}' alt=" thumbnail-image">
            </div>
            <div class="modal-body">
              <div class="modal-content">
                <div class="modal-header">
                  <h2 class="modal-title">${modalPopup.title[1]}</h2>
                  <div class="tech-badges">
                    <ul class="list p-lang mod-badge">
                    ${modalPopup.techstacks
    .map(
      (technology) => `
                    <li class="btn-btn"> ${technology}</li>
                    `,
    )
    .join('')}
                    </ul>
                  </div>
                </div>

                <div class="modal-text">
                  <p>${modalPopup.description}</p>
                </div>
              </div>
              <div class="modal-buttons">
                <a href="https://admirerbrown.github.io/portfolio/"><button class="btn">See Live<img
                      src="images/btn_icon.svg" alt="link to live demo page "></button></a>
                <a href="https://github.com/admirerbrown/portfolio"><button class="btn">See Source<img
                      src="images/Icon -GitHub.svg" alt="link to project source code on github"></button></a>
              </div>
            </div>
          </div>
        </div>
  `,
    );
  }
  modal.innerHTML += popup[index];
  collapseModal();
}));
