// Function to update the clock
function updateClock() {
    const clock = document.querySelector('.clock');
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    clock.textContent = timeString;
}

// Update the clock every second
setInterval(updateClock, 1000);

document.getElementById('joinForm').addEventListener('submit', function(event) {
    event.preventDefault();
    displayFunnyFact(); // Display a funny fact when the form is submitted
    alert('Thank you for your interest! We will contact you shortly.');
});

// Function to display a dynamic greeting based on the time of day
function displayGreeting() {
    const header = document.querySelector('.header h1');
    const now = new Date();
    const hour = now.getHours();
    let greeting = 'Welcome to JAMB Online English and Science Classes';

    if (hour < 12) {
        greeting = 'Good Morning! ' + greeting;
    } else if (hour < 18) {
        greeting = 'Good Afternoon! ' + greeting;
    } else {
        greeting = 'Good Evening! ' + greeting;
    }

    header.textContent = greeting;
}

// Array of funny facts
const funnyFacts = [
    'Did you know? The shortest war in history lasted 38 minutes!',
    'Fun Fact: Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3000 years old and still edible.',
    'Here\'s a chuckle: A group of flamingos is called a "flamboyance."',
    'Smile! The inventor of the frisbee was turned into a frisbee after he died.',
    'Laugh out loud: In Switzerland, it\'s illegal to own just one guinea pig because they get lonely.',
    'The world\'s quietest room is located at Microsoft\'s headquarters in Washington. It\'s so quiet you can actually hear your own heartbeat.',
    'The world\'s hottest chili pepper is the Carolina Reaper, which can measure over 2 million Scoville Heat Units (SHU). That\'s over 200 times hotter than a jalapeño pepper!',
    'The world\'s largest living organism is a giant fungus that covers 2,385 acres in Oregon. It\'s estimated to be over 2,000 years old!',
    'Bananas are berries, but strawberries are not.',
    'The average person will walk the equivalent of five times around the world in their lifetime.',
    'Maine is the closest U.S. state to Africa.',
    'A day on Venus is longer than a year on Venus. Interesting!',
    'The longest English word is "pneumonoultramicroscopicsilicovolcanoconiosis." WOW 😮!',
    'Smile: Scotland has 421 words for "snow."',
    'The unicorn is the national animal of Scotland.',
    'There are more stars in the universe than grains of sand on Earth.',
    'The dot over the letter "i" is called a "tittle."',
    'The Eiffel Tower can be 15 cm taller during the summer, due to thermal expansion.',
    'There are more fake flamingos in the world than real ones.',
    'The world\'s oldest piece of chewing gum is over 9,000 years old.',
    'A single cloud can weigh more than 1 million pounds.',
    'Alaska is the westernmost, easternmost, and northernmost state in the U.S.',
    'The youngest mother in history was just 5 years old. (funny 😂)',
    'The sentence "The quick brown fox jumps over the lazy dog" uses every letter of the alphabet.',
    'The shortest war in history was between Zanzibar and England in 1896. Zanzibar surrendered after 38 minutes.',
    'If you were to stretch out all the DNA in your body, it would reach Pluto and back.',
    'The Basenji dog is the only dog in the world that can\'t bark. funny 😂',
    'Lightning strikes the Earth about 44 times every second.',
];

// Function to display a random funny fact
function displayFunnyFact() {
    const factIndex = Math.floor(Math.random() * funnyFacts.length);
    const fact = funnyFacts[factIndex];
    alert(fact);
}

// Call the displayGreeting function when the page loads
window.onload = displayGreeting;

// Event listener for toggling dark mode
document.getElementById('toggleModeButton').addEventListener('click', function() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        document.getElementById('toggleModeButton').textContent = 'Toggle Light Mode';
    } else {
        document.getElementById('toggleModeButton').textContent = 'Toggle Dark Mode';
    }
}); 
