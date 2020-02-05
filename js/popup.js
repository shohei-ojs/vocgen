console.log("loaded popup.js")

// content scripts(writer.js) ⇄ browser action(popup.*)
// chrome extensionの概念で違うspaceにアクセスするにはchrome.*APIによる通信が必要
chrome.extension.onConnect.addListener(function(port) {
    console.log(port.name);
    port.onMessage.addListener(function(word){
        var destination = chrome.extension.getURL("html/popup.html")
        var div = document.createElement('div');
        div.textContent = word
        destination.element.appendChild(div);
    })
})

chrome.runtime.onMessage.addListener(message => {
    console.log("message received", message)
})