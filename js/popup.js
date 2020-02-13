import writer from './writer.js'
console.log("loaded popup.js")

// content scripts(writer.js) ⇄ browser action(popup.*)
// 異なるコンテキストにアクセスするにはchrome.*APIによる通信が必要
chrome.runtime.onConnect.addListener(function(port) {
    console.log(port.name);
    port.onMessage.addListener(function(word){
        // var destination = chrome.extension.getURL("html/popup.html")
        var div = document.createElement('div');
        div.textContent = word
        // document.element.appendChild(div);
        console.log(word)
    })
})

chrome.runtime.onMessage.addListener(message => {
    console.log("message received", message)
})

popup.onclick = function() {
    writer.createDialog()
}
