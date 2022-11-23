// chrome.extension.onMessage.addListener(
//     function(request, sender, sendResponse) {
//       // LOG THE CONTENTS HERE
//       console.log(request.content);
//     }
// );

// chrome.tabs.getSelected(null, function(tab) {
//     chrome.tabs.sendMessage(tab.id, { }, function(response) {
//       console.log(response);
//     });
// });

chrome.runtime.onInstalled.addListener(function() {
    const menu = chrome.contextMenus.create({
      type: "normal",
      id: "contextmenu1",
      title: "サンプルメニュー１"
    });
  });
  
  /**
    * メニューが選択されたときの処理
    * 選択されたメニューが関数の引数に渡される。
    * 複数のメニューを登録した場合は、item.menuItemIdでクリックされたメニューが取得できる
    */
chrome.contextMenus.onClicked.addListener(function(item){
    console.log("メニューがクリックされたよ (menuItemId=" + item.menuItemId + ")");
});