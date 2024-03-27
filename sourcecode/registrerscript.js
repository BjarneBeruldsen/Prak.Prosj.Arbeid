function sjekkLogginn() {
  // Hent verdien fra inndataboksene
  var mail = document.querySelector('.v39_3143').value;
  var passord = document.querySelector('.v39_3144').value;
  var passord1 = document.querySelector('.v39_33144').value;
  
  // Sjekk om noen av feltene er tomme
  if (mail.trim() === '' || passord.trim() === '' || passord1.trim() === '') {
    // Vis feilmelding
    var feilmelding2 = document.getElementById('feilmelding2');
    feilmelding2.style.display = 'block';
    feilmelding2.textContent = 'Feil med mail eller passord';

    // Skjul lagremelding
    var godkjenn1 = document.getElementById('godkjenn1');
    godkjenn1.style.display = 'none';
    
    // Avbryt lagring
    return;
  }
  
  // Skjul feilmeldingen hvis alle feltene er fylt ut riktig
  var feilmelding2 = document.getElementById('feilmelding2');
  feilmelding2.style.display = 'none';

  // Vis lagremeldingen
  var godkjenn1 = document.getElementById('godkjenn1');
  godkjenn1.style.display = 'inline'; // Vis bekreftelsesmeldingen
}