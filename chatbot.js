const chatBody = document.getElementById("chat-body");
const chatInput = document.getElementById("chat-input");

chatInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const userMsg = chatInput.value.toLowerCase();
    chatBody.innerHTML += `<div><b>You:</b> ${userMsg}</div>`;

    let botReply = "Sorry, please check the FAQ section.";

    faqData.forEach(item => {
      if (userMsg.includes(item.key)) {
        botReply = item.answer;
      }
    });

    chatBody.innerHTML += `<div><b>Bot:</b> ${botReply}</div>`;
    chatInput.value = "";
    chatBody.scrollTop = chatBody.scrollHeight;
  }
});
