/*All kode på denne filen er generert av AI.*/
var element1 = document.querySelector('.v9_50');
var element2 = document.querySelector('.v9_51');
var element3 = document.querySelector('.v9_38');
var videoElement = document.getElementById('v1_34');
videoElement.addEventListener('click', showVideoMessage);

// Legger til hendelseslyttere
element1.addEventListener('click', showMessage);
element2.addEventListener('click', showMessage);
element3.addEventListener('click', showMessage);

// Funksjon for å vise melding
function showMessage() {
    alert("Søk funksjon ikke tilgjengelig! Vennligst benytt booking funksjon nedenfor");
}

// Funksjon for å vise melding om video ikke er tilgjengelig
function showVideoMessage() {
    alert("Beklager, videoen er ikke tilgjengelig ennå.");
}
