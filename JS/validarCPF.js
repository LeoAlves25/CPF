const resultado = document.querySelector('#resultado-validacao')

class ValidaCPF{
    constructor(cpfEnviado){
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: false,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        });
    }

    sequencia(){
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }

    geraCpf(){
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
        const digito1 = this.geraDigito(cpfSemDigitos);
        const digito2 = this.geraDigito(cpfSemDigitos+digito1);
        this.novoCPF = cpfSemDigitos + digito1 + digito2;
    }

    geraDigito(cpfSemDigitos){
        let total=0;
        let reverso=cpfSemDigitos.length+1;

        for(let stringNumerica of cpfSemDigitos){
            total += reverso * Number(stringNumerica);
            reverso--;
        }

        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';
    }

    valida(){
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.sequencia()) return false;
        this.geraCpf()
        return this.novoCPF === this.cpfLimpo;
    }
}

document.getElementById('validar-cpf').addEventListener('click',()=>{
    const solicitaCPF = document.querySelector('#informador').value

    const CPF = new ValidaCPF(solicitaCPF)

    if(CPF.valida()){
        resultado.innerHTML='C.P.F. é válido!'
        resultado.style.color = 'green'
    }else{
        resultado.innerHTML='C.P.F. é inválido!'
        resultado.style.color = 'red'
    }
})