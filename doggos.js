//import fetch from "node-fetch"

const doggos = document.querySelector(".doggos");

//fetch returns a promise - similar to a callback. A promise, like callbacks, allows you to deal with things asynchronously.

function addNewDoggo() {
  const promise = fetch("https://dog.ceo/api/breeds/image/random");

  promise
    .then((response) => {
      const processingPromise = response.json();
      return processingPromise;
      //return response.json // returns JSON blob
    })
    .then((processedResponse) => {
      const img = document.createElement("img");
      img.src = processedResponse.message;
      img.alt = "Cute doggos";
      doggos.appendChild(img);
    });
}

document.querySelector(".add-doggo").addEventListener("click", addNewDoggo);