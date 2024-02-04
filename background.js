chrome.action.onClicked.addListener((tab) => {
  console.log(tab);
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  // if(tab.url?.includes("youtube.com")){
  //     console.log('youre on youtube la',tabId,tab.id);
  //     chrome.tabs.sendMessage(tab.id,{trigger:"alert"})
  // }
  chrome.webRequest.onCompleted.addListener(
    () => {
      chrome.tabs.sendMessage(tab.id, { trigger: "alert" });
    },
    { tabId: tab.id, types: ["xmlhttprequest"], urls: ["*://*.youtube.com/*"] }
  );

  chrome.cookies.getAll(
    { domain: "https://www.youtube.com/", name: "_ga" },
    (cookie) => {
      console.log("cookie:", cookie);
    }
  );
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  chrome.storage.local.get(["bookmarks"], (result) => {
    const bookmarks =
      Object.keys(result).length === 0
        ? [message]
        : [message, ...result.bookmarks];
    chrome.storage.local.set({ bookmarks: bookmarks });
  });
});

chrome.webNavigation.onCompleted.addListener(function(details) {
 
  console.log(details)
  if(details.url.includes("facebook")){
      chrome.tabs.sendMessage(details.tabId,{ payload: "filter" });
  }
});
//   fetch("http://localhost:3000/api/snippets").then(res=>{
//     return res.json()
//   }).then(res=>{
//     console.log(res[0]);
//     chrome.declarativeNetRequest.updateDynamicRules({addRules:res,removeRuleIds:[1,2]})
//   })
