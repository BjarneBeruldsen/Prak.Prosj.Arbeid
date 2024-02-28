window.onload = function() {
  addPlaceholder(); // Sørger for at teksten vises ved start
};

function removePlaceholder() {
  var input = document.getElementById('v1_20');
  if (input.value == 'Søk') {
    input.value = '';
  }
}

function addPlaceholder() {
  var input = document.getElementById('v1_20');
  if (input.value == '' || input.value == null) {
    input.value = 'Søk';
  }
}