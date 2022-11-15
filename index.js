// alert('welcome');
const expand = document.querySelector(".fa-bars").addEventListener("click", expandNav);
const collapse = document.querySelector(".fa-xmark").addEventListener("click", toggleNav);
const hamIcon = document.querySelector(".fa-bars");
const closeIcon = document.querySelector(".fa-xmark");
const showPage = document.querySelectorAll(".nav-item").length;

function expandNav() {
    hamIcon.style.display = "none";
    closeIcon.style.display = "block";
    document.querySelector(".page-content").style.visibility = "hidden";
    document.querySelectorAll("a ")[0].style.visibility = "hidden";
    document.querySelector(".desktop-nav").style.display = "block";
}

function toggleNav() {
    hamIcon.style.display = "block";
    closeIcon.style.display = "none";
    document.querySelector(".page-content").style.visibility = "visible";
    document.querySelectorAll("a ")[0].style.visibility = "visible";
    document.querySelector(".desktop-nav").style.display = "none";
}

for (let i = 0; i < showPage; i++) {
    document.querySelectorAll(".nav-item")[i].addEventListener("click", () => {
        document.querySelector(".page-content").style.visibility = "visible";
        document.querySelectorAll("a ")[0].style.visibility = "visible";
        document.querySelector(".desktop-nav").style.display = "none";
        hamIcon.style.display = "block";
        closeIcon.style.display = "none";
    });
}
