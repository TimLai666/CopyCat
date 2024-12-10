document.addEventListener('DOMContentLoaded', () => {
    const statusText = document.getElementById('status');
    const toggleButton = document.getElementById('toggle');
  
    // 初始化 UI 狀態
    chrome.storage.local.get('isEnabled', ({ isEnabled }) => {
      updateUI(isEnabled || false);
    });
  
    // 點擊切換功能狀態
    toggleButton.addEventListener('click', () => {
      chrome.storage.local.get('isEnabled', ({ isEnabled }) => {
        const newStatus = !isEnabled;
        chrome.storage.local.set({ isEnabled: newStatus }, () => {
          updateUI(newStatus);
        });
      });
    });
  
    // 更新 UI 顯示
    function updateUI(isEnabled) {
      statusText.textContent = isEnabled ? '已啟用' : '已停用';
    }
  });
  