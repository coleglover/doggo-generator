//import fetch from "node-fetch"
//window.addEventListener('load', hideSpinner);
const doggos = document.querySelector('.doggo-crate');

//fetch returns a promise - similar to a callback. A promise, like callbacks, allows you to deal with things asynchronously.

function addLoader() {
  const loadingWrapper = document.createElement('div');
  const loader = document.createElement('div');

  loader.classList.add('loading');
  loadingWrapper.appendChild(loader);

  loadingWrapper.classList.add('loading-wrapper');
  doggos.appendChild(loadingWrapper);

  return loadingWrapper;
}

function dogButtonHandler() {
  console.log('this should run');
  const newImageWrapper = addLoader();
  addNewDoggo(newImageWrapper);
}

function removeLoader(imageWrapper) {
  const loader = imageWrapper.querySelector('.loading');
  imageWrapper.removeChild(loader);
}

function addNewDoggo(imageWrapper) {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => {
      return response.json(); // returns JSON blob
    })
    .then(processedResponse => {
      const img = document.createElement('img');
      img.src = processedResponse.message;
      img.alt = 'Cute doggo';
      removeLoader(imageWrapper);
      imageWrapper.appendChild(img);
    });
}

document
  .querySelector('.add-doggo-button')
  .addEventListener('click', dogButtonHandler);

// click button
// add loader
// create img
// remove loader
//
//
//

// dogButtonHandler
// -calls add contianer + loader
// -calls addNewDoggo
