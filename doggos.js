//import fetch from "node-fetch"
//window.addEventListener('load', hideSpinner);
const doggos = document.querySelector('.doggo-container');

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
  const newImageWrapper = addLoader();
  addNewDoggo(newImageWrapper);
}

function dogBreedButtonHandler() {
  const newImageWrapper = addLoader();
  addNewBreed(newImageWrapper);
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

function addNewBreed(imageWrapper) {
  fetch('https://dog.ceo/api/breed/hound/images/random')
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

//add a function here to disern what breed is being clicked
document
  .querySelector('.add-doberman-button')
  .addEventListener('click', dogBreedButtonHandler);

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
