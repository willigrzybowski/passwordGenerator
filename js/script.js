console.log("Hello World!");
//criação das váriaveis recebendo os valores da pagina
var sliderElement = document.querySelector("#slider");
var buttonElement = document.querySelector("#btn");

var sizePassword = document.querySelector("#value");
var password = document.querySelector("#password");

var containerPassword = document.querySelector("#container-password");

//variavel charset para definir os caracteres para senha e a variavel novaSenha
var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@"
var novaSenha = null;


sizePassword.innerHTML = sliderElement.value; 

//function com objetivo de mudar o numero de caracteres no span ao modificar o "input range"
slider.oninput = function(){
    sizePassword.innerHTML = this.value;
}

function generatePassword(){
    
    var pass = "";
    //esse laço de repetição vai adicionar caracteres aleatorios a senha até a variavel i ser maior que o valor do slider
    for(var i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n));
    }
    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;
}

//function para copiar a senha
function copyPassword(){
    alert("Senha copiada!");
    navigator.clipboard.writeText(novaSenha);

}