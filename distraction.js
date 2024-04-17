


const main = (feed,post,site) =>{

    const callback =  () => {
      if(site === "twitter"){
        Array.from(document.querySelectorAll("[data-testid=cellInnerDiv]")).forEach(element=>(element.querySelectorAll("div>.css-175oi2r.r-k4xj1c.r-18u37iz.r-1wtj0ep")[0]?.textContent+"!").slice(-3,-1) ==="Ad" ? element.style.display="none":null)
        return
      }
      document
        .querySelectorAll(post)
        .forEach(async(div) => {
          if (div.classList.length == 1 || site ==="twitter") {
            const {blocklist} = site === "facebook" ? await chrome.storage.local.get("blocklist") : {blocklist:"ad"};
            const filter = blocklist.split("\n").filter(e=> e!="")
            filter.forEach(e=>{
              if ((div?.textContent.toLowerCase().includes(e))) {
                div.style.display = "none";
                console.log("has text");
              }
            })
          }
        });
    };
    const config = { attributes: true, childList: true, subtree: true };
    
    const targetNode = document.querySelector(feed);
    
    const observer = new MutationObserver(callback);
    
    observer.observe(targetNode, config);
  
 



}  
if(document.readyState === 'interactive' && document.location.href.includes("facebook")){
  main(".x1hc1fzr.x1unhpq9.x6o7n8i",".x1hc1fzr.x1unhpq9.x6o7n8i div.x1lliihq","facebook") 
}
if(document.readyState === 'complete' && document.location.href.includes("twitter")){
  main("[aria-label='Home timeline']",".css-175oi2r .r-1jkjb","twitter");
}


chrome.runtime.onMessage.addListener(function(r,s,n){

  if(r.payload === "filter-tweet"){
    setTimeout(()=>{ main("[aria-label='Home timeline']",".css-175oi2r .r-1jkjb","twitter");},2000)
  }
})

