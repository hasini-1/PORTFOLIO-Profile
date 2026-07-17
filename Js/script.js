alert("JavaScript Loaded");
const resumeButton = document.querySelector(".resume-btn");

resumeButton.addEventListener("click", () => {

    alert("Your resume download will begin shortly.");

});

function sendMail(event) {
    event.preventDefault();

    const params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    emailjs.send(
        "service_9jo2rhn",
        "__ejs-test-mail-service__  ",
        params
    )
    .then(function () {
        alert("Message sent successfully!");

        document.querySelector("form").reset();
    })
    .catch(function (error) {
        alert("Failed to send message.");
        console.error(error);
    });
}


emailjs.init("w-zpeVNJ_R49-3uz6");

const menu = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

// Open/Close menu when clicking hamburger
menu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Close menu after clicking any navigation link
const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});
