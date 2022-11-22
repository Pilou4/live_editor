
let inputText = document.querySelector('#input-text');
let contenuHTML = document.querySelector('#contenu-html');

function livePreview() {
  contenuHTML.innerHTML = inputText.value;
}

inputText.addEventListener('keyup', livePreview);


inputText.value = contenuHTML.innerHTML;