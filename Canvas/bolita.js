const dib = document.getElementById("canva");
const ctx = dib.getContext("2d");

let dirX = 1;
let dirY = 1;

let idX = 0;
let idY = 0;

let ini = 0;

function hslColor(h){
    return `hsl(${ h }, 50%, 50%)`;
}

function bolita(x, y) {
    ctx.fillStyle = hslColor(ini);
    ini += 18;
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
}

function cuadrito(x, y){
    ctx.fillStyle = hslColor(ini);
    ini += 2;
    ctx.fillRect(x, y, 40, 40);
    ctx.strokeRect(x, y, 40, 40);
}

function emijo(x, y){
    ctx.font = '20px Serif';
    ctx.fillText('ElPiti😵', x, y)
}

setInterval(() => {
    //ctx.clearRect(0, 0, 600, 400);
    ctx.clearRect(0, 0, 600, 400);
    emijo(idX, idY);

    if (dirX === 1 && dirY === 1) {
        idX += 30;
        idY += 30;
    } else if (dirX === 1 && dirY === -1) {
        idX += 30;
        idY -= 30;
    } else if (dirX === -1 && dirY === 1) {
        idX -= 30;
        idY += 30;
    } else {
        idX -= 30;
        idY -= 30;
    }

    if (idX > 590) {
        dirX = -1; 
    } else if (idX < 10) {
        dirX = 1; 
    }
    if (idY > 390) {
        dirY = -1; 
    } else if (idY < 10) {
        dirY = 1; 
    }
}, 100);