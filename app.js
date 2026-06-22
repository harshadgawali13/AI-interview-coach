const questions = {
    it: [
        "Tell me about yourself",
        "What is JavaScript?",
        "What is OOP?"
    ],
    bpo: [
        "How do you handle angry customer?",
        "What is communication?"
    ],
    hr: [
        "Why should we hire you?",
        "Your strengths?"
    ]
};

let q = [];
let i = 0;
let score = 0;

// 🔐 Safety check (login protection)
if (sessionStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html";
}

function start() {

    let role = document.getElementById("role").value;

    q = questions[role];

    if (!q || q.length === 0) {
        alert("Questions not found!");
        return;
    }

    i = 0;
    score = 0;

    document.getElementById("qBox").innerText = q[i];
}

function next() {

    let ans = document.getElementById("ans").value.trim();

    if (ans === "") {
        alert("Please write answer!");
        return;
    }

    // scoring logic
    if (ans.length > 50) {
        score += 10;
    } else if (ans.length > 20) {
        score += 5;
    } else {
        score += 2;
    }

    i++;
    document.getElementById("ans").value = "";

    if (i < q.length) {
        document.getElementById("qBox").innerText = q[i];
    } else {
        document.getElementById("qBox").innerText =
            "Interview Completed 🎉";

        document.getElementById("score").innerText =
            "Final Score: " + score + " / " + (q.length * 10);
    }
}