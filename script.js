document.addEventListener('DOMContentLoaded', function() {

    // --- Evidenziazione link attivo nella navigazione ---
    // Questo è già gestito con la classe .active direttamente nell'HTML per semplicità.
    // Se volessi farlo dinamicamente:
    /*
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll('header nav a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    */
    // Dato che hai già la classe .active nell'HTML, questo blocco sopra non è strettamente necessario
    // a meno che tu non voglia una logica più complessa per l'attivazione.

    // --- Anno corrente nel footer ---
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // --- Gestione (fittizia) del modulo contatti ---
    const contactForm = document.getElementById('contactForm');
    const formResponseDiv = document.getElementById('form-response');

    if (contactForm && formResponseDiv) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Impedisce l'invio reale del modulo

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            formResponseDiv.textContent = ''; // Pulisce messaggi precedenti
            formResponseDiv.className = ''; // Rimuove classi precedenti

            if (!name || !email || !message) {
                formResponseDiv.textContent = 'Per favore, compila tutti i campi obbligatori.';
                formResponseDiv.classList.add('error-message');
                return;
            }

            // Semplice validazione email (può essere più robusta)
            if (!email.includes('@') || !email.includes('.')) {
                formResponseDiv.textContent = 'Per favore, inserisci un indirizzo email valido.';
                formResponseDiv.classList.add('error-message');
                return;
            }
            
            // Simulazione invio
            console.log('Dati modulo:', { name, email, message });
            formResponseDiv.textContent = 'Grazie per il tuo messaggio, ' + name + '! Ti risponderemo presto (simulazione).';
            formResponseDiv.classList.add('success-message');
            
            contactForm.reset(); // Pulisce il modulo dopo l'invio (fittizio)
        });
    }

    // --- Smooth scroll per eventuali ancore interne (opzionale) ---
    // Esempio: se avessi link tipo <a href="#sezione">Vai a Sezione</a>
    /*
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    */

});