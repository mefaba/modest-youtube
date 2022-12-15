let observer = null;
window.addEventListener("load", () => {
  const elementToObserve = document.querySelector("#page-manager");
  if(observer){ observer.disconnect();} //prettier-ignore
  observer = nodeObserver(elementToObserve, ModestHome);
});

function ModestHome() {
  let home_videos = document.querySelector("#page-manager");

  if (!home_videos) { return; } // prettier-ignore

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
  const config = { attributes: true, childList: false, subtree: true };
  // Callback function to execute when mutations are observed
  let timeout;
  const callback = function (mutationList, observer) {
    //debounce
    clearTimeout(timeout);
    timeout = setTimeout(() => callFunction(), 50);
  };
  // Create an observer instance linked to the callback function
  const observer = new MutationObserver(callback);
  // Start observing the target node for configured mutations
  observer.observe(targetNode, config);

  return observer;
}
