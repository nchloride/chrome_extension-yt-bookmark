


const main = (feed,post,site) =>{
  try{
    const callback =  () => {
      document
        .querySelectorAll(post)
        .forEach(async(div) => {
          console.log(div.classList.length);
          if (div.classList.length == 1 || site ==="twitter") {
            const {blocklist} = site === "facebook" ? await chrome.storage.local.get("blocklist") : {blocklist:"ad"};
            const filter = blocklist.split("\n").filter(e=> e!="")
            filter.forEach(e=>{
              if (div?.textContent.toLowerCase().includes(e)) {
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
  catch{
    main(feed,post,site);
  }
  



}  

window.location.href.includes("facebook") ? main(".x1hc1fzr.x1unhpq9.x6o7n8i",".x1hc1fzr.x1unhpq9.x6o7n8i div.x1lliihq","facebook") : 
    main(".css-175oi2r",".css-175oi2r .r-1jkjb","twitter");

