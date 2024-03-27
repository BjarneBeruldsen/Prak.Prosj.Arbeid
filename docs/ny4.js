var element1 = document.querySelector('.v9_50');
var element2 = document.querySelector('.v9_51');
var element3 = document.querySelector('.v9_38');

// Legger til hendelseslyttere
element1.addEventListener('click', showMessage);
element2.addEventListener('click', showMessage);
element3.addEventListener('click', showMessage);

// Funksjon for å vise melding
function showMessage() {
    alert("Søk funksjon ikke tilgjengelig! Vennligst benytt booking funksjon nedenfor");
}

