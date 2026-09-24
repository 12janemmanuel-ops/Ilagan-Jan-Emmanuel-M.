/* ================================
   DARK / LIGHT MODE
================================ */

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeToggle.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    } else {
        themeToggle.textContent = "🌙";
        localStorage.setItem("theme", "light");
    }
});


/* Remember the user's theme */

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
    themeToggle.textContent = "☀️";
}


/* ================================
   MOBILE MENU
================================ */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }
});


/* Close mobile menu after clicking */

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        menuToggle.textContent = "☰";
    });
});


/* ================================
   SIMPLE CHATBOT
================================ */

const chatMessages = document.getElementById("chatMessages");

const answers = {
    education:
        "Alex is currently studying Computer Science and is developing skills in programming, web development, databases, and software design.",

    skills:
        "Alex's skills include HTML, CSS, JavaScript, Python, Git/GitHub, and basic database management.",

    projects:
        "Alex has worked on projects such as a Study Planner and a Campus Event Hub, focusing on useful and responsive web applications.",

    contact:
        "You can contact Alex through alexrivera@example.com or through the social media links in the Contact section."
};


function askQuestion(question) {

    // Show user's question
    let questionText = "";

    if (question === "education") {
        questionText = "What is your education?";
    }

    if (question === "skills") {
        questionText = "What are your skills?";
    }

    if (question === "projects") {
        questionText = "What projects have you created?";
    }

    if (question === "contact") {
        questionText = "How can I contact you?";
    }

    const userMessage = document.createElement("div");

    userMessage.classList.add("message", "user-message");
    userMessage.textContent = questionText;

    chatMessages.appendChild(userMessage);


    // Show bot response
    setTimeout(() => {

        const botMessage = document.createElement("div");

        botMessage.classList.add("message", "bot-message");
        botMessage.textContent = answers[question];

        chatMessages.appendChild(botMessage);

        // Automatically scroll down
        chatMessages.scrollTop = chatMessages.scrollHeight;

    }, 400);
}


/* ================================
   CONTACT FORM
================================ */

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    formStatus.textContent =
        `Thanks, ${name}! Your message has been received.`;

    contactForm.reset();
});
