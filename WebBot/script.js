 document.addEventListener('DOMContentLoaded', function () {
            // Get the login/signup button element
            var loginButton = document.querySelector('.Login button');

            // Add click event listener to the button
            loginButton.addEventListener('click', function () {
                // Get the email and password values
                var email = document.getElementById('email').value;
                var password = document.getElementById('password').value;

                // Validate the email and password (you may add more robust validation)
                if (email && password) {
                    // If validation passes, redirect to the new page
                    window.location.href = 'pg1.html';
                } else {
                    // Handle invalid input if needed
                    alert('Please enter valid email and password.');
                }
            });
        });
        

