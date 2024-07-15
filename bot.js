const chatContainer = document.getElementById('chatContainer');
const chatForm = document.getElementById('chatForm');
const userInput = document.getElementById('userInput');

const responses = {
	//bot responses
	morningGreetings: [
    "Good morning! ☀️ How can I assist you today?",
    "Good morning! 🌅 Do you need any information about the class?",
    "Morning! 😊 How can I help you with the JAMB class today?",
    "Good morning! 🌞 Feel free to ask me any questions about the class."
],
	afternoonGreetings: [
    "Good afternoon! ☀️ How can I assist you today?",
    "Good afternoon! 😊 Do you need any information about the class?",
    "Good afternoon! 🌞 How can I help you with the JAMB class today?",
    "Afternoon! 😊 Feel free to ask me any questions about the class."
],
	eveningGreetings: [
    "Good evening! 🌙 How can I assist you today?",
    "Good evening! 🌜 Do you need any information about the class?",
    "Evening! 😊 How can I help you with the JAMB class today?",
    "Good evening! 🌆 Feel free to ask me any questions about the class."
],
	aboutClass: [
    "📚 The JAMB class is designed to help students prepare for the JAMB exam by providing comprehensive study materials, past questions, weekly quizzes, and access to professional tutors.",
    "🔍 Our JAMB class offers detailed preparation for the JAMB exam, including study materials, past questions, and quizzes.",
    "🎓 This class aims to prepare you thoroughly for the JAMB exam with extensive resources and expert guidance.",
    "🛠️ In our JAMB class, you'll receive all the necessary tools and support to excel in the JAMB exam.",
    "✅ The class focuses on providing you with everything you need to succeed in the JAMB exam, from study materials to tutor support."
],
	// Add more categories as needed...
	schedule: [
        "The class that promises great insights is scheduled to commence on January 9, 2025. You don't want to miss out on being a part of it!",
        "Mark your calendars for January 9, 2025, as the beginning of the enlightening class. Be sure to secure your spot as a member of it.",
        "An insightful class is kicking off on January 9, 2025. Ensure that you are registered as a participant.",
        "Join the thought-provoking class starting on January 9, 2025. It's essential to be enrolled as a member of the class.",
        "Don't forget to join the engaging class starting on January 9, 2025. Confirm your membership in the class today!",
        "Set a reminder for January 9, 2025, to attend the enlightening class. Make sure to be part of the group.",
        "The anticipated class commences on January 9, 2025. Don't miss out on becoming a member of this insightful group.",
        "The start date for the insightful class is January 9, 2025. Ensure your participation by being a member of the class.",
        "Be ready for the eye-opening class starting on January 9, 2025. Secure your position as a member of this informative gathering.",
        "Make a note that the instructive class begins on January 9, 2025. Confirm your membership in this enlightening session."
    ],
	classTimes: [
        "Classes start at 8:00 PM every day.",
        "Daily classes begin at 8:00 PM.",
        "You can join classes at 8:00 PM each day.",
        "Our sessions kick off at 8:00 PM every day.",
        "Classes are scheduled for 8:00 PM daily.",
        "We start at 8:00 PM every evening."
    ],
	compliments: [
    "Thank you! 😊 I'm here to help you! If you need more information about the class, just let me know.",
    "You're too kind! 😇 How can I assist you further? Feel free to ask any questions about the JAMB class.",
    "I appreciate the compliment! 😌 Let me know if you need any help with the class details.",
    "Thanks a lot! 😁 I'm glad to be of service. If you need more information, I'm here to help!",
    "You're awesome! 🌟 How can I support you today? Ask me anything about the class.",
    "That's so nice of you to say! 😊 If you need any more information, don't hesitate to ask.",
    "Thank you so much! 😇 If there's anything else you need to know about the class, I'm here for you.",
    "I really appreciate that! 😌 If you have any more questions about the class, feel free to ask.",
    "You're making me blush! ❤️ How can I assist you further with the class information?",
    "Thanks a bunch! 🌟 If you need more details about the class, just let me know."
],
	subjects: [
    "Get ready to dive into these exciting subjects:<br><strong>• English Language</strong><br><strong>• Mathematics</strong><br><strong>• Physics</strong><br><strong>• Chemistry</strong><br><strong>• Biology</strong><br><strong>• Literature in English</strong><br><strong>• Government</strong><br><strong>• Economics</strong><br><strong>• Geography</strong><br><strong>• History</strong>",
    "In our JAMB class, you'll explore:<br><strong>• English Language</strong><br><strong>• Mathematics</strong><br><strong>• Physics</strong><br><strong>• Chemistry</strong><br><strong>• Biology</strong><br><strong>• Literature in English</strong><br><strong>• Government</strong><br><strong>• Economics</strong><br><strong>• Geography</strong><br><strong>• History</strong>.<br> Get ready to learn!",
    "Join us to master these subjects:<br><strong>• English Language</strong><br><strong>• Mathematics</strong><br><strong>• Physics</strong><br><strong>• Chemistry</strong><br><strong>• Biology</strong><br><strong>• Literature in English</strong><br><strong>• Government</strong><br><strong>• Economics</strong><br><strong>• Geography</strong><br><strong>• History</strong>.<br> Your path to success!",
    "Our JAMB class includes comprehensive lessons in:<br><strong>• English Language</strong><br><strong>• Mathematics</strong><br><strong>• Physics</strong><br><strong>• Chemistry</strong><br><strong>• Biology</strong><br><strong>• Literature in English</strong><br><strong>• Government</strong><br><strong>• Economics</strong><br><strong>• Geography</strong><br><strong>• History</strong>.<br>Prepare to excel!",
    "We're excited to teach you:<br><strong>• English Language</strong><br><strong>• Mathematics</strong><br><strong>• Physics</strong><br><strong>• Chemistry</strong><br><strong>• Biology</strong><br><strong>• Literature in English</strong><br><strong>• Government</strong><br><strong>• Economics</strong><br><strong>• Geography</strong><br><strong>• History</strong>.<br> Let's achieve greatness together!",
    "Discover the world of knowledge with our subjects:<br><strong>• English Language</strong><br><strong>• Mathematics</strong><br><strong>• Physics</strong><br><strong>• Chemistry</strong><br><strong>• Biology</strong><br><strong>• Literature in English</strong><br><strong>• Government</strong><br><strong>• Economics</strong><br><strong>• Geography</strong><br><strong>• History</strong><br>. Your success journey starts here!",
    "Unlock your potential with these subjects:<br><strong>• English Language</strong><br><strong>• Mathematics</strong><br><strong>• Physics</strong><br><strong>• Chemistry</strong><br><strong>• Biology</strong><br><strong>• Literature in English</strong><br><strong>• Government</strong><br><strong>• Economics</strong><br><strong>• Geography</strong><br><strong>• History</strong><br>. Aim high, achieve higher!"
],
	price: [
        "The JAMB Online Classes are completely free for all students.",
        "There are no fees for joining our JAMB Online Classes.",
        "Our classes are free of charge.",
        "You can join the classes for free.",
        "No cost is required to attend the JAMB Online Classes.",
        "The sessions are offered at no cost."
    ],
	contact: [
        "For more information, please contact us at olatunjisegunmarvelee@gmail.com.",
        "You can reach us at olatunjisegunmarvelee@gmail.com.",
        "Contact us via email at olatunjisegunmarvelee@gmail.com.",
        "Get in touch with us at olatunjisegunmarvelee@gmail.com.",
        "Feel free to email us at olatunjisegunmarvelee@gmail.com.",
        "Our email is olatunjisegunmarvelee@gmail.com."
    ],
	duration: [
        "The JAMB Online Classes run for a total of 4 months.",
        "The duration of the classes is 4 months.",
        "You will have classes for 4 months.",
        "Our program lasts for 4 months.",
        "The course spans over 4 months.",
        "Classes are conducted for 4 months."
    ],
	materials: [
        "We provide comprehensive study materials, including past questions, weekly quizzes, and access to professional tutors.",
        "You will get study materials, past questions, and weekly quizzes.",
        "Our resources include past questions, quizzes, and tutor access.",
        "Expect study materials, quizzes, and past questions.",
        "We offer past questions, study materials, and quizzes.",
        "Materials include quizzes, past questions, and tutor access."
    ],
	registration: [
    "✨ Ready to start your journey? Click <a href='index.html' style ='color: green'>here</a> to join our class now!",
    "🚀 Don't miss out! Sign up for the class <a href='index.html' style ='color: green'>here</a> and start preparing for success!",
    "📚 Join our community of learners! Click <a href='index.html' style ='color: green'>here</a> to register for the class.",
    "🌟 Ready to excel? Enroll in our class by clicking <a href='index.html' style ='color: green'>here</a>!",
    "🎓 Become a part of our learning family! Register <a href='index.html' style ='color: green'>here</a> and get started today.",
    "📝 Secure your spot in our class! Click <a href='index.html' style ='color: green'>here</a> to sign up now.",
    "💡 Ready to achieve your goals? Join the class <a href='index.html' style ='color: green'>here</a>!",
    "📘 Start your preparation journey! Click <a href='index.html' style ='color: green'>here</a> to join the class.",
    "🌐 Join us and start learning! Register <a href='index.html' style ='color: green'>here</a> and take the first step towards success.",
    "🔗 Click <a href='index.html' style ='color: green'>here</a> to enroll and get access to all the resources and support you need!"
],
	instructors: [
        "Our instructors are experienced professionals in their fields.",
        "We have a team of qualified tutors.",
        "Our teachers are highly skilled and knowledgeable.",
        "The classes are conducted by professional tutors.",
        "Expect guidance from experienced instructors.",
        "We have a dedicated team of experts."
    ],
	support: [
        "For support, contact our helpdesk at olatunjisegunmarvelee@gmail.com.",
        "Our support team is available at olatunjisegunmarvelee@gmail.com.",
        "Reach out to olatunjisegunmarvelee@gmail.com for assistance.",
        "You can get help by emailing olatunjisegunmarvelee@gmail.com.",
        "Support is available via olatunjisegunmarvelee@gmail.com.",
        "For any help, contact olatunjisegunmarvelee@gmail.com."
    ],
	greetings: [
        "Hello! How can I assist you today?",
        "Hey there! Need any assistance with something from our online classes?",
        "Hi there! How can I help you regarding our classes?",
        "Greetings! What can I do for you?",
        "Hey there! Need any assistance with something from our online classes?",
        "Hi! How can I assist you with our classes?",
        "Hey! Is there anything you need assistance with regarding our online classes?",
        "Hey! What would you like to know concerning the class?"
    ],
	introduction: [
        "My name is Assistant Bot, created by Dev Marvelee. I am here to answer your questions about our JAMB classes.",
        "I am Assistant Bot, developed by Dev Marvelee. How can I assist you with information about our classes?",
        "Hello, I'm Assistant Bot, created by Dev Marvelee. Feel free to ask me any questions about our JAMB classes.",
        "I am the Assistant Bot, made by Dev Marvelee. How can I help you regarding our JAMB classes?",
        "Assistant Bot here, crafted by Dev Marvelee. What would you like to know about our classes?",
        "I'm Assistant Bot, created by Dev Marvelee. Ask me anything about our JAMB classes."
    ],
	inappropriate: [
        "I'm here to provide information about our classes. Please ask respectful questions.",
        "Let's keep the conversation positive and focused on the class information.",
        "I'm not programmed to handle inappropriate questions. Please ask about our classes.",
        "My purpose is to assist you with class-related queries. Let's stay on topic.",
        "I can help with information about our classes. Please ask appropriate questions.",
        "I'm here to help with class information. Let's keep the questions respectful."
    ],
	politeContact: [
        "I don't think I can answer that question. For more details concerning the class, please contact us at olatunjisegunmarvelee@gmail.com.",
        "I regret to inform you that I am unable to provide a response to your query. For further information regarding the class in question, please do not hesitate to get in touch with us via email at olatunjisegunmarvelee@gmail.com.",
        "It seems I am unable to provide an answer to your question at this time. For more information about the class, please feel free to reach out to us at olatunjisegunmarvelee@gmail.com.",
        "Unfortunately, I cannot answer your question at the moment. If you require more details about the class, please contact us via email at olatunjisegunmarvelee@gmail.com.",
    ],
	refundPolicy: [
    "We are confident you will enjoy the class! However, if for any reason you're not satisfied within the first 4 days, contact us for a full refund. 😊",
    "Your satisfaction is our top priority! If you're not happy with the class within 4 days, we'll give you a full refund. 🤑",
    "We believe you'll love our class, but if you don't, we offer a 4-day money-back guarantee. Reach out for details! 💬",
    "If you're not enjoying the class within the first 4 days, just let us know, and we'll process a refund for you. 👍",
    "We stand by our course quality. If you're unsatisfied within the first 4 days, contact us for a refund. Your happiness matters! 🥰",
    "We want you to be thrilled with our class. If you're not, you have 4 days to request a full refund. 📨",
    "Our goal is your satisfaction. If the class isn't meeting your expectations within the first 4 days, we're here to help with a refund. 🌟",
    "Not enjoying the class? No problem! Contact us within 4 days, and we’ll sort out a full refund for you. 💵",
    "We're confident in our class, but if it's not right for you, you have 4 days to get a full refund. 🧑‍🏫",
    "If the class isn’t what you expected, you have 4 days to request a refund. Your learning journey is important to us! 👐",
    "We hope you find the class valuable, but if not, contact us within 4 days for a full refund. 🚀",
    "We offer a 4-day money-back guarantee to ensure your satisfaction with our class. Let us know if you're not happy! 💰",
    "Your success is important to us. If the class isn't working out for you, you have 4 days to request a refund. ✨",
    "If you find the class isn't meeting your needs, contact us within the first 4 days for a full refund. 🎓",
    "We want you to succeed. If you don't love the class within 4 days, we'll give you a full refund. 🏆"
],
className: [
	"Our 2025 JAMB class is called OPERATION UTME 👊 2025, hosted by <b>NOVA ACADEMY OF EXCELLENCE.</b>", 
	"<b>NOVA ACADEMY OF EXCELLENCE</b> invites you to OPERATION UTME 👊 2025, our 2025 JAMB class.", 
	"Experience the best with OPERATION UTME 👊 2025, our 2025 JAMB class at <b>NOVA ACADEMY OF EXCELLENCE.</b>", 
	"Introducing OPERATION UTME 👊 2025, our premier JAMB class for 2025, brought to you by <b>NOVA ACADEMY OF EXCELLENCE.</b>"
	], 
	howAreYou: [
        "I'm doing well 😊 , thank you for asking!",
        "I'm great 😊, thanks! How can I assist you today?",
        "Feeling good 😎, ready to help you with any questions you have!",
        "I'm doing fine 😊 , thanks for checking! How can I help you?",
        "All good here 😇, ready to assist you with our classes!"
    ],
	capabilities: [
        "I can provide information about our class schedule, timings, fees, study materials, registration process, instructors, basic arithmetic questions and more.",
        "You can ask me about our class schedule, timings, fees, study materials, registration process, instructors, basic arithmetic, and more.",
        "I'm here to assist you with questions about our class schedule, timings, fees, study materials, registration process, instructors, basic arithmetic and more.",
        "Feel free to ask me about our class schedule, timings, fees, study materials, registration process, instructors, and more.",
        "I'm knowledgeable about our class schedule, timings, fees, study materials, registration process, instructors, basic arithmetic and more."
    ],
	botName: [
        "My name is Assistant Bot 🤖, created by Dev Marvelee 😎. I am here to assist you with our JAMB classes.",
        "I'm Assistant Bot 🤖, developed by Dev Marvelee, 😇. How can I help you with information about our classes?",
        "Hello, I'm Assistant Bot 🤖, created by Dev Marvelee. Feel free to ask me any questions about our JAMB classes.",
        "I am the Assistant Bot 🤖, made by Dev Marvelee. How can I assist you regarding our JAMB classes?",
        " 🤖 Assistant Bot here, crafted by Dev Marvelee. What would you like to know about our classes?",
        "I'm Assistant Bot 🤖, created by Dev Marvelee. Ask me anything about our JAMB classes."
    ]
};

chatForm.addEventListener('submit', function(event) {
	event.preventDefault();
	const userMessage = userInput.value.trim();
	if (userMessage === '') return;

	appendMessage('user', userMessage);
	simulateBotTyping();
	processUserMessage(userMessage);
	userInput.value = '';
});

function appendMessage(sender, message) {
	const messageElement = document.createElement('div');
	messageElement.classList.add('chat-message');
	messageElement.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
	messageElement.innerHTML = `<p><strong>${sender === 'user' ? 'You' : 'Bot'}:</strong> ${message}</p>`;
	chatContainer.appendChild(messageElement);
	chatContainer.scrollTop = chatContainer.scrollHeight; // Scroll to bottom
}

function simulateBotTyping() {
	const typingMessage = document.createElement('div');
	typingMessage.classList.add('chat-message');
	typingMessage.classList.add('bot-message');
	typingMessage.innerHTML = `<p><strong>Bot is typing...</strong><pre>Powered by MRV TECH</pre></p>`;
	chatContainer.appendChild(typingMessage);
	chatContainer.scrollTop = chatContainer.scrollHeight; // Scroll to bottom

	setTimeout(function() {
		chatContainer.removeChild(typingMessage); // Remove the typing indicator after a delay
	}, 1500); // Adjust the delay as needed
}
//user message
function processUserMessage(message) {
	let response = '';
	const lowerMessage = message.toLowerCase();
	// Check for math expressions
	const mathMatch = lowerMessage.match(/(\d+)\s*([\+\-\*\/])\s*(\d+)/);

	if (mathMatch) {
		const num1 = parseFloat(mathMatch[1]);
		const operator = mathMatch[2];
		const num2 = parseFloat(mathMatch[3]);
		let result;

		switch (operator) {
			case '+':
				result = num1 + num2;
				break;
			case '-':
				result = num1 - num2;
				break;
			case '*':
				result = num1 * num2;
				break;
			case '/':
				if (num2 === 0) {
					response = "Undefined. Cannot divide by zero.";
				} else {
					result = num1 / num2;
				}
				break;
			default:
				response = "Invalid math operation.";
		}

		if (response === '') {
			response = `The result of ${num1} ${operator} ${num2} is ${result}.`;
		}
	} else if (lowerMessage.includes('class schedule') || lowerMessage.includes('when do classes start') || lowerMessage.includes('when is class starting') ||
		lowerMessage.includes('class timing') || lowerMessage.includes('when does class start') || lowerMessage.includes('date') || lowerMessage.includes(
			'begin') || lowerMessage.includes('when is the class starting')) {
		response = getRandomResponse('schedule');
	} else if (lowerMessage.includes('time') || lowerMessage.includes('class time') || lowerMessage.includes('what time') || lowerMessage.includes(
			'when is class') || lowerMessage.includes('class start time') || lowerMessage.includes('daily class time')) {
		response = getRandomResponse('classTimes');
	} else if (lowerMessage.includes('you are mad') || lowerMessage.includes('stupid') || lowerMessage.includes('crazy') || lowerMessage.includes('are you mad') ||
		lowerMessage.includes('sex') || lowerMessage.includes('foolish') || lowerMessage.includes('mumu') || lowerMessage.includes('porn') || lowerMessage
		.includes('idiot')) {
		response = getRandomResponse('inappropriate');
	} else if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('fees') || lowerMessage.includes('tuition') ||
		lowerMessage.includes('how much') || lowerMessage.includes('payment') || lowerMessage.includes('fee')) {
		response = getRandomResponse('price');
	} else if (lowerMessage.includes('contact') || lowerMessage.includes('reach') || lowerMessage.includes('email') || lowerMessage.includes(
			'how to contact') || lowerMessage.includes('contact information') || lowerMessage.includes('reach out')) {
		response = getRandomResponse('contact');
	} else if (lowerMessage.includes('duration') || lowerMessage.includes('how long') || lowerMessage.includes('length') || lowerMessage.includes(
			'how many months') || lowerMessage.includes('total duration') || lowerMessage.includes('class period')) {
		response = getRandomResponse('duration');
	} else if (lowerMessage.includes('what are the subjects') || lowerMessage.includes('subjects') || lowerMessage.includes('subject') || lowerMessage.includes(
			'courses') || lowerMessage.includes('course') || lowerMessage.includes('daily class')) {
		response = getRandomResponse('subjects');
	} else if (lowerMessage.includes('materials') || lowerMessage.includes('study materials') || lowerMessage.includes('resources') || lowerMessage.includes(
			'what do you provide') || lowerMessage.includes('what materials') || lowerMessage.includes('past questions') || lowerMessage.includes('quizzes')) {
		response = getRandomResponse('materials');
	} else if (lowerMessage.includes('register') || lowerMessage.includes('registration') || lowerMessage.includes('sign up') || lowerMessage.includes(
			'how to join') || lowerMessage.includes('enroll') || lowerMessage.includes('join')) {
		response = getRandomResponse('registration');
	} else if (lowerMessage.includes('refund') || lowerMessage.includes('money back') || lowerMessage.includes('not enjoy') || lowerMessage.includes(
		'unhappy') || lowerMessage.includes('dislike') || lowerMessage.includes('return money') || lowerMessage.includes('refund policy') || lowerMessage
		.includes('guarantee') || lowerMessage.includes('don\'t like the class') || lowerMessage.includes('satisfaction') || lowerMessage.includes('hate') || lowerMessage.includes('money-back') ||
		lowerMessage.includes('refund guarantee') || lowerMessage.includes('refund request') || lowerMessage.includes('class refund') || lowerMessage.includes(
			'class guarantee') || lowerMessage.includes('class satisfaction')) {
		response = getRandomResponse('refundPolicy');
	} else if (lowerMessage.includes('instructors') || lowerMessage.includes('teachers') || lowerMessage.includes('tutors') || lowerMessage.includes(
			'who teaches') || lowerMessage.includes('expertise') || lowerMessage.includes('instructor qualifications')) {
		response = getRandomResponse('instructors');
	} else if (lowerMessage.includes('support') || lowerMessage.includes('help') || lowerMessage.includes('assistance') || lowerMessage.includes('get help') ||
		lowerMessage.includes('helpdesk') || lowerMessage.includes('customer support')) {
		response = getRandomResponse('support');
	} else if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey') || lowerMessage.includes('greetings') ||
		lowerMessage.includes('good day')) {
		response = getRandomResponse('greetings');
	} else if (lowerMessage.includes('name of the class') || lowerMessage.includes('who own') || lowerMessage.includes('class name')) {
		response = getRandomResponse('className');
	} else if (lowerMessage.includes('good morning') || lowerMessage.includes('morning')) {
		const currentHour = new Date().getHours();
		if (currentHour >= 12 && currentHour < 18) {
			response = getRandomResponse('afternoonGreetings');
		} else if (currentHour >= 18 || currentHour < 5) {
			response = getRandomResponse('eveningGreetings');
		} else {
			response = getRandomResponse('morningGreetings');
		}
	} else if (lowerMessage.includes('good afternoon') || lowerMessage.includes('afternoon')) {
		const currentHour = new Date().getHours();
		if (currentHour >= 18 || currentHour < 5) {
			response = getRandomResponse('eveningGreetings');
		} else if (currentHour < 12) {
			response = getRandomResponse('morningGreetings');
		} else {
			response = getRandomResponse('afternoonGreetings');
		}
	} else if (lowerMessage.includes('good evening') || lowerMessage.includes('evening')) {
		const currentHour = new Date().getHours();
		if (currentHour >= 5 && currentHour < 12) {
			response = getRandomResponse('morningGreetings');
		} else if (currentHour >= 12 && currentHour < 18) {
			response = getRandomResponse('afternoonGreetings');
		} else {
			response = getRandomResponse('eveningGreetings');
		}
	} else if (lowerMessage.includes('introduce') || lowerMessage.includes('who are you') || lowerMessage.includes('what is your name') || lowerMessage
		.includes('your name') || lowerMessage.includes('what are you') || lowerMessage.includes('about you') || lowerMessage.includes('your information') || lowerMessage.includes('who made you') || lowerMessage.includes('created you') || lowerMessage.includes('built you')) {
		response = getRandomResponse('introduction');
	} else if (lowerMessage.includes('how are you') || lowerMessage.includes('how far') || lowerMessage.includes('how are you feeling')) {
		response = getRandomResponse('howAreYou');
	} else if (lowerMessage.includes('thank you') || lowerMessage.includes('thanks') || lowerMessage.includes('great job') || lowerMessage.includes(
		'well done') || lowerMessage.includes('good bot') || lowerMessage.includes('nice') || lowerMessage.includes('helpful') || lowerMessage.includes(
			'awesome') || lowerMessage.includes('fantastic') || lowerMessage.includes('excellent') || lowerMessage.includes('wonderful') || lowerMessage
		.includes('amazing') || lowerMessage.includes('appreciate') || lowerMessage.includes('good work') || lowerMessage.includes('kudos')) {
		response = getRandomResponse('compliments');
	} else if (lowerMessage.includes('capabilit') || lowerMessage.includes('what can you do') || lowerMessage.includes('what do you do') || lowerMessage
		.includes('your abilit') || lowerMessage.includes('your function') || lowerMessage.includes('your work')|| lowerMessage.includes('your feature') || lowerMessage.includes('your job')) {
		response = getRandomResponse('capabilities');
	} else if (lowerMessage.includes("what is the jamb class about") || lowerMessage.includes("about the jamb class") || lowerMessage.includes("about the class") || lowerMessage.includes("class about") || lowerMessage.includes(
			"class details") || lowerMessage.includes("about class") || lowerMessage.includes("jamb class information") || lowerMessage.includes('how is the class')) {
		response = getRandomResponse('aboutClass');
	} else {
		response = getRandomResponse('politeContact'); // Default response for non-inappropriate queries
	}

	setTimeout(function() {
		appendMessage('bot', response);
	}, 1500);
}

function getRandomResponse(category) {
	const responsesArray = responses[category];
	const randomIndex = Math.floor(Math.random() * responsesArray.length);
	return responsesArray[randomIndex];
}

// Initial greeting message from the bot
window.onload = function() {
	const initialGreeting = getRandomResponse('greetings');
	appendMessage('bot', initialGreeting);
};