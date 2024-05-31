let num = Number(prompt("Digite um número: "));

const numeroTitulo = document.getElementById('numero-titulo');
numeroTitulo.innerHTML = num;
document.body.innerHTML += `A raiz do seu número é: ${(num ** 0.5)}<br />`;
document.body.innerHTML += `O seu número é inteiro? ${Number.isInteger(num)}<br />`;
document.body.innerHTML += `O seu número é inteiro? ${Number.isNaN(num)}<br />`;
document.body.innerHTML += `O seu número arredondado para cima é: ${Math.ceil(num)}<br />`;
document.body.innerHTML += `O seu número arredondado para baixo é: ${Math.floor(num)}<br />`;
document.body.innerHTML += `O seu número com duas casas decimais é: ${num.toFixed(2)}<br />`;