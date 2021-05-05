import * as store from './store.js';

const nameOne = document.getElementById('customname1');
const nameTwo = document.getElementById('customname2');
const randomize = document.querySelector('.randomize');
const Quote = document.querySelector('.Quote');

/**
 * add html markup to bare website from array element
 * @param {array} array website needing html markup
 * @return {array} array with html markup
 * @example 'www.motoslave.com' ->
 * '<a href="http//www.motoslave.com">www.motoslave.com</a>'
 */
function appendHref(array) {
  const appWebsite = [];
  for (let index = 0; index < array.length; index++) {
    appWebsite[index] =
      '<a href="http://' +
      array[index] +
      '">' +
      array[index] +
      '</a>';
  }
  return appWebsite;
}

/**
 * Fetch one random item from array
 * @param {array} array any array, ecample; cities like: Tokyo, London, Berlin.
 * @return {array} one item (ex: London) from array
 */
function randomthingy(array) {
  return array[Math.floor(Math.random() * array.length)];
}

/**
* Shuffles an array in place. This shuffle is performed using the Fisher-Yates
* algorithm, which is both unbiased and efficient in terms of time and space.
* @param {array} array the array to shuffle.
* @return {array} a reference to array.
* @example var shuffled = require('fyshuffle')([2, 3, 5, 7, 11]);
*/
function fyshuffle(array) {
  let remaining = array.length;

  while (remaining > 0) {
    const pos = Math.floor(Math.random() * remaining);
    const tmp = array[pos];
    const end = remaining - 1;

    array[pos] = array[end];
    array[end] = tmp;

    --remaining;
  }

  return array;
}

/**
 * Generates the string/story - super huge function like mega gazillion long.
 */
function result() {
  let newQuote = randomthingy(store.QuoteText);
  const adjItem = randomthingy(store.adjective);
  const adjItem2 = randomthingy(store.adjective);
  const adjItem3 = randomthingy(store.adjective);
  const adjItem4 = randomthingy(store.adjective);
  const adjItem5 = randomthingy(store.adjective);
  const adjItem6 = randomthingy(store.adjective);
  const nounItem = randomthingy(store.noun);
  const nounItem2 = randomthingy(store.noun);
  const nounItem3 = randomthingy(store.noun);
  const pnounItem = randomthingy(store.pluralNoun);
  const pnounItem2 = randomthingy(store.pluralNoun);
  const pnounItem3 = randomthingy(store.pluralNoun);
  const animalItem = randomthingy(store.animal);
  const animalItem2 = randomthingy(store.animal);
  const cityItem = randomthingy(store.city);
  const bodyItem = randomthingy(store.bodyPart);
  const bodyItem2 = randomthingy(store.bodyPart);
  const placeItem = randomthingy(store.place);
  const webFull = appendHref(store.website);
  const webItem = randomthingy(webFull);
  const numberItem = randomthingy(store.number);
  const verbItem = randomthingy(store.verb);
  const verbItem2 = randomthingy(store.verb);
  const fluidItem = randomthingy(store.fluid);
  const substanceItem = randomthingy(store.substance);
  const eventItem = randomthingy(store.eventthing);
  const themeItem = randomthingy(store.theme);
  const weekdayItem = randomthingy(store.weekday);
  const veggieItem = randomthingy(store.veggie);
  const veggieItem2 = randomthingy(store.veggie);

  const illnessItem = randomthingy(store.illness);
  const bluRhyItem = randomthingy(store.rhymeBlu);
  const colorItem = randomthingy(store.colors);

  const getName = fyshuffle(store.suspects);

  const name1 = getName[0];
  const name2 = getName[1];

  newQuote = newQuote
      .replace(/:insertadjective:/g, adjItem)
      .replace(/:insertadjective2:/g, adjItem2)
      .replace(/:insertadjective3:/g, adjItem3)
      .replace(/:insertadjective4:/g, adjItem4)
      .replace(/:insertadjective5:/g, adjItem5)
      .replace(/:insertnoun:/g, nounItem)
      .replace(/:insertnoun2:/g, nounItem2)
      .replace(/:insertpluralnoun:/g, pnounItem)
      .replace(/:insertpluralnoun2:/g, pnounItem2)
      .replace(/:insertpluralnoun3:/g, pnounItem3)
      .replace(/:insertanimal:/g, animalItem)
      .replace(/:insertcity:/g, cityItem)
      .replace(/:insertbodypart:/g, bodyItem)
      .replace(/:insertbodypart2:/g, bodyItem2)
      .replace(/:insertplace:/g, placeItem)
      .replace(/:insertwebsite:/g, webItem)
      .replace(/:insertnumber:/g, numberItem)
      .replace(/:insertverb:/g, verbItem)
      .replace(/:insertadjective6:/g, adjItem6)
      .replace(/:insertfluid:/g, fluidItem)
      .replace(/:insertsubstance:/g, substanceItem)
      .replace(/:insertevent:/g, eventItem)
      .replace(/:insertanimal2:/g, animalItem2)
      .replace(/:inserttheme:/g, themeItem)
      .replace(/:insertweekday:/g, weekdayItem)
      .replace(/:insertnoun3:/g, nounItem3)
      .replace(/:insertverb2:/g, verbItem2)
      .replace(/:insertvegetable:/g, veggieItem)
      .replace(/:insertvegetable2:/g, veggieItem2)
      .replace(/:insertBluRhyme:/g, bluRhyItem)
      .replace(/:insertIllness:/g, illnessItem)
      .replace(/:insertcolor:/g, colorItem);

  // check if name 1 is present and regex it away otherwise not
  if (nameOne.value !== '') {
    let name = nameOne.value;
    name = name.charAt(0).toUpperCase() + name.slice(1);
    newQuote = newQuote
        .replace(/:Cycy:/g, '<span class="person">' + name + '</span>');
    // lege var beter maken
  } else {
    newQuote = newQuote
        .replace(/:Cycy:/g, '<span class="person">' + name1 + '</span>');
  }

  if (nameTwo.value !== '') {
    let name = nameTwo.value;
    name = name.charAt(0).toUpperCase() + name.slice(1);
    newQuote = newQuote
        .replace(/:Gwen:/g, '<span class="person">' + name + '</span>');
    // lege var beter maken
  } else {
    newQuote = newQuote
        .replace(/:Gwen:/g, '<span class="person">' + name2 + '</span>');
  }

  // drukt nieuwe content naarbuiten
  Quote.innerHTML = newQuote;
  Quote.style.visibility = 'visible';
}
// pakt de random knop
randomize.addEventListener('click', result);