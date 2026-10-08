const lista = ['yellow', 'red', 'green', 'blue', 'purple']
let idovisszaszamlalo = 0;
let gomb_ido = 0;
let current_ido = 0;
const eredmeny = document.getElementById('meres')
document.getElementById('randomszam').addEventListener("click", () => {
    idovisszaszamlalo = Math.floor(Math.random() * 10000) + 5000;
    setTimeout(() => {
        document.body.style.backgroundColor = lista[Math.floor(Math.random() * lista.length)]
        gomb_ido = new Date() ;
    }, idovisszaszamlalo)

})
document.getElementById('stop').addEventListener("click", () => {
    let current_ido = new Date();
    document.getElementById('meres')
    eredmeny.textContent = current_ido - gomb_ido + "ms";
})