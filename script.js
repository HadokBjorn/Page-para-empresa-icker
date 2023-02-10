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
                <input type="text" placeholder="E-mail"/>
                <input type="text" placeholder="Senha"/>
                <button id="login" onclick="loginAcess()" >Login</button>
            </div>
    `;
}
function loginAcess(){
    alert("Login realizado com sucesso")
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
    alert('Cadastro realizado com sucesso');
}