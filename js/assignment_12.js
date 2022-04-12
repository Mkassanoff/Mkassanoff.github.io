
async function getQuote() {
console.log("quote button was clicked");
document.body.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
try{
   const response = await fetch(endpoint);
   if(!response.ok) {
     throw Error(response.statusText)
   }

   const json = await response.json();
   console.log(json);
   displayQuote(json.text);//fact
}
 catch(err){
  console.log(err)
  alert('Failed');
}
}

function displayQuote(quote){
  const quoteText = document.querySelector('#js-quote-text');
  quoteText.textContent = quote;
}

const endpoint = 'https://uselessfacts.jsph.pl/random.json?language=en'; //'https://catfact.ninja/fact';

const quoteButton = document.querySelector('#js-new-quote');
quoteButton.addEventListener('click', getQuote);
