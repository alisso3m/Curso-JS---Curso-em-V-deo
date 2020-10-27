function carregar() { // será chamado no arquivo HTML em: <body onload = "carregar()">
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são <strong>${hora} Horas.</strong>`
    if (hora >= 0 && hora < 12) {
        // BOA DIA!
        img.src= 'manha.jpg' // pega a imagem para cada horario
        document.body.style.background = '#FFAB0F' // altera a cor do funco
    } else if (hora >= 12 && hora <= 18){
        // BOA TARDE!
        img.src= 'tarde.jpg'
        document.body.style.background = '#FFC512'
    }else{
        // BOA NOITE!
        img.src= 'noite.jpg'
        document.body.style.background = '#040348'
    }
}