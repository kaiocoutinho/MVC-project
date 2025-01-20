// Validação se o usuário preencheu o input
document.querySelector("#buttonSubmitList").addEventListener("click", (ev) => {
    const inputValue = document.querySelector("#nameList").value
    if (inputValue == "") {
        alert("Dê um nome a essa Lista!")
        ev.preventDefault()
    }
});

