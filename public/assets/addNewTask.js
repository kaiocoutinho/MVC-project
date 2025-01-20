// Validação se o usuário preencheu o input
document.querySelector("#buttonAddTask").addEventListener("click" , (ev) => {
    const inputValue = document.querySelector("#newTask").value
    if(inputValue == ""){
        alert("Informe uma Tarefa a ser adicionada!");
        ev.preventDefault()

    }
    
})