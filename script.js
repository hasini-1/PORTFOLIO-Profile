// Resume download alert
const resumeButton = document.querySelector('a[download]');

if (resumeButton) {
  resumeButton.addEventListener("click", () => {
    alert("Your resume download will begin shortly.");
  });
}


// Contact form - EmailJS
function sendMail(event) {
  event.preventDefault();

  const params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  emailjs
    .send("service_qhj77x5", "template_vtr0554", params)
    .then(function (response) {
      console.log("SUCCESS!", response);
      alert("Message sent successfully!");

      event.target.reset();
    })
    .catch(function (error) {
      console.error("FAILED...", error);
      alert("Failed to send message.");
    });
}


// Mobile Navigation Menu
const menu = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menu && navLinks) {
  menu.addEventListener("click", () => {
    navLinks.classList.toggle("hidden");
    navLinks.classList.toggle("flex");

    const isOpen = !navLinks.classList.contains("hidden");

    menu.setAttribute("aria-expanded", isOpen);
    menu.textContent = isOpen ? "✕" : "☰";
  });


  // Close menu after clicking a navigation link
  const links = navLinks.querySelectorAll("a");

  links.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 768) {
        navLinks.classList.add("hidden");
        navLinks.classList.remove("flex");

        menu.setAttribute("aria-expanded", "false");
        menu.textContent = "☰";
      }
    });
  });
}