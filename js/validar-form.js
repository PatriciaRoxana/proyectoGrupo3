document.getElementById('formulario').addEventListener('submit', function(event) {
    let valid = true;
  
    // Validar que los nombres no contengan números
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const namePattern = /^[a-zA-Z\s]+$/;
  
    if (!namePattern.test(firstName) || !namePattern.test(lastName)) {
      alert('Los nombres no pueden contener números.');
      valid = false;
    }
  
    // Validar que la edad sea un número válido entre 13 y 120
    const age = document.getElementById('age').value;
    if (age < 13 || age > 120 || isNaN(age)) {
      alert('Por favor, ingrese una edad válida entre 18 y 120.');
      valid = false;
    }
  
    // Validar que el correo electrónico sea válido
    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!emailPattern.test(email)) {
      alert('Por favor, ingrese un correo electrónico válido.');
      valid = false;
    }
  
    // Validar que se haya seleccionado una opción en el campo "Como nos conocistes?"
    const referrer = document.getElementById('referrer').value;
    if (referrer === "") {
      alert('Por favor, seleccione una opción en "Como nos conocistes?".');
      valid = false;
    }
  
    if (!valid) {
      event.preventDefault();
    }
  });
  