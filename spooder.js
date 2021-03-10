var customName1 = document.getElementById('customname1');
var customName2 = document.getElementById('customname2')
var randomize = document.querySelector('.randomize');
var Quote = document.querySelector('.Quote');

function randomthingy(array){
  return array[Math.floor(Math.random()*array.length)];
}
// Var voor strings kinky
var QuoteText = "Cycy: :insertx: <br> Gwen: :inserty:";
var stringX =['Oi get yur head out of the gutter','You is afraid of spooders','Am big bad dragin'];
var stringY = ['No you not', 'Kinky', 'okay :3'];
// defs van de functie controleer regex klopt niet
function result() {
  var newQuote = QuoteText;
  var xItem = randomthingy(stringX);
  var yItem = randomthingy(stringY);

  newQuote = newQuote.replace(/:insertx:/g, xItem).replace(/:inserty:/g, yItem);
  // check of naam 1 aanwezig is en regex het weg anders niet
  if(customName1.value !== '') {
    var name = customName1.value;
    name = name.charAt(0).toUpperCase() + name.slice(1);
    newQuote = newQuote.replace(/Cycy/g, name);
  }
  // zelfde als 1
  if(customName2.value !== '') {
    var name = customName2.value;
    name = name.charAt(0).toUpperCase() + name.slice(1);
    newQuote = newQuote.replace(/Gwen/g, name);
  }
  // drukt nieuwe content naarbuiten
  Quote.innerHTML = newQuote;
  Quote.style.visibility = 'visible';
}
// pakt de random knop
randomize.addEventListener('click', result);
