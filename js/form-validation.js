document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registrationForm');
    
    form.addEventListener('submit', function (event) {
        let isValid = true;
        
        // Validar nombre
        const firstName = document.getElementById('first-name');
        if (firstName.value.trim() === '') {
            showError('first-name-error', 'El nombre es obligatorio.');
            isValid = false;
        } else {
            hideError('first-name-error');
        }

        // Validar apellido
        const lastName = document.getElementById('last-name');
        if (lastName.value.trim() === '') {
            showError('last-name-error', 'El apellido es obligatorio.');
            isValid = false;
        } else {
            hideError('last-name-error');
        }

        // Validar email
        const email = document.getElementById('email');
        if (!validateEmail(email.value)) {
            showError('email-error', 'Por favor, introduce un correo electrónico válido.');
            isValid = false;
        } else {
            hideError('email-error');
        }

        // Validar contraseña
        const password = document.getElementById('new-password');
        const passwordPattern = /^[a-z0-5]{8,}$/;
        if (!passwordPattern.test(password.value)) {
            showError('password-error', 'La contraseña debe tener al menos 8 caracteres y contener solo letras minúsculas y números.');
            isValid = false;
        } else {
            hideError('password-error');
        }

        // Validar edad
        const age = document.getElementById('age');
        if (age.value !== '' && (age.value < 13 || age.value > 120)) {
            showError('age-error', 'La edad debe estar entre 13 y 120 años.');
            isValid = false;
        } else {
            hideError('age-error');
        }

        if (!isValid) {
            event.preventDefault(); // Evitar el envío del formulario si hay errores
        }
    });

    function showError(elementId, message) {
        const element = document.getElementById(elementId);
        element.textContent = message;
        element.style.display = 'block';
    }

    function hideError(elementId) {
        const element = document.getElementById(elementId);
        element.textContent = '';
        element.style.display = 'none';
    }

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(email);
    }
});
