document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Account created! Please proceed to payment.');
    // Optionally, redirect to a payment page or handle payment logic here
    window.location.href = 'payment.html'; 
});
