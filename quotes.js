const quotes = [
  "'The world is a book, and those who do not travel read only one page.' - Saint Augustine",
  "'Traveling – it leaves you speechless, then turns you into a storyteller.' - Ibn Battuta",
  "'Not all those who wander are lost.' - J.R.R. Tolkien",
];

let currentQuotesIndex = 0;

function displayQuotes(index) {
  console.log(index);
  const quotesElement = document.getElementById("quotes-container");
  console.log(quotesElement);
  quotesElement.innerText = quotes[index];
}

function cyclequotess() {
  if (currentQuotesIndex < quotes.length - 1) {
    currentQuotesIndex++;
  } else {
    currentQuotesIndex = 0;
  }
  displayQuotes(currentQuotesIndex);
}

// Display the first quotes initially
displayQuotes(0);
// Change quotes every 5 seconds
setInterval(cyclequotess, 5000);
