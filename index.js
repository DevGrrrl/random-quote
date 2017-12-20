var quoteObj;
var object;
var search = document.getElementById('search');
var section = document.getElementById('quote__block');
var quote = document.getElementById('quote__text');
var author = document.getElementById('quote__author');
var twitterbtn = document.getElementById('twitter-share-button');
var link;
var tweetText;

var url = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en';


function getQuote(url) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
    var obj = JSON.parse(xhr.responseText);
    updateDom(obj);
  } else {
    console.log('error');
  }
}
  xhr.open("GET", url, true);
  xhr.send();

}

function updateDom(response){
  //stop repeat of quotes
   if (response.quoteLink === quote.link) {
     getData();
   } else {
     //updateDom
     quote.link = response.quoteLink;
     var text = response.quoteText;
     quote.innerText = "\" " + text.trim() + "\" ";
     author.innerText = response.quoteAuthor;
     tweetText = "\"" + text.trim() + "\" " + response.quoteAuthor + "   %23quotes";
     twitterbtn.href = "https://twitter.com/intent/tweet?text=" + tweetText;
     //only display tweet link once quote quote has been received
     if (section.classList.contains('hidden')) {
       section.classList.remove('hidden');
     }
   }
}


function newQuoteListener(url) {
  search.addEventListener('click', function(e) {
    getQuote(url);
  });
}


newQuoteListener(url);
