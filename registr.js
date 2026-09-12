console.log("js is working")

let registrButton = document.getElementById("registr_button");

registrButton.addEventListener("click", function () {
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let age = document.getElementById("age").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let repeat_password = document.getElementById("repeat_password").value;

    if (name == ""){
        alert("Name is required");
        return;
    } else if (name.length < 3){
        alert("Name must be longer then 3 symbols");
        return;
    }

    if (surname == ""){
        alert("Surname is required");
        return;
    } else if (surname.length < 3){
        alert("Surname must be longer then 3 symbols");
        return;
    }

    if (age == ""){
        alert("Age is required");
        return;
    } else if (age < 16){
        alert("You are too young! SingUp declined.");
        return;
    }

    if (email == ""){
        alert("Email is required");
        return;
    }

    if (password == ""){
        alert("password is required");
        return;
    } else if (password.length < 6 ) {
        alert("Password must be longer then 6 symbols!");
        return;
    }


    if (repeat_password == ""){
        alert("Confirmation password is required");
        return;
    } else if (password !== repeat_password) {
        alert("Password and confurmation password must bee the same!");
        return;
    }
    

    console.log({
        name,
        surname,
        age,
        email,
        password,
    });

    console.log("Registration completed!"); 

    window.location.href = "main.html";
});


let cheatButton = document.getElementById("cheat_button");

cheatButton.addEventListener("click", function () {
    window.location.href = "main.html";
});