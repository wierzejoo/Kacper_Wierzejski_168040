// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
window.onload = function () {
    document.getElementById("submitButton").addEventListener("click", function () {
        var name = document.getElementById("nameInput").value;
        var password = document.getElementById("passwordInput").value;
        if (name === "" || password === "") {
            alert("Proszę wypełnić wszystkie pola.");
            return;
        }
        document.getElementById("result").innerText = "Wpisane imię: " + name + ", Wpisane hasło: " + password;
    });
};

