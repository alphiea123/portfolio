// Contact form validation

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (!contactForm) {
        return; // Exit if form doesn't exist
    }
    
    // Get form elements
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');
    const successMessage = document.getElementById('form-success');
    
    // Validation functions
    function validateName(name) {
        const nameRegex = /^[a-zA-Z\s]{2,50}$/;
        return name.trim().length >= 2 && nameRegex.test(name);
    }
    
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function validateMessage(message) {
        return message.trim().length >= 10;
    }
    
    // Error display function
    function showError(input, errorElement, message) {
        input.classList.add('error');
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
    
    function clearError(input, errorElement) {
        input.classList.remove('error');
        errorElement.textContent = '';
        errorElement.style.display = 'none';
    }
    
    // Real-time validation
    if (nameInput) {
        nameInput.addEventListener('blur', function() {
            const nameError = document.getElementById('name-error');
            if (!validateName(this.value)) {
                showError(this, nameError, 'Please enter a valid name (2-50 characters, letters only)');
            } else {
                clearError(this, nameError);
            }
        });
        
        nameInput.addEventListener('input', function() {
            const nameError = document.getElementById('name-error');
            if (this.value.trim().length > 0 && validateName(this.value)) {
                clearError(this, nameError);
            }
        });
    }
    
    if (emailInput) {
        emailInput.addEventListener('blur', function() {
            const emailError = document.getElementById('email-error');
            if (!validateEmail(this.value)) {
                showError(this, emailError, 'Please enter a valid email address');
            } else {
                clearError(this, emailError);
            }
        });
        
        emailInput.addEventListener('input', function() {
            const emailError = document.getElementById('email-error');
            if (this.value.trim().length > 0 && validateEmail(this.value)) {
                clearError(this, emailError);
            }
        });
    }
    
    if (messageInput) {
        messageInput.addEventListener('blur', function() {
            const messageError = document.getElementById('message-error');
            if (!validateMessage(this.value)) {
                showError(this, messageError, 'Please enter a message (minimum 10 characters)');
            } else {
                clearError(this, messageError);
            }
        });
        
        messageInput.addEventListener('input', function() {
            const messageError = document.getElementById('message-error');
            if (this.value.trim().length > 0 && validateMessage(this.value)) {
                clearError(this, messageError);
            }
        });
    }
    
    // Form submission
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get error elements
        const nameError = document.getElementById('name-error');
        const emailError = document.getElementById('email-error');
        const messageError = document.getElementById('message-error');
        
        // Validate all fields
        let isValid = true;
        
        // Validate name
        if (!validateName(nameInput.value)) {
            showError(nameInput, nameError, 'Please enter a valid name (2-50 characters, letters only)');
            isValid = false;
        } else {
            clearError(nameInput, nameError);
        }
        
        // Validate email
        if (!validateEmail(emailInput.value)) {
            showError(emailInput, emailError, 'Please enter a valid email address');
            isValid = false;
        } else {
            clearError(emailInput, emailError);
        }
        
        // Validate message
        if (!validateMessage(messageInput.value)) {
            showError(messageInput, messageError, 'Please enter a message (minimum 10 characters)');
            isValid = false;
        } else {
            clearError(messageInput, messageError);
        }
        
        // If form is valid, show success message
        if (isValid) {
            // Hide any previous success messages
            if (successMessage) {
                successMessage.classList.add('show');
                successMessage.textContent = 'Thank you! Your message has been sent successfully.';
                successMessage.style.backgroundColor = '#d4edda';
                successMessage.style.color = '#27ae60';
                
                // Reset form
                contactForm.reset();
                
                // Clear all errors
                clearError(nameInput, nameError);
                clearError(emailInput, emailError);
                clearError(messageInput, messageError);
                
                // Hide success message after 5 seconds
                setTimeout(function() {
                    successMessage.classList.remove('show');
                }, 5000);
                
                // In a real application, you would submit the form data to a server here
                // Example: sendFormData(formData);
            }
        } else {
            // Scroll to first error
            const firstError = contactForm.querySelector('.error');
            if (firstError) {
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                firstError.focus();
            }
        }
    });
    
    // Function to send form data to server (placeholder)
    // In production, you would integrate with a service like Formspree, Netlify Forms, or your own backend
    function sendFormData(formData) {
        // Example using fetch API:
        /*
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
        */
    }
});

