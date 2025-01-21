
//função adicionar nome

let listaNomesNaTela = [];

function adicionarAmigo() 
{

let nomeAmigo = document.querySelector("input").value;
    if(nomeAmigo == '') 
        {
        alert('Por favor, insira um nome.');
        } else 
        { 
            listaNomesNaTela.push(nomeAmigo);
            console.log(listaNomesNaTela); 
            listarNomes();
        }
        
        limparCampo();
        
        
} 

//função para mostrar nomes na tela, incrementando o último elemento da listaAmigo
function listarNomes() 
{
    let listaAmigo  = document.getElementById("listaAmigos").innerHTML;  
    listaAmigo += "<li>"+listaNomesNaTela[listaNomesNaTela.length -1]+"</li>";          
    document.getElementById("listaAmigos").innerHTML = listaAmigo;  

} 


//função limpar campo após digitar o nome
function limparCampo() 
{
    nomeAmigo = document.querySelector("input");
    nomeAmigo.value = '';
}
