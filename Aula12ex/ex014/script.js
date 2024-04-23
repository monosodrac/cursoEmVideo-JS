function carregar() {
    var msg = document.querySelector('div#msg');
    var img = document.getElementById('imagem');
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!!
        img.src = 'fotomanha.png'
        document.body.style.background = '#f4c8af'
    } else if (hora >= 12 && hora < 19) {
        img.src = 'fototarde.png'
        document.body.style.background = '#ffa001'
    } else {
        img.src = 'fotonoite.png'
        document.body.style.background = '#012f72'
    }
}