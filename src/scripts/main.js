document.addEventListener('DOMContentLoaded', function(){
    let horaAtual = new Date().getHours()
    let mensagemDoDia = document.getElementById('hora-do-dia')
    let formulario = document.getElementById('nome-usuario')
    
    if (horaAtual >= 0 && horaAtual <= 5){
        mensagemDoDia.innerText = 'Boa madrugada'
    }
    else if (horaAtual >= 6 && horaAtual <= 11){
        mensagemDoDia.innerText = 'Bom dia'
    }
    else if (horaAtual >= 12 && horaAtual <= 17){
        mensagemDoDia.innerText = 'Boa tarde'
    }
    else{
        mensagemDoDia.innerText = 'Boa noite'
    }

    formulario.addEventListener('submit', function(evento){
        evento.preventDefault()
        let nomeUsuario = document.getElementById('nome').value
        let saudacoes = document.getElementById('mensagem-resultado')

        saudacoes.innerHTML = `${nomeUsuario}, seu nome é muito bonito! <br>
        Sucesso para você e sua família! <br>
        ${mensagemDoDia.innerText} &#x1F60A`
        saudacoes.style.display = 'block'
    })
})
