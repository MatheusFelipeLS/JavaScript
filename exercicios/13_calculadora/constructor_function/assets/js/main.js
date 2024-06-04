function Calculadora() {
    this.display = document.querySelector('.display'); 

    this.capturaCliques = () => {
        document.addEventListener('click', e => {
            const el = e.target;
            if(el.classList.contains('btn-num')) this.addNumDisplay(el);
            if(el.classList.contains('btn-clear')) this.clearDisplay();
            if(el.classList.contains('btn-del')) this.deleteOne();
            if(el.classList.contains('btn-eq')) this.operate();
        });
    };

    this.addNumDisplay = el => {
        this.display.value += el.innerText;
        this.display.focus();
    };

    this.clearDisplay = () => this.display.value = '';
    this.deleteOne = () => this.display.value = this.display.value.slice(0, -1);

    this.operate = () => {
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
    };

    this.capturaEnter = () => {
        document.addEventListener('keypress', function(e) {
            if(e.keyCode === 13) {
                this.operate();
            }
        }.bind(this));
    },

    this.inicia = () => {
        this.capturaCliques();
        this.capturaEnter();
    };
}

const calculadora = new Calculadora();
calculadora.inicia();