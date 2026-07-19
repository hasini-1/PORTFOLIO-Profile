<<<<<<< HEAD
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
        message: document.getElementById("message").value,
    };

    emailjs.send("service_qhj77x5", "template_vtr0554", params)
        .then(function(response) {
            console.log("SUCCESS!", response);
            alert("Message sent successfully!");
            document.querySelector("form").reset();
        })
        .catch(function(error) {
            console.error("FAILED...", error);
            alert("Failed to send message.");
        });
}

const menu = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");
menu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});
=======
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
        message: document.getElementById("message").value,
    };

    emailjs.send("service_qhj77x5", "template_vtr0554", params)
        .then(function(response) {
            console.log("SUCCESS!", response);
            alert("Message sent successfully!");
            document.querySelector("form").reset();
        })
        .catch(function(error) {
            console.error("FAILED...", error);
            alert("Failed to send message.");
        });
}


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
>>>>>>> 329f0ed9de165e963aad80290d4cb748a6a54105
