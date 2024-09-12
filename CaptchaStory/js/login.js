function validateLogin(event) {
    event.preventDefault(); // Prevent form from submitting

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Basic validation for demonstration
    if (username === "admin" && password === "12345") {
        alert('Login successful!');
        errorMessage.textContent = '';
        window.location.href = '../html/page1.html'; // Redirect to page1.html
    } else {
        errorMessage.textContent = 'Invalid username or password!';
    }
}
