document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');
    const submitButton = document.getElementById('submit-button');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const contactInput = document.getElementById('contact');
    const errorMessages = document.getElementById('error-messages');

    function validateInputs() {
        let isValid = true;
        errorMessages.innerHTML = '';

        // Clear previous error messages
        nameInput.classList.remove('error');
        emailInput.classList.remove('error');
        contactInput.classList.remove('error');

        // Validate Name
        if (nameInput.value.trim() === '') {
            isValid = false;
            nameInput.classList.add('error');
            errorMessages.innerHTML += '<p>Name is required.</p>';
        }

        // Validate Email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
            isValid = false;
            emailInput.classList.add('error');
            errorMessages.innerHTML += '<p>Invalid email format.</p>';
        }

        // Validate Contact
        const contactPattern = /^(\+\d{1,3}[- ]?)?\d{10}$/;
        if (!contactPattern.test(contactInput.value)) {
            isValid = false;
            contactInput.classList.add('error');
            errorMessages.innerHTML += '<p>Contact must be a valid 10-digit number.</p>';
        }

        submitButton.disabled = !isValid;
    }

    // Attach event listeners
    form.addEventListener('input', validateInputs);
});