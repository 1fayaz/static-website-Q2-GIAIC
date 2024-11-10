// TypeScript code to handle form validation
document.addEventListener("DOMContentLoaded", () => {
   const form = document.getElementById("contactForm") as HTMLFormElement;
   const formMessage = document.getElementById("formMessage") as HTMLElement;
 
   form?.addEventListener("submit", (event) => {
     event.preventDefault();
 
     const name = (document.getElementById("name") as HTMLInputElement).value;
     const email = (document.getElementById("email") as HTMLInputElement).value;
     const message = (document.getElementById("message") as HTMLTextAreaElement).value;
 
     if (name && email && message) {
       formMessage.textContent = "Thank you for your message!";
       formMessage.style.color = "green";
       form.reset();
     } else {
       formMessage.textContent = "Please fill in all fields.";
       formMessage.style.color = "red";
     }
   });
 });
 