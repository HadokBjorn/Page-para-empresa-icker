function goToFacebook(){
    window.location.href = ('https://pt-br.facebook.com/');
}
function goToInstagram(){
    window.location.href = ('https://www.instagram.com/');
}
function goToWhatsapp(){
    window.location.href = ('https://www.whatsapp.com/?lang=pt_br');
}

function login(){
    document.querySelector(".cadastro").style.display = 'none';
    const container = document.querySelector(".cadastro-login");
    container.innerHTML += `
            <div class="login">
                <h1>Login</h1>
                <input id="login-email" type="email" placeholder="E-mail"/>
                <input id="login-senha" type="password" placeholder="Senha"/>
                <button id="login" onclick="loginAcess()" >Login</button>
            </div>
    `;
}
function loginAcess(){
    const email = document.getElementById('login-email').value;
    const senha = document.getElementById('login-senha').value;
    const isEmail = validEmail(email);
    if(email !== '' && senha !== '' && isEmail){
        alert("Login realizado com sucesso");
    }else{
        alert("Preencha os campos com seu email e senha");
    }
}
function sendMessageSuport(){
    alert("Mensagem enviada, em breve entraremos em contato!")
}
function menuDropdown(){
    const menu = document.querySelector('header #menu ul');
    
    if(menu.style.display !== 'block'){
        menu.style.display = 'block';
    }else{
        menu.style.display = 'none';
    }
}
function cadastro() {
    const nomeValue = document.getElementById("cadastro-nome").value;
    const emailValue = document.getElementById("cadastro-email").value;
    const telefoneValue = document.getElementById("cadastro-telefone").value;
    const senhaValue = document.getElementById("cadastro-senha").value;

    const nome = isEmpty(nomeValue);
    const email = isEmpty(emailValue);
    const telefone = isEmpty(emailValue);
    const senha = isEmpty(emailValue);
    const isEmail = validEmail(emailValue);

    if(nome && email && telefone && senha && isEmail) {
        alert("Cadastro realizado com sucesso");
    }else if(isEmail===false) {
        alert("Preencha com um email válido");
    }else{
        alert("Todos os campos devem ser preenchidos");
    }
}
function validPassword(pass){
    if (pass.length >= 8 && pass.length <= 20){
        return true;
    }else{
        return false;
    }
}
function validEmail(email) {
    const texto = /\S+@\S+\.\S+/;
    return texto.test(email);
}
function isEmpty(text){
    if(text !== ''){
        return true;
    }else{
        return false;
    }
}