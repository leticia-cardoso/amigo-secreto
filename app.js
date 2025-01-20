
//função adicionar nome

let listaNomes = [];

function adicionarAmigo() 
{

let nomeAmigo = document.querySelector("input").value;
    if(nomeAmigo == '') 
        {
        alert('Por favor, insira um nome.');
        } else 
        {
            listaNomes.push(nomeAmigo);
            console.log(listaNomes);  
        } limparCampo();

} 

//função limpar campo após digitar o nome
function limparCampo() 
{
    nomeAmigo = document.querySelector("input");
    nomeAmigo.value = '';
}
