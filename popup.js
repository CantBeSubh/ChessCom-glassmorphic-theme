document.addEventListener("DOMContentLoaded", function () {
    const toggleSwitch = document.querySelector('.toggle-theme input[type="checkbox"]');
    chrome.storage.sync.get("isEnabled", function (data) {
        toggleSwitch.checked = data.isEnabled;
    });

    toggleSwitch.addEventListener("change", function (event) {
        const isEnabled = event.target.checked;
        chrome.storage.sync.set({ isEnabled });
    });
});
const toggleTheme = document.getElementById('toggle-theme');

toggleTheme.addEventListener('change', (event) => {
    const message = {
        type: 'toggle-theme',
        enabled: event.target.checked
    };

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, message);
    });
});

