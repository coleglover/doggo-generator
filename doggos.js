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

function dogBreedButtonHandler(dogBreed) {
  const newImageWrapper = addLoader();
  addNewBreed(newImageWrapper, dogBreed);
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
      console.log(processedResponse);
      const img = document.createElement('img');
      img.src = processedResponse.message;
      img.alt = 'Cute doggo';
      removeLoader(imageWrapper);
      imageWrapper.appendChild(img);
    });
}

function addNewBreed(imageWrapper, dogBreed) {
  fetch('https://dog.ceo/api/breed/' + dogBreed + '/images/random')
    .then(response => {
      console.log(response);
      return response.json(); // returns JSON blob
    })
    .then(processedResponse => {
      console.log(processedResponse);
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

//adding functions here to disern what breed is being clicked

document.querySelector('.add-doberman').addEventListener(`click`, () => {
  return dogBreedButtonHandler('doberman');
});
document.querySelector('.add-whippet').addEventListener(`click`, () => {
  return dogBreedButtonHandler('whippet');
});
document.querySelector('.add-germanshepherd').addEventListener(`click`, () => {
  return dogBreedButtonHandler('germanshepherd');
});

document.querySelector('.add-vizsla').addEventListener(`click`, () => {
  return dogBreedButtonHandler('vizsla');
});

document
  .querySelector('.add-jack-russell-terrier')
  .addEventListener(`click`, () => {
    return dogBreedButtonHandler('terrier/russell');
  });

document.querySelector('.add-borzoi').addEventListener(`click`, () => {
  return dogBreedButtonHandler('borzoi');
});

document.querySelector('.add-chihuahua').addEventListener(`click`, () => {
  return dogBreedButtonHandler('chihuahua');
});
