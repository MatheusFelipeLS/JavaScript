//para usar a solução com o classList, tem que haver alteração no css para classe pausado
//ele colocaria o programa todo dentro de uma função para não ser mais global

function getTimeFromSeconds(ms) {
    const data = new Date(ms*1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    });
}

const relogio = document.querySelector(".relogio");
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const zerar = document.querySelector(".zerar");
let sec = 0;
let timer;

/*
//método alternativo - mais performático
não precisaria criar os botões também
document.addEventListener('click', function(e) {
    const el = e.target;
    if(el.classList.contains('zerar')) {
        //codigo para zerar
    } else if(el.classList.contains('pausar')) {
        //código para pausar
    } else if(el.classList.contains('iniciar')) {
        //código para iniciar
    }
})
*/

function iniciaRelogio() {
    timer = setInterval(function() {
        sec++;
        relogio.innerHTML = getTimeFromSeconds(sec);
    }, 1000);
}

iniciar.addEventListener('click', function(e) { 
    e.preventDefault();
    // relogio.classList.remove('.pausado');
    clearInterval(timer);
    relogio.style.color = 'black';
    iniciaRelogio();
});

pausar.addEventListener('click', function(e) {
    e.preventDefault();    
    //relogio.classList.('.pausado');
    clearInterval(timer);
    relogio.style.color = 'red';
});

zerar.addEventListener('click', function(e) {
    e.preventDefault();
    relogio.style.color = 'black';
    sec = 0;
    clearInterval(timer); 
    relogio.innerHTML = '00:00:00';
});