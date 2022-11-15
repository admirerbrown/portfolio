// alert('welcome');
const expand = document.querySelector(".fa-bars").addEventListener("click", expandNav);
const collapse = document.querySelector(".mark").addEventListener("click", toggleNav);
const hamIcon = document.querySelector(".fa-bars");
const closeIcon = document.querySelector(".mark");
const showPage = document.querySelectorAll(".nav-item").length;

function expandNav() {
    hamIcon.style.display = "none";
    closeIcon.style.display = "block";
    closeIcon.style.color = "#67798e";
    document.querySelector(".page-content").style.visibility = "hidden";
    document.querySelectorAll("a ")[0].style.visibility = "hidden";
    document.querySelector(".desktop-nav").style.display = "block";
}

function toggleNav() {
    hamIcon.style.display = "block";
    closeIcon.style.display = "none";
    closeIcon.style.color = "#67798e";
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
