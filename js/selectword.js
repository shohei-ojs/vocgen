console.log("loaded selectword.js")

var sendMess = function(event){
    const str = window.getSelection().toString();
    window.postMessage({keyword: str}, "*");
};

document.addEventListener(
    "selectionchange",
    sendMess
);