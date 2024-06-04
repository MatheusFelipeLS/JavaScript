//705.484.450-52

//x7 x0 x5 x4 x8 x4 x4 x5 x0
//10  9  8  7  6  5  4  3  2
//70 +0+40+28+48+20+16+15 +0 = 237

//11 - (237 % 11) = 5 (Primeiro dígito)
// se for maior que 9, é igual a zero

//x7 x0 x5 x4 x8 x4 x4 x5 x0 x5
//11 10  9  8  7  6  5  4  3  2
//77 +0+45+32+56+24+20+20 +0+10 = 284

//11 - (284 % 11) = 2 (Segundo dígito)

//cpf gerado == cpf dado? Sim, então CPF válido

function validaCPF(cpf) {
    //tudo que não for número será substituido e depois transforma em array
    let cpfLimpo = Array.from(cpf.replace(/\D+/g, '')); 
    
    //cria um array com o valor do indice 0 até o indice 9 e remove todos esses indices de cpfLimpo
    let digitosParaCalculo = cpfLimpo.splice(0, 9); 

    let dgtGerado = digitosParaCalculo.reduce(function(ac, valor, indice) {
        return ac + (Number(valor) * (10 - indice));
    }, 0);

    dgtGerado = 11 - (dgtGerado % 11);

    if(dgtGerado > 9) dgtGerado = 0;

    if(cpfLimpo[0] !== String(dgtGerado)) return false;

    digitosParaCalculo.push(String(dgtGerado));
    dgtGerado = digitosParaCalculo.reduce(function(ac, valor, indice) {
        return ac + (Number(valor) * (11 - indice));
    }, 0);

    dgtGerado = 11 - (dgtGerado % 11);

    if(dgtGerado > 9) dgtGerado = 0;

    if(cpfLimpo[1] === String(dgtGerado)) return true;
    return false;
}

console.log(validaCPF('705.484.450-52'));