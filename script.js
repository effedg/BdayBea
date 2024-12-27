   // Mostra l'alert personalizzato al caricamento della pagina
   window.onload = function() {
    document.getElementById('customAlert').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
};

// Funzione per chiudere l'alert
function closeAlert() {
    document.getElementById('customAlert').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}


// Countdown
const eventDate = new Date("2024-01-01T00:00:00").getTime();
const countdownElement = document.getElementById("countdown");

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    if (timeLeft <= 0) {
        countdownElement.innerHTML = "La festa è iniziata! 🎉";
        clearInterval(countdownInterval);
    } else {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        countdownElement.innerHTML = `Tempo rimasto: ${days} giorni, ${hours} ore, ${minutes} minuti, ${seconds} secondi`;
    }
}

const countdownInterval = setInterval(updateCountdown, 1000);

// Conferma partecipazione
function submitConfirmation() {
    const name = document.getElementById("name").value;
    const guests = document.getElementById("guests").value;

    if (name && guests) {
        document.getElementById("confirmation-section").style.display = "none";
        document.getElementById("confirmation-message").style.display = "block";
    } else {
        alert("Per favore, compila tutti i campi.");
    }
}