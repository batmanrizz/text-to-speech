// Create context menu
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "readText",
    title: "Read Selected Text",
    contexts: ["selection"]
  });
});

// Handle context menu clicks
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "readText") {
    chrome.tabs.sendMessage(tab.id, {
      action: "readText",
      text: info.selectionText
    });
  }
});

// Store settings
const defaultSettings = {
  voice: "default",
  rate: 1,
  pitch: 1,
  volume: 1
};

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getSettings") {
    chrome.storage.sync.get(defaultSettings, (settings) => {
      sendResponse(settings);
    });
    return true;
  }
  
  if (request.action === "saveSettings") {
    chrome.storage.sync.set(request.settings, () => {
      sendResponse({ success: true });
    });
    return true;
  }
});
