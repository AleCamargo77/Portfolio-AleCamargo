const root = document.querySelector(":root");
const moon = document.getElementById("moon");
const light = document.getElementById("light");
const main = document.querySelector("main");

moon.style.display = "none";
light.style.display = "block";

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

function upButton() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

function showHideButton() {
  if (window.scrollY === 0) {
    document.querySelector(".upbutton").style.display = "none";
  } else {
    document.querySelector(".upbutton").style.display = "block";
  }
}

window.addEventListener("scroll", showHideButton);

document.getElementById("themes").addEventListener("click", function () {
  if (main.dataset.info === "black") {
    root.style.setProperty("--bgd-color-primary", "#BDBDBD");
    root.style.setProperty("--bgd-color-secondary", "#A9A9A9");
    root.style.setProperty("--color-white", "#000");
    moon.style.display = "block";
    light.style.display = "none";
    main.dataset.info = "light";
  } else {
    root.style.setProperty("--bgd-color-primary", "#272727");
    root.style.setProperty("--bgd-color-secondary", "#121212");
    root.style.setProperty("--color-white", "#fff");
    moon.style.display = "none";
    light.style.display = "block";
    main.dataset.info = "black";
  }
});

document.getElementById("theme").addEventListener("click", function () {
  if (main.dataset.theme === "dark") {
    root.style.setProperty("--bg-color", "#fff");
    root.style.setProperty("--font-color", "#000");
    root.style.setProperty("--primary-color", "#855b0e");
    moon.style.display = "block";
    light.style.display = "none";
    main.dataset.theme = "light";
  } else {
    root.style.setProperty("--bg-color", "#333");
    root.style.setProperty("--font-color", "#fff");
    root.style.setProperty("--primary-color", "#fbab18");
    moon.style.display = "none";
    light.style.display = "block";
    main.dataset.theme = "dark";
  }
});
