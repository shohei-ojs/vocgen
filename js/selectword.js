console.log("loaded selectword!")
document.addEventListener("selectionchange", () => {
    console.log(document.getSelection());
});