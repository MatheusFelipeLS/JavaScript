import GeraCpf from './modules/GeraCpf'
import './assets/css/style.css';

(function() {
    const gera = new GeraCpf();
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = gera.geraNovoCpf();
})();