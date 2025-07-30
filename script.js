let promptmsg = document.querySelector("#prompt");
let btn = document.querySelector("#btn");
let chatContainer = document.querySelector(".chat-container");
let suggestions=document.querySelectorAll(".btn")
const promptInput = document.getElementById('prompt');
const suggest = document.getElementById('suggestions');
let deletechat=document.querySelector("#delete");


promptInput.addEventListener('focus', () => {
  suggest.style.transform = 'translateY(0%)';
});

// Optional: Hide suggestions when input loses focus
promptInput.addEventListener('blur', () => {
  setTimeout(() => {
    suggest.style.transform = 'translateY(300%)';
  }, 2000);
});
suggestions.forEach(ele => {
    ele.addEventListener("click",()=>{
        promptmsg.value=ele.textContent;
    })
});
let quotes = [
    "Success is not final, failure is not fatal: It is the courage to continue that counts. — Winston Churchill",
    "Dream big and dare to fail. — Norman Vaughan",
    "It always seems impossible until it’s done. — Nelson Mandela",
    "Love is composed of a single soul inhabiting two bodies. — Aristotle",
    "The best thing to hold onto in life is each other. — Audrey Hepburn",
    "Where there is love there is life. — Mahatma Gandhi",
    "I used to think I was indecisive, but now I'm not so sure.",
    "Behind every great man is a woman rolling her eyes. — Jim Carrey",
    "If you think nobody cares if you're alive, try missing a couple of car payments. — Earl Wilson",
    "You can't use up creativity. The more you use, the more you have. — Maya Angelou",
    "Creativity takes courage. — Henri Matisse",
    "Every artist was first an amateur. — Ralph Waldo Emerson",
    "Education is the passport to the future, for tomorrow belongs to those who prepare for it today. — Malcolm X",
    "The beautiful thing about learning is nobody can take it away from you. — B.B. King",
    "Live as if you were to die tomorrow. Learn as if you were to live forever. — Mahatma Gandhi"
  ]

let jokes=[" Why don't skeletons fight each other? They don't have the guts." ,   "I'm on a seafood diet. I see food and I eat it.","Why did the scarecrow win an award? Because he was outstanding in his field.","Why did the developer go broke? Because he used up all his cache.","Why was the math book sad? Because it had too many problems.","Why do programmers prefer dark mode? Because light attracts bugs.",  "Why was the computer cold? It left its Windows open.",  "Why don’t scientists trust atoms? Because they make up everything!"]


let funfact = [
  
    "Bananas are radioactive due to their potassium content.",
    "Water can boil and freeze at the same time, under the right conditions (called the triple point).",
    "Octopuses have three hearts and blue blood.",
    "A snail can sleep for three years.",
    "A group of flamingos is called a 'flamboyance'.",
    "Dolphins have names for each other and respond to them.",
    "Napoleon was once attacked by a horde of bunnies.",
    "In ancient Egypt, servants were sometimes smeared with honey to attract flies away from the pharaoh.",
    "Oxford University is older than the Aztec Empire.",
    "A day on Venus is longer than its year.",
    "There are more stars in the universe than grains of sand on Earth.",
    "Neutron stars can spin at a rate of 600 rotations per second."
 ,
    "Your nose can remember 50,000 different scents.",
    "The human body contains enough fat to make seven bars of soap.",
    "You can’t hum while holding your nose closed."
]
let how=["i am wonderful 😋" ,"i am interactive 😉" , "i am cool 😁 " ];
function createChatbox(html, classname) {
    let div = document.createElement("div");
    div.classList.add(classname);
    div.innerHTML = html;
    return div;
}
function showLoading(){
      let html=`     <div class="img">
                <img src="ai.png" alt="" width="50px">
            </div>
            <div class="text-box">
            <p class="text"> </p>
            <img src="/load-32_256.gif" alt="" class="loading" width="30">
            </div>`;
              let Chatbox=createChatbox(html,"chatbot-box");
              chatContainer.appendChild(Chatbox);
              return Chatbox;
}
let reply="";

function getReply(chatbox) {
    let loading = chatbox.querySelector(".loading");
    let text = chatbox.querySelector(".text");
    loading.style.display = "none";
    text.innerText = reply; 
}

btn.addEventListener("click",()=>{
    let input=promptInput.value
let userinput = input.toLowerCase();
if(userinput){
    setTimeout(()=>{
        deletechat.style.display="block";
    },1000)
}
if (userinput.includes("hey there") ||userinput.includes("hi") ||userinput.includes("hi")) {
    reply = "hey, how can I help you today?";
} else if (userinput.includes("your name?")) {
    reply = "I don't have a name yet, but you can call me ChatBuddy!.";
} else if (userinput.includes("tell me a joke")) {
  let index=Math.floor(Math.random()*jokes.length-1);
  reply=jokes[index];
}else if(userinput.includes("who created you")){
    reply="syeda maham amjad";
}else if (userinput.includes("how are you")){
      let index=Math.floor(Math.random()*how.length-1);
      reply=how[index];
}else if(userinput.includes("fun fact")){
      let index=Math.floor(Math.random()*funfact.length-1);
   reply=funfact[index];
}else if(userinput.includes("qoutes")){
      let index=Math.floor(Math.random()*quotes.length-1);
     reply=quotes[index];
}else if(userinput.includes("what can you do? ")||userinput.includes("tell me about yourself")){
 reply=" i am a chat bot and i can greet you ,tell you a joke, pick a random qoute for you and answer few questions which you can see in suggestions on your screen - Thank you! "
}else if(userinput.includes("Good morning")){
  reply="Good morning 😊";
}else if(userinput.includes("Good evening")){
    reply="Good Evening 🌃"
}else{
    reply="choose something from suggestions i am a custom chatbot my ability to reply is limited -Thankyou ! have a nice day 😊";
}

    let html=`   <p id="user-text">${userinput}</p>`
let usermessage=createChatbox(html,"user-chatbox");
chatContainer.appendChild(usermessage);
    promptmsg.value = "";
   let chatbox = null;
    setTimeout(() => {
        chatbox = showLoading();
        setTimeout(() => getReply(chatbox), 1500);
    }, 300);
})

deletechat.addEventListener("click",()=>{
    let con=window.confirm("you sure you want to delete this chat?");
    if(con){
    chatContainer.innerHTML="";}
})