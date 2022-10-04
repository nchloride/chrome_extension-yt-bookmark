

// setInterval(()=>{
//     const youtubeVideoRecommended = document.getElementsByTagName('ytd-rich-item-renderer');
//     function clickEvent(){
//         console.log(this.parentElement.childNodes[0].childNodes[1].getAttribute("href"));
//         const message = {
//             message:this.parentElement.childNodes[0].childNodes[1].getAttribute("href")
//         }
//         chrome.runtime.sendMessage(message)
//        }
//     for(let videoRecommended of youtubeVideoRecommended){
//         if(!videoRecommended.querySelector(".bookmark"))
//         {
//             const bookmark = document.createElement("h1");
//             bookmark.className="bookmark"
//             bookmark.textContent = "add to bookmark"
//             bookmark.style.backgroundColor = "red";
//             bookmark.addEventListener("mouseover",clickEvent )
//             videoRecommended.querySelector('#details #meta')?.appendChild(bookmark)
//             console.log(bookmark.parentElement);
//         }
   
//     }
  
// },1000)


// chrome.runtime.onMessage.addListener(({message}, sender, sendResponse) => {
//     console.log(message,sender);
//   });


chrome.runtime.onMessage.addListener((message,sender,sendResponse)=>{
    const youtubeVideoRecommended = document.getElementsByTagName('ytd-rich-item-renderer');
    function hoverEvent(){
        const url = this.parentElement.childNodes[0].childNodes[1].getAttribute("href");
        const title = this.parentElement.childNodes[0].childNodes[1].getAttribute("aria-label");
        const message = {
            url,title
        }
        chrome.runtime.sendMessage(message);
        
        }
    for(let videoRecommended of youtubeVideoRecommended){
        if(!videoRecommended.querySelector(".bookmark"))
        {
            const bookmark = document.createElement("button");
            bookmark.className="bookmark"
            bookmark.textContent = "add to bookmark"
            bookmark.style.backgroundColor = "transparent";
            bookmark.style.color = "white"
            bookmark.style.cursor = "pointer"
            bookmark.addEventListener("click",hoverEvent )
            videoRecommended.querySelector('#details #meta')?.appendChild(bookmark)
        
        }
    
    }
})
