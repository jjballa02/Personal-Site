document.addEventListener("DOMContentLoaded", function () {
    // Dynamic greeting based on time of day
    const greetingElement = document.getElementById("greeting");
    if (greetingElement) {
      const hours = new Date().getHours();
      let greetingMessage = "Hello!";
      if (hours < 12) {
        greetingMessage = "Good morning!";
      } else if (hours < 18) {
        greetingMessage = "Good afternoon!";
      } else {
        greetingMessage = "Good evening!";
      }
      greetingElement.textContent = greetingMessage;
    }
  
    // Smooth scrolling for navigation links
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        const targetPage = this.getAttribute("href");
        window.location.href = targetPage;
      });
    });
  });
  console.log("Hello World");