const mostrarPopupBtn = document.getElementById('mostrarPopup');
const popup = document.getElementById('popup');
const cerrarPopupBtn = document.getElementById('cerrarPopup');

mostrarPopupBtn.addEventListener('click', () => {
    popup.style.display = 'block';
});

cerrarPopupBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});
