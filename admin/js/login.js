document.getElementById("loginForm").addEventListener("submit", function(e){

    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if(username === "admin" && password === "123456"){

        window.location.href = "dashboard.html";

    }else{

        alert("Invalid Username or Password");

    }

});
