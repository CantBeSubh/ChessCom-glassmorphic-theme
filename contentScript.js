// Wait for the document to be ready
window.onload = function (event) {
    chrome.storage.sync.get(['myCheckbox'], function (result) {
        console.log("HELLO")
        if (result.myCheckbox) {
            enableTheme();
        }
        else {
            disableTheme();
        }
    });
}
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'toggle-theme') {
        if (message.enabled) {
            enableTheme();
        } else {
            disableTheme();
        }
    }
});

function enableTheme() {
    console.log("enableTheme")
    const body = document.querySelector('body')
    body.style.setProperty("background-image", "url('https://i.imgur.com/NDQcmWs.png')");
    body.style.setProperty("background-size", "cover");
    body.style.setProperty("background-repeat", " no-repeat");
    body.style.setProperty("background-attachment", "fixed");
    body.style.setProperty("background-position", "center center");
}

function disableTheme() {
    console.log("disableTheme")
    const body = document.querySelector('body')
    body.style.removeProperty("background-image");
    body.style.removeProperty("background-size");
    body.style.removeProperty("background-repeat");
    body.style.removeProperty("background-attachment");
    body.style.removeProperty("background-position");

}
