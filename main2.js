const lista = ['yellow', 'red', 'green', 'blue', 'purple']
document.body.style.backgroundColor = lista[Math.floor(Math.random() * lista.length)]

const szinvaltozas = setInterval(() => {
    document.body.style.backgroundColor = lista[Math.floor(Math.random() * lista.length)]
}, 10000)
document.getElementById('megallitas').addEventListener("click", () => {
    clearInterval(szinvaltozas);
})