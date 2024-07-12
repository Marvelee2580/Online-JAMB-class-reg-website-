function openNav() {
    document.getElementById("mySidebar").style.left = "0";
}

function closeNav() {
    document.getElementById("mySidebar").style.left = "-250px";
}

function updateGreeting() {
    const now = new Date();
    const hours = now.getHours();
    const greetingMessage = document.getElementById('greetingMessage');

    if (hours < 12) {
        greetingMessage.textContent = 'Good Morning, welcome to Nova Academy Of Excellence!';
    } else if (hours < 18) {
        greetingMessage.textContent = 'Good Afternoon, welcome to Nova Academy Of Excellence!';
    } else {
        greetingMessage.textContent = 'Good Evening, welcome to Nova Academy Of Excellence!';
    }

    // Change color every 4 seconds
    const colors = ['darkred', 'green', 'purple', 'darkorange', 'cyan'];
    let colorIndex = 0;
    setInterval(() => {
        greetingMessage.style.color = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    }, 2500);
}

document.addEventListener('DOMContentLoaded', updateGreeting);
