window.addEventListener('netacad-runner-status', (event) => {
    const text = event?.detail;
    if (!text) return;
    chrome.runtime.sendMessage({ type: 'status', text: String(text) }).catch(() => {});
});
