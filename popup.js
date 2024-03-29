


const loadBookmarks = () =>{
    chrome.storage.local.get(['bookmarks'],(result=>{
        const bookmarkDiv = document.getElementById("bookmarks");
        bookmarkDiv.innerHTML = ""
        result?.bookmarks?.forEach(bookmark=>{
            const button = document.createElement("button");
            button.innerText = "remove";

            const href = document.createElement("a");
            href.setAttribute("href",`https://www.youtube.com/${bookmark.url}`)
            href.setAttribute("target","_blank")
            href.innerText = bookmark.title 

            button.addEventListener("click",()=>{
                console.log(document.cookie);
                chrome.storage.local.get(["bookmarks"],({bookmarks})=>{
                    const filteredBookmarks = bookmarks.filter((data)=> data.url !== bookmark.url)
                    chrome.storage.local.set({"bookmarks":filteredBookmarks})
                })
                
            })

            const div = document.createElement("div");
            div.classList.add("bookmark");
            div.appendChild(href);
            div.appendChild(button);

            bookmarkDiv.appendChild(div);
            
            
            
        })
    }))
}

loadBookmarks();

chrome.storage.onChanged.addListener((changes)=>{
    
    const bookmarkDiv = document.getElementById("bookmarks");
    loadBookmarks();
   

})

document.getElementById("clearBookmarks").addEventListener("click",()=>{
    chrome.storage.local.clear()
})
document.addEventListener("DOMContentLoaded",()=>{
    chrome.storage.local.get("blocklist").then(e=>
        document.querySelector(".input_blocklist").value = e.blocklist)
})
document.querySelector(".submit").addEventListener("click",()=>{
    console.log(document.querySelector(".input_blocklist").value)
    chrome.storage.local.set({"blocklist":document.querySelector(".input_blocklist").value})
})
document.querySelector(".input_blocklist").addEventListener("keyup",(e)=>{
    chrome.storage.local.set({"blocklist":e.target.value})
})
