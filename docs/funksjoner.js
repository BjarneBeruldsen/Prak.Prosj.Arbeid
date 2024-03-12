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