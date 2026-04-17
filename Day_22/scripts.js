const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');
const increaseBtn = document.querySelector('.increase');
const decreaseBtn = document.querySelector('.decrease');
const sizeEl = document.getElementById('size');
const colorPicker = document.getElementById('colorPicker');
const clearBtn = document.querySelector('.clear');

let size = 10;
let color = '#000000';
let x;
let y;
let isPressing = false;

canvas.addEventListener('mousedown', (e) => {
    isPressing = true;
    x = e.offsetX;
    y = e.offsetY;
});

canvas.addEventListener('mouseup', () => {
    isPressing = false;
    x = undefined;
    y = undefined;
});

canvas.addEventListener('mousemove', (e) => {
    if (isPressing) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;
        drawCircle(x, y, size, color);
        drawLine(x, y, x2, y2, size, color);
        x = x2;
        y = y2;
    }
});

function drawCircle(x, y, size, color) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x1, y1, x2, y2, size, color) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineWidth = size * 2;
    ctx.lineCap = 'round';
    ctx.strokeStyle = color;
    ctx.stroke();
}

colorPicker.addEventListener('change', (e) => {
    color = e.target.value;
});

increaseBtn.addEventListener('click', () => {
    size += 5;
    if (size > 50) {
        size = 50;
    }
    sizeEl.innerText = size;
});

decreaseBtn.addEventListener('click', () => {
    size -= 5;
    if (size < 5) {
        size = 5;
    }
    sizeEl.innerText = size;
});

clearBtn.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});