const toggleTheme = document.getElementById('toggle-theme');
document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.sync.get(['myCheckbox'], function (result) {
        toggleTheme.checked = result.myCheckbox || false;
    });
});

toggleTheme.addEventListener('change', (event) => {
    chrome.storage.sync.set({ 'myCheckbox': event.target.checked });
    const message = {
        type: 'toggle-theme',
        enabled: event.target.checked
    };

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, message);
    });
});

