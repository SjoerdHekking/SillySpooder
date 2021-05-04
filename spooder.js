import {
  QuoteText, adjective, noun, city, verb, animal, pluralNoun, fluid,
  substance, eventthing, weekday, theme, veggie, bodyPart, place, number,
  website,
  colors,
  rhymeBlu,
  illness,
  suspects,
} from './store.js';

const nameOne = document.getElementById('customname1');
const customName2 = document.getElementById('customname2');
const randomize = document.querySelector('.randomize');
const Quote = document.querySelector('.Quote');

/**
 * Fetch one random item from array
 *
 * @param {array} array array o cities like: Tokyo, London, Berlin etc
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
* @example
* var shuffled = require('fyshuffle')([2, 3, 5, 7, 11]);
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
  let newQuote = randomthingy(QuoteText);
  const adjItem = randomthingy(adjective);
  const adjItem2 = randomthingy(adjective);
  const adjItem3 = randomthingy(adjective);
  const adjItem4 = randomthingy(adjective);
  const adjItem5 = randomthingy(adjective);
  const adjItem6 = randomthingy(adjective);
  const nounItem = randomthingy(noun);
  const nounItem2 = randomthingy(noun);
  const nounItem3 = randomthingy(noun);
  const pnounItem = randomthingy(pluralNoun);
  const pnounItem2 = randomthingy(pluralNoun);
  const pnounItem3 = randomthingy(pluralNoun);
  const animalItem = randomthingy(animal);
  const animalItem2 = randomthingy(animal);
  const cityItem = randomthingy(city);
  const bodyItem = randomthingy(bodyPart);
  const bodyItem2 = randomthingy(bodyPart);
  const placeItem = randomthingy(place);
  const webItem = randomthingy(website);
  const numberItem = randomthingy(number);
  const verbItem = randomthingy(verb);
  const verbItem2 = randomthingy(verb);
  const fluidItem = randomthingy(fluid);
  const substanceItem = randomthingy(substance);
  const eventItem = randomthingy(eventthing);
  const themeItem = randomthingy(theme);
  const weekdayItem = randomthingy(weekday);
  const veggieItem = randomthingy(veggie);

  const illnessItem = randomthingy(illness);
  const bluRhyItem = randomthingy(rhymeBlu);
  const colorItem = randomthingy(colors);

  const getName = fyshuffle(suspects);

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

  if (customName2.value !== '') {
    let name = customName2.value;
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