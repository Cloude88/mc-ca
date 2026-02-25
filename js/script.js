document.addEventListener('DOMContentLoaded', function() {
    // HOMEPAGE - Video loader e pulsanti invisibili
    const mainVideo = document.getElementById('mainVideo');
    const buttonContainer = document.getElementById('buttonContainer');

    if (mainVideo) {
        mainVideo.addEventListener('canplaythrough', function() {
            console.log('Video caricato completamente');
            if (buttonContainer) {
                buttonContainer.style.display = 'block';
            }
        });

        // Fallback se il video non carica entro 5 secondi
        setTimeout(function() {
            if (buttonContainer && buttonContainer.style.display === 'none') {
                buttonContainer.style.display = 'block';
                console.log('Timeout raggiunto, mostrando i pulsanti');
            }
        }, 5000);
    }

    // SECTION PAGES - Navigazione tra i progetti
    const navButtons = document.querySelectorAll('.nav-button');
    const projectSections = document.querySelectorAll('.project-section');

    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const sectionIndex = this.getAttribute('data-section');

            // Rimuovi classe active da tutti i bottoni
            navButtons.forEach(btn => btn.classList.remove('active'));
            // Aggiungi classe active al bottone cliccato
            this.classList.add('active');

            // Nascondi tutte le sezioni
            projectSections.forEach(section => section.classList.remove('active'));
            // Mostra la sezione selezionata
            const activeSection = document.querySelector(`.project-section[data-project="${sectionIndex}"]`);
            if (activeSection) {
                activeSection.classList.add('active');
            }
        });
    });

    // Mostra il primo progetto di default
    if (projectSections.length > 0) {
        projectSections[0].classList.add('active');
    }
});
