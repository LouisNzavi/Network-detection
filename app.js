function hasNetworkConnection(online) {
  const element = document.querySelector(".status");

  if (online) {
    element.classList.remove("offline");
    element.classList.add("online");
    element.innerHTML = "online";
  } else {
    element.classList.remove("online");
    element.classList.add("offline");
    element.innerHTML = "offline";
  }
}

window.addEventListener("load", () => {
  hasNetworkConnection(navigator.onLine);

  window.addEventListener("online", () => {
    hasNetworkConnection(true);
  });

  window.addEventListener("offline", () => {
    hasNetworkConnection(false);
  });
});
