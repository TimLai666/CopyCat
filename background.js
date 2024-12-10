chrome.runtime.onInstalled.addListener(() => {
    // 初始狀態：功能關閉
    chrome.storage.local.set({ isEnabled: false });
  });
  