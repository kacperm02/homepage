let body = document.querySelector(".body");
let button = document.querySelector(".js-changeColorButton");

button.addEventListener("click", () => {
    body.classList.toggle("darkBackground");
    button.innerText = body.classList.contains('darkBackground') ? "Zmień na jasny motyw" : "Zmień na ciemny motyw";
})

