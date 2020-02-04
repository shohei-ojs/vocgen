//start connection in content script
// let contentPort = chrome.runtime.connect({
//   name: "background-content"
// });

//Append your pageScript.js to "real" webpage. So will it can full access to webpate.
var s = document.createElement("script");
s.src = chrome.extension.getURL("js/selectword.js");
(document.head || document.documentElement).appendChild(s);
s.parentNode.removeChild(s);
console.log("writer js loaded")

var selectWord = function(event) {
  if (event.data.keyword) {
    console.log(event.data.keyword)
  }
  // const word = window.getSelection().string()
}

// Send to backgroud.js
// selectword.jsよりwebsocket取得
window.addEventListener(
  "message",
  selectWord,
  false
);


var writeWordToHTML = function(word) {

}
