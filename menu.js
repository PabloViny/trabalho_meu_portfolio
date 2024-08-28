window.addEventListener("scroll", function(){
    let header = this.document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 0)
});

const btn = document.getElementById('btn-enviar');

btn.addEventListener('click', function() {
    alert("Mensagem Enviada com sucesso. Obrigado por entrar em contato!")
});