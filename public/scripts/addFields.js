// Procura o botão e adiciona uma função para o clicar
document.querySelector("#add-time").addEventListener('click', cloneField);

function cloneField() {
    // Duplica os campos do .schedule-item
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true);

    // Limpar os campos clonados anteriormente
    const fields = newFieldContainer.querySelectorAll('input')
    fields.forEach(element => {
        element.value = "";
    });

    // Coloca a cópia na página no #schedule-items
    document.querySelector('#schedule-items').appendChild(newFieldContainer);
}