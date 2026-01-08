const chatBody = document.getElementById("chat-body");
const chatInput = document.getElementById("chat-input");

function addMessage(sender, message) {
  const div = document.createElement("div");
  div.innerHTML = `<b>${sender}:</b> ${message}`;
  chatBody.appendChild(div);
  chatBody.scrollTop = chatBody.scrollHeight;
}

chatInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const userMsg = chatInput.value.trim().toLowerCase();
    if (userMsg === "") return;

    addMessage("You", userMsg);

    let botReply = "Sorry, please refer to the FAQ or Contact section.";

    for (let i = 0; i < faqData.length; i++) {
      if (userMsg.includes(faqData[i].key)) {
        botReply = faqData[i].answer;
        break;
      }
    }

    setTimeout(() => {
      addMessage("Bot", botReply);
    }, 300);

    chatInput.value = "";
  }
});
