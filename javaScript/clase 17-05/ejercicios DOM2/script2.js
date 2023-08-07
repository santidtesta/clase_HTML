const body = document.querySelector('body');
const img = document.querySelector('.sigue-mouse');
let sigueMouse = false;

body.addEventListener('mousedown', () => {
    sigueMouse = true;
});

body.addEventListener('mouseup', () => {
    sigueMouse = false;
});

body.addEventListener('mousemove', (event) => {
    if (sigueMouse) {
        img.style.top = event.clientY + 'px';
        img.style.left = event.clientX + 'px';
    }
});