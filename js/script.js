document.getElementById('regForm').addEventListener('submit', function(event) {
    var name = document.getElementById('nom');
    var email = document.getElementById('email');
    var phone = document.getElementById('telephone');
    var subject = document.getElementById('sujet');
    var password = document.getElementById('mot-de-passe');
    var address = document.getElementById('adresse');
    var comment = document.getElementById('commentaire');

    if (name.value.trim() === "") {
        alert("Mettez votre nom.");
        name.focus();
        event.preventDefault();
        return false;
    }
    if (address.value.trim() === "") {
        alert("Mettez votre adresse.");
        address.focus();
        event.preventDefault();
        return false;
    }
    if (email.value.trim() === "" || !validateEmail(email.value)) {
        alert("Mettez une adresse email valide.");
        email.focus();
        event.preventDefault();
        return false;
    }
    if (phone.value.trim() === "" || !validatePhone(phone.value)) {
        alert("Mettez un numéro de téléphone valide.");
        phone.focus();
        event.preventDefault();
        return false;
    }
    if (password.value.trim() === "") {
        alert("Saisissez votre mot de passe.");
        password.focus();
        event.preventDefault();
        return false;
    }
    if (subject.value === "") {
        alert("Sélectionnez un livre.");
        subject.focus();
        event.preventDefault();
        return false;
    }
    if (comment.value.trim() === "") {
        alert("Écrivez un commentaire.");
        comment.focus();
        event.preventDefault();
        return false;
    }
});

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    var re = /^[0-9]{10}$/;
    return re.test(phone);
}
