var quoteObj;
var object;
var search = document.getElementById("search");
var section = document.getElementById("quote__block");
var quote = document.getElementById("quote__text");
var author = document.getElementById("quote__author");
var twitterbtn = document.getElementById("twitter-share-button");
var link;
var tweetText;

function tweet() {}

function updateDom(response) {
  //stop repeat of quotes
  if (response.quoteLink === quote.link) {
    getData();
  } else {
    //updateDom
    quote.link = response.quoteLink;
    var text = response.quoteText;
    quote.innerText = '" ' + text.trim() + '" ';
    author.innerText = response.quoteAuthor;
    tweetText =
      '"' + text.trim() + '" ' + response.quoteAuthor + "   %23quotes";
    twitterbtn.href = "https://twitter.com/intent/tweet?text=" + tweetText;
    //only display tweet link once quote quote has been received
    if (section.classList.contains("hidden")) {
      section.classList.remove("hidden");
    }
  }
}

function getData() {
  var script = document.createElement("script");
  script.src =
    "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=updateDom";
  document.getElementsByTagName("head")[0].appendChild(script);
}

function newQuoteListener() {
  search.addEventListener("click", function(e) {
    getData();
  });
}

newQuoteListener();
