import geraSenha from "./geradores";

const senha_gerada = document.querySelector('.senha-gerada');
const qtd_caracteres = document.querySelector('.qtd-caracteres');
const chk_maiusculas = document.querySelector('.chk-maiusculas');
const chk_minusculas = document.querySelector('.chk-minusculas');
const chk_numeros = document.querySelector('.chk-numeros');
const chk_simbolos = document.querySelector('.chk-simbolos');
const gerar_senha = document.querySelector('.gerar-senha');

export default () => {
    gerar_senha.addEventListener('click', () => {
        senha_gerada.innerHTML = gera();
    });
};

function gera() {
    const senha = geraSenha(
        qtd_caracteres.value,
        chk_maiusculas.checked,
        chk_minusculas.checked,
        chk_numeros.checked,
        chk_simbolos.checked    
    )   
    return senha || 'Nada selecionado.';
}