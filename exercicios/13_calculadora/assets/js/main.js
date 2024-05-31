function criaCalculadora() {
    return {
        display: document.querySelector('.display'),

        inicia() {
            this.cliqueBotoes();
            this.pressEnter();
        },

        pressEnter() {
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13) {
                    this.operate();
                }
            });
        },

        clearDisplay() {
            this.display.value = '';
        },

        deleteOne() {
            this.display.value = this.display.value.slice(0, -1);
        },

        operate() {
            let conta = this.display.value;
            
            try {
                conta = eval(conta);
                if(!conta) {
                    alert("Conta inválida");
                    return;
                }

                this.display.value = String(conta);
            } catch(e) {
                alert("Conta inválida");
                return;
            }
        },

        cliqueBotoes() {
            document.addEventListener('click', function(e) {
                const el = e.target;
                if(el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')) {
                    this.deleteOne();
                }

                if(el.classList.contains('btn-eq')) {
                    this.operate();
                }
            }.bind(this)); 
            //sem o bind, o this vai se referir a document, que foi quem chamou a função. 
            //Se fosse uma arrow function, o this se refere a calculadora e não a document. É um meio alternativo
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        },
    }
}

const calculadora = criaCalculadora();
calculadora.inicia();