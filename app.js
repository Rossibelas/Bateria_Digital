function tocarSom(){
    const codigoLetra = e.keyCode;
    const audio = document.querySelector(`audio[data-tecla="${codigoLetra}"]`)
    if(!audio) return
    
    const tecla = document.querySelector(`div[data-tecla="${codigoLetra}"]`)
    tecla.classList.add("tocando")
    audio.currenTime = 0
    audio.play()
}

function removeClasse(e){
    if(e.propertyName !== 'transform') return
    e.targert.classList.remove('tocando')
}


const todasTeclas = Array.from(document.querySelectorAll('.tecla'))
todasTeclas.forEach(tecla => tecla.addEventListener('transitionend', removeClasse))
window.addEventListener("keydown",tocarSom)