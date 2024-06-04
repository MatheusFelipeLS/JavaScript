class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario'); //links o formulário do html a uma variavel do js
        this.eventos(); 
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(e) {
        e.preventDefault(); //não deixa recarregar a página
        const validFields = this.checkFields();
        const validPassword = this.checkPassword();

        if(validFields && validPassword) {
            alert('Form enviado');
            this.formulario.submit();
        }
    }

    checkPassword() {
        let valid = true;
        
        const password = this.formulario.querySelector('.senha');
        const repeatedPassword = this.formulario.querySelector('.repetir-senha');
        
        if(password.value !== repeatedPassword.value) {
            valid = false;
            this.createError(password, 'Campos senha e repetir senha precisam ser iguais.');
            this.createError(repeatedPassword, 'Campos senha e repetir senha precisam ser iguais.');
        }

        if(password.value.length < 6 || password.value.length > 12) {
            valid = false;
            this.createError(password, 'O campo senha precisa ter entre 6 e 12 caracteres.');
        }

        return valid;
    }

    checkFields() {
        let valid = true; //sinaliza se tem algum campo inválido

        //limpa as mensagens de erro da tela
        for(let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        //adiciona as mensagens de erro existentes no novo envio do formulário
        for(let field of this.formulario.querySelectorAll('.validar')) {
            //'pega' o irmão anterior ao input, no arquivo html (nesse caso, é o campo label)
            let label = field.previousElementSibling.innerText; 
            //verifica se o campo está vazio
            if(!field.value) { 
                this.createError(field, `Campo "${label}" não pode estar em branco.`);
                valid = false;
            }

            if(field.classList.contains('cpf')) {
                if(!this.validaCpf(field)) valid = false;
            }

            if(field.classList.contains('usuario')) {
                if(!this.validausuario(field)) valid = false;
            }
        }

        return valid; 
    }

    validausuario(field) {
        const usuario = field.value;
        let valid = true;
        if(usuario.length < 3 || usuario.length > 12) {
            this.createError(field, `Campo "Usuário" precisa ter entre 3 e 12 caracteres.`);
            valid =  false;
        }
        if(!usuario.match(/^[a-zA-Z0-9]+$/g)) {
            this.createError(field, `Campo "Usuário" precisa conter apenas letras e/ou números.`);
            valid =  false;
        }

        return valid;
    }

    validaCpf(field) {
        const cpf = new ValidaCPF(field.value);
        if(!cpf.valida()) {
            this.createError(field, `Campo "CPF" inválido.`);
            return false;
        }
        return true;
    }

    createError(field, msg) {
        //cria uma div com a mensagem de erro
        const div = document.createElement('div');
        div.innerText = msg;
        div.classList.add('error-text');
        field.insertAdjacentElement('afterend', div);
    }
}

const valida = new ValidaFormulario();