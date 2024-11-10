// TypeScript code to handle form validation
document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("contactForm");
    var formMessage = document.getElementById("formMessage");
    form === null || form === void 0 ? void 0 : form.addEventListener("submit", function (event) {
        event.preventDefault();
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;
        if (name && email && message) {
            formMessage.textContent = "Thank you for your message!";
            formMessage.style.color = "green";
            form.reset();
        }
        else {
            formMessage.textContent = "Please fill in all fields.";
            formMessage.style.color = "red";
        }
    });
});
