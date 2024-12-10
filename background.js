chrome.runtime.onInstalled.addListener(() => {
    // 初始狀態：功能開啟
    chrome.storage.local.set({ isEnabled: true });
  });
  