document.getElementById("concertoBtn").addEventListener("click", function(){
    let quantity = document.getElementById("quantity1").value;
    localStorage.setItem("concertoQuantity", quantity);
    window.location.href = "cart.html";
});

document.getElementById("jogoBtn").addEventListener("click", function(){
    let quantity = document.getElementById("quantity2").value;
    localStorage.setItem("jogoQuantity", quantity);
    window.location.href = "cart.html";
});

if (document.getElementById("concertoQuantity")) {
    document.getElementById("concertoQuantity").innerText = localStorage.getItem("concertoQuantity");
}

if (document.getElementById("jogoQuantity")) {
    document.getElementById("jogoQuantity").innerText = localStorage.getItem("jogoQuantity");
}
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Perform authentication (replace with your own authentication logic)
    if (username === "admin" && password === "1234") {
        // Successful login, redirect to the admin panel
        window.location.href = "admin-panel.html";
    } else {
        // Invalid credentials, display error message
        alert("Invalid username or password");
    }
});
