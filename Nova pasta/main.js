const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {
    const posicaoY = Math.random() * (window.innerWidth - 100);
    const posicaoX = Math.random() * (window.innerHeight - 50);
    
    noBtn.style.position = "absolute";
    noBtn.style.left = `${posicaoX}px`;
    noBtn.style.top = `${posicaoY}px`;
});

yesBtn.addEventListener("click", () => {
    const container = 
    document.querySelector(".container");
    const textoNovo = document.createElement("p");
    textoNovo.textContent = "Obrigado!";
    textoNovo.classList.add("texto-novo");
    container.appendChild(textoNovo);

    setTimeout(() => {
        textoNovo.remove();
    },2000);
}
)

