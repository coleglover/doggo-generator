//import fetch from "node-fetch"
window.addEventListener('load', hideSpinner);
const doggos = document.getElementById('doggos');

//fetch returns a promise - similar to a callback. A promise, like callbacks, allows you to deal with things asynchronously.

function addNewDoggo() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => {
      return response.json(); // returns JSON blob
    })
    .then(processedResponse => {
      const img = document.createElement('img');
      img.src = processedResponse.message;
      img.alt = 'Cute doggo';
      doggos.appendChild(img);
    });
}
function hideSpinner() {
  let d = getElementById('loading');
  document.removeChild(d);
}

document.getElementById('add-doggo').addEventListener('click', addNewDoggo);

window.getElementById('loading-wrapper').addEventListener('load', hideSpinner);
