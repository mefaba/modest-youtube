window.addEventListener("pageshow", () => {
  let body = document.querySelector("#content");
  nodeObserver(body, ModestHome);
});

function ModestHome() {
  let home_videos = document.querySelector("#page-manager");
  if (window.location.origin + "/" == window.location.href) {
    //home_videos.style.visibility = "hidden";
    home_videos.style.display = "none";
  } else {
    //home_videos.style.visibility = "visible";
    home_videos.style.display = "block";
  }
}

function nodeObserver(triggerNode, callFunction) {
  //call callFunction at least once
  callFunction();

  // Select the node that will be observed for mutations
  const targetNode = triggerNode;

  // Options for the observer (which mutations to observe)
  const config = { attributes: true, childList: true, subtree: true };

  // Callback function to execute when mutations are observed
  const callback = function (mutationList, observer) {
    //Trigger InsertBanner when new games appears on screen.
    callFunction();
  };
  // Create an observer instance linked to the callback function
  const observer = new MutationObserver(callback);
  // Start observing the target node for configured mutations
  observer.observe(targetNode, config);
}
