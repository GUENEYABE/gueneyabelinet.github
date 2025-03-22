document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            let name = document.getElementById("name").value;
            let prenom = document.getElementById("prenom").value;
            let sujet = document.getElementById("sujet").value;
            let email = document.getElementById("email").value;
            let message = document.getElementById("message").value;

            if (name && prenom && sujet && email && message) {
                alert("Message envoyé avec succès !");
                form.reset();
            } else {
                alert("Veuillez remplir tous les champs.");
            }
        });
    }
});
document.addEventListener("DOMContentLoaded", function() {
    alert("Page Chargé Avec Succès !");
});

