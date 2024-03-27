/*All kode på denne filen er generert av AI.*/
window.onload = function() {
  addPlaceholder('v1_20');
  addPlaceholder('mailboks');
  addPlaceholder('passordboks');
};

function removePlaceholder(elementId) {
  var input = document.getElementById(elementId);
  if (input.value == input.placeholder) {
    input.value = '';
  }
}

function addPlaceholder(elementId) {
  var input = document.getElementById(elementId);
  if (input.value == '' || input.value == null) {
    input.value = input.placeholder;
  }
}

function toggleCheckmark() {
  var huskMeg = document.getElementById('husk_meg');
  huskMeg.classList.toggle('checked');
}
//stjerne 
// Hent select-elementet
var dropdown = document.getElementById("stjerneDropdown");

// Lytt etter endringer i dropdown
dropdown.addEventListener("change", function() {
  // Hent valgt verdi
  var valgtVerdi = dropdown.value;
  // Vis valgt verdi i konsollen
  console.log("Du har valgt " + valgtVerdi + " stjerner.");
  // Du kan gjøre videre behandling med valgtVerdi her
});

function lagreEndringer() {
  // Hent verdien fra inndataboksene
  var fornavn = document.querySelector('.v39_1143').value;
  var etternavn = document.querySelector('.v39_1144').value;
  var fødselsdato = document.querySelector('.v39_1156').value;
  
  // Sjekk om noen av feltene er tomme
  if (fornavn.trim() === '' || etternavn.trim() === '' || fødselsdato.trim() === '') {
    // Vis feilmelding
    var feilmelding = document.getElementById('feilmelding');
    feilmelding.style.display = 'block';
    feilmelding.textContent = 'Vennligst fyll ut manglende opplysninger.';

    // Skjul lagremelding
    var lagreMelding = document.getElementById('lagreMelding');
    lagreMelding.style.display = 'none';
    
    // Avbryt lagring
    return;
  }
  
  // Skjul feilmeldingen hvis alle feltene er fylt ut riktig
  var feilmelding = document.getElementById('feilmelding');
  feilmelding.style.display = 'none';

  // Vis lagremeldingen
  var lagreMelding = document.getElementById('lagreMelding');
  lagreMelding.style.display = 'inline'; // Vis bekreftelsesmeldingen
}

/*sjekk innlogging */

function sjekkLogginn() {
  // Hent verdien fra inndataboksene
  var mail = document.querySelector('.v39_3143').value;
  var passord = document.querySelector('.v39_3144').value;
  
  // Sjekk om noen av feltene er tomme
  if (mail.trim() === '' || passord.trim() === '') {
    // Vis feilmelding
    var feilmelding1 = document.getElementById('feilmelding1');
    feilmelding1.style.display = 'block';
    feilmelding1.textContent = 'Feil med mail eller passord';

    // Skjul lagremelding
    var godkjenn = document.getElementById('godkjenn');
    godkjenn.style.display = 'none';
    
    // Avbryt lagring
    return;
  }
  
  // Skjul feilmeldingen hvis alle feltene er fylt ut riktig
  var feilmelding1 = document.getElementById('feilmelding1');
  feilmelding1.style.display = 'none';

  // Vis lagremeldingen
  var godkjenn = document.getElementById('godkjenn');
  godkjenn.style.display = 'inline'; // Vis bekreftelsesmeldingen
}


