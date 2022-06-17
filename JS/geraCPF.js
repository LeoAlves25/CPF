let CPFgerado = document.querySelector('#cpf-gerado')

document.getElementById('gerar-cpf').addEventListener('click', ()=>{
    const CPF = new CriaCPF(sortearCPF())
    CPFgerado.innerHTML = CPF.geraCPF()
})

function sortearCPF(min=100000000, max=999999999){
    let cpfSorteado = String(Math.floor(Math.random()*(max-min)+min-1))
    return cpfSorteado;
}

class CriaCPF{
    constructor(cpfEnviado){
        Object.defineProperty(this, 'cpfEnviado', {
            writable: false,
            enumerable: false,
            configurable: false,
            value: cpfEnviado
        })
    }

    geraDigito(cpfEnviado){
        let total = 0
        let reverso = cpfEnviado.length+1

        for(let stringNumerica of cpfEnviado){
            total+=reverso*Number(stringNumerica)
            reverso--;
        }

        const digito = 11 - (total%11)
        return digito <= 9 ? String(digito) : '0'
    }

    geraCPF(){
        const cpfEnviado = this.cpfEnviado
        const digito1 = this.geraDigito(cpfEnviado)
        const digito2 = this.geraDigito(cpfEnviado+digito1)
        let cpfGerado = cpfEnviado+digito1+digito2
        return (cpfGerado.slice(0,3) + "." +
        cpfGerado.slice(3,6) + "." +
        cpfGerado.slice(6, 9) + "-" +
        cpfGerado.slice(9,11))
    }
}