async function buscaEndereco(cep){
    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";

    try{
        var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultacepConvertida = await consultaCep.json();
        
        if (consultacepConvertida.erro){
            throw Error('Cep não existente');
        }
        var cidade = document.getElementById('cidade');
        var logradouro = document.getElementById('endereco');
        var estado = document.getElementById('estado');
        
        cidade.value = consultacepConvertida.localidade;
        logradouro.value = consultacepConvertida.logradouro;
        estado.value = consultacepConvertida.uf;

        console.log(consultaCep);
        return consultacepConvertida;
    } catch(erro){
        mensagemErro.innerHTML = `<p>Cep inválido, tente novamente!</p>`
        console.log(erro);
    }

}

var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value));

