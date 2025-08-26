document.addEventListener('DOMContentLoaded', () => {
    const correctDate = '08/03/2025'; // ⚠️ CAMBIA ESTA FECHA POR LA CORRECTA, EJ: '25/08/2025'
    const dateInput = document.getElementById('dateInput');
    const keypad = document.getElementById('keypad');
    const enterButton = document.getElementById('enterButton');
    const message = document.getElementById('message');

    // Manejar el clic en el teclado numérico
    keypad.addEventListener('click', (event) => {
        const key = event.target.dataset.key;
        if (!key) return;

        if (key === 'backspace') {
            dateInput.value = dateInput.value.slice(0, -1);
        } else if (key === 'clear') {
            dateInput.value = '';
        } else if (key) {
            if (dateInput.value.length < 10) {
                const currentValue = dateInput.value;
                let newValue = currentValue + key;
                // Añadir la barra automáticamente
                if (newValue.length === 2 || newValue.length === 5) {
                    newValue += '/';
                }
                dateInput.value = newValue;
            }
        }
    });

    // Manejar el clic del botón "Entrar"
    enterButton.addEventListener('click', () => {
        const enteredDate = dateInput.value;

        if (enteredDate === correctDate) {
            // Redirige a la nueva página en la misma pestaña
            window.location.href = 'te_amo.html';
        } else {
            message.textContent = '¡Incorrecto! Esa no es nuestra fecha especial. 😔 Intenta de nuevo.';
            message.className = 'error';
        }
    });
});