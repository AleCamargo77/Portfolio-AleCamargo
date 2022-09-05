// const btnMobile = document.getElementById('btn-mobile');

// function toggleMenu(event) {
//    if (event.type === 'touchstart') event.preventDefault();
//    const nav = document.getElementById('nav');
//    nav.classList.toggle('active');
//    const active = nav.classList.contains('active');
//    event.currentTarget.setAttribute('aria-expanded', active);
//    if (active) {
//      event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
//    } else {
//      event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
//    }
//  }

//  btnMobile.addEventListener('click', toggleMenu);
//  btnMobile.addEventListener('touchstart', toggleMenu);

const skills = document.querySelectorAll(".skill-box");
const description = document.querySelector(".text-description");
const aboutSkill = [
  "<p>HTML</p> <br> <p>Linguagem de marcação utilizada na construção de páginas Web.</p> <br>",
  "<p>CSS</p> <br> <p>Linguagem  de folha de estilos, amplamente utilizada com HTML.</p> <br>",
  "<p>JavaScript</p> <br> <p>Linguagem de programação que permite a criação de conteúdos dinâmicos, para deixar seu site mais interativo.</p> <br>",
  "<p>BoootStrap</p> <br> <p>Framework que fornece estruturas de CSS de forma rápida e simples.</p> <br>",
  "<p>SASS</p> <br> <p>Linguagem de extensão do CSS, com recursos especiais.</p> <br>",
  "<p>Github</p> <br> <p>É uma plataforma em nuvem que hospeda um sistema de controle de versão usando o Git. </p> <br>",
];

skills.forEach((elemento, index) => {
  let index1 = index;
  let elemento1 = elemento;
  elemento.addEventListener("mouseover", (evento) => {
    description.innerHTML = `<p>${aboutSkill[index1]} </p>`;
  });
  elemento.addEventListener("mouseout", (evento, elemento) => {
    description.innerHTML = "Passe o mouse por cima de alguma habilidade ";
  });
});

const year = document.getElementById("year");
const yearCurrent = new Date();
year.innerHTML = yearCurrent.getFullYear();
