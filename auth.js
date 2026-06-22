// Simple user storage (demo security)
function signup(){
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;

    if(user.length < 3 || pass.length < 4){
        document.getElementById("msg").innerText =
        "Invalid details!";
        return;
    }

    localStorage.setItem("user_"+user, pass);
    document.getElementById("msg").innerText =
    "Account created!";
}

function login(){
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;

    let stored = localStorage.getItem("user_"+user);

    if(stored && stored === pass){
        sessionStorage.setItem("loggedIn", "true");
        window.location.href = "index.html";
    } else {
        document.getElementById("msg").innerText =
        "Invalid login!";
    }
}