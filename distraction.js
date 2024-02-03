






const callback = () => {
  document
    .querySelectorAll(".x1hc1fzr.x1unhpq9.x6o7n8i div.x1lliihq")
    .forEach((div) => {
      if (div.classList.length == 1) {
        if (div?.textContent.toLowerCase().includes("aerox")) {
          div.style.display = "none";
          console.log("has text");
        }
      }
    });
};
const config = { attributes: true, childList: true, subtree: true };

const targetNode = document.querySelector(".x1hc1fzr.x1unhpq9.x6o7n8i");

const observer = new MutationObserver(callback);

observer.observe(targetNode, config);
