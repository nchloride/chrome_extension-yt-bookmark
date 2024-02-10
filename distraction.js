



const callback =  () => {
  document
    .querySelectorAll(".x1hc1fzr.x1unhpq9.x6o7n8i div.x1lliihq")
    .forEach(async(div) => {
      if (div.classList.length == 1) {
        const {blocklist} = await chrome.storage.local.get("blocklist");
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

const targetNode = document.querySelector(".x1hc1fzr.x1unhpq9.x6o7n8i");

const observer = new MutationObserver(callback);

observer.observe(targetNode, config);



