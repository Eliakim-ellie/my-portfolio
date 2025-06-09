document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger-btn');
  const navLinks = document.querySelector('.nav-links');
  hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('active');
  });
});

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thanks for reaching out! We'll get back to you shortly.");
});
Document.getElementById(submit).addEventListener("click", function () {

})
