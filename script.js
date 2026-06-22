const questions = {
    it: ["Tell me about yourself", "What is Python?", "What is OOP?"],
    bpo: ["How will you handle angry customer?", "What is communication?"],
    hr: ["Why should we hire you?", "What are your strengths?"],
    customer: ["What is good customer service?", "How do you handle pressure?"]
};

let current = [];
let i = 0;
let score = 0;

function startInterview(){
    let role = document.getElementById("role").value;
    current = questions[role];
    i = 0;
    score = 0;

    document.getElementById("questionBox").innerText = current[i];
}

function nextQuestion(){

    let ans = document.getElementById("answer").value;

    if(ans.length > 30){
        score += 10;
    } else {
        score += 5;
    }

    i++;
    document.getElementById("answer").value = "";

    if(i < current.length){
        document.getElementById("questionBox").innerText = current[i];
    } else {
        document.getElementById("questionBox").innerText = "Completed 🎉";
        document.getElementById("scoreBox").innerText = "Score: " + score;
    }
}

/* Voice */
function startVoice(){
    let r = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    r.lang = "en-US";
    r.start();

    r.onresult = function(e){
        document.getElementById("answer").value =
        e.results[0][0].transcript;
    }
}