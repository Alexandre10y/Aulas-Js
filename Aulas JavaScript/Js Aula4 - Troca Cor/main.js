const colorNames = [
"Azul", 
"Verde",
"Vermelho", 
"Amarelo",
"Rosa"];
const colors = [
"#007bff",
"#28a745",
"#dc3545",
"#ffc107",
"#e83e8c"];

function changeBackground(){
    const randomIndex = 
    Math.floor(Math.random() *
    colorNames.length);

    const colorName = 
    colorNames[randomIndex];

    const colorValue = 
    colors[randomIndex]; 

    document.body.style.backgroundColor = 
    colorValue;

    document.getElementById("colorName").textContent = colorName;
}
setInterval(changeBackground,2000);
changeBackground();
