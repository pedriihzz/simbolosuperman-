document.addEventListener('DOMContentLoaded', () => {
    const ledSymbol = document.getElementById('superman-led');
    const toggleBtn = document.getElementById('toggle-btn');
    const btnText = document.getElementById('btn-text');

    let isOn = false;

    toggleBtn.addEventListener('click', () => {
        isOn = !isOn;

        if (isOn) {
            ledSymbol.classList.add('on');
            toggleBtn.classList.add('active');
            btnText.textContent = 'DESLIGAR LED';
        } else {
            ledSymbol.classList.remove('on');
            toggleBtn.classList.remove('active');
            btnText.textContent = 'LIGAR LED';
        }
    });
});