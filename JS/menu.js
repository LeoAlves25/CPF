document.getElementById('geradorCPF').style.display='none'
document.getElementById('validadorCPF').style.display='none'

document.getElementById('gerador-cpf').addEventListener('click', ()=>{
    document.getElementById('geradorCPF').style.display='block'
    document.getElementById('validadorCPF').style.display='none'
    document.getElementById('menu').style.display='none'
})
document.getElementById('gerador-cpf-menu').addEventListener('click', ()=>{
    document.getElementById('geradorCPF').style.display='block'
    document.getElementById('validadorCPF').style.display='none'
    document.getElementById('menu').style.display='none'
})

document.getElementById('validador-cpf').addEventListener('click', ()=>{
    document.getElementById('menu').style.display='none'
    document.getElementById('geradorCPF').style.display='none'
    document.getElementById('validadorCPF').style.display='block'
})
document.getElementById('validador-cpf-menu').addEventListener('click', ()=>{
    document.getElementById('menu').style.display='none'
    document.getElementById('geradorCPF').style.display='none'
    document.getElementById('validadorCPF').style.display='block'
})