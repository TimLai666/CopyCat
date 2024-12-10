(function () {
    // 檢查功能是否啟用
    chrome.storage.local.get('isEnabled', ({ isEnabled }) => {
      if (!isEnabled) return;
  
      // 在捕獲階段攔截事件，避免觸發網站的監聽器
      ['copy', 'contextmenu', 'selectstart'].forEach(evtType => {
        document.addEventListener(evtType, (e) => {
          e.stopPropagation();
        }, true);
      });
  
      // 修改樣式以允許選取文字
      const style = document.createElement('style');
      style.textContent = `
        * {
          user-select: text !important;
          -webkit-user-select: text !important;
        }
      `;
      document.head.appendChild(style);
  
      // 攔截 copy 事件，移除多餘文字
      document.addEventListener('copy', (e) => {
        const selection = window.getSelection();
        if (!selection) return;
  
        const text = selection.toString().trim();
        e.clipboardData.setData('text/plain', text);
        e.clipboardData.setData('text/html', text); // 適用於 HTML 格式的文字
        e.preventDefault();
  
        console.log('CopyCat：成功移除網站自動加入的多餘內容！');
      }, true);
    });
  })();
  