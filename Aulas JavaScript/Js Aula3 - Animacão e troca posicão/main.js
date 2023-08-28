const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {
  const posicaoX = Math.random() * (window.innerWidth - 100); // Nova posição horizontal
  const posicaoY = Math.random() * (window.innerHeight - 50); // Nova posição vertical
  
  noBtn.style.position = "absolute";
  noBtn.style.left = `${posicaoX}px`;
  noBtn.style.top = `${posicaoY}px`;
});

yesBtn.addEventListener("click", () => {
    const container = document.querySelector(".container");
    const thankYouText = document.createElement("p");
    thankYouText.textContent = "Obrigado!";
    thankYouText.classList.add("thank-you-text");
    container.appendChild(thankYouText);
  
    setTimeout(() => {
      thankYouText.remove();
    }, 2000); 
  });
