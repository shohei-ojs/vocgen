//Append selectword.js to "real" webpage. So will it can full access to webpage.
var s = document.createElement("script");
s.src = chrome.extension.getURL("js/selectword.js");
(document.head || document.documentElement).appendChild(s);
s.parentNode.removeChild(s);


var selectWord = function(event) {
  if (event.data.keyword) {
    var port = chrome.runtime.connect({name: "ABCD"})
    port.postMessage({keyword: event.data.keyword});
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


var createDialog = function() {
  console.log("helloWorld")
  document.getElementsByTagName("html").innerHTML = '<div style="border:3px solid rosybrown; text-align:right; width:300px; height:600px; z-index: 100000;">右寄せ</div>'
  console.log(document.getElementsByTagName("html").innerHTML)
}

