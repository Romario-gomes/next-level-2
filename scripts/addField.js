// procurar o botao.
document.querySelector("#add-time").addEventListener('click', cloneField)
//quando clicar no botao.
// executar uma acao.
function cloneField() {
    //duplicar a acao.
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    
    //pegar os campos
    const fields = newFieldContainer.querySelectorAll('input')
    // para cada campo, limpar
    fields.forEach(function (field){
        //pega o field atual e limpa
        field.value = ""
    })
    //colocar na pagina.
    document.querySelector('#schelude-items').appendChild(newFieldContainer)
}


