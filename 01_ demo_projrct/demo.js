document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Basic validation
    if (username && password) {
        alert('Login attempt with username: ' + username);
        // Here you would typically send the data to a server for authentication
        // window.location.href = "dashboard.html"; // Redirect on success
    } else {
        alert('Please enter both username and password');
    }
});

function exitPage() {
    if (confirm('Are you sure you want to exit?')) {
        // For a real application, you might want to do something more elegant
        window.close(); // This may not work in all browsers due to security restrictions
        // Alternative:
        // window.location.href = "about:blank";
    }
}