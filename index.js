function login(){
    let user, password;

    user = document.getElementById("username").value;
    password = document.getElementById("password").value;

    if(user == "user" && password == "1234"){
        window.location = "index2.html"
    } else{
        alert("Usuario o Password incorrecto, ¡Porfavor revise sus datos!")
    }
}