const list = document.querySelectorAll('.show');
const buttons = document.querySelectorAll('span');

function toggle() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", () => {
            if (!list[i].classList.contains("hide-content")){
                list[i].classList.add("hide-content")
                buttons[i].textContent = "Mostrar"
            } else {
                list[i].classList.remove("hide-content")
                buttons[i].textContent = "Esconder"
            }
        })
    }
}

toggle()