// Finner input-elementet med ID v1_20
var searchInput = document.getElementById('v1_20');

// Legger til hendelseslytteren for tastetrykk
searchInput.addEventListener('keydown', function(event) {
    // Sjekker om tasten som ble trykket er Enter (key code 13)
    if (event.keyCode === 13) {
        // Henter verdien fra input-elementet
        var searchValue = searchInput.value.trim();
        
        // Sjekker om søkestrengen ikke er tom
        if (searchValue !== '') {
            // Konstruerer URL for den nye siden med lenker til alle sidene
            var newPageURL = 'siden_med_lenker.html?q=' + encodeURIComponent(searchValue);
            
            // Omdirigerer brukeren til den nye siden
            window.location.href = newPageURL;
        }
    }
});