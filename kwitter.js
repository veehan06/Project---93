function addUser(){
    username = document.getElementById("login-input").value ;
    localStorage.setItem("UserName", username);
    window.location = "kwitter-load.html";
}