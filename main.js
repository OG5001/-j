function hatterszin() {
    document.body.style.backgroundColor = 'green';
}
const idob = document.getElementById('ido')
setTimeout(hatterszin, 2000)
document.body.style.backgroundColor = 'pink';
const idoAzonosito = setInterval(() => {idob.textContent = new Date().toLocaleString();}, 1000)

document.getElementById("megfagy").addEventListener("click", () => {
    setTimeout(() => {
        document.body.style.color = 'yellow';
    }, 1000)
})

document.getElementById('stop').addEventListener("click", () => {
    clearInterval(idoAzonosito);
})