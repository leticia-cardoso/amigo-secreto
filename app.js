
//Funcionalidades:
//Adicionar nomes: Os usuários escreverão o nome de um amigo em um campo de texto e o adicionarão a uma lista visível ao clicar em "Adicionar".
//Validar entrada: Se o campo de texto estiver vazio, o programa exibirá um alerta solicitando um nome válido.
//Visualizar a lista: Os nomes inseridos aparecerão em uma lista abaixo do campo de entrada.
//Sorteio aleatório: Ao clicar no botão "Sortear Amigo", um nome da lista será selecionado aleatoriamente e exibido na página.



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
