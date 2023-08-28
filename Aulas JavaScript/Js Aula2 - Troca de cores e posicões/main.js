const colorNames = ["Azul", "Verde", "Vermelho", "Amarelo", "Rosa"];
const colors = ["#007bff", "#28a745", "#dc3545", "#ffc107", "#e83e8c"];

function changeBackground() {
  const randomIndex = Math.floor(Math.random() * colorNames.length);
  const colorName = colorNames[randomIndex];
  const colorValue = colors[randomIndex];

  document.body.style.backgroundColor = colorValue;
  document.getElementById("colorName").textContent = colorName;
}

setInterval(changeBackground, 3000); // Altera a cada 3 segundos
changeBackground(); // Altera ao carregar a página

function animation(){
  document.getElementById("animation");
}
const animateButton = document.getElementById("animateButton");
const animatedElement = document.getElementById("animatedElement");

animateButton.addEventListener("click", () => {
    animatedElement.classList.toggle("active");
});






const escapeButton = document.getElementById("escapeButton");

escapeButton.addEventListener("mousemove", (e) => {
    const offsetX = (Math.random() - 4) * 100; // Ajusta a posição horizontal
    const offsetY = (Math.random() - 4) * 100; // Ajusta a posição vertical
    escapeButton.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
});

escapeButton.addEventListener("mouseout", () => {
    escapeButton.style.transform = "translate(-50%, -50%)"; 
});

const slideButton = document.getElementById("slideButton");
let isMoved = false;

slideButton.addEventListener("mouseover", () => {
    if (!isMoved) {
        slideButton.style.transform = "translateX(-100px)";
        isMoved = true;
    }
});

slideButton.addEventListener("mouseout", () => {
    if (isMoved) {
        slideButton.style.transform = "translateX(100px)";
        isMoved = false;
    }
});






