

chrome.action.onClicked.addListener((tab)=>{
    console.log(tab);
    

})

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab)=>{
    // if(tab.url?.includes("youtube.com")){
    //     console.log('youre on youtube la',tabId,tab.id);
    //     chrome.tabs.sendMessage(tab.id,{trigger:"alert"})
    // }
    chrome.webRequest.onCompleted.addListener(()=>{
        chrome.tabs.sendMessage(tab.id,{trigger:"alert"})
    },{tabId:tab.id,types:['xmlhttprequest'],urls:["*://*.youtube.com/*"]})
})

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    chrome.storage.local.get(['bookmarks'],(result)=>{
        const bookmarks = Object.keys(result).length === 0 ? [message] : [message,...result.bookmarks]
        chrome.storage.local.set({'bookmarks':bookmarks});
    })
  });