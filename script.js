const textToType = "3X certified Salesforce professional and Army veteran with an active security clearance. Dedicated to efficiency and delivering top-tier service. Reputation for reliability, proactive problem-solving, precision, and an eagerness for continuous learning. Proficient in data management; excels in designing and configuring Salesforce solutions, streamlining processes, and monitoring key metrics.";

const typingElement = document.getElementById('typing-effect');
let charIndex = 0;

function typeText() {
    if (charIndex < textToType.length) {
        typingElement.textContent += textToType.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 40); 
    }
}

typeText();
