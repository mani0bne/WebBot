function sendMessage() {
    var userInput = document.getElementById('user-input').value;
    if (userInput.trim() !== "") {
        appendMessage("You:" + userInput);
        processUserInput(userInput);
        document.getElementById('user-input').value = "";
    }
}
function processUserInput(userInput) {
    var chatContainer = document.getElementById('chat');
    var response;

  // Simple logic to handle user input
  if (userInput.toLowerCase().includes("attendance")) {
    response = "Our attendance system allows students to check their attendance records online. You can also contact the college administration for more details.";
} else if (userInput.toLowerCase().includes("contact")) {
    response = "You can contact the college administration at admin@examplecollege.com or call +1-555-555-5555.";
} else if(userInput.toLowerCas().includes("Hi")){
    response="Hello! Welcome to the Portal"
}
else {
    response = "I'm sorry, I didn't understand that. Please ask about attendance or contact details.";
}

    appendMessage("Chatbot" + response);


}
function appendMessage(message) {
    var chatContainer = document.getElementById('chat');
    var messageElement = document.createElement('div');
    messageElement.textContent = message;
    chatContainer.appendChild(messageElement);
}
