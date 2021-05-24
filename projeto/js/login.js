const EMAIL = "admin@admin.com";
const SENHA = "123";


function logar(){

    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    if(email.toLowerCase() == EMAIL && senha == SENHA){
        window.open("index.html", "_self");
    }else{
        alert("Usuário ou senha inválidos.");
    }
}