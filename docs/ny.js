/*All kode på denne filen er generert av AI.*/
function removePlaceholder(input) {
  if (input.value === input.defaultValue) {
    input.value = "";
  }
}

function addPlaceholder(input) {
  if (input.value === "") {
    input.value = input.defaultValue;
  }
}
