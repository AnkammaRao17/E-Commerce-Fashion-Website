const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    navList.classList.toggle("open");
  });
}

// Popup
const popup = document.querySelector(".popup");
const closePopup = document.querySelector(".popup-close");

// Check if the popup has been shown before
if (popup && !localStorage.getItem("popupShown")) {
  closePopup.addEventListener("click", () => {
    popup.classList.add("hide-popup");
  });

  window.addEventListener("load", () => {
    setTimeout(() => {
      popup.classList.remove("hide-popup");
      // Set a flag in localStorage to indicate the popup has been shown
      localStorage.setItem("popupShown", "true");
    }, 1000);
  });
}
