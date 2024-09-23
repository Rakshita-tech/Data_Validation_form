document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission by default

    // Clear any previous error messages
    document.querySelectorAll('.error').forEach(el => el.textContent = '');

    // Call the validation function
    if (vaildateForm()) {
        alert('Form submitted successfully!');
        // Clear the form fields
        document.getElementById('registrationForm').reset();

    }
});

function vaildateForm() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let dob = document.getElementById('dob').value;
    let age = document.getElementById('age').value;
    let address = document.getElementById('address').value;
    let password = document.getElementById('password').value;

    let valid = true; // Flag to track form validation

    // Validate Name
    if (name === '') {
        document.getElementById('nameError').textContent = 'Name is required';
        valid = false;
    } else if (name.length < 3 || /\d/.test(name)) {
        document.getElementById('nameError').textContent = 'Name must be at least 3 characters long and not contain numbers';
        valid = false;
    }

    // Validate Email
    if (email === '') {
        document.getElementById('emailError').textContent = 'Email is required';
        valid = false;
    } else if (!validateEmail(email)) {
        document.getElementById('emailError').textContent = 'Email is invalid';
        valid = false;
    }

    // Validate Phone Number
    if (phone === '') {
        document.getElementById('phoneError').textContent = 'Phone is required';
        valid = false;
    } else if (!vaildatephone(phone)) {
        document.getElementById('phoneError').textContent = 'Phone is invalid';
        valid = false;
    }

    // Validate Date of Birth
    if (dob === '') {
        document.getElementById('dobError').textContent = 'Date of Birth is required';
        valid = false;
    } else {
        age = calculateAge(dob);
        if (age < 18) {
            document.getElementById('dobError').textContent = 'You must be at least 18 years old';
            valid = false;
        }
    }

    // Validate Address
    if (address === '') {
        document.getElementById('addressError').textContent = 'Address is required';
        valid = false;
    } else if (!vaildateaddress(address)) {
        document.getElementById('addressError').textContent = 'Address is invalid';
        valid = false;
    }

    // Validate Password
    if (password === '') {
        document.getElementById('passwordError').textContent = 'Password is required';
        valid = false;
    } else if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters long';
        valid = false;
    }

    return valid;
}

function validateEmail(email) {
    let regex = /^[a-z0-9._%+-]+@(gmail\.com|navgurukul\.org|yahoo\.com)$/;
    return regex.test(email);
}

function vaildatephone(phone) {
    let regex = /^[0-9]{10}$/;
    return regex.test(phone);
}

function vaildateaddress(address) {
    return address.length >= 8 && address.length <= 100;
}

function calculateAge(dob) {
    let today = new Date();
    let birthdate = new Date(dob);
    let age = today.getFullYear() - birthdate.getFullYear();
    let month = today.getMonth() - birthdate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }
    return age;
}
   /* document.getElementById('registrationForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission by default
    
        // Clear any previous error messages
        document.querySelectorAll('.error').forEach(el => el.textContent = '');
    
        let valid = true; // Flag to track form validation
    
        // Validate Name
        const name = document.getElementById('name').value;
        if (name.length < 3 || /\d/.test(name)) {  // Check if name contains less than 3 chars or includes a number
            document.getElementById('nameError').textContent = 'Name must be at least 3 characters long and not contain numbers.';
            valid = false;
        }
    
        // Validate Email
        const email = document.getElementById('email').value;
        if (!email.includes('@') || !email.includes('.')) {
            document.getElementById('emailError').textContent = 'Please enter a valid email address.';
            valid = false;
        }
    
        // Validate Phone Number
        const phone = document.getElementById('phone').value;
        if (phone.length !== 10 || isNaN(phone)) {
            document.getElementById('phoneError').textContent = 'Please enter a valid 10-digit phone number.';
            valid = false;
        }
    
        // Validate Address
        const address = document.getElementById('address').value;
        if (address.trim() === '') {
            document.getElementById('addressError').textContent = 'Address cannot be empty.';
            valid = false;
        }
    
        // Validate Age
        const age = document.getElementById('age').value;
        if (age < 1 || age > 120) {
            document.getElementById('ageError').textContent = 'Please enter a valid age between 1 and 120.';
            valid = false;
        }
    
        // Validate Password
        const password = document.getElementById('password').value;
        if (password.length < 6) {
            document.getElementById('passwordError').textContent = 'Password must be at least 6 characters long.';
            valid = false;
        }
    
        // If the form is valid, show a success message
        if (valid) {
            alert('Form submitted successfully!');
        }
    });*/
    